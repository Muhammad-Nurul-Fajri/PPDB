import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Star Fence Developer',
      position: 'Founder & Web Developer',
      period: '2026 – Present',
      location: 'Padang, Indonesia',
      responsibilities: [
        'Develop high-performance custom websites and web applications for enterprise clients',
        'Analyze client technical requirements and architect modern system solutions',
        'Design UI/UX prototypes and modern interfaces with obsessive focus on usability',
        'Manage end-to-end server deployment, SSL configuration, and website maintenance'
      ]
    },
    {
      company: 'LP2M UIN Imam Bonjol Padang',
      position: 'Frontend Developer',
      period: 'Contract / Project Basis',
      location: 'Padang, Indonesia',
      responsibilities: [
        'Engineered responsive React.js web interfaces for institutional research modules',
        'Handled RESTful API frontend integration and state management',
        'Optimized cross-browser component rendering and mobile responsiveness'
      ]
    },
    {
      company: 'UIN Imam Bonjol Padang',
      position: 'Admission Staff',
      period: 'Operational Staff',
      location: 'Padang, Indonesia',
      responsibilities: [
        'Executed digital promotion campaigns for new student admission intake',
        'Produced promotional photography, digital video content, and graphic designs',
        'Managed student communications and public inquiry channels'
      ]
    },
    {
      company: 'MIN 1 Kota Padang',
      position: 'Finance Operator',
      period: 'Finance & Administration',
      location: 'Padang, Indonesia',
      responsibilities: [
        'Managed financial administration and institution budget logging',
        'Handled tax calculations, compliance, and government reporting',
        'Processed institutional data and administrative reports using Excel'
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title (40px) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">Career Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
        </div>

        {/* Single Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-6 h-6 rounded-full bg-white dark:bg-zinc-950 border-4 border-blue-600 shadow-md"></div>

              {/* Single Premium Timeline Card (24px radius) */}
              <div className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[24px] p-8 shadow-sm hover:border-blue-500/40 transition-colors">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-zinc-900">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-base font-semibold text-blue-600 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-slate-200/60 dark:border-zinc-800/60 w-fit shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
