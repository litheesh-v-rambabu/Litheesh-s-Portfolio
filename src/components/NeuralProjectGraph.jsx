import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github, link as linkIcon } from "../assets";

// ─── Constants ────────────────────────────────────────────────────────────────

const VW          = 980;   // SVG viewBox width
const HUB_X       = 85;   // Hub node X position
const CAT_X       = 285;  // Category node X position
const PROJ_X      = 590;  // Project node X position
const SPACING     = 70;   // Vertical spacing between project nodes
const PAD         = 52;   // Top/bottom padding
const GAP         = 92;   // Gap between AI/ML section and Web section
const NODE_R      = { hub: 34, cat: 24, proj: 16 };

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Horizontal S-curve bezier path string */
const bz = (x1, y1, x2, y2) => {
  const dx = (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

/** Evenly spaced Y positions centred on midY */
const makeYs = (count, midY) => {
  const top = midY - ((count - 1) / 2) * SPACING;
  return Array.from({ length: count }, (_, i) => top + i * SPACING);
};

/** Truncate long project names */
const trunc = (s, max = 22) => (s.length > max ? s.slice(0, max - 1) + "…" : s);

// ─── SVG Defs (filters, gradients, patterns) ─────────────────────────────────

const Defs = () => (
  <defs>
    {/* Dot-grid background pattern */}
    <pattern id="ngp-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(255,255,255,0.045)" />
    </pattern>

    {/* Glow filters */}
    {[
      ["ngp-glow-hub",  10],
      ["ngp-glow-cat",   7],
      ["ngp-glow-proj",  5],
    ].map(([id, sd]) => (
      <filter key={id} id={id} x="-70%" y="-70%" width="240%" height="240%">
        <feGaussianBlur in="SourceGraphic" stdDeviation={sd} result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    ))}

    {/* Hub → category line gradients */}
    <linearGradient id="ngp-lg-aiml" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stopColor="#8b5cf6" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.9" />
    </linearGradient>
    <linearGradient id="ngp-lg-web" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stopColor="#8b5cf6" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
    </linearGradient>
  </defs>
);

// ─── Animated Pulse Ring ──────────────────────────────────────────────────────

const PulseRing = ({ cx, cy, r, color, dur = "2s" }) => (
  <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="0.8" opacity="0">
    <animate attributeName="r"       values={`${r};${r + 14};${r}`}  dur={dur} repeatCount="indefinite" />
    <animate attributeName="opacity" values="0.5;0;0.5"               dur={dur} repeatCount="indefinite" />
  </circle>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const NeuralProjectGraph = ({ aimlProjects, webProjects }) => {
  const [hovered,  setHovered]  = useState(null);
  const [selected, setSelected] = useState(null);

  // ── Compute layout from project counts ──
  const lay = useMemo(() => {
    const ac = aimlProjects.length;
    const wc = webProjects.length;

    const aimlH   = (ac - 1) * SPACING;
    const webH    = (wc - 1) * SPACING;
    const aimlMid = PAD + aimlH / 2;
    const webMid  = PAD + aimlH + GAP + webH / 2;
    const hubY    = (aimlMid + webMid) / 2;
    const totalH  = PAD + aimlH + GAP + webH + PAD;

    return {
      hubY,
      aimlMid,
      webMid,
      aimlYs: makeYs(ac, aimlMid),
      webYs:  makeYs(wc, webMid),
      totalH,
    };
  }, [aimlProjects.length, webProjects.length]);

  const { hubY, aimlMid, webMid, aimlYs, webYs, totalH } = lay;

  const handleClick = (name) => setSelected((p) => (p === name ? null : name));

  const allProjects    = [...aimlProjects, ...webProjects];
  const selectedProj   = allProjects.find((p) => p.name === selected) ?? null;
  const selIsAiml      = selectedProj?.category === "aiml";

  // ── Paths for animated particles ──
  const pathHubAiml = bz(HUB_X, hubY, CAT_X, aimlMid);
  const pathHubWeb  = bz(HUB_X, hubY, CAT_X, webMid);

  return (
    <div className="w-full">
      {/* Interaction hint */}
      <p className="text-center text-gray-600 text-[11px] font-mono tracking-widest uppercase mb-5 select-none">
        ◉ hover to highlight &nbsp;·&nbsp; click node to explore
      </p>

      {/* ── SVG Graph ── */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${VW} ${totalH}`}
          width="100%"
          style={{ display: "block", margin: "0 auto", maxHeight: 800 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Defs />

          {/* Dot-grid background */}
          <rect width={VW} height={totalH} fill="url(#ngp-dots)" rx="16" />

          {/* ════════════ CONNECTIONS ════════════ */}

          {/* Hub → AI/ML (gradient animated dash) */}
          <path d={pathHubAiml} fill="none" stroke="url(#ngp-lg-aiml)" strokeWidth="2"
            strokeDasharray="9 5" opacity="0.8">
            <animate attributeName="stroke-dashoffset" from="140" to="0" dur="2.4s" repeatCount="indefinite" />
          </path>
          {/* Flowing particle Hub→AI/ML */}
          <circle r="4" fill="#9333ea" opacity="0.9">
            <animateMotion dur="2.4s" repeatCount="indefinite" path={pathHubAiml} />
          </circle>

          {/* Hub → Web (gradient animated dash) */}
          <path d={pathHubWeb} fill="none" stroke="url(#ngp-lg-web)" strokeWidth="2"
            strokeDasharray="9 5" opacity="0.8">
            <animate attributeName="stroke-dashoffset" from="140" to="0" dur="3s" repeatCount="indefinite" />
          </path>
          {/* Flowing particle Hub→Web */}
          <circle r="4" fill="#6366f1" opacity="0.9">
            <animateMotion dur="3s" repeatCount="indefinite" path={pathHubWeb} />
          </circle>

          {/* AI/ML → each project */}
          {aimlProjects.map((p, i) => {
            const py     = aimlYs[i];
            const active = hovered === p.name || selected === p.name;
            const pathD  = bz(CAT_X, aimlMid, PROJ_X, py);
            return (
              <g key={`conn-a-${i}`}>
                <path d={pathD} fill="none" stroke="#4ade80"
                  strokeWidth={active ? 2 : 0.8}
                  opacity={active ? 0.85 : 0.18}
                  strokeDasharray={active ? "none" : "5 4"}
                  style={{ transition: "opacity .3s, stroke-width .3s" }}
                />
                {active && (
                  <circle r="3" fill="#4ade80" opacity="0.95">
                    <animateMotion dur="1.1s" repeatCount="indefinite" path={pathD} />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Web → each project */}
          {webProjects.map((p, i) => {
            const py     = webYs[i];
            const active = hovered === p.name || selected === p.name;
            const pathD  = bz(CAT_X, webMid, PROJ_X, py);
            return (
              <g key={`conn-w-${i}`}>
                <path d={pathD} fill="none" stroke="#60a5fa"
                  strokeWidth={active ? 2 : 0.8}
                  opacity={active ? 0.85 : 0.18}
                  strokeDasharray={active ? "none" : "5 4"}
                  style={{ transition: "opacity .3s, stroke-width .3s" }}
                />
                {active && (
                  <circle r="3" fill="#60a5fa" opacity="0.95">
                    <animateMotion dur="1.1s" repeatCount="indefinite" path={pathD} />
                  </circle>
                )}
              </g>
            );
          })}

          {/* ════════════ NODES ════════════ */}

          {/* ── Hub node ── */}
          <g filter="url(#ngp-glow-hub)">
            <PulseRing cx={HUB_X} cy={hubY} r={NODE_R.hub} color="#8b5cf6" dur="3.2s" />
            <circle cx={HUB_X} cy={hubY} r={NODE_R.hub}
              fill="#0e0020" stroke="#8b5cf6" strokeWidth="2.5" />
          </g>
          <text x={HUB_X} y={hubY - 5} textAnchor="middle" fill="#c4b5fd"
            fontSize="8" fontWeight="700" fontFamily="ui-monospace,monospace">AI&amp;ML</text>
          <text x={HUB_X} y={hubY + 7} textAnchor="middle" fill="#c4b5fd"
            fontSize="8" fontWeight="700" fontFamily="ui-monospace,monospace">Eng.</text>

          {/* ── AI/ML category node ── */}
          <g filter="url(#ngp-glow-cat)">
            <circle cx={CAT_X} cy={aimlMid} r={NODE_R.cat}
              fill="#011209" stroke="#4ade80" strokeWidth="2" />
          </g>
          <text x={CAT_X} y={aimlMid - 4} textAnchor="middle" fill="#4ade80"
            fontSize="8.5" fontWeight="700" fontFamily="ui-monospace,monospace">AI /</text>
          <text x={CAT_X} y={aimlMid + 8} textAnchor="middle" fill="#4ade80"
            fontSize="8.5" fontWeight="700" fontFamily="ui-monospace,monospace">ML</text>

          {/* ── Web Dev category node ── */}
          <g filter="url(#ngp-glow-cat)">
            <circle cx={CAT_X} cy={webMid} r={NODE_R.cat}
              fill="#02091e" stroke="#60a5fa" strokeWidth="2" />
          </g>
          <text x={CAT_X} y={webMid - 4} textAnchor="middle" fill="#60a5fa"
            fontSize="8.5" fontWeight="700" fontFamily="ui-monospace,monospace">Web</text>
          <text x={CAT_X} y={webMid + 8} textAnchor="middle" fill="#60a5fa"
            fontSize="8.5" fontWeight="700" fontFamily="ui-monospace,monospace">Dev</text>

          {/* ── AI/ML project nodes ── */}
          {aimlProjects.map((p, i) => {
            const py     = aimlYs[i];
            const active = hovered === p.name || selected === p.name;
            const isSel  = selected === p.name;

            return (
              <g key={`node-a-${i}`} style={{ cursor: "pointer" }}
                onClick={() => handleClick(p.name)}
                onMouseEnter={() => setHovered(p.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* pulse ring */}
                {active && (
                  <g filter="url(#ngp-glow-proj)">
                    <PulseRing cx={PROJ_X} cy={py} r={NODE_R.proj} color="#4ade80" dur="1.9s" />
                  </g>
                )}

                {/* main circle */}
                <circle cx={PROJ_X} cy={py}
                  r={active ? NODE_R.proj + 2 : NODE_R.proj}
                  fill={active ? "#02200f" : "#011009"}
                  stroke="#4ade80"
                  strokeWidth={isSel ? 3 : active ? 2.2 : 1}
                  opacity={active ? 1 : 0.65}
                  style={{ transition: "all .25s" }}
                />

                {/* Key metric inside circle */}
                {p.metrics?.[0] && (
                  <text x={PROJ_X} y={py + 4} textAnchor="middle"
                    fill="#4ade80" fontSize="6.5" fontWeight="700"
                    fontFamily="ui-monospace,monospace" opacity="0.9">
                    {p.metrics[0].value}
                  </text>
                )}

                {/* Project name (right of node) */}
                <text
                  x={PROJ_X + NODE_R.proj + 11}
                  y={py + (active && p.metrics?.[0] ? -5 : 4)}
                  fill={active ? "#f9fafb" : "#6b7280"}
                  fontSize="12.5"
                  fontFamily="ui-sans-serif,system-ui,sans-serif"
                  fontWeight={active ? "700" : "400"}
                  dominantBaseline="middle"
                  style={{ transition: "fill .25s" }}
                >
                  {trunc(p.name)}
                </text>

                {/* Metric label on active */}
                {active && p.metrics?.[0] && (
                  <text
                    x={PROJ_X + NODE_R.proj + 11}
                    y={py + 9}
                    fill="#4ade80" fontSize="9.5"
                    fontFamily="ui-monospace,monospace"
                    dominantBaseline="middle"
                    opacity="0.9"
                  >
                    {p.metrics[0].label}
                  </text>
                )}
              </g>
            );
          })}

          {/* ── Web Dev project nodes ── */}
          {webProjects.map((p, i) => {
            const py     = webYs[i];
            const active = hovered === p.name || selected === p.name;
            const isSel  = selected === p.name;

            return (
              <g key={`node-w-${i}`} style={{ cursor: "pointer" }}
                onClick={() => handleClick(p.name)}
                onMouseEnter={() => setHovered(p.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {active && (
                  <g filter="url(#ngp-glow-proj)">
                    <PulseRing cx={PROJ_X} cy={py} r={NODE_R.proj} color="#60a5fa" dur="1.9s" />
                  </g>
                )}

                <circle cx={PROJ_X} cy={py}
                  r={active ? NODE_R.proj + 2 : NODE_R.proj}
                  fill={active ? "#061430" : "#030b1e"}
                  stroke="#60a5fa"
                  strokeWidth={isSel ? 3 : active ? 2.2 : 1}
                  opacity={active ? 1 : 0.65}
                  style={{ transition: "all .25s" }}
                />

                {/* "WEB" label inside circle */}
                <text x={PROJ_X} y={py + 4} textAnchor="middle"
                  fill="#60a5fa" fontSize="6" fontWeight="700"
                  fontFamily="ui-monospace,monospace" opacity="0.85">
                  WEB
                </text>

                {/* Project name */}
                <text
                  x={PROJ_X + NODE_R.proj + 11}
                  y={py + 4}
                  fill={active ? "#f9fafb" : "#6b7280"}
                  fontSize="12.5"
                  fontFamily="ui-sans-serif,system-ui,sans-serif"
                  fontWeight={active ? "700" : "400"}
                  dominantBaseline="middle"
                  style={{ transition: "fill .25s" }}
                >
                  {trunc(p.name)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ════════════ FLASH CARD ════════════ */}
      <AnimatePresence mode="wait">
        {selectedProj && (() => {
          const accent  = selIsAiml ? "#4ade80" : "#60a5fa";
          const accentD = selIsAiml ? "#16a34a" : "#2563eb";
          const label   = selIsAiml ? "AI / ML Project" : "Web Development";

          return (
            <motion.div
              key={selectedProj.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(#0b0f1e, #0b0f1e) padding-box, linear-gradient(135deg, #00cea8 0%, #bf61ff 100%) border-box",
                border: "1px solid transparent",
                boxShadow: `0 24px 64px rgba(0,0,0,0.5)`,
              }}
            >
              {/* ── Coloured accent bar at very top ── */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${accent}, ${accentD}, transparent)` }} />

              {/* ── Header ── */}
              <div className="px-6 pt-5 pb-4 flex justify-between items-start gap-4"
                style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                <div className="flex-1 min-w-0">
                  {/* Badge row */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}35` }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
                      {label}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-white font-bold text-[20px] leading-snug truncate pr-4">
                    {selectedProj.name}
                  </h3>
                  {/* One-liner description */}
                  <p className="mt-1 text-gray-400 text-[13px] leading-[20px] line-clamp-2">
                    {selectedProj.description}
                  </p>
                </div>
                {/* Close */}
                <button onClick={() => setSelected(null)}
                  className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#6b7280" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#6b7280"; }}
                  aria-label="Close">
                  ✕
                </button>
              </div>

              {/* ── Metrics row (AI/ML only) ── */}
              {selectedProj.metrics?.length > 0 && (
                <div className="flex flex-wrap gap-0 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  {selectedProj.metrics.map((m, i) => (
                    <div key={i}
                      className="flex-1 min-w-[90px] flex flex-col items-center justify-center py-4 gap-0.5"
                      style={{ borderRight: i < selectedProj.metrics.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                      <span className="text-[22px] font-black font-mono leading-none tracking-tight"
                        style={{ color: m.color }}>
                        {m.value}
                      </span>
                      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mt-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Body: Bullets (left) + Stack & Links (right) ── */}
              <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x"
                style={{ "--tw-divide-opacity": 1, borderColor: "rgba(255,255,255,0.06)" }}>

                {/* Left — Bullet points (3/5 width on md) */}
                <div className="md:col-span-3 px-6 py-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-3"
                    style={{ color: accent }}>
                    Key Highlights
                  </p>
                  <ul className="space-y-2.5">
                    {(selectedProj.bullets || []).map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: accent, boxShadow: `0 0 5px ${accent}` }} />
                        <span className="text-gray-300 text-[13px] leading-[21px]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — Tech stack + links (2/5 width on md) */}
                <div className="md:col-span-2 px-6 py-5 flex flex-col gap-5">
                  {/* Tech stack */}
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest mb-3 text-gray-500">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProj.tags.map((tag) => (
                        <span key={tag.name}
                          className="text-[11px] text-gray-300 px-2.5 py-1 rounded-md font-mono"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                          }}>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Screenshot thumbnail for web projects */}
                  {selectedProj.image && (
                    <div className="rounded-xl overflow-hidden"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                      <img src={selectedProj.image} alt={selectedProj.name}
                        className="w-full object-cover"
                        style={{ maxHeight: 120 }} />
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {selectedProj.source_code_link && (
                      <button
                        onClick={() => window.open(selectedProj.source_code_link, "_blank")}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-semibold text-white transition-all"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.13)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                      >
                        <img src={github} alt="github" className="w-4 h-4" style={{ filter: "invert(0.7)" }} />
                        View Source Code
                      </button>
                    )}
                    {selectedProj.live_site_link && (
                      <button
                        onClick={() => window.open(selectedProj.live_site_link, "_blank")}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-semibold transition-all"
                        style={{ background: `${accent}18`, border: `1px solid ${accent}35`, color: accent }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = `${accent}28`)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = `${accent}18`)}
                      >
                        <img src={linkIcon} alt="live site" className="w-4 h-4" />
                        Visit Live Site
                      </button>
                    )}
                    {!selectedProj.source_code_link && !selectedProj.live_site_link && (
                      <p className="text-gray-600 text-[11px] text-center font-mono">
                        Links coming soon
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

export default NeuralProjectGraph;
