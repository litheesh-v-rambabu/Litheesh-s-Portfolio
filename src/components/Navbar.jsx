import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

// ── Neural Node Logo ──────────────────────────────────────────────────────────
const NeuralNodeLogo = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="nn-center-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#7cf2c9" />
        <stop offset="100%" stopColor="#8f7bff" />
      </linearGradient>
      <linearGradient id="nn-line-teal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#7cf2c9" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7cf2c9" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="nn-line-purple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#8f7bff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#8f7bff" stopOpacity="0.2" />
      </linearGradient>
      <filter id="nn-glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="1.8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="nn-center-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── Spoke lines: center → outer nodes ── */}
    <line x1="30" y1="30" x2="30" y2="6"  stroke="url(#nn-line-teal)"   strokeWidth="0.9" />
    <line x1="30" y1="30" x2="53" y2="17" stroke="url(#nn-line-teal)"   strokeWidth="0.9" />
    <line x1="30" y1="30" x2="54" y2="43" stroke="url(#nn-line-purple)" strokeWidth="0.9" />
    <line x1="30" y1="30" x2="11" y2="48" stroke="url(#nn-line-purple)" strokeWidth="0.9" />
    <line x1="30" y1="30" x2="7"  y2="20" stroke="url(#nn-line-teal)"   strokeWidth="0.9" />

    {/* ── Cross connections between outer nodes ── */}
    <line x1="30"  y1="6"  x2="53" y2="17" stroke="#7cf2c9" strokeWidth="0.5" opacity="0.28" />
    <line x1="53"  y1="17" x2="54" y2="43" stroke="#8f7bff" strokeWidth="0.5" opacity="0.25" />
    <line x1="7"   y1="20" x2="11" y2="48" stroke="#7cf2c9" strokeWidth="0.5" opacity="0.25" />
    <line x1="11"  y1="48" x2="54" y2="43" stroke="#8f7bff" strokeWidth="0.5" opacity="0.22" />

    {/* ── Outer nodes ── */}
    {/* Top */}
    <circle cx="30" cy="6"  r="3.8" fill="#7cf2c9" filter="url(#nn-glow)" opacity="0.95">
      <animate attributeName="opacity" values="0.95;0.55;0.95" dur="2.8s" repeatCount="indefinite" />
    </circle>
    {/* Top-right */}
    <circle cx="53" cy="17" r="3.2" fill="#7cf2c9" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.2s" begin="0.4s" repeatCount="indefinite" />
    </circle>
    {/* Bottom-right */}
    <circle cx="54" cy="43" r="3.2" fill="#8f7bff" filter="url(#nn-glow)" opacity="0.85">
      <animate attributeName="opacity" values="0.85;0.45;0.85" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
    </circle>
    {/* Bottom-left */}
    <circle cx="11" cy="48" r="3.2" fill="#8f7bff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.6s" begin="1.2s" repeatCount="indefinite" />
    </circle>
    {/* Left */}
    <circle cx="7" cy="20"  r="3.5" fill="#7cf2c9" filter="url(#nn-glow)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" begin="0.6s" repeatCount="indefinite" />
    </circle>

    {/* ── Center node ── */}
    <circle cx="30" cy="30" r="12" fill="#080e20" stroke="url(#nn-center-grad)" strokeWidth="1.8" filter="url(#nn-center-glow)" />

    {/* ── "L" letter ── */}
    <text
      x="30"
      y="36"
      textAnchor="middle"
      fill="url(#nn-center-grad)"
      fontSize="15"
      fontWeight="800"
      fontFamily="'Segoe UI', 'Inter', system-ui, sans-serif"
    >
      L
    </text>
  </svg>
);

