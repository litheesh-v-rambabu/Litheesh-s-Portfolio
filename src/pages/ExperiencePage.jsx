import React from 'react';
import { Experience, Tech, StarsCanvas } from '../components';
import SEO from '../components/SEO';

/**
 * EXPERIENCE PAGE — Work history timeline + full tech stack
 */
const ExperiencePage = () => {
  return (
    <div className='pt-24 relative z-0'>
      <SEO
        title="Work Experience — Litheesh Velakaturi | AI & ML Engineer"
        description="Litheesh Velakaturi's professional experience: Software AI Engineer at Isahghan Minds (Dec 2023 – Aug 2025) building LLM chatbots and computer vision pipelines; Software Engineer Intern at ESI Software on AWS REST APIs; ML Intern at Coincent.ai for dog breed classification; and Freelance Web Developer since 2023."
        keywords="Litheesh experience, AI ML work history, Isahghan Minds engineer, ESI Software intern, Coincent AI intern, LLM chatbot developer, YOLOv8 engineer, AWS REST API, freelance web developer, machine learning career"
        canonical="https://litheesh.dev/experience"
        name="Litheesh Velakaturi Rambabu"
        type="article"
      />

      {/* Work experience timeline */}
      <Experience />

      {/* Tech stack grid */}
      <Tech />

      <StarsCanvas />
    </div>
  );
};

export default ExperiencePage;
