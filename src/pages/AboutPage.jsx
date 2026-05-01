import React from 'react';
import { About, StarsCanvas } from '../components';
import SEO from '../components/SEO';

/**
 * ABOUT PAGE
 * Overview bio → Service cards (AI/ML, Web, App Dev) → Let's connect
 */
const AboutPage = () => {
  return (
    <div className='pt-24 relative z-0'>
      <SEO
        title="About Litheesh Velakaturi — AI & ML Engineer"
        description="Litheesh Velakaturi Rambabu is an AI & ML Engineer and Masters student in Artificial Intelligence at the University at Buffalo (SUNY). Experienced in LLM deployment, computer vision, semantic search, RAG pipelines, and REST APIs using Python, TensorFlow, LangChain, FastAPI, YOLOv8, React, AWS, and Docker."
        keywords="Litheesh Velakaturi about, AI ML engineer bio, University at Buffalo AI, Masters artificial intelligence, LLM engineer, computer vision engineer, LangChain developer, YOLOv8, FastAPI developer, Python engineer Buffalo NY"
        canonical="https://litheesh.dev/about"
        name="Litheesh Velakaturi Rambabu"
        type="profile"
      />
      <About />
      <StarsCanvas />
    </div>
  );
};

export default AboutPage;
