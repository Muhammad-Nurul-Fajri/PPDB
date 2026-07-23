import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Competitions & Awards', value: '10+' },
    { label: 'Happy Clients', value: '20+' },
  ];

  return (
    <section className="py-20 bg-slate-900 dark:bg-zinc-950 text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-[24px] bg-slate-800/40 dark:bg-zinc-900/50 border border-slate-700/50 dark:border-zinc-800/80 backdrop-blur-md"
            >
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono mb-2">
                {item.value}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
