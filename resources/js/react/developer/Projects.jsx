import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { Github } from './SocialIcons';

export default function Projects() {
  const projects = [
    {
      title: 'Student Admission Information System',
      description: 'A comprehensive, modern online student admission platform with student registration, document upload verification, multi-role admin workflow, automated decision reporting, and PDF certificate export.',
      techStack: ['Laravel 11', 'React 19', 'Tailwind CSS', 'Vite', 'MySQL'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '/',
      gradient: 'from-blue-600 to-indigo-600',
      badge: 'Featured System'
    },
    {
      title: 'Badminton Court Rental System',
      description: 'Interactive sports court booking system featuring real-time schedule slot availability, automated pricing rules, booking status tracking, and analytical revenue reports.',
      techStack: ['Laravel', 'PHP', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-emerald-600 to-teal-600',
      badge: 'Web Application'
    },
    {
      title: 'PIP Decision Support System',
      description: 'Decision Support System using SAW (Simple Additive Weighting) algorithm to accurately evaluate and determine eligible students receiving Indonesia Smart Program (PIP) financial aid.',
      techStack: ['Laravel', 'SAW Algorithm', 'MySQL', 'Bootstrap', 'Chart.js'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-purple-600 to-pink-600',
      badge: 'DSS Algorithm'
    },
    {
      title: 'Modern Portfolio Builder',
      description: 'A high-performance portfolio template featuring Apple + Linear inspired aesthetic, dark/light theme persistence, Framer Motion micro-animations, glassmorphism cards, and interactive modal dialogs.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-amber-600 to-orange-600',
      badge: 'UI Portfolio'
    },
    {
      title: 'Tourism Information System',
      description: 'An interactive regional tourism hub featuring destination catalogs, location mapping with spatial coordinates, tour guide recommendations, and user reviews.',
      techStack: ['Laravel', 'Leaflet JS', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-cyan-600 to-blue-600',
      badge: 'GIS & Tourism'
    },
    {
      title: 'Complaint Information System',
      description: 'Web portal for submitting, routing, tracking, and resolving citizen/student feedback and organizational complaints with automated status updates.',
      techStack: ['Laravel', 'Blade', 'Bootstrap 5', 'MySQL'],
      github: 'https://github.com/Muhammad-Nurul-Fajri',
      demo: '#',
      gradient: 'from-rose-600 to-red-600',
      badge: 'Ticketing Portal'
    }
  ];

  return (
    <section id="projects" className="py-28 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title (40px) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
        </div>

        {/* 3-Column Responsive Grid with Equal Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                {/* 16:9 Thumbnail Ratio */}
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden p-6 flex flex-col justify-between border-b border-slate-200 dark:border-zinc-800">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px]"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10">
                      {project.badge}
                    </span>
                    <FolderGit2 className="w-5 h-5 text-white/80" />
                  </div>

                  <h3 className="relative z-10 text-xl font-bold tracking-tight text-white leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body & Description */}
                <div className="p-8">
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons (Equal Height Alignment) */}
              <div className="p-8 pt-0 grid grid-cols-2 gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-xs font-semibold border border-slate-200 dark:border-zinc-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demo}
                  target={project.demo === '/' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="h-10 inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
