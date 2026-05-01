import React from 'react';
import { Link } from 'react-router-dom';
import { EarthCanvas } from '../components';
import SEO from '../components/SEO';
import { styles } from '../styles';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Litheesh Velakaturi Portfolio"
        description="The page you were looking for could not be found. Head back to Litheesh Velakaturi's portfolio homepage."
        canonical="https://litheesh.dev/404"
        robots="noindex, follow"
      />
      <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-8">
        <div className="md:w-1/2 h-[350px] md:h-[500px]">
          <EarthCanvas />
        </div>
        <div className="text-center md:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>404</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Oops! The page you're looking for seems to have drifted off into space.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-tertiary hover:bg-[#2c2342] transition-colors py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Return to Home Base
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;