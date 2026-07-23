import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, ArrowUp } from 'lucide-react';

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
import CvModal from './CvModal';
import ContactModal from './ContactModal';

export default function DeveloperPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync dark mode class with HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll Progress and Active Section Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'achievements', 'organization', 'stats', 'philosophy', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-sky-500 selection:text-white relative">
      
      {/* Scroll Progress Bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <HeroSection
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
        />
        
        <AboutSection />
        
        <ExperienceSection />
        
        <SkillsSection />
        
        <ProjectsSection />
        
        <AchievementsSection />
        
        <OrganizationSection />
        
        <StatsSection />
        
        <PhilosophySection />
        
        <ContactCtaSection
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
          onToast={triggerToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        onToast={triggerToast}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onToast={triggerToast}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl bg-slate-900 text-white border border-slate-700 shadow-2xl flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1 text-xs leading-relaxed">
              {toastMessage}
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
