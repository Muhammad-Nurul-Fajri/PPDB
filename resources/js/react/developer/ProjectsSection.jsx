import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 

  Eye, 
  Sparkles, 
  Layers, 
  Code2, 
  CheckCircle2, 
  X,
  Laptop,
  Server,
  Database
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';


const projects = [
  {
    id: 'sipensa',
    title: 'Student Admission Information System',
    subtitle: 'SIPENSA - PPDB Online Platform',
    category: 'Full Stack Web',
    featured: true,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    description: 'An integrated online student enrollment platform featuring automated registration workflows, multi-role dashboard (Admin & Student), document verifications, status tracking, and printable admission receipts.',
    techStack: ['Laravel', 'React JS', 'Tailwind CSS', 'MySQL', 'Vite', 'Alpine.js'],
    githubUrl: 'https://github.com/Muhammad-Nurul-Fajri/Manajemen-Sekolah',
    demoUrl: '#',
    longDescription: 'SIPENSA is engineered to modernize student registration processes. It features role-based access control (Admin, Student), file verification pipelines, real-time admission stats, report export functionalities, and an ultra-fast responsive user experience.'
  },
  {
    id: 'badminton',
    title: 'Badminton Court Rental System',
    subtitle: 'Online Booking & Scheduling Portal',
    category: 'Web System',
    featured: true,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop',
    description: 'Interactive venue booking platform enabling real-time court availability calendar, instant reservation, payment gateway integration, schedule conflict checks, and administrator booking management.',
    techStack: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL', 'Midtrans API'],
    githubUrl: 'https://github.com/Muhammad-Nurul-Fajri',
    demoUrl: '#',
    longDescription: 'Eliminates manual court booking phone calls. Provides users with interactive slot selections, automated invoice generation, payment confirmation, and automated schedule reminders.'
  },
  {
    id: 'pip-dss',
    title: 'PIP Decision Support System',
    subtitle: 'Program Indonesia Pintar Selection (SAW / AHP)',
    category: 'Decision System',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    description: 'Decision Support System using Simple Additive Weighting (SAW) / AHP algorithms to evaluate student candidate eligibility for the Program Indonesia Pintar (PIP) government assistance.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Muhammad-Nurul-Fajri',
    demoUrl: '#',
    longDescription: 'Automates student selection for educational financial aid by ranking candidates based on objective multi-criteria mathematical matrices, eliminating bias and accelerating scholarship allocation.'
  },
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder',
    subtitle: 'SaaS Platform for Developers & Creators',
    category: 'Full Stack Web',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    description: 'Dynamic portfolio generator tool enabling software engineers and creative professionals to build, customize, and publish high-performance personal portfolio websites effortlessly.',
    techStack: ['React JS', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'REST API'],
    githubUrl: 'https://github.com/Muhammad-Nurul-Fajri',
    demoUrl: '#',
    longDescription: 'Features drag-and-drop section customizers, live theme presets (Apple & Vercel inspired dark/light themes), SEO metadata automation, and exportable static HTML/React bundles.'
  },
  {
    id: 'tourism',
    title: 'Tourism Information System',
    subtitle: 'West Sumatra Destination Guide & Portal',
    category: 'Web Portal',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    description: 'Geographic and cultural tourism web portal featuring interactive maps, destination recommendations, culinary guides, event calendars, and user review submission.',
    techStack: ['Laravel', 'JavaScript', 'Leaflet JS', 'Bootstrap', 'MySQL'],
    githubUrl: 'https://github.com/Muhammad-Nurul-Fajri',
    demoUrl: '#',
    longDescription: 'Promotes tourism in West Sumatra by featuring interactive GIS location mapping, detailed travel itineraries, accommodation guides, and multi-language support.'
  },
  {
    id: 'complaint',
    title: 'Complaint Information System',
    subtitle: 'Public Service Ticketing & Feedback System',
    category: 'Web System',
    featured: false,
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&auto=format&fit=crop',
    description: 'Transparent public complaint management platform with ticket tracking, priority assignment, evidence photo uploads, admin status updates, and public response logs.',
    techStack: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/Muhammad-Nurul-Fajri',
    demoUrl: '#',
    longDescription: 'Streamlines communication between citizens and administration by providing transparent ticket tracking codes, real-time email notifications, and progress timeline metrics.'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Full Stack Web', 'Web System', 'Decision System', 'Web Portal'];

  const filteredProjects = filterCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Portfolio & Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A selection of software applications, web systems, and digital solutions I have engineered.
          </p>

          {/* Filter Categories */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Quick Details Trigger Overlay */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300"
                >
                  <span className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4 text-sky-500" />
                    Quick Details
                  </span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-mono font-medium border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>


                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <p className="text-xs text-sky-300 font-medium">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies Employed</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={selectedProject.demoUrl}
                    onClick={(e) => {
                      if (selectedProject.demoUrl === '#') {
                        e.preventDefault();
                        alert('Demo link available on request / repository preview.');
                      }
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Demo</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
