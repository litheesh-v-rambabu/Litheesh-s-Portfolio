import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

// ─── Single Certification Card ────────────────────────────────────────────────
const CertCard = ({ cert, index }) => {
  const accent = cert.color || "#4ade80";

  return (
    // Outer wrapper — produces the cyan→purple gradient border (1 px)
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
    >
      {/* Inner card */}
      <div className="relative bg-[#0d1226] rounded-[20px] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 h-full">

        {/* Icon + title row */}
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Emoji icon circle */}
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center text-xl sm:text-2xl"
            style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
          >
            {cert.icon || "🎓"}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-[14px] sm:text-[16px] leading-snug">
              {cert.title}
            </h3>
            <p className="text-[12px] sm:text-[13px] mt-1" style={{ color: accent }}>
              {cert.subtitle}
            </p>
          </div>

          {/* Date badge */}
          <span
            className="shrink-0 text-[10px] sm:text-[11px] font-medium px-2 sm:px-3 py-1 rounded-full border"
            style={{ color: accent, borderColor: `${accent}55`, background: `${accent}15` }}
          >
            {cert.date}
          </span>
        </div>

        {/* Description */}
        {cert.description && (
          <p className="text-secondary text-[13px] leading-relaxed">
            {cert.description}
          </p>
        )}

        {/* Tags chips */}
        {cert.tags && cert.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {cert.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link button */}
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-start text-[12px] font-medium px-4 py-1.5 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{
              background: `${accent}22`,
              color: accent,
              border: `1px solid ${accent}44`,
            }}
          >
            {cert.linkLabel || "View Credential"} ↗
          </a>
        )}
      </div>
    </motion.div>
  );
};

// ─── Empty State ──────────────────────────────────────────────────────────────
const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="green-pink-gradient p-[1px] rounded-[20px] shadow-card col-span-full max-w-md mx-auto w-full"
  >
    <div className="bg-[#0d1226] rounded-[20px] flex flex-col items-center justify-center py-20 px-8 gap-4 text-center">
      <div className="text-5xl mb-2">🎓</div>
      <h3 className="text-white text-xl font-semibold">
        Certifications Coming Soon
      </h3>
      <p className="text-secondary text-[14px] max-w-sm">
        Currently pursuing certifications in AI/ML and cloud technologies.
        Check back soon!
      </p>
    </div>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have earned</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-10">
        {certifications.length === 0 ? (
          <div className="flex justify-center">
            <EmptyState />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertCard key={cert.title + index} cert={cert} index={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
