import React from 'react';
import { motion } from 'framer-motion';

export default function Statistics() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Awards & Competitions', value: '10+' },
    { label: 'Satisfied Clients', value: '20+' },
  ];

  return (
    <section className="py-[120px] bg-slate-900 dark:bg-zinc-950 text-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Four Equal Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-[20px] bg-slate-800/40 dark:bg-zinc-900/60 border border-slate-700/50 dark:border-zinc-800/80 backdrop-blur-md flex flex-col items-center justify-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono mb-2">
                {item.value}
              </div>
              <p className="text-[14px] sm:text-base font-semibold text-slate-400 dark:text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
