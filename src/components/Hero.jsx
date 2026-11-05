import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";

// ── Live AI terminal: cycles through real projects ──────────────────────────
const SCENES = [
  {
    file: "code_suggester.py",
    cmd: 'model.complete("def quicksort(")',
    out: [
      ["base", "CodeLlama-7B  ·  LoRA r=16  ·  4-bit"],
      ["ok", "✓ suggestion ready"],
    ],
    stats: [["+28%", "accuracy"], ["250ms", "latency"], ["−60%", "GPU memory"]],
  },
  {
    file: "smartsnow.py",
    cmd: "agent.route(plows=4, city='buffalo')",
    out: [
      ["base", "MaskablePPO  ·  OSMnx road graph  ·  NOAA data"],
      ["ok", "✓ policy trained · 1M timesteps"],
    ],
    stats: [["1M", "timesteps"], ["17", "unit tests"], ["3", "RL agents"]],
  },
  {
    file: "vision_pipeline.py",
    cmd: "detect(frame, model='yolov8')",
    out: [
      ["base", "YOLOv8  ·  OpenCV  ·  real-time"],
      ["ok", "✓ detection accuracy 70–80%"],
    ],
    stats: [["70–80%", "accuracy"], ["RT", "real-time"], ["API", "FastAPI"]],
  },
];

const HeroTerminal = () => {
  const [i, setI] = React.useState(0);
  const [n, setN] = React.useState(0);
  const [phase, setPhase] = React.useState("type"); // type | out | hold
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = SCENES[i];

  React.useEffect(() => {
    if (reduce) {
      setN(scene.cmd.length);
      setPhase("out");
      return;
    }
    let t;
    if (phase === "type") {
      t = n < scene.cmd.length
        ? setTimeout(() => setN(n + 1), 38)
        : setTimeout(() => setPhase("out"), 350);
    } else if (phase === "out") {
      t = setTimeout(() => setPhase("hold"), 3600);
    } else {
      t = setTimeout(() => { setI((i + 1) % SCENES.length); setN(0); setPhase("type"); }, 200);
    }
    return () => clearTimeout(t);
  }, [n, phase, i, reduce, scene.cmd.length]);

  const mono = { fontFamily: '"IBM Plex Mono", ui-monospace, monospace' };
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(9,11,18,0.88)",
        border: "1px solid rgba(124,242,201,0.22)",
        boxShadow: "0 0 0 1px rgba(143,123,255,0.12), 0 30px 80px -20px rgba(124,242,201,0.25)",
        backdropFilter: "blur(6px)",
        ...mono,
      }}
    >
      {/* title bar */}
      <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: "1px solid #1c2130", color: "#8b93a8", fontSize: 12 }}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-2">{scene.file}</span>
        </div>
        <span className="flex items-center gap-1.5" style={{ color: "#7cf2c9" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#7cf2c9" }} /> live
        </span>
      </div>

      {/* body */}
      <div className="px-4 sm:px-5 py-4 text-[12px] sm:text-[13px] leading-[1.9]" style={{ color: "#c8cfe0", minHeight: 150 }}>
        <div style={{ color: "#5b6580" }}># currently shipping</div>
        <div>
          <span style={{ color: "#8f7bff" }}>&gt;&gt;&gt;</span>{" "}
          {scene.cmd.slice(0, n)}
          <span className="inline-block w-[7px] h-[14px] align-[-2px] animate-pulse" style={{ background: "#7cf2c9" }} />
        </div>
        {phase !== "type" &&
          scene.out.map(([k, line]) => (
            <div key={line} style={{ color: k === "ok" ? "#7cf2c9" : "#8b93a8" }}>{line}</div>
          ))}
      </div>

      {/* metric strip */}
      <div className="grid grid-cols-3" style={{ borderTop: "1px solid #1c2130" }}>
        {scene.stats.map(([v, l], idx) => (
          <div key={l} className="px-4 py-3" style={{ borderRight: idx < 2 ? "1px solid #1c2130" : "none" }}>
            <div className="text-white font-extrabold text-[18px] sm:text-[22px] leading-none" style={{ fontFamily: '"Schibsted Grotesk", sans-serif' }}>{v}</div>
            <div className="mt-1 text-[10.5px] sm:text-[11px]" style={{ color: "#8b93a8" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">

      {/* ── Main content ── */}
      <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-8 pt-20 pb-16 md:pt-24 md:pb-0 md:min-h-screen`}>

        {/* ── Left: Text ── */}
        <div className="flex-1 flex flex-col gap-4 z-10 w-full">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: "transparent" }}
          >
            
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-white font-black leading-tight text-[38px] xs:text-[46px] sm:text-[58px] lg:text-[72px]">
              Hi, I'm
            </h1>
            <h1
              className="font-black leading-tight text-[38px] xs:text-[46px] sm:text-[58px] lg:text-[72px]"
              style={{
                background: "linear-gradient(90deg, #7cf2c9 0%, #8f7bff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Litheesh V R
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] sm:text-[18px] md:text-[20px] font-semibold leading-snug"
            style={{ color: "#e2e8f0" }}
          >
            AI &amp; ML Engineer
            <span className="text-secondary font-normal block xs:inline">
              {" "}· University at Buffalo (SUNY)
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-secondary text-[13px] sm:text-[15px] max-w-md leading-[24px]"
          >
            Building LLM-powered systems, computer vision pipelines, and
            scalable APIs that turn research into real products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-1"
          >
            <Link
              to="/projects"
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-white font-semibold text-[13px] sm:text-[14px] flex items-center gap-2"
              style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)" }}
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-white font-semibold text-[13px] sm:text-[14px] flex items-center gap-2"
              style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)" }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* ── Right: live AI terminal ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full md:w-[460px] lg:w-[520px] flex-shrink-0"
        >
          <div
            className="absolute -inset-6 blur-[70px] opacity-30 rounded-full"
            style={{ background: "radial-gradient(circle, #8f7bff 0%, #7cf2c9 100%)" }}
          />
          <HeroTerminal />
        </motion.div>
      </div>

      {/* ── Scroll indicator — hidden on mobile to save space ── */}
      <div className="hidden sm:flex absolute bottom-8 w-full justify-center items-center z-10">
        <a href="#about" aria-label="Scroll down">
          <div
            className="w-[28px] h-[50px] rounded-3xl flex justify-center items-start p-2"
            style={{ border: "2px solid rgba(170,166,195,0.4)" }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 rounded-full"
              style={{ background: "#8b93a8" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
