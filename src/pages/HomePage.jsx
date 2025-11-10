import React from 'react';
import { About, Footer,StarsCanvas, Tech, Works,Contact } from "../components";
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
   <SEO 
  title="Kushvith - AI & Full-Stack Developer Portfolio"
  description="Kushvith is an AI and full-stack developer specializing in Python, TensorFlow, LangChain, Vertex AI, React, Node.js, and Spring Boot. Experienced in building intelligent, scalable, and data-driven applications, predictive forecasting models, and innovative web solutions that solve real-world problems. Explore advanced AI projects, full-stack applications, and modern web development innovations."
  name="Kushvith"
  type="website"
/>

    <About />
    <Tech />
    <Works />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
 

    </>
  );
};

export default HomePage;