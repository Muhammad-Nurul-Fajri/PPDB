import React from 'react';
import { Mail, MapPin, Code2, Heart, ArrowUp } from 'lucide-react';
import { Linkedin, Github, Instagram } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Muhammad Nurul Fajri
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Software Engineer specializing in modern Web Development, React.js, Laravel, and UI/UX design. Building scalable, elegant digital solutions.
            </p>

            <div className="flex items-center gap-2 text-xs text-indigo-400 font-semibold bg-indigo-950/60 border border-indigo-800/50 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>Padang, West Sumatra, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a></li>
              <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Professional Experience</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Featured Projects</a></li>
              <li><a href="#achievements" className="hover:text-indigo-400 transition-colors">Achievements &amp; Awards</a></li>
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Connect &amp; Social
            </h4>
            <ul className="space-y-3 text-xs mb-6">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href="mailto:mnfajri.official@gmail.com" className="hover:text-white transition-colors">
                  mnfajri.official@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/muhammad-nurul-fajri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/Muhammad-Nurul-Fajri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-purple-400 hover:border-purple-500/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/mnurul_fajri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-pink-400 hover:border-pink-500/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Muhammad Nurul Fajri. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 font-semibold transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
