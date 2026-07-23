import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, FolderGit2, Mail, Sparkles, Code2, MapPin, CheckCircle2, ArrowUpRight, Terminal
} from 'lucide-react';
import { Linkedin, Github, Instagram } from './SocialIcons';

const roles = [
  'Full Stack Web Developer',
  'React Developer',
  'Laravel Developer',
  'UI/UX Designer',
  'Graphic Designer',
  'Content Creator'
];

export default function HeroSection({ onOpenContact, onOpenCv }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/muhammad-nurul-fajri', color: 'hover:text-blue-500 hover:border-blue-500/40' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Muhammad-Nurul-Fajri', color: 'hover:text-purple-400 hover:border-purple-500/40' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/mnurul_fajri', color: 'hover:text-pink-500 hover:border-pink-500/40' },
    { name: 'Email', icon: Mail, href: 'mailto:mnfajri.official@gmail.com', color: 'hover:text-emerald-500 hover:border-emerald-500/40' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center overflow-hidden">
      
      {/* Soft Ambient Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Software Engineer</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              Muhammad <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Nurul Fajri
              </span>
            </h1>

            {/* Animated Typing Text */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 font-mono">
                <span className="text-indigo-600 dark:text-indigo-400">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-indigo-600 dark:bg-indigo-400 inline-block animate-pulse ml-0.5"></span>
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
              I am a <strong className="text-slate-900 dark:text-white font-semibold">Software Engineer</strong> specializing in Web Development and Software Engineering. Passionate about building scalable, efficient, and user-friendly digital products using modern web technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenCv}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1"
              >
                <FolderGit2 className="w-4 h-4 text-indigo-500" />
                <span>View Projects</span>
              </a>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-sm shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-4 h-4 text-pink-400 dark:text-indigo-600" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">Connect:</span>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 ${s.color} transition-all duration-200 shadow-sm hover:scale-110`}
                    title={s.name}
                    aria-label={s.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Neon Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>

              {/* Main Image Frame Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-2 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800">
                  <img 
                    src="/images/fajri.jpg" 
                    alt="Muhammad Nurul Fajri" 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Name Tag on Image Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-800/80 text-white flex items-center justify-between shadow-xl">
                    <div>
                      <h4 className="font-bold text-sm leading-snug">Muhammad Nurul Fajri</h4>
                      <p className="text-xs text-indigo-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> Padang, West Sumatra
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/30 flex items-center justify-center border border-indigo-500/40">
                      <Code2 className="w-4 h-4 text-indigo-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Experience */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Open for Projects</p>
                </div>
              </div>

              {/* Floating Badge 2: Stack Tech */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center border border-indigo-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tech Stack</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">React &amp; Laravel</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
