import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, CheckCircle2, Star, Sparkles, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Founder & Web Developer',
    company: 'Star Fence Developer',
    period: '2026 – Present',
    badge: 'Founder / Lead',
    type: 'Self-Employed / Agency',
    color: 'from-amber-500 to-orange-500',
    accentBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    responsibilities: [
      'Develop custom websites for diverse clients and businesses',
      'Analyze client requirements & translate into scalable software designs',
      'Execute full UI/UX Design workflows from wireframes to high-fidelity prototypes',
      'Production deployment, server management, and performance optimization',
      'Ongoing website maintenance, security updates, and client support'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'LP2M UIN Imam Bonjol Padang',
    period: '2024 – 2025',
    badge: 'Contract',
    type: 'Academic Institution',
    color: 'from-sky-500 to-blue-600',
    accentBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    responsibilities: [
      'React.js Development for web applications and research dashboards',
      'Seamless Frontend Integration with REST API services & backend systems',
      'Crafting highly responsive UI across mobile, tablet, and desktop viewports',
      'Optimizing page load speed and user interaction workflows'
    ]
  },
  {
    role: 'Admission Staff',
    company: 'UIN Imam Bonjol Padang',
    period: '2023 – 2024',
    badge: 'Staff',
    type: 'University Unit',
    color: 'from-purple-500 to-indigo-600',
    accentBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    responsibilities: [
      'New Student Admission Promotion strategy and execution',
      'Creating engaging Digital Content for social platforms & web portals',
      'Professional Photography and Videography for institutional events',
      'Public Communication, information desk operations, and student consulting'
    ]
  },
  {
    role: 'Finance Operator',
    company: 'MIN 1 Kota Padang',
    period: '2022 – 2023',
    badge: 'Operator',
    type: 'Government Education Entity',
    color: 'from-emerald-500 to-teal-600',
    accentBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    responsibilities: [
      'Financial Administration and institutional budget bookkeeping',
      'Tax Management and compliance documentation for government reporting',
      'Data Processing of educational grant funds and staff payrolls',
      'Comprehensive Excel Reporting and digital archive audits'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Proven track record in software engineering, frontend development, finance administration, and digital communications.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 max-w-4xl mx-auto space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-sky-500 shadow-md group-hover:scale-125 transition-transform"></div>

              {/* Glass Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-lg group-hover:shadow-2xl transition-all">
                
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.accentBg}`}>
                        {item.badge}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-500" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                      {item.role}
                    </h3>

                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      {item.company}
                    </p>
                  </div>

                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    {item.type}
                  </div>
                </div>

                {/* Responsibilities Title */}
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Responsibilities
                </h4>

                {/* Responsibilities Bullets */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
