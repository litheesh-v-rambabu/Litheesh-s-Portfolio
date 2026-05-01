import React from 'react';
import { Certifications, StarsCanvas } from '../components';
import SEO from '../components/SEO';
import { styles } from '../styles';

/**
 * CERTIFICATIONS PAGE — Professional certificates and credentials
 */
const CertificationsPage = () => {
  return (
    <div className='pt-24 relative z-0'>
      <SEO
        title="Certifications — Litheesh Velakaturi | AI & ML Engineer"
        description="Professional certifications and credentials earned by Litheesh Velakaturi Rambabu in artificial intelligence, machine learning, cloud computing, and software engineering. Demonstrating continuous learning and expertise across the AI/ML tech stack."
        keywords="Litheesh certifications, AI ML certifications, machine learning credentials, cloud computing certification, AWS certification, deep learning certificate, professional development AI engineer"
        canonical="https://litheesh.dev/certifications"
        name="Litheesh Velakaturi Rambabu"
        type="article"
      />

      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <Certifications />
      </div>

      <StarsCanvas />
    </div>
  );
};

export default CertificationsPage;
