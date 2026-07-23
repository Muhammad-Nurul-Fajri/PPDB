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
        'Develop custom websites and web applications for clients',
        'Analyze client technical requirements and produce architecture specifications',
        'UI/UX Design and wireframing for web applications',
        'Handle server deployment, SSL setup, and website maintenance'
      ]
    },
    {
      company: 'LP2M UIN Imam Bonjol Padang',
      position: 'Frontend Developer',
      period: 'Contract / Project Basis',
      location: 'Padang, Indonesia',
      responsibilities: [
        'React.js development for research and community service web modules',
        'Frontend integration with RESTful APIs',
        'Ensure responsive UI rendering across devices'
      ]
    },
    {
      company: 'UIN Imam Bonjol Padang',
      position: 'Admission Staff',
      period: 'Operational Staff',
      location: 'Padang, Indonesia',
      responsibilities: [
        'Promotion digital campaigns for new student admission',
        'Digital content creation, photography, and video assets',
        'Public communication and student inquiry support'
      ]
    },
    {
      company: 'MIN 1 Kota Padang',
      position: 'Finance Operator',
      period: 'Finance & Administration',
      location: 'Padang, Indonesia',
      responsibilities: [
        'Financial administration and budget tracking',
        'Tax management calculations and compliance',
        'Data processing and Excel reporting'
      ]
    }
  ];

  return (
    <section id="experience" className="py-[120px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 40px Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-[14px] font-semibold text-blue-600 uppercase tracking-widest block mb-2">Career Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 dark:text-white">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-6 h-6 rounded-full bg-white dark:bg-zinc-950 border-4 border-blue-600 shadow-md"></div>

              {/* Single Timeline Card (20px radius) */}
              <div className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[20px] p-8 shadow-sm hover:border-blue-500/40 transition-colors">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-zinc-900">
                  <div>
                    <h3 className="text-xl sm:text-[20px] font-semibold tracking-tight text-slate-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-[18px] font-semibold text-blue-600 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-slate-200/60 dark:border-zinc-800/60 w-fit shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-[14px] sm:text-[18px] text-slate-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
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
