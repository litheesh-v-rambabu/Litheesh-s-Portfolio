import React from 'react';
import { AllProjects } from '../components'; // Re-use the AllProjects component
import SEO from '../components/SEO';

const ProjectsPage = () => {
  return (
    <div className='pt-24'>
<SEO
  title="Kushvith's Projects Showcase - AI, Full-Stack & Web Development Portfolio"
  description="Explore Kushvith's diverse portfolio of projects, showcasing expertise in AI, full-stack, and web development. From intelligent data-driven applications and predictive models to scalable web solutions built with Python, TensorFlow, LangChain, Vertex AI, React, Node.js, Spring Boot, and modern frontend frameworks. Discover innovative projects including e-commerce platforms, hybrid stores, educational portals, and creative web solutions."
  name="Kushvith"
  type="article"
/>
      <AllProjects />
    </div>
  );
};

export default ProjectsPage;