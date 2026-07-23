import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FolderCheck, Trophy, Cpu, Smile } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { label: 'Years of Experience', value: 3, suffix: '+', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
    { label: 'Projects Completed', value: 15, suffix: '+', icon: FolderCheck, color: 'from-purple-500 to-pink-600' },
    { label: 'Competitions Won', value: 10, suffix: '+', icon: Trophy, color: 'from-amber-400 to-orange-500' },
    { label: 'Technologies Mastered', value: 14, suffix: '+', icon: Cpu, color: 'from-emerald-500 to-teal-600' },
    { label: 'Satisfied Clients', value: 20, suffix: '+', icon: Smile, color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-slate-950 to-purple-950 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-500/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl flex flex-col items-center text-center group hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stat.color} p-0.5 mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent font-mono mb-1">
                  {stat.value}{stat.suffix}
                </div>

                <p className="text-xs font-semibold text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
