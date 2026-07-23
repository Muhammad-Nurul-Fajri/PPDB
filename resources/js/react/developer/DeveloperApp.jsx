import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import AchievementsSection from './AchievementsSection';
import OrganizationSection from './OrganizationSection';
import StatsSection from './StatsSection';
import PhilosophySection from './PhilosophySection';
import ContactCtaSection from './ContactCtaSection';
import Footer from './Footer';
import { ContactModal, CvModal } from './Modals';

export default function DeveloperApp() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('developer-theme');
      if (saved) return saved === 'dark';
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('developer-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('developer-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      
      {/* Sticky Header Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Professional Experience */}
        <ExperienceSection />

        {/* Section 4: Technical Skills */}
        <SkillsSection />

        {/* Section 5: Featured Projects */}
        <ProjectsSection />

        {/* Section 6: Achievements */}
        <AchievementsSection />

        {/* Section 7: Organization Experience */}
        <OrganizationSection />

        {/* Section 8: Statistics */}
        <StatsSection />

        {/* Section 9: Development Philosophy */}
        <PhilosophySection />

        {/* Section 10: Let's Work Together */}
        <ContactCtaSection 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
      />

    </div>
  );
}
