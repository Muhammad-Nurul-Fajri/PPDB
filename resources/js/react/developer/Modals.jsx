import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, MapPin, Download, CheckCircle2, Sparkles } from 'lucide-react';
import { Linkedin, Github, Instagram } from './SocialIcons';

export function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Thank you for reaching out, Muhammad Nurul Fajri will get back to you shortly.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Fajri</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project or offer..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Direct Quick Links */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-around text-xs text-slate-500">
                <a href="mailto:mnfajri.official@gmail.com" className="hover:text-indigo-600 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" /> Email Direct
                </a>
                <a href="https://linkedin.com/in/muhammad-nurul-fajri" target="_blank" rel="noreferrer" className="hover:text-blue-500 flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
              CV
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Curriculum Vitae</h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Muhammad Nurul Fajri - Software Engineer</p>
            </div>
          </div>

          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Executive Summary</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Full Stack Web Developer &amp; Software Engineer with extensive experience in React.js, Laravel, PHP, MySQL, and modern UI/UX design. Founder of Star Fence Developer.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Key Competencies</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>• Web &amp; Frontend: React.js, Tailwind, JavaScript</div>
                <div>• Backend &amp; DB: Laravel, PHP, REST API, MySQL</div>
                <div>• Design &amp; UI: Photoshop, Canva, UI/UX Wireframing</div>
                <div>• DevOps &amp; Tools: Git, GitHub, Postman, VS Code</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500">PDF Format (Official CV)</span>
            <a
              href="/images/fajri.jpg" 
              download="CV_Muhammad_Nurul_Fajri.jpg"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV File</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
