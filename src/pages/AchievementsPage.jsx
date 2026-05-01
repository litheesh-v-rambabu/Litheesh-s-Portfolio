import React from 'react';
import { Achievements, StarsCanvas } from '../components';
import SEO from '../components/SEO';
import { styles } from '../styles';

/**
 * ACHIEVEMENTS PAGE — Publications, awards, and milestones
 */
const AchievementsPage = () => {
  return (
    <div className='pt-24 relative z-0'>
      <SEO
        title="Achievements & Publications — Litheesh Velakaturi | AI & ML Engineer"
        description="Litheesh Velakaturi Rambabu's research publications, academic awards, and professional milestones. Published in IARJSET (Vol 11, Issue 5, 2024) on Decentralized e-Voting using Blockchain and AI anomaly detection."
        keywords="Litheesh achievements, IARJSET publication, blockchain e-voting research paper, decentralized voting AI, research publication 2024, academic award AI ML, peer reviewed journal AI"
        canonical="https://litheesh.dev/achievements"
        name="Litheesh Velakaturi Rambabu"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "headline": "A Decentralized e-Voting System using Blockchain",
          "author": {
            "@type": "Person",
            "name": "Litheesh Velakaturi Rambabu"
          },
          "publisher": {
            "@type": "Organization",
            "name": "IARJSET"
          },
          "datePublished": "2024",
          "description": "A secure e-voting architecture using Ethereum blockchain combined with AI-based anomaly detection to prevent electoral fraud.",
          "url": "https://litheesh.dev/achievements"
        }}
      />

      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <Achievements />
      </div>

      <StarsCanvas />
    </div>
  );
};

export default AchievementsPage;
