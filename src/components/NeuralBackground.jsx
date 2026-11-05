import { useEffect, useRef } from "react";

// Animated neural-network backdrop for the home page hero.
// Fills its (relative) parent and sits behind the content.
const NeuralBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes = [], edges = [], pulses = [], W = 0, H = 0, raf;

    const build = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      canvas.width = W * d; canvas.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const layers = W < 600 ? 5 : 8, per = W < 600 ? 5 : 7;
      nodes = []; edges = []; pulses = [];
      for (let l = 0; l < layers; l++) {
        const n = per - (l % 3 === 1 ? 2 : 0);
        for (let i = 0; i < n; i++) {
          nodes.push({ l, x: W * (0.06 + (0.9 * l) / (layers - 1)), y: H * (0.1 + (0.8 * (i + 0.5)) / n) + Math.sin(l * 2 + i) * 10, p: Math.random() * 6 });
        }
      }
      nodes.forEach((a, i) => nodes.forEach((b, j) => { if (b.l === a.l + 1 && Math.random() < 0.45) edges.push([i, j]); }));
      draw(0);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1;
      edges.forEach(([i, j]) => {
        const a = nodes[i], b = nodes[j];
        ctx.strokeStyle = "rgba(124,242,201,.08)";
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      });
      pulses.forEach((p) => {
        const [i, j] = edges[p.e], a = nodes[i], b = nodes[j];
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
        g.addColorStop(0, "rgba(143,123,255,.9)"); g.addColorStop(1, "rgba(143,123,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 10, 0, 6.3); ctx.fill();
      });
      nodes.forEach((n) => {
        const s = 0.5 + 0.5 * Math.sin(t / 900 + n.p);
        ctx.fillStyle = `rgba(124,242,201,${0.25 + 0.5 * s})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, 2.4 + s, 0, 6.3); ctx.fill();
      });
    };

    const loop = (t) => {
      if (!reduce && edges.length) {
        if (Math.random() < 0.12) pulses.push({ e: Math.floor(Math.random() * edges.length), t: 0 });
        pulses.forEach((p) => { p.t += 0.018; });
        pulses = pulses.filter((p) => p.t < 1);
        draw(t);
      }
      raf = requestAnimationFrame(loop);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(canvas.parentElement);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

export default NeuralBackground;
