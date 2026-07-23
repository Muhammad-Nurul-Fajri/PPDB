import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FolderGit2, 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  Layers, 
  Palette,
  Terminal,
  ArrowRight
} from 'lucide-react';

const roles = [
  'Full Stack Web Developer',
  'React Developer',
  'Laravel Developer',
  'UI/UX Designer',
  'Graphic Designer',
  'Content Creator'
];

export default function HeroSection({ onOpenContact, onOpenCv }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(90);
        
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40);
        
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-400/20 via-indigo-500/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wide uppercase shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Software Engineer</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Muhammad Nurul <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Fajri</span>
            </h1>

            {/* Animated Typing Text */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <div className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-sky-500 shrink-0" />
                <span className="font-mono text-sky-600 dark:text-sky-400">{displayedText}</span>
                <span className="w-0.5 h-6 bg-sky-500 animate-pulse"></span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am a Software Engineer specializing in Web Development and Software Engineering. Passionate about building scalable, efficient, and user-friendly digital products using modern web technologies.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenCv}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-white/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-sky-400 dark:text-sky-600 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>

              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/20 transition-all"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">
                Connect:
              </span>

              <a
                href="https://linkedin.com/in/muhammad-nurul-fajri"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 dark:bg-slate-800/70 dark:hover:bg-slate-800 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700/80 transition-all shadow-xs"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/Muhammad-Nurul-Fajri"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/70 dark:hover:bg-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 transition-all shadow-xs"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/fajri_mnf"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-pink-50 dark:bg-slate-800/70 dark:hover:bg-slate-800 text-slate-600 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400 border border-slate-200 dark:border-slate-700/80 transition-all shadow-xs"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="mailto:mnurulfajri2003@gmail.com"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-amber-50 dark:bg-slate-800/70 dark:hover:bg-slate-800 text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400 border border-slate-200 dark:border-slate-700/80 transition-all shadow-xs"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Large Profile Photo with Glass Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-500 opacity-30 blur-xl animate-pulse-slow"></div>

              {/* Main Glass Card Container */}
              <div className="relative rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-4 border border-white/60 dark:border-slate-800 shadow-2xl shadow-slate-900/10">
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5]">
                  <img
                    src="/images/fajri.jpg"
                    alt="Muhammad Nurul Fajri"
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  {/* Photo Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/10 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-sm">Muhammad Nurul Fajri</h3>
                        <p className="text-xs text-sky-400">Padang, Indonesia</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Tech Stack */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Full Stack</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">React & Laravel</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Founder */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Founder</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Star Fence Developer</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
