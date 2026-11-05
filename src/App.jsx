import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

// Import all necessary components and pages
import { Navbar, Footer, StarsCanvas, Hero } from "./components";
import Chatbot from "./components/Chatbot";
import NeuralBackground from "./components/NeuralBackground";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
// This helper component ensures that when you navigate to a new page, you start at the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// This is our Master Layout. It includes all shared UI.
const PageLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className='relative z-0 bg-primary'>
      {/* The Hero background is only shown on the home page */}
      {isHomePage ? (
        <div className='relative overflow-hidden'>
          <NeuralBackground />
          <Navbar />
          <Hero />
        </div>
      ) : (
        <Navbar />
      )}
      
      <main>
        <Outlet /> {/* Child pages will be rendered here */}
      </main>
      
      <div className='relative z-0'>
        <StarsCanvas />
        <Footer />
      </div>

      {/* SHISIYA — AI Chatbot (floats on every page) */}
      <Chatbot />
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* All routes are now nested inside our master PageLayout */}
          <Route element={<PageLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/certifications' element={<CertificationsPage />} />
            <Route path='/achievements' element={<AchievementsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;