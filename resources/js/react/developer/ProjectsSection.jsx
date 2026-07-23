import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Layers, ArrowUpRight, Sparkles, Search, Filter } from 'lucide-react';
import { Github } from './SocialIcons';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Student Admission Information System',
      subtitle: 'PPDB & School Management System',
      category: 'web',
      description: 'A comprehensive, modern online student admission platform with student registration, document upload verification, multi-role admin workflow, automated decision reporting, and PDF certificate export.',
      techStack: ['Laravel 11', 'React 19', 'Tailwind CSS', 'Vite', 'MySQL'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '/',
      gradient: 'from-blue-600 to-indigo-600',
      badge: 'Featured System',
      imageBg: 'bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900'
    },
    {
      id: 2,
      title: 'Badminton Court Rental System',
      subtitle: 'Court Booking & Management Platform',
      category: 'web',
      description: 'Interactive sports court booking system featuring real-time schedule slot availability, automated pricing rules, booking status tracking, and analytical revenue reports.',
      techStack: ['Laravel', 'PHP', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-emerald-500 to-teal-600',
      badge: 'Web Application',
      imageBg: 'bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950'
    },
    {
      id: 3,
      title: 'PIP Decision Support System',
      subtitle: 'Smart Student Financial Assistance Decision System',
      category: 'dss',
      description: 'Decision Support System using SAW (Simple Additive Weighting) algorithm to accurately evaluate and determine eligible students receiving Indonesia Smart Program (PIP) financial aid.',
      techStack: ['Laravel', 'SAW Algorithm', 'MySQL', 'Bootstrap', 'Chart.js'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-purple-600 to-pink-600',
      badge: 'DSS Algorithm',
      imageBg: 'bg-gradient-to-br from-purple-900 via-slate-900 to-pink-950'
    },
    {
      id: 4,
      title: 'Modern Portfolio Builder',
      subtitle: 'Interactive Developer Portfolio Architecture',
      category: 'portfolio',
      description: 'A high-performance portfolio template featuring Apple + Linear inspired aesthetic, dark/light theme persistence, Framer Motion micro-animations, glassmorphism cards, and interactive modal dialogs.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-amber-500 to-orange-600',
      badge: 'UI Portfolio',
      imageBg: 'bg-gradient-to-br from-amber-950 via-slate-900 to-orange-950'
    },
    {
      id: 5,
      title: 'Tourism Information System',
      subtitle: 'Regional Travel & Destination Explorer',
      category: 'web',
      description: 'An interactive regional tourism hub featuring destination catalogs, location mapping with spatial coordinates, tour guide recommendations, and user reviews.',
      techStack: ['Laravel', 'Leaflet JS', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-cyan-500 to-blue-600',
      badge: 'GIS & Tourism',
      imageBg: 'bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950'
    },
    {
      id: 6,
      title: 'Complaint Information System',
      subtitle: 'Public & Organization Ticketing Portal',
      category: 'web',
      description: 'Web portal for submitting, routing, tracking, and resolving citizen/student feedback and organizational complaints with automated status updates.',
      techStack: ['Laravel', 'Blade', 'Bootstrap 5', 'MySQL'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-rose-500 to-red-600',
      badge: 'Ticketing Portal',
      imageBg: 'bg-gradient-to-br from-rose-950 via-slate-900 to-red-950'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Crafted Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A showcase of web applications, decision systems, and digital platforms built with modern technology.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md flex-wrap justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'web'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Web Systems
            </button>
            <button
              onClick={() => setActiveCategory('dss')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'dss'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Decision Systems
            </button>
            <button
              onClick={() => setActiveCategory('portfolio')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'portfolio'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              UI &amp; Portfolios
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col group"
              >
                
                {/* Project Card Header Visual Preview */}
                <div className={`relative h-48 sm:h-52 ${project.imageBg} p-6 flex flex-col justify-between overflow-hidden border-b border-slate-200 dark:border-slate-800`}>
                  
                  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px] pointer-events-none"></div>
                  <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-500`}></div>

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-900/80 text-white border border-white/20 backdrop-blur-md">
                      {project.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:scale-110 transition-transform">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </div>
                  </div>

                  {/* Subtitle & Title Preview */}
                  <div className="relative z-10 mt-auto">
                    <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: GitHub & Live Demo */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-900 grid grid-cols-2 gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-800 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={project.demo}
                      target={project.demo === '/' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all hover:shadow-indigo-500/25"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-sm font-semibold">No projects matching your search criteria.</p>
          </div>
        )}

      </div>
    </section>
  );
}
