import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function Organizations() {
  const orgs = [
    {
      name: 'Faculty Media Team',
      role: 'Head of Media & Digital Branding',
      contributions: ['Digital Branding', 'Content Creation', 'Graphic Design', 'Social Media Management']
    },
    {
      name: 'Student Executive Board (BEM)',
      role: 'Public Relations & Student Affairs Staff',
      contributions: ['Public Communication', 'Leadership', 'Social Media Management', 'Content Creation']
    },
    {
      name: 'Genre Ambassador Organization',
      role: 'Youth Representative & Ambassador',
      contributions: ['Leadership', 'Public Communication', 'Digital Branding']
    }
  ];

  return (
    <section id="organization" className="py-[120px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 40px Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-[14px] font-semibold text-blue-600 uppercase tracking-widest block mb-2">Leadership</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 dark:text-white">
            Organization <span className="text-blue-600">Experience</span>
          </h2>
        </div>

        {/* Simple Timeline — NO Large Cards */}
        <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-8">
          {orgs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-blue-600"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-[20px] font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  {item.name}
                </h3>
                <span className="text-[14px] font-semibold text-slate-500 dark:text-zinc-400">
                  {item.role}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.contributions.map((c, i) => (
                  <span
                    key={i}
                    className="text-[14px] font-semibold px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50"
                  >
                    {c}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
