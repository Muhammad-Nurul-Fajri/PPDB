import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Zap, Brain, Target, Users, Lightbulb, Smartphone } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'Bachelor of Information Systems',
      institution: 'UIN Imam Bonjol Padang',
      period: '2022 – 2026',
      icon: GraduationCap,
      description: 'Focusing on Software Engineering, Information Systems Architecture, Database Management, and Web Development.'
    },
    {
      degree: 'High School Diploma',
      institution: 'MAN 1 Padang Pariaman',
      period: 'Science Major',
      icon: BookOpen,
      description: 'Graduated with strong foundations in Science, Mathematics, Logic, and Science Fundamentals.'
    }
  ];

  const summaryPoints = [
    { title: 'Passionate Software Engineer', icon: Zap, text: 'Dedicated to writing clean, scalable, maintainable code and building high-performance web products.' },
    { title: 'Fast Learner', icon: Brain, text: 'Rapidly adapts to modern software frameworks, architectural patterns, and emerging technologies.' },
    { title: 'Problem Solver', icon: Target, text: 'Approaches complex software challenges with analytical rigor, structured logic, and precision.' },
    { title: 'Team Collaboration', icon: Users, text: 'Effective communicator in team environments, leveraging Git workflows and software best practices.' },
    { title: 'Creative Thinker', icon: Lightbulb, text: 'Blends technical software development capabilities with refined UI/UX design aesthetics.' },
    { title: 'Responsive Web Specialist', icon: Smartphone, text: 'Engineers fluid, mobile-first Web UIs optimized across all screen resolutions.' }
  ];

  return (
    <section id="about" className="py-[120px] relative overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 40px Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-[14px] font-semibold text-blue-600 uppercase tracking-widest block mb-2">Background &amp; Profile</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-blue-600">Me</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Summary Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[20px] p-8 shadow-sm">
              <h3 className="text-xl sm:text-[20px] font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-base sm:text-[18px] text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
                I am a Software Engineer based in Padang, West Sumatra, Indonesia. With strong technical foundations in Information Systems and Modern Web Technologies, I build production-grade web applications with an obsessive focus on performance, code quality, and intuitive user experiences.
              </p>
            </div>

            {/* Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {summaryPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[20px] p-6 shadow-sm hover:border-blue-500/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[18px] text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[20px] p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-[20px] font-semibold tracking-tight text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span>Education</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-zinc-800 space-y-8">
              {education.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-blue-600"></div>

                    <span className="text-[14px] font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 inline-block mb-2">
                      {item.period}
                    </span>

                    <h4 className="text-[18px] font-bold text-slate-900 dark:text-white mb-1">
                      {item.degree}
                    </h4>

                    <p className="text-[14px] font-semibold text-slate-700 dark:text-zinc-300 mb-2 flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-blue-500" />
                      {item.institution}
                    </p>

                    <p className="text-[14px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
