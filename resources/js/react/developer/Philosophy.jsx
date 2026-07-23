import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-28 sm:py-32 relative overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 mx-auto flex items-center justify-center">
            <Quote className="w-6 h-6" />
          </div>

          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block">
            Developer Philosophy
          </span>

          <blockquote className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.25]">
            "My mission is to transform ideas into impactful digital solutions by combining creativity, technology, and user-centered design."
          </blockquote>

          <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400">
            — Muhammad Nurul Fajri
          </p>
        </motion.div>

      </div>
    </section>
  );
}
