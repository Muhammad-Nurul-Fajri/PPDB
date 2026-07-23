import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Code2, Heart } from 'lucide-react';

export default function PhilosophySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/40">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-8 sm:p-14 shadow-2xl overflow-hidden text-center"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Quote Icon */}
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center mb-8 border border-indigo-200/60 dark:border-indigo-800/60 shadow-inner">
            <Quote className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-4">
            Development Philosophy
          </span>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-8 max-w-4xl mx-auto">
            "My mission is to transform ideas into <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">impactful digital solutions</span> by combining creativity, technology, and user-centered design."
          </blockquote>

          <div className="flex items-center justify-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
            <span className="w-8 h-0.5 bg-indigo-500 rounded-full"></span>
            <span>Muhammad Nurul Fajri</span>
            <span className="w-8 h-0.5 bg-indigo-500 rounded-full"></span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
