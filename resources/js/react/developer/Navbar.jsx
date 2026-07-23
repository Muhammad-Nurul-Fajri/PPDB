import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Moon, Menu, X, ArrowLeft, Download, Code2, Sparkles, 
  User, Briefcase, Cpu, FolderGit2, Award, Mail, ChevronRight 
} from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onOpenContact, onOpenCv }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'achievements', 'organization', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'px-4 sm:px-6 py-2.5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-900/10' 
            : 'px-2 py-2 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/40'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Back link */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="/" 
              className="group inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/80 dark:border-slate-800/80 transition-all duration-200 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-indigo-500" />
              <span className="hidden xs:inline">Back to PPDB</span>
            </a>

            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-sm leading-none flex items-center gap-1.5">
                  MN Fajri
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Software Engineer</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/70 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-indigo-600 dark:text-indigo-400 font-bold' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-sm"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 shadow-sm hover:scale-105"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Download CV */}
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            {/* Contact Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-indigo-500" />
                      {link.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenCv(); }}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
