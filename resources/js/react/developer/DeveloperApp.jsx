import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Organizations from './Organizations';
import Stats from './Stats';
import Philosophy from './Philosophy';
import CTA from './CTA';
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
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-slate-900 dark:text-zinc-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* Vercel-style Floating Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
      />

      <main>
        {/* 1. Hero Section (90vh height) */}
        <Hero 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* 2. About Me */}
        <About />

        {/* 3. Professional Experience */}
        <Experience />

        {/* 4. Technical Skills (Badges, NO progress bars) */}
        <Skills />

        {/* 5. Featured Projects (6 Projects, 3 Columns, 16:9 ratio) */}
        <Projects />

        {/* 6. Achievements (Timeline style, minimal icons) */}
        <Achievements />

        {/* 7. Organizations (Simple timeline, no large cards) */}
        <Organizations />

        {/* 8. Statistics (Animated numbers) */}
        <Stats />

        {/* 9. Developer Philosophy (Centered 40px quote) */}
        <Philosophy />

        {/* 10. Contact CTA (24px rounded container) */}
        <CTA 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
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
