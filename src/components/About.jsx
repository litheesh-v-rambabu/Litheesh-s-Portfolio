import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services, contacts, projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { copy } from "../assets";

// ─── Service Card ─────────────────────────────────────────────────────────────
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full sm:w-[230px]"
    options={{ max: 20, scale: 1.02, speed: 450 }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.6)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-[#0d1226] rounded-[20px] py-7 px-6 sm:py-8 sm:px-8 min-h-[190px] sm:min-h-[220px] flex flex-col justify-center items-center gap-4 sm:gap-5">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-white text-[17px] font-bold text-center leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// ─── Social / Link Card ───────────────────────────────────────────────────────
const LinkCard = ({ index, name, icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    whileHover={{ scale: 1.04, y: -3 }}
    className="w-[calc(50%-0.5rem)] sm:w-[140px] h-[120px] sm:h-[140px] green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
  >
    <div className="bg-[#0d1226] rounded-[20px] w-full h-full flex flex-col justify-center items-center gap-3">
      <img src={icon} alt={name} className="w-9 h-9 object-contain" />
      <span className="text-white text-[15px] font-semibold">{name}</span>
    </div>
  </motion.a>
);

// ─── Copyable contact row ─────────────────────────────────────────────────────
const CopyableText = ({ icon, value, link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.5)}
      className="flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-200 hover:bg-white/5"
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <img src={icon} alt="contact" className="w-7 h-7 object-contain flex-shrink-0" />
      <a
        href={link}
        className="text-secondary text-[14px] flex-grow hover:text-white transition-colors truncate"
      >
        {value}
      </a>
      <button
        onClick={handleCopy}
        title="Copy to clipboard"
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
        style={{
          background: "rgba(59,130,246,0.2)",
          border: "1px solid rgba(59,130,246,0.3)",
        }}
      >
        {copied ? (
          <span className="text-[#4ade80] text-[11px] font-bold">✓</span>
        ) : (
          <img src={copy} alt="copy" className="w-4 h-4 opacity-70" />
        )}
      </button>
    </motion.div>
  );
};

// ─── Featured project names to highlight ─────────────────────────────────────
const FEATURED = [
  "Agent Flight Recorder: Failure Analysis & Regression Testing for LLM Agents",
  "Multi-Agent RAG Platform for Support Operations",
  "SmartSnow — Deep RL for Urban Snow Plow Routing",
];

// ─── Featured Project mini-card ───────────────────────────────────────────────
const FeaturedCard = ({ project, index }) => {
  const isAiml = project.category === "aiml";
  const accentColor = isAiml ? "#00cea8" : "#60a5fa";
  const topMetric = project.metrics?.[0];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.6)}
      className="green-pink-gradient p-[1px] rounded-2xl shadow-card h-full"
    >
      <div className="bg-[#0d1226] rounded-2xl p-5 sm:p-6 flex flex-col gap-3 h-full">

        {/* Top row: chip + metric */}
        <div className="flex items-center justify-between gap-2">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#aaa6c3",
            }}
          >
            {isAiml ? "AI / ML" : "Web Dev"}
          </span>
          {topMetric && (
            <span
              className="text-[12px] font-bold px-2.5 py-1 rounded-full"
              style={{
                background: `${topMetric.color}15`,
                border: `1px solid ${topMetric.color}40`,
                color: topMetric.color,
              }}
            >
              {topMetric.value} {topMetric.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-[15px] sm:text-[17px] leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-secondary text-[12px] sm:text-[13px] leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech tags — top 3 only */}
        <div className="flex flex-wrap gap-1.5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t.name}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
              style={{
                background: `${accentColor}10`,
                border: `1px solid ${accentColor}30`,
                color: accentColor,
              }}
            >
              {t.name}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const About = () => {
  const linkContacts = contacts.filter((c) => c.type === "link");
  const copyContacts = contacts.filter((c) => c.type === "copy");

  return (
    <>
      {/* ── Section header ── */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* ── Bio ── */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[14px] sm:text-[16px] max-w-3xl leading-[26px] sm:leading-[30px]"
      >
        I'm an AI and Machine Learning engineer who builds practical,
        data-driven solutions for real business needs. I work with Python,
        TensorFlow, LangChain, and Vertex AI to create scalable,
        production-ready systems — from LLM-powered chatbots and semantic
        search to computer vision pipelines. I also integrate AI into
        enterprise applications to automate workflows and improve
        decision-making, always with scalability, security, and measurable
        business impact in mind.
      </motion.p>

      {/* ── Service cards ── */}
      <div className="mt-10 sm:mt-16 flex flex-wrap gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* ── Featured Projects ── */}
      <div className="mt-14 sm:mt-20">
        <motion.div variants={textVariant()} className="mb-6 sm:mb-8">
          <p className={styles.sectionSubText}>Selected work</p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
            <Link
              to="/projects"
              className="text-[13px] font-semibold mb-2 flex items-center gap-1 transition-colors duration-200"
              style={{ color: "#00cea8" }}
            >
              View all projects →
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects
            .filter((p) => FEATURED.includes(p.name))
            .map((project, index) => (
              <FeaturedCard key={project.name} project={project} index={index} />
            ))}
        </div>
      </div>

      {/* ── Let's connect ── */}
      <div className="mt-14 sm:mt-20 flex flex-col gap-6 sm:gap-8">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Reach out</p>
          <h2 className={styles.sectionHeadText}>Let's connect!</h2>
          <p className="mt-2 text-secondary text-[14px] max-w-sm leading-relaxed">
            Always open to new opportunities, collaborations, or just a good
            conversation about AI.
          </p>
        </motion.div>

        {/* Social link cards */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {linkContacts.map((contact, index) => (
            <LinkCard key={`link-${index}`} index={index} {...contact} />
          ))}
        </div>

        {/* Copyable contact details */}
        <div className="flex flex-col gap-2 sm:gap-3 max-w-lg">
          {copyContacts.map((contact, index) => (
            <CopyableText key={`copy-${index}`} {...contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
