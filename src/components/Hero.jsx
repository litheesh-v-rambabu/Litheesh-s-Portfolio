import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";

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

        {/* ── Right: Profile image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative flex-shrink-0 z-10 flex items-center justify-center
                     w-[200px] xs:w-[240px] sm:w-[300px] md:w-[380px] lg:w-[440px]
                     mt-2 md:mt-0"
        >
          {/* Glow */}
          <div
            className="absolute blur-[60px] sm:blur-[80px] opacity-25 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full"
            style={{ background: "radial-gradient(circle, #8f7bff 0%, #7cf2c9 100%)" }}
          />
          <img
            src="/profile.png"
            alt="Litheesh — AI & ML Engineer"
            className="relative w-full object-contain drop-shadow-2xl"
            style={{
              maskImage: "radial-gradient(circle at 50% 42%, white 38%, rgba(255,255,255,0.85) 52%, rgba(255,255,255,0.3) 66%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(circle at 50% 42%, white 38%, rgba(255,255,255,0.85) 52%, rgba(255,255,255,0.3) 66%, transparent 78%)",
            }}
          />
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
