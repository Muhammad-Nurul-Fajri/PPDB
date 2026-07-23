import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Mail, 
  Send, 
  Download, 
  CheckCircle2, 
  User, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Briefcase,
  ArrowRight
} from 'lucide-react';

export default function ContactCtaSection({ onOpenContact, onOpenCv, onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onToast('Thank you! Your message has been sent successfully. Fajri will get back to you shortly.');
      setFormData({ name: '', email: '', subject: 'Project Collaboration', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Top subtle bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Let's Build Something <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Amazing</span> Together
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you have a new project in mind, need a full stack web developer, or want to discuss digital transformation for your institution, feel free to reach out.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenContact}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-xl shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Hire Me</span>
                </button>

                <a
                  href="mailto:mnurulfajri2003@gmail.com"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Contact Me</span>
                </a>

                <button
                  onClick={onOpenCv}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Quick Details */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div>Padang, West Sumatra, Indonesia</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div>mnurulfajri2003@gmail.com</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Quick Form */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4 text-sky-400" /> Quick Message
                </h3>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400">Your Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400">Your Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Freelance Web Development">Freelance Web Development</option>
                    <option value="UI/UX Design Inquiry">UI/UX Design Inquiry</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
