import React from 'react';
import { motion } from 'framer-motion';
import { Users, Megaphone, Palette, Share2, MessageSquare, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

const organizations = [
  {
    name: 'Faculty Media Team',
    role: 'Head of Media & Digital Branding',
    period: '2023 – 2025',
    institution: 'UIN Imam Bonjol Padang',
    description: 'Spearheaded the faculty graphic design team, video production, website content management, and digital brand presence.',
    contributions: [
      { title: 'Digital Branding', icon: Palette },
      { title: 'Content Creation', icon: Megaphone },
      { title: 'Graphic Design', icon: Palette },
      { title: 'Social Media Management', icon: Share2 },
    ]
  },
  {
    name: 'Student Executive Board (BEM)',
    role: 'Department of Communication & Information',
    period: '2023 – 2024',
    institution: 'Faculty Level BEM',
    description: 'Managed public information dissemination, press releases, event graphic design, and leadership student forums.',
    contributions: [
      { title: 'Public Communication', icon: MessageSquare },
      { title: 'Leadership', icon: ShieldCheck },
      { title: 'Graphic Design', icon: Palette },
      { title: 'Social Media Management', icon: Share2 },
    ]
  },
  {
    name: 'Genre Ambassador',
    role: 'Finalist & Youth Representative',
    period: '2023 – 2024',
    institution: 'BKKBN / Youth Movement',
    description: 'Promoted youth development, healthy lifestyle campaigns, public speaking, and community outreach programs.',
    contributions: [
      { title: 'Public Communication', icon: MessageSquare },
      { title: 'Leadership', icon: ShieldCheck },
      { title: 'Digital Branding', icon: Palette },
      { title: 'Content Creation', icon: Megaphone },
    ]
  }
];

export default function OrganizationSection() {
  return (
    <section id="organization" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
            Leadership & Community
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Organization <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Active involvement in campus media, executive boards, and youth ambassador programs.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Org header badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] font-bold">
                    {org.period}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors mb-1">
                  {org.name}
                </h3>

                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
                  {org.role}
                </p>

                <p className="text-[11px] text-slate-400 font-medium mb-4">
                  {org.institution}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {org.description}
                </p>

                {/* Highlighted Contributions */}
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Contributions
                </h4>

                <div className="grid grid-cols-2 gap-2">
                  {org.contributions.map((c, i) => {
                    const IconC = c.icon;
                    return (
                      <div
                        key={i}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[10px] font-medium flex items-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        <IconC className="w-3 h-3 text-purple-500 shrink-0" />
                        <span className="truncate">{c.title}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Active Impact Contribution</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
