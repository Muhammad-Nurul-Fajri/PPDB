import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Sparkles } from 'lucide-react';

export default function CTA({ onOpenContact, onOpenCv }) {
  return (
    <section id="contact" className="py-[120px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 dark:bg-zinc-950 text-white rounded-[20px] p-8 sm:p-16 text-center border border-slate-800 dark:border-zinc-800 shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-[14px] font-semibold text-blue-400 uppercase tracking-widest block">
              Work Together
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight">
              Let's Build Something Great Together
            </h2>

            <p className="text-base sm:text-[18px] text-slate-400 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Have a web application project, software engineering opportunity, or client contract in mind? Let's connect and craft exceptional digital experiences.
            </p>

            {/* 48px Height Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="h-[48px] px-8 rounded-[20px] bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Hire Me</span>
              </button>

              <button
                onClick={onOpenCv}
                className="h-[48px] px-8 rounded-[20px] bg-white text-slate-900 hover:bg-slate-100 font-semibold text-[14px] shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download CV</span>
              </button>

              <a
                href="mailto:mnfajri.official@gmail.com"
                className="h-[48px] px-8 rounded-[20px] bg-slate-800 dark:bg-zinc-900 hover:bg-slate-700 text-white font-semibold text-[14px] border border-slate-700 dark:border-zinc-800 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email Direct</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
