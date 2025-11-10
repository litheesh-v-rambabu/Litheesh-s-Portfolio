import React from 'react';
import { Contact } from '../components';
import SEO from '../components/SEO';
import { styles } from '../styles';

const ContactPage = () => {
  return (
    // The top padding is now applied here
    <div className='pt-24 sm:pt-32'>
<SEO
  title="Contact Kushvith - AI & Full-Stack Developer Portfolio"
  description="Reach out to Kushvith, an AI and full-stack developer, to discuss collaboration, projects, or hiring opportunities. Connect via email at kushvith.yallamoor@gmail.com or hello@kushvith.com, or call +91 6362150408 to bring your ideas to life with intelligent, scalable, and innovative web and AI solutions."
  name="Kushvith"
  type="article"
/>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <Contact />
      </div>
    </div>
  );
};
export default ContactPage;