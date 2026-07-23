import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Send, Sparkles, User, MessageSquare, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, onToast }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hire Developer',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onToast('Message sent! Muhammad Nurul Fajri will contact you via email.');
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-sky-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Muhammad Nurul Fajri</h3>
              <p className="text-xs text-sky-200">Software Engineer & UI/UX Specialist</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          <div className="space-y-1">
            <label className="font-semibold text-slate-700 dark:text-slate-300">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-700 dark:text-slate-300">Inquiry Type</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            >
              <option value="Hire Developer">Hire Full Stack / React / Laravel Developer</option>
              <option value="Web App Project">Web App / Custom System Development</option>
              <option value="UI/UX Design">UI/UX Design Services</option>
              <option value="Consultation">Tech Consultation</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-700 dark:text-slate-300">Project Details / Message</label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your project, timeline, and requirements..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 resize-none"
            ></textarea>
          </div>

          {/* Direct Contacts Bar */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
            <span>Direct Email: mnurulfajri2003@gmail.com</span>
            <div className="flex gap-2 text-slate-600 dark:text-slate-300">
              <a href="https://linkedin.com/in/muhammad-nurul-fajri" target="_blank" rel="noreferrer"><Linkedin className="w-3.5 h-3.5 hover:text-sky-500" /></a>
              <a href="https://github.com/Muhammad-Nurul-Fajri" target="_blank" rel="noreferrer"><Github className="w-3.5 h-3.5 hover:text-sky-500" /></a>
              <a href="https://instagram.com/fajri_mnf" target="_blank" rel="noreferrer"><Instagram className="w-3.5 h-3.5 hover:text-pink-500" /></a>
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-md"
            >
              {submitting ? 'Sending...' : 'Send Direct Inquiry'}
            </button>
          </div>

        </form>

      </motion.div>
    </div>
  );
}
