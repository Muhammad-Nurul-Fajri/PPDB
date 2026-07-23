import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  School, 
  UserCheck, 
  Zap, 
  BrainCircuit, 
  Users, 
  Sparkles, 
  Layout, 
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';

const professionalSummary = [
  {
    title: 'Passionate Software Engineer',
    desc: 'Deep enthusiasm for architecting elegant web solutions and adopting modern tools.',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10 text-amber-500',
  },
  {
    title: 'Fast Learner',
    desc: 'Quickly mastering new programming frameworks, libraries, and design concepts.',
    icon: BrainCircuit,
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-500/10 text-sky-500',
  },
  {
    title: 'Problem Solver',
    desc: 'Analyzing client challenges & designing clean algorithms to solve real-world problems.',
    icon: UserCheck,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    title: 'Team Collaboration',
    desc: 'Effective communication across multidisciplinary teams, developers, and stakeholders.',
    icon: Users,
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'bg-indigo-500/10 text-indigo-500',
  },
  {
    title: 'Creative Thinker',
    desc: 'Blending software engineering logic with creative graphic design and user aesthetics.',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-500/10 text-pink-500',
  },
  {
    title: 'Responsive Web Specialist',
    desc: 'Crafting flawless user interfaces that adapt seamlessly to mobile, tablet, and desktop.',
    icon: Layout,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10 text-cyan-500',
  },
];

const educationData = [
  {
    degree: 'Bachelor of Information Systems',
    institution: 'UIN Imam Bonjol Padang',
    period: '2022 – 2026',
    location: 'Padang, Indonesia',
    details: 'Focusing on Software Engineering, Information Systems Architecture, Database Management, and UI/UX Design.',
    icon: GraduationCap,
    current: true,
  },
  {
    degree: 'High School Diploma',
    institution: 'MAN 1 Padang Pariaman',
    period: '2019 – 2022',
    location: 'Padang Pariaman, Indonesia',
    details: 'Science Major with top academic standings, actively competing in scientific essay & technology forums.',
    icon: School,
    current: false,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Dedicated software engineer driven by continuous learning, user-centered innovation, and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Timeline (Left Side) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Academic qualifications & background</p>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {educationData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative group"
                  >
                    {/* Timeline Node Dot */}
                    <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      item.current 
                        ? 'bg-sky-500 border-white dark:border-slate-900 ring-4 ring-sky-500/20' 
                        : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900'
                    }`}></div>

                    <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-md group-hover:shadow-xl transition-all">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                          {item.degree}
                        </h4>
                        {item.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-bold uppercase tracking-wider shrink-0">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {item.institution}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-sky-500" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Professional Summary Highlights (Right Side Grid) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Summary</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Core strengths and operational attributes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalSummary.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