// ── Glitch Monogram Logo ──────────────────────────────────────────────────────
const GlitchMonogramLogo = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Clip slices for realistic glitch displacement */}
      <clipPath id="gm-slice-top">
        <rect x="0" y="8"  width="60" height="14" />
      </clipPath>
      <clipPath id="gm-slice-mid">
        <rect x="0" y="22" width="60" height="10" />
      </clipPath>
      <clipPath id="gm-slice-bot">
        <rect x="0" y="32" width="60" height="20" />
      </clipPath>

      {/* Glow filter for white "L" */}
      <filter id="gm-white-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── Teal ghost — shifted LEFT, glitches further left on burst ── */}
    <g clipPath="url(#gm-slice-top)">
      <g>
        <animateTransform
          attributeName="transform" type="translate"
          values="-3,0; -3,0; -3,0; -3,0; -8,0; -3,0; -3,0; -3,0; -3,0; -5,0; -3,0; -3,0"
          keyTimes="0; 0.1; 0.2; 0.74; 0.78; 0.80; 0.82; 0.88; 0.90; 0.93; 0.95; 1"
          dur="5s" repeatCount="indefinite"
        />
        <text x="30" y="44" textAnchor="middle" fill="#7cf2c9"
          fontSize="38" fontWeight="800"
          fontFamily="'Segoe UI','Inter',system-ui,sans-serif"
          opacity="0.75">L</text>
      </g>
    </g>

    <g clipPath="url(#gm-slice-bot)">
      <g>
        <animateTransform
          attributeName="transform" type="translate"
          values="-3,0; -3,0; -3,0; -3,0; -5,0; -3,0; -3,0; -3,0; -3,0; -8,0; -3,0; -3,0"
          keyTimes="0; 0.1; 0.2; 0.70; 0.74; 0.76; 0.82; 0.86; 0.89; 0.92; 0.95; 1"
          dur="5s" repeatCount="indefinite"
        />
        <text x="30" y="44" textAnchor="middle" fill="#7cf2c9"
          fontSize="38" fontWeight="800"
          fontFamily="'Segoe UI','Inter',system-ui,sans-serif"
          opacity="0.75">L</text>
      </g>
    </g>

    {/* ── Purple ghost — shifted RIGHT, glitches further right on burst ── */}
    <g clipPath="url(#gm-slice-mid)">
      <g>
        <animateTransform
          attributeName="transform" type="translate"
          values="3,0; 3,0; 3,0; 3,0; 9,0; 3,0; 3,0; 3,0; 3,0; 6,0; 3,0; 3,0"
          keyTimes="0; 0.1; 0.2; 0.74; 0.78; 0.80; 0.82; 0.88; 0.90; 0.93; 0.95; 1"
          dur="5s" repeatCount="indefinite"
        />
        <text x="30" y="44" textAnchor="middle" fill="#8f7bff"
          fontSize="38" fontWeight="800"
          fontFamily="'Segoe UI','Inter',system-ui,sans-serif"
          opacity="0.8">L</text>
      </g>
    </g>

    {/* ── White main "L" — center, steady ── */}
    <text
      x="30" y="44"
      textAnchor="middle"
      fill="white"
      fontSize="38"
      fontWeight="800"
      fontFamily="'Segoe UI','Inter',system-ui,sans-serif"
      filter="url(#gm-white-glow)"
    >L</text>

    {/* ── Glitch scan lines — flash briefly on burst ── */}
    <rect x="12" y="27" width="36" height="1.5" fill="#7cf2c9" opacity="0">
      <animate attributeName="opacity"
        values="0;0;0;0;0.55;0;0;0;0;0.3;0;0"
        keyTimes="0;0.1;0.2;0.74;0.78;0.80;0.82;0.88;0.90;0.93;0.95;1"
        dur="5s" repeatCount="indefinite" />
      <animate attributeName="y"
        values="27;27;27;27;21;27;27;27;27;33;27;27"
        keyTimes="0;0.1;0.2;0.74;0.78;0.80;0.82;0.88;0.90;0.93;0.95;1"
        dur="5s" repeatCount="indefinite" />
    </rect>
    <rect x="12" y="35" width="28" height="1" fill="#8f7bff" opacity="0">
      <animate attributeName="opacity"
        values="0;0;0;0;0.45;0;0;0;0;0.3;0;0"
        keyTimes="0;0.1;0.2;0.76;0.80;0.82;0.84;0.90;0.92;0.94;0.96;1"
        dur="5s" repeatCount="indefinite" />
    </rect>
  </svg>
);

// ── Hexagon Core Logo ─────────────────────────────────────────────────────────
const HexagonCoreLogo = ({ size = 52 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Gold → Orange gradient */}
      <linearGradient id="hx-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id="hx-letter-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#fde68a" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <radialGradient id="hx-inner-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#1a1005" />
        <stop offset="100%" stopColor="#0a0804" />
      </radialGradient>
      {/* Tight glow — stdDeviation 1 instead of 2 */}
      <filter id="hx-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="hx-spark-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="0.8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── Subtle inner hex ring (extra depth layer) ── */}
    <polygon
      points="41,13 50,30 41,47 19,47 10,30 19,13"
      fill="none"
      stroke="#fbbf24"
      strokeWidth="0.5"
      opacity="0.18"
    />

    {/* ── Main hexagon ── */}
    <polygon
      points="45,9 54,30 45,51 15,51 6,30 15,9"
      fill="url(#hx-inner-bg)"
      stroke="url(#hx-border-grad)"
      strokeWidth="1.8"
    />

    {/* ── Spark dots — gold & orange at alternating corners ── */}
    {/* Top-right */}
    <circle cx="45" cy="9" r="2.5" fill="#fbbf24" filter="url(#hx-spark-glow)">
      <animate attributeName="opacity" values="1;0.25;1" dur="2s"   repeatCount="indefinite" />
      <animate attributeName="r"       values="2.5;1.6;2.5" dur="2s"   repeatCount="indefinite" />
    </circle>

    {/* Bottom-right */}
    <circle cx="45" cy="51" r="2.5" fill="#f97316" filter="url(#hx-spark-glow)">
      <animate attributeName="opacity" values="1;0.25;1" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
      <animate attributeName="r"       values="2.5;1.6;2.5" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
    </circle>

    {/* Left */}
    <circle cx="6" cy="30" r="2.5" fill="#fbbf24" filter="url(#hx-spark-glow)">
      <animate attributeName="opacity" values="1;0.25;1" dur="2.2s" begin="1s"   repeatCount="indefinite" />
      <animate attributeName="r"       values="2.5;1.6;2.5" dur="2.2s" begin="1s"   repeatCount="indefinite" />
    </circle>

    {/* ── "L" centered ── */}
    <text
      x="31" y="41"
      textAnchor="middle"
      fill="url(#hx-letter-grad)"
      fontSize="28"
      fontWeight="800"
      fontFamily="'Segoe UI','Inter',system-ui,sans-serif"
      filter="url(#hx-glow)"
    >L</text>
  </svg>
);

