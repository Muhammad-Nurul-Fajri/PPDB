import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Founder & Web Developer',
      company: 'Star Fence Developer',
      period: '2026 – Present',
      location: 'Padang, Indonesia',
      status: 'Current Role',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      responsibilities: [
        'Develop custom high-performance websites for clients',
        'Analyze client business requirements & architecture design',
        'Craft modern UI/UX wireframes and web interfaces',
        'Handle server deployment, SSL configuration & DevOps',
        'Perform ongoing website maintenance & security updates'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'LP2M UIN Imam Bonjol Padang',
      period: 'Contract / Project Basis',
      location: 'Padang, Indonesia',
      status: 'Web Tech',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
      responsibilities: [
        'Engineered responsive React.js web interfaces',
        'Handled RESTful API frontend integration and state management',
        'Optimized cross-browser component rendering and page speed'
      ]
    },
    {
      role: 'Admission Staff',
      company: 'UIN Imam Bonjol Padang',
      period: 'Operational Staff',
      location: 'Padang, Indonesia',
      status: 'Media & Admissions',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      responsibilities: [
        'Executed digital promotion campaigns for new student admission',
        'Produced creative digital content, photography, and video assets',
        'Managed multi-channel student communication & inquiries'
      ]
    },
    {
      role: 'Finance Operator',
      company: 'MIN 1 Kota Padang',
      period: 'Finance & Admin',
      location: 'Padang, Indonesia',
      status: 'Administration',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      responsibilities: [
        'Managed financial administration and institution budget logs',
        'Handled tax calculations, compliance, and government reports',
        'Processed institutional data with high precision in Excel'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Glow orb */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Proven track record in web development, digital media, client delivery, and technical operations.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Badge */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300 shadow-md"></div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-900">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${exp.badgeColor}`}>
                        {exp.status}
                      </span>
                    </div>

                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-500" /> Key Responsibilities &amp; Contributions
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
