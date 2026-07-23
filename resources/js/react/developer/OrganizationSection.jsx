import React from 'react';
import { motion } from 'framer-motion';
import { Users, Megaphone, Palette, Share2, MessageSquare, Award } from 'lucide-react';

export default function OrganizationSection() {
  const organizations = [
    {
      name: 'Faculty Media Team',
      role: 'Head of Media & Digital Branding',
      period: 'University Level',
      contributions: ['Digital Branding', 'Content Creation', 'Graphic Design', 'Social Media Management'],
      description: 'Led the digital media team responsible for official faculty publication, visual branding, digital posters, event coverage, and social media engagement strategy.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Student Executive Board (BEM)',
      role: 'Department & Public Relations Staff',
      period: 'Student Organization',
      contributions: ['Public Communication', 'Leadership', 'Social Media Management', 'Content Creation'],
      description: 'Actively contributed to student organization executive initiatives, coordinating student activities, leading public communications, and managing public releases.',
      gradient: 'from-purple-600 to-indigo-500'
    },
    {
      name: 'Genre Ambassador Organization',
      role: 'Ambassador & Youth Representative',
      period: 'Regional & University Level',
      contributions: ['Leadership', 'Public Communication', 'Digital Branding'],
      description: 'Represented youth leadership programs promoting family planning, healthy youth lifestyles, public speaking, and youth empowerment initiatives.',
      gradient: 'from-pink-600 to-rose-500'
    }
  ];

  return (
    <section id="organization" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Community &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Organization <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Leadership roles and creative contributions within university organizations and youth ambassador groups.
          </p>
        </div>

        {/* Organization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${org.gradient} p-0.5 mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>

                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 block mb-1">
                  {org.period}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {org.name}
                </h3>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">
                  {org.role}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {org.description}
                </p>
              </div>

              {/* Contributions Badges */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-900">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Contributions &amp; Impact
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {org.contributions.map((c, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50"
                    >
                      {c}
                    </span>
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
