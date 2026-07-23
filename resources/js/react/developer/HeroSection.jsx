import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, FolderGit2, Mail, Sparkles, Code2, MapPin, CheckCircle2, ArrowUpRight, Terminal, Cpu, Layers, Layout
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
        setTypingSpeed(80);

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(35);

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
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/muhammad-nurul-fajri', color: 'hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-blue-950/40' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Muhammad-Nurul-Fajri', color: 'hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-50 dark:hover:bg-purple-950/40' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/mnurul_fajri', color: 'hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-50 dark:hover:bg-pink-950/40' },
    { name: 'Email', icon: Mail, href: 'mailto:mnfajri.official@gmail.com', color: 'hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-50 dark:hover:bg-emerald-950/40' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-32 flex items-center overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/15 rounded-full blur-[120px] pointer-events-none"></div>

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide shadow-sm mb-6">
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
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed font-normal">
              I am a <strong className="text-slate-900 dark:text-white font-bold">Software Engineer</strong> specializing in Web Development and Software Engineering. Passionate about building scalable, efficient, and user-friendly digital products using modern web technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenCv}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1"
              >
                <FolderGit2 className="w-4 h-4 text-indigo-500" />
                <span>View Projects</span>
              </a>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-4 h-4 text-pink-400 dark:text-indigo-600" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Connect:</span>
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

          {/* Right Hero Profile Photo Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center py-6"
          >
            <div className="relative w-full max-w-md">
              
              {/* Glowing Ambient Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 p-2.5 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800">
                  <img 
                    src="/images/fajri.jpg" 
                    alt="Muhammad Nurul Fajri" 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Glassmorphic Details Card on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-2xl">
                    <div>
                      <h4 className="font-extrabold text-sm leading-snug">Muhammad Nurul Fajri</h4>
                      <p className="text-xs text-indigo-400 font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" /> Padang, West Sumatra
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/30 flex items-center justify-center border border-indigo-500/40">
                      <Code2 className="w-4 h-4 text-indigo-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Open For Work */}
              <div className="absolute -top-5 -left-4 bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</p>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">Available for Projects</p>
                </div>
              </div>

              {/* Floating Badge 2: React 19 & Laravel 11 */}
              <div className="absolute -bottom-5 -right-4 bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center border border-indigo-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tech Stack</p>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">React 19 &amp; Laravel 11</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
