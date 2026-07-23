import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, MapPin, Download, CheckCircle2, Sparkles, Copy, Check, MessageCircle, ExternalLink } from 'lucide-react';
import { Linkedin, Github, Instagram } from './SocialIcons';

export function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const emailAddress = 'mnfajri.official@gmail.com';
  const whatsappNumber = '6281234567890';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Muhammad Nurul Fajri, I am interested in collaborating on a web project.`
  )}`;

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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                Thank you for reaching out. Muhammad Nurul Fajri will reply to your email shortly.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Let's Build Together</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">
                Contact <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Muhammad Nurul Fajri</span>
              </h3>

              {/* Quick Connect Actions */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 text-xs font-bold transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div className="relative flex py-2 items-center mb-4">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                <span className="flex-shrink mx-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Or Send Message</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Enterprise Offer"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>

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

          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg">
              CV
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Curriculum Vitae</h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">Muhammad Nurul Fajri — Software Engineer</p>
            </div>
          </div>

          <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Executive Profile</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Full Stack Web Developer &amp; Software Engineer with extensive experience in React.js, Laravel, PHP, MySQL, and modern UI/UX design. Founder of Star Fence Developer.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Technical Summary</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>• <strong>Frontend:</strong> React.js, Tailwind CSS, JavaScript ES6+, Vite</div>
                <div>• <strong>Backend:</strong> Laravel, PHP, RESTful APIs, Node.js</div>
                <div>• <strong>Databases:</strong> MySQL, PostgreSQL, PgAdmin</div>
                <div>• <strong>Design &amp; Media:</strong> Photoshop, Canva, CorelDraw, UI/UX</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Academic Background</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Bachelor of Information Systems, UIN Imam Bonjol Padang (2022 – 2026).
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">Official Curriculum Vitae</span>
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
