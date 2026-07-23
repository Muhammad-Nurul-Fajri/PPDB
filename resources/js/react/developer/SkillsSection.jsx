import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Wrench, Terminal, Cpu, Database, Layout, Globe, 
  GitBranch, ShieldCheck, Palette, Video, FileSpreadsheet, Check
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const programmingSkills = [
    { name: 'HTML5', level: 95, category: 'programming', icon: Layout, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 90, category: 'programming', icon: Palette, color: 'from-blue-500 to-indigo-500' },
    { name: 'JavaScript (ES6+)', level: 88, category: 'programming', icon: Code2, color: 'from-amber-400 to-yellow-500' },
    { name: 'PHP', level: 85, category: 'programming', icon: Terminal, color: 'from-purple-500 to-indigo-600' },
    { name: 'React JS', level: 88, category: 'programming', icon: Cpu, color: 'from-cyan-400 to-blue-500' },
    { name: 'Laravel', level: 90, category: 'programming', icon: ShieldCheck, color: 'from-red-500 to-rose-600' },
    { name: 'MySQL', level: 85, category: 'programming', icon: Database, color: 'from-blue-600 to-cyan-600' },
    { name: 'REST API', level: 92, category: 'programming', icon: Globe, color: 'from-emerald-500 to-teal-500' },
    { name: 'Tailwind CSS', level: 95, category: 'programming', icon: Layout, color: 'from-sky-400 to-blue-600' },
    { name: 'Bootstrap', level: 90, category: 'programming', icon: Layout, color: 'from-purple-600 to-pink-600' },
    { name: 'Git', level: 88, category: 'programming', icon: GitBranch, color: 'from-orange-600 to-red-600' },
    { name: 'GitHub', level: 90, category: 'programming', icon: GitBranch, color: 'from-slate-700 to-slate-900' },
  ];

  const toolSkills = [
    { name: 'VS Code', level: 95, category: 'tools', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Postman', level: 90, category: 'tools', icon: Globe, color: 'from-orange-500 to-amber-500' },
    { name: 'PgAdmin', level: 82, category: 'tools', icon: Database, color: 'from-indigo-500 to-blue-700' },
    { name: 'Photoshop', level: 85, category: 'tools', icon: Palette, color: 'from-blue-600 to-indigo-900' },
    { name: 'Canva', level: 92, category: 'tools', icon: Palette, color: 'from-cyan-400 to-blue-500' },
    { name: 'CorelDraw', level: 80, category: 'tools', icon: Palette, color: 'from-emerald-500 to-green-600' },
    { name: 'CapCut', level: 88, category: 'tools', icon: Video, color: 'from-purple-500 to-pink-500' },
    { name: 'Microsoft Office', level: 95, category: 'tools', icon: FileSpreadsheet, color: 'from-blue-500 to-indigo-600' },
  ];

  const allSkills = [...programmingSkills, ...toolSkills];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Technical <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Skills &amp; Tools</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Technologies, frameworks, databases, and software tools I use to craft high quality solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            <button
              onClick={() => setActiveCategory('programming')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'programming'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Programming &amp; Web ({programmingSkills.length})
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'tools'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tools &amp; Design ({toolSkills.length})
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 shadow-sm group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-800 dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-200/50 dark:border-slate-800/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-sm`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
