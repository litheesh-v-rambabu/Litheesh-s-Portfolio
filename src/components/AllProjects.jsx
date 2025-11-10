import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // For the "Back" button

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./Works"; // We will export ProjectCard from Works.jsx

const AllProjects = () => {
return (
    <>
        <motion.div
        //  variants={textVariant()}
         >
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>All Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.p
                // variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Here is a complete showcase of my projects, demonstrating my skills
                and experience through real-world examples. Each project is briefly
                described and includes links to the code repository and, where
                available, a live demo.
            </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>

        <div className='mt-20 flex justify-center'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Link
                    to='/'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-colors duration-300'
                >
                    &larr; Back to Home
                </Link>
            </motion.div>
        </div>
    </>
);
};

export default SectionWrapper(AllProjects, "");