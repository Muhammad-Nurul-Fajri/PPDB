import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Sparkles } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      category: 'International Essay Competition',
      awards: ['Gold Medal', 'Silver Medal', 'Best Paper', 'Favorite Poster'],
      icon: Trophy,
      scope: 'International'
    },
    {
      category: 'International Business Plan Competition',
      awards: ['3rd Place Winner'],
      icon: Medal,
      scope: 'International'
    },
    {
      category: 'National Essay Competition',
      awards: ['Gold Medal', 'Bronze Medal'],
      icon: Award,
      scope: 'National'
    },
    {
      category: 'National Poster Competition',
      awards: ['2nd Place Winner'],
      icon: Star,
      scope: 'National'
    },
    {
      category: 'Sumatera Barat Business Plan Competition',
      awards: ['1st Place Winner', 'Favorite Poster Award'],
      icon: Trophy,
      scope: 'Regional'
    },
    {
      category: 'Genre Ambassador',
      awards: ['Finalist Genre Ambassador'],
      icon: Sparkles,
      scope: 'Ambassador'
    }
  ];

  return (
    <section id="achievements" className="py-28 sm:py-32 relative overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title (40px) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">Honors</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Achievements &amp; <span className="text-blue-600">Awards</span>
          </h2>
        </div>

        {/* Timeline Style Minimal Grid */}
        <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-10">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-blue-600"></div>

                <div className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[24px] p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                      {item.scope}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Icon className="w-4 h-4 text-blue-600" />
                      {item.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.awards.map((award, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 text-xs font-semibold border border-slate-200/60 dark:border-zinc-800/60"
                      >
                        🏆 {award}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
