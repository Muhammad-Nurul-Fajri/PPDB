import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Sparkles } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      category: 'International Competition',
      title: 'International Essay Competition',
      awards: ['Gold Medal', 'Silver Medal', 'Best Paper', 'Favorite Poster'],
      icon: Trophy,
      gradient: 'from-amber-400 via-amber-500 to-yellow-600',
      badge: 'International'
    },
    {
      category: 'International Business Plan',
      title: 'International Business Plan Competition',
      awards: ['3rd Place Winner'],
      icon: Medal,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      badge: 'International'
    },
    {
      category: 'National Competition',
      title: 'National Essay Competition',
      awards: ['Gold Medal', 'Bronze Medal'],
      icon: Award,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      badge: 'National'
    },
    {
      category: 'National Creative Poster',
      title: 'National Poster Competition',
      awards: ['2nd Place Winner'],
      icon: Star,
      gradient: 'from-rose-500 via-pink-500 to-purple-600',
      badge: 'National'
    },
    {
      category: 'Regional Entrepreneurship',
      title: 'Sumatera Barat Business Plan Competition',
      awards: ['1st Place Winner', 'Favorite Poster Award'],
      icon: Trophy,
      gradient: 'from-amber-500 via-orange-500 to-red-600',
      badge: 'Provincial / Regional'
    },
    {
      category: 'Ambassador & Youth Leadership',
      title: 'Genre Ambassador Finalist',
      awards: ['Finalist Genre Ambassador'],
      icon: Sparkles,
      gradient: 'from-purple-500 via-indigo-500 to-blue-600',
      badge: 'Youth Ambassador'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Awards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Competitions &amp; <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Recognition received in international, national, and regional competitions for research, business planning, poster design, and leadership.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.gradient} p-0.5 shadow-md group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-500" />
                      </div>
                    </div>

                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Medals List */}
                  <div className="space-y-2 mb-4">
                    {item.awards.map((award, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-xs font-bold text-slate-800 dark:text-slate-200"
                      >
                        <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{award}</span>
                      </div>
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
