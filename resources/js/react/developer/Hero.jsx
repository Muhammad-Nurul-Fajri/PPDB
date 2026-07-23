import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDownRight, Mail, MapPin } from 'lucide-react';
import { Linkedin, Github, Instagram } from './SocialIcons';

const roles = [
  'Full Stack Web Developer',
  'React Developer',
  'Laravel Developer',
  'UI/UX Designer',
  'Graphic Designer',
  'Software Engineer'
];

export default function Hero({ onOpenContact, onOpenCv }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

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
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/muhammad-nurul-fajri' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Muhammad-Nurul-Fajri' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/mnurul_fajri' },
    { name: 'Email', icon: Mail, href: 'mailto:mnfajri.official@gmail.com' },
  ];

  return (
    <section id="hero" className="min-h-[85vh] pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 60% Text Column (lg:col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-[14px] font-medium text-slate-700 dark:text-zinc-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Software Engineer &amp; Full Stack Specialist</span>
            </div>

            {/* 64px Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-6">
              Muhammad <br className="hidden sm:inline" />
              <span className="text-blue-600 dark:text-blue-500">Nurul Fajri</span>
            </h1>

            {/* Animated Typing Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-[20px] font-bold text-slate-700 dark:text-zinc-300 font-mono flex items-center gap-2">
                <span className="text-blue-600">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-blue-600 inline-block animate-pulse"></span>
              </span>
            </div>

            {/* 18px Body Text */}
            <p className="text-base sm:text-[18px] text-slate-600 dark:text-zinc-400 font-normal leading-relaxed mb-10 max-w-xl">
              I am a Software Engineer specializing in Web Development and Software Engineering. Passionate about building scalable, efficient, and user-friendly digital products using modern web technologies.
            </p>

            {/* Equal Height 48px Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenCv}
                className="w-full sm:w-auto h-[48px] px-6 rounded-[20px] bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto h-[48px] px-6 rounded-[20px] bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-900 dark:text-white font-semibold text-[14px] border border-slate-200 dark:border-zinc-800 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto h-[48px] px-6 rounded-[20px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-[14px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-500 dark:text-blue-600" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-200 dark:border-zinc-800/80 w-full">
              <span className="text-[14px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mr-2">Connect:</span>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-[12px] bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                    title={s.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

          </motion.div>

          {/* 40% Image Column (lg:col-span-5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="rounded-[20px] overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 p-3 shadow-xl">
                <div className="rounded-[16px] overflow-hidden aspect-[3/4] bg-slate-100 dark:bg-zinc-800 relative">
                  <img 
                    src="/images/fajri.jpg" 
                    alt="Muhammad Nurul Fajri" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[14px] bg-slate-900/90 dark:bg-zinc-950/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[14px]">Muhammad Nurul Fajri</h4>
                      <p className="text-[14px] text-blue-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" /> Padang, Indonesia
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
