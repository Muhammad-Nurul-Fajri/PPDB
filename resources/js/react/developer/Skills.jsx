import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Palette, Wrench } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['PHP', 'Laravel', 'REST API']
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'PgAdmin']
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['Photoshop', 'Canva', 'CorelDraw', 'CapCut', 'UI/UX Design']
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['VS Code', 'Postman', 'Git', 'GitHub', 'Microsoft Office']
    }
  ];

  return (
    <section id="skills" className="py-[120px] relative overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 40px Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-[14px] font-semibold text-blue-600 uppercase tracking-widest block mb-2">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
        </div>

        {/* Categorized Technology Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[20px] p-8 shadow-sm hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-[20px] font-semibold tracking-tight text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Modern Technology Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 border border-slate-200/80 dark:border-zinc-800/80 text-[14px] font-semibold hover:border-blue-500/50 hover:text-blue-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
