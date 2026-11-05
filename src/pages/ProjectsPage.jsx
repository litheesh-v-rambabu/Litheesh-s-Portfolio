import React from 'react';
import { AllProjects, StarsCanvas } from '../components';
import SEO from '../components/SEO';

const ProjectsPage = () => {
  return (
    <div className='pt-24 relative z-0'>
      <SEO
        title="Projects — Litheesh Velakaturi | AI, ML & Web Portfolio"
        description="Explore Litheesh Velakaturi's projects: Agent Flight Recorder (LLM agent observability), Multi-Agent RAG Platform, Deep RL snow plow routing, AI Code Suggester (CodeLlama-7B on AWS SageMaker), Brain Tumor Segmentation CNN, NLTA multilingual browser extension (5K+ users), Dog Breed Classifier (ResNet/EfficientNet), Blockchain e-Voting (IARJSET 2024), and production web apps for e-commerce and healthcare."
        keywords="AI ML projects portfolio, code suggester LLM, brain tumor segmentation CNN, NLTA browser extension multilingual, dog breed classifier ResNet, blockchain e-voting Ethereum, Anbu CocoMart ecommerce, KS Modular website, AuSmile dental, LangChain projects, TensorFlow projects"
        canonical="https://litheesh.dev/projects"
        name="Litheesh Velakaturi Rambabu"
        type="article"
      />
      <AllProjects />
      <StarsCanvas />
    </div>
  );
};

export default ProjectsPage;