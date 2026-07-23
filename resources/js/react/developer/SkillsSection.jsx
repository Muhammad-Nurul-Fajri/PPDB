import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Layout, 
  Globe, 
  Layers, 
  Image as ImageIcon, 
  FileSpreadsheet, 
  Video, 
  Palette, 
  GitBranch
} from 'lucide-react';

const programmingSkills = [
  { name: 'HTML5', percentage: 95, category: 'Frontend', color: 'from-orange-500 to-amber-500', icon: Code2 },
  { name: 'CSS3', percentage: 92, category: 'Frontend', color: 'from-blue-500 to-sky-500', icon: Layout },
  { name: 'JavaScript', percentage: 90, category: 'Language', color: 'from-yellow-400 to-amber-500', icon: Terminal },
  { name: 'PHP', percentage: 88, category: 'Backend', color: 'from-indigo-500 to-purple-600', icon: Globe },
  { name: 'React JS', percentage: 92, category: 'Framework', color: 'from-sky-400 to-cyan-500', icon: Code2 },
  { name: 'Laravel', percentage: 90, category: 'Framework', color: 'from-red-500 to-rose-600', icon: Layers },
  { name: 'MySQL', percentage: 85, category: 'Database', color: 'from-blue-600 to-indigo-700', icon: Database },
  { name: 'REST API', percentage: 90, category: 'Architecture', color: 'from-emerald-500 to-teal-600', icon: Globe },
  { name: 'Tailwind CSS', percentage: 95, category: 'Styling', color: 'from-cyan-400 to-blue-500', icon: Layout },
  { name: 'Bootstrap', percentage: 88, category: 'Styling', color: 'from-purple-600 to-indigo-600', icon: Layout },
  { name: 'Git', percentage: 90, category: 'VCS', color: 'from-orange-600 to-red-600', icon: GitBranch },
  { name: 'GitHub', percentage: 92, category: 'DevOps', color: 'from-slate-700 to-slate-900', icon: GitBranch },
];

const toolSkills = [
  { name: 'VS Code', percentage: 95, category: 'IDE', color: 'from-sky-500 to-blue-600', icon: Terminal },
  { name: 'Postman', percentage: 90, category: 'API Testing', color: 'from-orange-500 to-amber-600', icon: Globe },
  { name: 'PgAdmin', percentage: 82, category: 'DB Manager', color: 'from-blue-500 to-indigo-600', icon: Database },
  { name: 'Photoshop', percentage: 88, category: 'Graphic Design', color: 'from-blue-700 to-indigo-900', icon: ImageIcon },
  { name: 'Canva', percentage: 92, category: 'Design & Brand', color: 'from-teal-400 to-cyan-500', icon: Palette },
  { name: 'CorelDraw', percentage: 85, category: 'Vector Art', color: 'from-emerald-600 to-green-700', icon: Palette },
  { name: 'CapCut', percentage: 90, category: 'Video Editing', color: 'from-rose-500 to-pink-600', icon: Video },
  { name: 'Microsoft Office', percentage: 95, category: 'Productivity', color: 'from-amber-600 to-orange-600', icon: FileSpreadsheet },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProgramming = activeTab === 'tools' ? [] : programmingSkills;
  const filteredTools = activeTab === 'programming' ? [] : toolSkills;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Technical Competence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Skills & <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Technologies and software tools I use daily to build modern digital products.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Skills
              </button>
              <button
                onClick={() => setActiveTab('programming')}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'programming'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Programming
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'tools'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Software & Tools
              </button>
            </div>
          </div>

        </div>

        <div className="space-y-12">
          
          {/* Programming Block */}
          {filteredProgramming.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Programming & Development</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Languages, frameworks, databases, and APIs</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProgramming.map((skill, index) => {
                  const IconComp = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 shadow-sm group-hover:scale-110 transition-transform`}>
                            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                              <IconComp className="w-4 h-4" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tools Block */}
          {filteredTools.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Design & Software Tools</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">IDE, graphics, video, and productivity suites</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTools.map((skill, index) => {
                  const IconComp = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 shadow-sm group-hover:scale-110 transition-transform`}>
                            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                              <IconComp className="w-4 h-4" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
