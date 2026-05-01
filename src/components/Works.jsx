import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import ProjectsGrid from "./ProjectsGrid";

const Works = () => {
  const aimlProjects = projects.filter((p) => p.category === "aiml").slice(0, 3);
  const webProjects  = projects.filter((p) => p.category === "web").slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Selected Work.</h2>
      </motion.div>

      <p className="mt-3 text-secondary text-[15px] max-w-2xl leading-relaxed">
        A curated selection of AI/ML systems and production web projects — click
        any card to visit the live site or source code.
      </p>

      <div className="mt-10">
        <ProjectsGrid aimlProjects={aimlProjects} webProjects={webProjects} />
      </div>

      {/* View all */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/projects"
          className="green-pink-gradient p-[1px] rounded-xl shadow-card"
        >
          <div
            className="bg-[#0d1226] hover:bg-[#131830] transition-colors duration-200 rounded-xl px-8 py-3 text-white font-semibold text-[14px] flex items-center gap-2"
          >
            View All {projects.length} Projects
            <span className="text-[#00cea8]">→</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export const ProjectCard = () => null;
export default SectionWrapper(Works, "works");
