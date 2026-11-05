import React from "react";
import { motion } from "framer-motion";
import { github, link as linkIcon } from "../assets";

// ─── Tech icon map (devicons + simpleicons CDN) ───────────────────────────────
// Falls back to a coloured dot when no icon is available.
const TECH_ICONS = {
  // Languages
  "Python":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "JavaScript":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "TypeScript":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "PHP":           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "Java":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Dart":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",

  // AI / ML
  "TensorFlow":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "PyTorch":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  "OpenCV":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  "scikit-learn":  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  "Keras":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
  "Hugging Face":  "https://cdn.simpleicons.org/huggingface/FFD21E",
  "LangChain":     "https://cdn.simpleicons.org/langchain/1C3C3C",
  "FastAPI":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",

  // Web / Backend
  "React":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React JS":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Angular":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  "Flask":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "Spring Boot":   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "jQuery":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
  "HTML":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "Tailwind":      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Flutter":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",

  // Databases
  "MySQL":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "MongoDB":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "PostgreSQL":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Redis":         "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Pinecone":      "https://cdn.simpleicons.org/pinecone/000000",

  // Cloud / DevOps
  "AWS":                 "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "AWS SageMaker":       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "AWS Lambda":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "Docker":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Kubernetes":    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  "Git":           "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub":        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Vite":          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  "ONNX":          "https://cdn.simpleicons.org/onnx/005CED",
};

// ─── Bold leading metric numbers inside a bullet string ──────────────────────
const BulletText = ({ text }) => {
  const match = text.match(/^([+\-]?\d[\d,.%×xms↓↑\s]*(?:ms|%|x|K\+|M\+)?)/);
  if (!match) return <span>{text}</span>;
  const bold = match[1];
  const rest = text.slice(bold.length);
  return (
    <span>
      <strong className="text-white font-semibold">{bold}</strong>
      {rest}
    </span>
  );
};

// ─── Category chip ────────────────────────────────────────────────────────────
const Chip = ({ label }) => (
  <span
    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
    style={{
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "#8b93a8",
    }}
  >
    {label}
  </span>
);

// ─── Tech badge — icon + name ─────────────────────────────────────────────────
const TechBadge = ({ name, dotColor }) => {
  const iconUrl = TECH_ICONS[name];

  return (
    <span
      className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[#d1d5db] cursor-default"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={name}
          className="w-4 h-4 object-contain flex-shrink-0"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      ) : (
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: dotColor, opacity: 0.85 }}
        />
      )}
      {name}
    </span>
  );
};

// ─── Single project card ──────────────────────────────────────────────────────
const ProjectCard = ({ project, index = 0 }) => {
  const isAiml   = project.category === "aiml";
  const dotColor = isAiml ? "#4ade80" : "#60a5fa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="green-pink-gradient p-[1px] rounded-2xl shadow-card"
    >
      <div className="bg-[#0d1226] rounded-2xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-5">

        {/* ── Top: chip + link buttons ── */}
        <div className="flex items-center justify-between gap-3">
          <Chip label={isAiml ? "AI / ML" : "Web Dev"} />

          <div className="flex items-center gap-2">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                title="View source code"
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <img src={github} alt="GitHub" className="w-4 h-4" style={{ filter: "invert(0.7)" }} />
              </a>
            )}
            {project.live_site_link && (
              <a
                href={project.live_site_link}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit live site"
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <img src={linkIcon} alt="Live" className="w-4 h-4" style={{ filter: "invert(0.7)" }} />
              </a>
            )}
          </div>
        </div>

        {/* ── Title ── */}
        <h3 className="text-white font-bold text-[18px] sm:text-[22px] leading-snug">
          {project.name}
        </h3>

        {/* ── Description ── */}
        <p className="text-secondary text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px]">
          {project.description}
        </p>

        {/* ── Bullet points ── */}
        {project.bullets?.length > 0 && (
          <ul className="flex flex-col gap-2.5">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3 text-secondary text-[12px] sm:text-[13px] leading-[20px] sm:leading-[22px]">
                <span
                  className="mt-[6px] flex-shrink-0 w-[7px] h-[7px] rounded-full"
                  style={{ background: dotColor, boxShadow: `0 0 5px ${dotColor}88` }}
                />
                <BulletText text={b} />
              </li>
            ))}
          </ul>
        )}

        {/* ── Divider + tech badges ── */}
        {project.tags?.length > 0 && (
          <div
            className="pt-3 sm:pt-4 mt-1 flex flex-wrap gap-1.5 sm:gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {project.tags.map((t) => (
              <TechBadge key={t.name} name={t.name} dotColor={dotColor} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Section with label + stacked cards ──────────────────────────────────────
const ProjectSection = ({ label, projects: list }) => {
  if (!list?.length) return null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="text-secondary text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest whitespace-nowrap flex-shrink-0">
          {label}
        </span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>

      <div className="flex flex-col gap-5">
        {list.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
const ProjectsGrid = ({ aimlProjects = [], webProjects = [] }) => (
  <div className="flex flex-col gap-14">
    <ProjectSection label="AI / ML Projects" projects={aimlProjects} />
    <ProjectSection label="Web Development"  projects={webProjects} />
  </div>
);

export default ProjectsGrid;
