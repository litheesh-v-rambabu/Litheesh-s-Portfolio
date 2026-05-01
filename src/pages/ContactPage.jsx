import React from 'react';
import { Contact, StarsCanvas } from '../components';
import SEO from '../components/SEO';
import { styles } from '../styles';

/**
 * CONTACT PAGE — Get in touch
 */
const ContactPage = () => {
  return (
    <div className='pt-24 sm:pt-32 relative z-0'>
      <SEO
        title="Contact Litheesh Velakaturi — Hire an AI & ML Engineer"
        description="Get in touch with Litheesh Velakaturi Rambabu — AI & ML Engineer based in Buffalo, NY. Open to full-time roles, research collaborations, freelance projects, and internships. Email: vrlitheesh2002@gmail.com | Phone: +1 (716) 368-9971 | LinkedIn: litheesh-rambabu"
        keywords="hire AI ML engineer, contact Litheesh Velakaturi, AI engineer Buffalo NY, machine learning freelance, LLM developer for hire, AI engineer available, recruit AI engineer, collaborate AI project"
        canonical="https://litheesh.dev/contact"
        name="Litheesh Velakaturi Rambabu"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Litheesh Velakaturi Rambabu",
          "url": "https://litheesh.dev/contact",
          "description": "Contact page for Litheesh Velakaturi Rambabu, AI & ML Engineer based in Buffalo, NY.",
          "mainEntity": {
            "@type": "Person",
            "name": "Litheesh Velakaturi Rambabu",
            "email": "vrlitheesh2002@gmail.com",
            "telephone": "+17163689971",
            "jobTitle": "AI & ML Engineer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Buffalo",
              "addressRegion": "NY",
              "addressCountry": "US"
            }
          }
        }}
      />

      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <Contact />
      </div>

      <StarsCanvas />
    </div>
  );
};

export default ContactPage;
