import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Download, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactCtaSection({ onOpenContact, onOpenCv }) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 text-white rounded-3xl p-8 sm:p-16 shadow-2xl overflow-hidden text-center border border-indigo-500/30"
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Work Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Let's Build Something <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-pink-400 to-indigo-300 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind, need custom web application development, or looking for a passionate Software Engineer? Feel free to connect anytime!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Hire Me</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenCv}
                className="px-8 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
