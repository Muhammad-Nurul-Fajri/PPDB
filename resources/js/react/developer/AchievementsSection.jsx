import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Crown, Sparkles } from 'lucide-react';

const achievementGroups = [
  {
    title: 'International Essay Competition',
    category: 'International Level',
    icon: Trophy,
    color: 'from-amber-400 via-amber-500 to-yellow-600',
    awards: [
      { name: 'Gold Medal', type: 'Gold', badge: '1st Place Winner' },
      { name: 'Silver Medal', type: 'Silver', badge: '2nd Place' },
      { name: 'Best Paper Award', type: 'Special', badge: 'Best Scientific Article' },
      { name: 'Favorite Poster', type: 'Special', badge: 'Public Choice' }
    ]
  },
  {
    title: 'International Business Plan Competition',
    category: 'International Level',
    icon: Crown,
    color: 'from-sky-400 via-blue-500 to-indigo-600',
    awards: [
      { name: '3rd Place', type: 'Bronze', badge: 'Global Entrepreneurship' }
    ]
  },
  {
    title: 'National Essay Competition',
    category: 'National Level',
    icon: Medal,
    color: 'from-purple-400 via-indigo-500 to-blue-600',
    awards: [
      { name: 'Gold Medal', type: 'Gold', badge: 'National Champion' },
      { name: 'Bronze Medal', type: 'Bronze', badge: '3rd Place National' }
    ]
  },
  {
    title: 'National Poster Competition',
    category: 'National Level',
    icon: Award,
    color: 'from-emerald-400 via-teal-500 to-cyan-600',
    awards: [
      { name: '2nd Place', type: 'Silver', badge: 'Runner Up Poster Design' }
    ]
  },
  {
    title: 'Sumatera Barat Business Plan Competition',
    category: 'Regional Level',
    icon: Trophy,
    color: 'from-rose-400 via-pink-500 to-purple-600',
    awards: [
      { name: '1st Place Winner', type: 'Gold', badge: 'Provincial Champion' },
      { name: 'Favorite Poster Award', type: 'Special', badge: 'Best Audience Choice' }
    ]
  },
  {
    title: 'Genre Ambassador',
    category: 'Youth & Social Leadership',
    icon: Star,
    color: 'from-amber-400 via-orange-500 to-red-500',
    awards: [
      { name: 'Genre Ambassador Finalist', type: 'Special', badge: 'Youth Leadership Ambassador' }
    ]
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Honors & Recognitions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Awards & <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Recognitions gained across international, national, and regional scientific essays, business plan contests, and leadership pageants.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementGroups.map((group, index) => {
            const HeaderIcon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${group.color} p-0.5 shadow-md group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
                        <HeaderIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {group.category}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Award Pills List */}
                  <div className="space-y-3 pt-2">
                    {group.awards.map((award, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                            award.type === 'Gold' 
                              ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30' 
                              : award.type === 'Silver'
                              ? 'bg-slate-300/30 text-slate-700 dark:text-slate-200 border border-slate-400/30'
                              : award.type === 'Bronze'
                              ? 'bg-orange-700/20 text-orange-600 dark:text-orange-400 border border-orange-600/30'
                              : 'bg-sky-500/20 text-sky-500 border border-sky-500/30'
                          }`}>
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white">
                              {award.name}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">
                              {award.badge}
                            </div>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          Awarded
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                    <Trophy className="w-3.5 h-3.5" /> Verified Excellence
                  </span>
                  <span className="text-[10px]">Scientific & Innovation</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
