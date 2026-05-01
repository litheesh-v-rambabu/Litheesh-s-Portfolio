import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import ProjectsGrid from "./ProjectsGrid";

const AllProjects = () => {
  const aimlProjects = projects.filter((p) => p.category === "aiml");
  const webProjects  = projects.filter((p) => p.category === "web");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>All Projects.</h2>
      </motion.div>

      <p className="mt-3 text-secondary text-[15px] max-w-2xl leading-relaxed">
        {aimlProjects.length} AI/ML systems and {webProjects.length} web
        projects — built with measurable impact and shipped to production.
      </p>

      <div className="mt-10">
        <ProjectsGrid aimlProjects={aimlProjects} webProjects={webProjects} />
      </div>

      {/* Back button */}
      <div className="mt-14 flex justify-center">
        <Link
          to="/"
          className="px-8 py-3 rounded-xl text-white font-semibold text-[14px] flex items-center gap-2 transition-colors duration-200"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.09)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(AllProjects, "");
