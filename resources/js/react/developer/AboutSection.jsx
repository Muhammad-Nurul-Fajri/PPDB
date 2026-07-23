import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Award, Zap, Brain, Users, Lightbulb, Smartphone, CheckCircle
} from 'lucide-react';

export default function AboutSection() {
  const educationTimeline = [
    {
      degree: 'Bachelor of Information Systems',
      institution: 'UIN Imam Bonjol Padang',
      period: '2022 – 2026',
      icon: GraduationCap,
      description: 'Focusing on Software Engineering, Information Systems Architecture, Database Management, and Web Development.',
      badge: 'Undergraduate'
    },
    {
      degree: 'High School Diploma',
      institution: 'MAN 1 Padang Pariaman',
      period: 'Science Major',
      icon: BookOpen,
      description: 'Graduated with high proficiency in Mathematics, Physics, Logic, and Science Fundamentals.',
      badge: 'Science'
    }
  ];

  const highlights = [
    {
      title: 'Passionate Software Engineer',
      description: 'Deeply committed to writing clean, maintainable, efficient code and creating seamless digital user experiences.',
      icon: Zap,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Fast Learner',
      description: 'Adapts rapidly to modern frameworks, tools, emerging design trends, and complex domain concepts.',
      icon: Brain,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Problem Solver',
      description: 'Approaches code bugs and product requirements with analytical precision, logical thinking, and structured solutions.',
      icon: Award,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Team Collaboration',
      description: 'Communicates clearly in cross-functional teams, leveraging version control and agile principles to deliver value.',
      icon: Users,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Creative Thinker',
      description: 'Combines technical coding capabilities with UI/UX aesthetic principles to create stunning visual web interfaces.',
      icon: Lightbulb,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Responsive Web Specialist',
      description: 'Engineers fluid, touch-friendly, mobile-first Web UIs optimized for all screen sizes and devices.',
      icon: Smartphone,
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Background &amp; Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            An overview of my academic foundation, continuous growth mindset, and core professional strengths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white dark:bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Education Timeline</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-10">
              {educationTimeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 transition-transform"></div>

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                        {item.period}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.degree}
                    </h4>
                    
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
                      <Icon className="w-4 h-4 inline" />
                      {item.institution}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Professional Summary Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-indigo-500" />
              <span>Professional Summary &amp; Strengths</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-md hover:-translate-y-1 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.gradient} p-0.5 mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-800 dark:text-white" />
                      </div>
                    </div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
