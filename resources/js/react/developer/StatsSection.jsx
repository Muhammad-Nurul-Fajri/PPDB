import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, FolderCheck, Trophy, Cpu, Smile } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', target: 4, suffix: '+', icon: Calendar, color: 'text-sky-500', bg: 'bg-sky-500/10' },
  { label: 'Projects Completed', target: 25, suffix: '+', icon: FolderCheck, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Competitions Won', target: 12, suffix: '+', icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { label: 'Technologies Mastered', target: 16, suffix: '+', icon: Cpu, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { label: 'Satisfied Clients', target: 20, suffix: '+', icon: Smile, color: 'text-pink-500', bg: 'bg-pink-500/10' },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight font-mono">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white shadow-2xl">
      
      {/* Decorative ambient pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          {stats.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex flex-col items-center justify-center space-y-3 group hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl text-white">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </div>

                <div className="text-xs sm:text-sm font-medium text-sky-100 max-w-[140px] leading-snug">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
