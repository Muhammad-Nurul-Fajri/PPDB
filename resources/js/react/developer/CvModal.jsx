import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Sparkles, ExternalLink, Printer } from 'lucide-react';

export default function CvModal({ isOpen, onClose, onToast }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    onToast('Downloading CV (Curriculum Vitae - Muhammad Nurul Fajri)...');
    // Simulated CV print / download trigger
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Curriculum Vitae</h3>
              <p className="text-xs text-sky-200">Muhammad Nurul Fajri - Software Engineer</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body Preview */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
          
          {/* Header CV Summary */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">MUHAMMAD NURUL FAJRI</h4>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold">Software Engineer | Full Stack Developer | UI/UX Designer</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                Verified Candidate
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Email: mnurulfajri2003@gmail.com | Location: Padang, Indonesia | GitHub: github.com/Muhammad-Nurul-Fajri
            </p>
          </div>

          {/* Education */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Education</h5>
            <ul className="space-y-2">
              <li className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold">Bachelor of Information Systems — UIN Imam Bonjol Padang</div>
                <div className="text-xs text-slate-500">2022 – 2026 | GPA Focus: Software Engineering & DB Systems</div>
              </li>
              <li className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold">High School Science Major — MAN 1 Padang Pariaman</div>
                <div className="text-xs text-slate-500">2019 – 2022</div>
              </li>
            </ul>
          </div>

          {/* Key Skills */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Core Technical Stack</h5>
            <div className="flex flex-wrap gap-1.5">
              {['React.js', 'Laravel', 'PHP', 'JavaScript', 'Tailwind CSS', 'MySQL', 'REST API', 'Git & GitHub', 'VS Code', 'Postman', 'Photoshop', 'Canva', 'CapCut'].map(skill => (
                <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Experience Highlights</h5>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">Founder & Web Developer — Star Fence Developer (2026 – Present)</div>
                <div className="text-xs text-slate-500">Custom web applications, UI/UX architecture, performance optimization, and client management.</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">Frontend Developer — LP2M UIN Imam Bonjol Padang (2024 – 2025)</div>
                <div className="text-xs text-slate-500">React.js frontends, API integration, and responsive data visualization dashboards.</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            Close Preview
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
