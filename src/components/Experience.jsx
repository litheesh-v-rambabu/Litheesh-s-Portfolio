import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience: raw }) => {
  // Education entries use degree/school; normalise to the work-experience shape.
  const experience = raw.degree
    ? { ...raw, title: raw.degree, company_name: raw.school }
    : raw;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(#1d1836, #1d1836) padding-box, linear-gradient(135deg, #00cea8 0%, #bf61ff 100%) border-box",
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
          {experience.emoji ? (
            <span className="text-[20px] sm:text-[24px]" aria-hidden="true">
              {experience.emoji}
            </span>
          ) : experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name || "company"}
              className="w-[60%] h-[60%] object-contain"
            />
          ) : (
            <span className="text-white font-bold text-[16px] sm:text-[20px]">
              {(experience.company_name || experience.title || "?")[0]}
            </span>
          )}
        </div>
      }
    >
      <div>
        <h3
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          {experience.title}
        </h3>

        {experience.company_name && (
          <div
            style={{
              color: "#aaa6c3",
              fontSize: "14px",
              fontWeight: 600,
              marginTop: "4px",
              lineHeight: 1.4,
            }}
          >
            {experience.company_name}
          </div>
        )}

        {experience.location && (
          <div
            style={{
              color: "#00cea8",
              fontSize: "13px",
              fontWeight: 500,
              marginTop: "6px",
              lineHeight: 1.4,
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span aria-hidden="true">📍</span>
            <span>{experience.location}</span>
          </div>
        )}
      </div>

      <ul
        style={{
          marginTop: "16px",
          paddingLeft: "20px",
          listStyle: "disc",
        }}
      >
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            style={{
              color: "#f3f3f3",
              fontSize: "13px",
              lineHeight: 1.6,
              marginBottom: "8px",
              letterSpacing: "0.01em",
            }}
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

      <motion.div variants={textVariant()} className="mt-24">
        <p className={`${styles.sectionSubText} text-center`}>
          Where I studied
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((item, index) => (
            <ExperienceCard key={`education-${index}`} experience={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