// ── Typewriter Cursor Logo ────────────────────────────────────────────────────
const TypewriterCursorLogo = ({ size = 52 }) => (
  <svg
    width={size}
    height={size * 0.6}
    viewBox="0 0 80 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="tw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#7cf2c9" />
        <stop offset="100%" stopColor="#8f7bff" />
      </linearGradient>
      <filter id="tw-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── "L" in white ── */}
    <text
      x="4" y="38"
      fill="white"
      fontSize="36"
      fontWeight="700"
      fontFamily="'Courier New', 'Courier', monospace"
      filter="url(#tw-glow)"
    >L</text>

    {/* ── Blinking cursor block ── */}
    <rect x="30" y="10" width="16" height="30" fill="url(#tw-grad)" rx="1.5">
      <animate
        attributeName="opacity"
        values="1;1;0;0;1;1"
        keyTimes="0;0.4;0.5;0.9;1;1"
        dur="1.1s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

// ── Orbit Initial Logo ────────────────────────────────────────────────────────
const OrbitInitialLogo = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="oi-letter-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#7cf2c9" />
        <stop offset="100%" stopColor="#8f7bff" />
      </linearGradient>
      <linearGradient id="oi-ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#7cf2c9" stopOpacity="0.9" />
        <stop offset="45%"  stopColor="#8f7bff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#7cf2c9" stopOpacity="0.1" />
      </linearGradient>
      <radialGradient id="oi-glow-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#7cf2c9" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#7cf2c9" stopOpacity="0"    />
      </radialGradient>
      <filter id="oi-letter-glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="oi-dot-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ── Soft background aura ── */}
    <circle cx="30" cy="30" r="28" fill="url(#oi-glow-bg)" />

    {/* ── Orbit ring — tilted ellipse ── */}
    <ellipse
      cx="30" cy="30" rx="26" ry="8"
      fill="none"
      stroke="url(#oi-ring-grad)"
      strokeWidth="1.2"
      strokeDasharray="5 3"
      transform="rotate(-32 30 30)"
      opacity="0.85"
    />

    {/* ── Orbiting dot — travels along the ring ── */}
    <circle cx="56" cy="30" r="3" fill="#7cf2c9" filter="url(#oi-dot-glow)">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 30 30"
        to="360 30 30"
        dur="3.5s"
        repeatCount="indefinite"
      />
      <animate attributeName="fill" values="#7cf2c9;#8f7bff;#7cf2c9" dur="3.5s" repeatCount="indefinite" />
    </circle>

    {/* ── "L" letter — bold, gradient, glowing ── */}
    <text
      x="31"
      y="40"
      textAnchor="middle"
      fill="url(#oi-letter-grad)"
      fontSize="32"
      fontWeight="800"
      fontFamily="'Segoe UI', 'Inter', system-ui, sans-serif"
      filter="url(#oi-letter-glow)"
    >
      L
    </text>
  </svg>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active   = "text-white";
  const inactive = "text-secondary";

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <HexagonCoreLogo size={52} />
          <span className="text-white text-[15px] sm:text-[17px] font-bold">
            Litheesh V R
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="list-none hidden sm:flex flex-row gap-5">
          {navLinks.map((nav) => (
            <li key={nav.path}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  `${isActive ? active : inactive} hover:text-white text-[14px] font-medium cursor-pointer transition-colors duration-200`
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger ── */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ background: "rgba(255,255,255,0.06)" }}
            aria-label="Toggle menu"
          >
            <img src={toggle ? close : menu} alt="menu" className="w-5 h-5 object-contain" />
          </button>

          {/* Dropdown */}
          {toggle && (
            <div
              className="absolute top-16 right-4 left-4 z-30 rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "#0d1226", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Gradient top accent */}
              <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #7cf2c9, #8f7bff)" }} />

              <ul className="flex flex-col py-2">
                {navLinks.map((nav) => (
                  <li key={nav.path}>
                    <NavLink
                      to={nav.path}
                      onClick={() => setToggle(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-[15px] font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-white bg-white/5"
                            : "text-secondary hover:text-white hover:bg-white/5"
                        }`
                      }
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
