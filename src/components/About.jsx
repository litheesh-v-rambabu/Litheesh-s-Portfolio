import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, contacts } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { RobotCanvas } from "./canvas";
import { copy } from "../assets";
const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          // options={{
          //   max: 45, 
          //   scale: 1,
          //   speed: 450,
          // }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

const LinkCard = ({ index, name, icon, link }) => (
  <motion.a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    // variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    whileHover={{ scale: 1.05 }}
    className='w-[calc(50%-0.5rem)] sm:w-[160px] h-[160px] green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
  >
    <div className='bg-tertiary rounded-[20px] w-full h-full flex flex-col justify-center items-center p-4 gap-2'>
      <img src={icon} alt={name} className='w-10 h-10 object-contain' />
      <h3 className='text-white text-[18px] font-bold text-center'>{name}</h3>
    </div>
  </motion.a>
);


const CopyableText = ({ index, icon, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
  };

  return (
    <motion.div
      // variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className='flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-tertiary'
    >
      <img src={icon} alt="contact icon" className='w-8 h-8 object-contain mr-4' />
      <p className='text-secondary text-lg flex-grow'>{value}</p>
      <button
        onClick={handleCopy}
        style={{ backgroundColor: 'rgb(59 130 246 / 0.5)' }}
        className='w-10 h-10 flex justify-center items-center rounded-lg bg-tertiary-light ml-4 text-white font-semibold'
      >
        {copied ? (
          <span className='text-green-400 font-semibold'>Copied!</span>
        ) : (
          <img src={copy} alt='copy' className='w-6 h-6 opacity-60' />
        )}
      </button>
    </motion.div>
  );
};




const About = () => {
    const linkContacts = contacts.filter((contact) => contact.type === 'link');
  const copyContacts = contacts.filter((contact) => contact.type === 'copy');
  return (
    <>
      <motion.div
      //  variants={textVariant()}
       >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        // variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
     I'm an AI and full-stack developer with hands-on experience building intelligent, data-driven applications. I specialize in Python, TensorFlow, LangChain, and Vertex AI, and also work across the full stack using React, Node.js, and Spring Boot. I love turning complex problems into simple, scalable solutions and enjoy collaborating with teams to build products that are both smart and impactful. Let’s create something innovative together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

          <div className='mt-20 flex flex-col md:flex-row items-center gap-10'>
        <div className='md:w-1/2 flex flex-col gap-8'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionHeadText}>Let's connect!</p>
            <p className={styles.sectionSubText}>I AM ALWAYS OPEN TO NEW OPPORTUNITIES AND COLLABORATIONS.</p>
          </motion.div>

          {/* Render the link cards (2 per row on mobile) */}
          <div className='flex flex-wrap gap-4 justify-start'>
            {linkContacts.map((contact, index) => (
              <LinkCard key={`contact-${index}`} index={index} {...contact} />
            ))}
          </div>

          {/* Render the copyable text links */}
          <div className='flex flex-col gap-4 mt-4'>
            {copyContacts.map((contact, index) => (
              <CopyableText key={`copy-${index}`} index={index + linkContacts.length} {...contact} />
            ))}
          </div>
        </div>
        
        <RobotCanvas className='md:w-1/2 w-full h-[350px] md:h-[550px]' />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");