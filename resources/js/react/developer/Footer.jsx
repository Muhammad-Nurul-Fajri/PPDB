import React from 'react';
import { 
  Code2, 
  MapPin, 
  Mail, 
  ArrowUp, 
  Heart 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Developer Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Muhammad Nurul <span className="text-sky-400">Fajri</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Software Engineer specializing in Full Stack Web Development (React, Laravel), UI/UX Design, and digital products craftsmanship.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Padang, West Sumatra, Indonesia</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="mailto:mnurulfajri2003@gmail.com" className="hover:text-white transition-colors">
                mnurulfajri2003@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li><a href="#hero" className="hover:text-sky-400 transition-colors">Home / Top</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Me</a></li>
              <li><a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-sky-400 transition-colors">Skills & Tools</a></li>
              <li><a href="#projects" className="hover:text-sky-400 transition-colors">Featured Projects</a></li>
              <li><a href="#achievements" className="hover:text-sky-400 transition-colors">Achievements</a></li>
              <li><a href="#organization" className="hover:text-sky-400 transition-colors">Organization</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Connect With Me
            </h4>
            
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Muhammad-Nurul-Fajri"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-800"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/muhammad-nurul-fajri"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors border border-slate-800"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com/fajri_mnf"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-colors border border-slate-800"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[11px] text-slate-500">
              Founder & Web Developer at <span className="text-slate-300 font-semibold">Star Fence Developer</span>.
            </p>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Muhammad Nurul Fajri. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-slate-300 transition-colors">
              PPDB Landing Page
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
