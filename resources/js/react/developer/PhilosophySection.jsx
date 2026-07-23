import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Code2, Compass } from 'lucide-react';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-28 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800 p-8 sm:p-14 shadow-2xl text-center space-y-8 overflow-hidden group"
        >
          {/* Subtle Ambient Glow behind card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-80"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Development Philosophy</span>
          </div>

          {/* Quote Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-lg shadow-sky-500/20 group-hover:rotate-6 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-sky-400">
              <Quote className="w-8 h-8" />
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-relaxed tracking-tight max-w-3xl mx-auto italic font-sans">
            "My mission is to transform ideas into <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent not-italic">impactful digital solutions</span> by combining creativity, technology, and user-centered design."
          </blockquote>

          {/* Author Tag */}
          <div className="pt-4 flex flex-col items-center justify-center space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              Muhammad Nurul Fajri
            </h4>
            <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
              Software Engineer & Founder at Star Fence Developer
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
