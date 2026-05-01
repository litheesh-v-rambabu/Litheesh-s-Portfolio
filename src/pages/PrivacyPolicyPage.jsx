import React from 'react';
import SEO from '../components/SEO';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — Litheesh Velakaturi Portfolio"
        description="Learn how litheesh.dev collects, uses, and protects your personal data when you visit this AI & ML engineer portfolio website."
        canonical="https://litheesh.dev/privacy"
        robots="noindex, follow"
      />
      <div className="pt-24 sm:pt-32 max-w-4xl mx-auto">
        <h1 className={`${styles.sectionHeadText} text-center`}>Privacy Policy</h1>
        <div className="mt-8 text-secondary text-lg leading-relaxed space-y-4">
          <p>Effective Date: October 18, 2025</p>
          <p>Welcome to litheesh.com. This privacy policy explains how I collect, use, and protect the personal information you provide when you visit my portfolio.</p>
          
          <h2 className="text-white text-2xl font-bold pt-4">Information I Collect</h2>
          <p>When you visit this website, I may collect the following information for analytics purposes:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Your IP address and general geographic location.</li>
            <li>Information about your browser, network provider, and device.</li>
            <li>The pages you visit on this site and the time of your visit.</li>
            <li>The website that referred you to my portfolio.</li>
          </ul>

          <h2 className="text-white text-2xl font-bold pt-4">How I Use Your Information</h2>
          <p>The data collected is used solely for the purpose of understanding website traffic and improving the user experience on my portfolio. It helps me understand which pages are popular and where my visitors are coming from.</p>
          
          <h2 className="text-white text-2xl font-bold pt-4">Contact Form Data</h2>
          <p>If you choose to contact me via the contact form, the name, email, and message you provide will be stored securely in a database to allow me to respond to your inquiry.</p>

           <h2 className="text-white text-2xl font-bold pt-4">Your Rights</h2>
          <p>You have the right to request access to or deletion of your personal data. Please contact me if you wish to do so.</p>
        </div>
      </div>
    </>
  );
};

// Use the HOC to get the standard padding and styling
export default SectionWrapper(PrivacyPolicyPage, "");