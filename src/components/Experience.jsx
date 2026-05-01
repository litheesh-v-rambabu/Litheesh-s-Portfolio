import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(#1d1836, #1d1836) padding-box, linear-gradient(135deg, #00cea8 0%, #bf61ff 100%) border-box",
        color: "#fff",
        border: "1px solid transparent",
        boxShadow: "0 4px 32px rgba(0,0,0,0.4), 0 0 0 0px transparent",
      }}
      contentArrowStyle={{ borderRight: "7px solid #00cea8" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg || "#1d1836",
        boxShadow: "0 0 0 4px #232631, inset 0 2px 0 rgba(0,0,0,0.08)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name || "company"}
              className="w-[60%] h-[60%] object-contain"
            />
          ) : (
            // Fallback: first letter of company name
            <span className="text-white font-bold text-[16px] sm:text-[20px]">
              {(experience.company_name || experience.title || "?")[0]}
            </span>
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[18px] sm:text-[22px] font-bold leading-snug">
          {experience.title}
        </h3>
        {experience.company_name && (
          <p className="text-secondary text-[13px] sm:text-[15px] font-semibold mt-1" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        )}
      </div>

      <ul className="mt-4 list-disc ml-4 sm:ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[12px] sm:text-[13px] pl-1 tracking-wide leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
