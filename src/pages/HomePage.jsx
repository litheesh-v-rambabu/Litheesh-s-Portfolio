import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { contacts } from "../constants";
import { copy } from "../assets";

// ─── Navigation flashcards ────────────────────────────────────────────────────
const navCards = [
  {
    title: "About",
    path: "/about",
    icon: "👤",
    description: "Who I am, what I do, and how to reach me.",
  },
  {
    title: "Experience",
    path: "/experience",
    icon: "💼",
    description: "Professional work history and full tech stack.",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: "🧠",
    description: "AI/ML systems and production web applications.",
  },
  {
    title: "Certifications",
    path: "/certifications",
    icon: "🎓",
    description: "Professional credentials and qualifications.",
  },
  {
    title: "Achievements",
    path: "/achievements",
    icon: "🏆",
    description: "Research publications and career milestones.",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "📬",
    description: "Let's connect — always open to opportunities.",
  },
];

// ─── Nav flashcard ────────────────────────────────────────────────────────────
const NavCard = ({ card, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
  >
    <Link to={card.path} className="block h-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -3 }}
        transition={{ duration: 0.18 }}
        className="bg-[#0d1226] rounded-[20px] p-4 sm:p-5 h-full flex flex-col gap-3 cursor-pointer group"
      >
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {card.icon}
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-white text-[16px] font-semibold leading-snug">
            {card.title}
          </h3>
          <p className="text-secondary text-[13px] mt-1 leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Arrow */}
        <span className="text-secondary text-[18px] group-hover:text-white group-hover:translate-x-1 transition-all duration-200 self-end">
          →
        </span>
      </motion.div>
    </Link>
  </motion.div>
);

// ─── Social link card (matches About page exactly) ────────────────────────────
const LinkCard = ({ name, icon, link, index }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ scale: 1.04, y: -3 }}
    className="w-[calc(50%-0.5rem)] sm:w-[140px] h-[120px] sm:h-[140px] green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
  >
    <div className="bg-[#0d1226] rounded-[20px] w-full h-full flex flex-col justify-center items-center gap-3">
      <img src={icon} alt={name} className="w-9 h-9 object-contain" />
      <span className="text-white text-[15px] font-semibold">{name}</span>
    </div>
  </motion.a>
);

// ─── Copyable contact row (matches About page exactly) ────────────────────────
const CopyRow = ({ icon, value, link, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
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

// ─── Home Page ────────────────────────────────────────────────────────────────
const HomePage = () => {
  const linkContacts = contacts.filter((c) => c.type === "link");
  const copyContacts = contacts.filter((c) => c.type === "copy");

  return (
    <>
      <SEO
        title="Litheesh Velakaturi Rambabu — AI & ML Engineer | Portfolio"
        description="AI & ML Engineer specialising in LLMs, computer vision, RAG pipelines, LangChain, FastAPI, and AWS. Masters student in Artificial Intelligence at University at Buffalo (SUNY). Open to full-time, freelance, and research roles."
        keywords="Litheesh Velakaturi, AI ML Engineer, machine learning engineer, LLM developer, LangChain, computer vision, RAG pipeline, FastAPI, AWS SageMaker, Python developer, Buffalo NY, AI portfolio"
        canonical="https://litheesh.dev"
        name="Litheesh Velakaturi Rambabu"
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Litheesh Velakaturi Rambabu",
          "url": "https://litheesh.dev",
          "image": "https://litheesh.dev/og-image.png",
          "jobTitle": "AI & ML Engineer",
          "description": "AI & ML Engineer specialising in LLMs, computer vision, RAG pipelines, and scalable REST APIs. Masters student in AI at University at Buffalo.",
          "email": "vrlitheesh2002@gmail.com",
          "telephone": "+17163689971",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Buffalo",
            "addressRegion": "NY",
            "addressCountry": "US"
          },
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "University at Buffalo (SUNY)",
              "url": "https://www.buffalo.edu"
            },
            {
              "@type": "EducationalOrganization",
              "name": "Visvesvaraya Technological University (KSIT)",
              "url": "https://vtu.ac.in"
            }
          ],
          "knowsAbout": ["Artificial Intelligence", "Machine Learning", "LLMs", "Computer Vision", "Python", "TensorFlow", "PyTorch", "LangChain", "React", "AWS"],
          "sameAs": [
            "https://linkedin.com/in/litheesh-rambabu",
            "https://github.com/litheesh"
          ]
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-8 sm:pt-12 pb-16 sm:pb-24 flex flex-col gap-12 sm:gap-20">

        {/* ── Navigation flashcards ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-secondary text-[13px] uppercase tracking-widest mb-2">
              Explore My Portfolio
            </p>
            <h2 className="text-white font-black text-[26px] xs:text-[30px] sm:text-[38px] leading-tight mb-3">
              Where would you like to go?
            </h2>
            <div
              className="w-12 h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, #7cf2c9, #8f7bff)" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {navCards.map((card, index) => (
              <NavCard key={card.path} card={card} index={index} />
            ))}
          </div>
        </section>

        {/* ── Let's connect ── */}
        <section>
          {/* Divider */}
          <div
            className="w-full h-[1px] mb-10 sm:mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
            }}
          />

          <div className="flex flex-col gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-secondary text-[13px] uppercase tracking-widest mb-1">
                Reach out
              </p>
              <h2 className="text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] leading-tight">
                Let's connect.
              </h2>
              <p className="text-secondary text-[14px] mt-2 max-w-sm leading-relaxed">
                Always open to new opportunities, collaborations, or a good
                conversation about AI.
              </p>
            </motion.div>

            {/* Social link cards */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {linkContacts.map((c, i) => (
                <LinkCard key={c.name + i} {...c} index={i} />
              ))}
            </div>

            {/* Copyable contact details */}
            <div className="flex flex-col gap-2 sm:gap-3 max-w-lg">
              {copyContacts.map((c, i) => (
                <CopyRow key={c.value} {...c} index={i} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;
