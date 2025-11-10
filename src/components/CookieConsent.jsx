import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already given consent
    const consent = localStorage.getItem('user-consent-given');
    if (!consent) {
      // If no consent is found in localStorage, show the banner
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // When the user clicks "Got it!", store their consent and hide the banner
    localStorage.setItem('user-consent-given', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-md p-5 bg-tertiary rounded-xl shadow-2xl shadow-black/50"
        >
          <h3 className="text-white font-bold text-lg mb-2">Your Privacy Matters</h3>
          <p className="text-secondary text-sm mb-4">
            Welcome to my portfolio! To understand how visitors use this site and improve the experience,
            I use analytics tracking. You can learn more in the{' '}
            <Link to="/privacy-policy" className="text-white underline hover:text-purple-400">
              Privacy Policy
            </Link>.
          </p>
          <button
            onClick={handleAccept}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Got it!
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;