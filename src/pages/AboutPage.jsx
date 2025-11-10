import React from 'react';
import { About, Experience, Tech } from '../components'; // Re-use components
import SEO from '../components/SEO';
import { styles } from '../styles';

const AboutPage = () => {
  return (
    <div className='pt-24'>
   <SEO
  title="About Kushvith - AI & Full-Stack Developer"
  description="Discover Kushvith's journey as an AI and full-stack developer. Skilled in Python, TensorFlow, LangChain, Vertex AI, React, Node.js, and Spring Boot, he builds intelligent, scalable, and data-driven applications. Explore expertise in web development, app development, AI/ML solutions, and innovative projects. Connect on GitHub, LinkedIn, or via email to collaborate on cutting-edge solutions."
  name="Kushvith"
  type="article"
/>

        <About />
        <Tech />
      </div>
  );
};

export default AboutPage;