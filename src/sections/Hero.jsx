import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/hero';

const techStack = [
  { name: 'React', color: 'text-sky-400' },
  { name: 'Node.js', color: 'text-emerald-500' },
  { name: 'Python', color: 'text-yellow-400' },
  { name: 'Tailwind CSS', color: 'text-cyan-400' },
  { name: 'PostgreSQL', color: 'text-blue-400' }
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left Content - Professional Typography & Motion */}
      <motion.div 
        className="flex-1 space-y-6 z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          {heroData.greeting}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
        >
          {heroData.name}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-semibold"
        >
          {heroData.title}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed text-base sm:text-lg"
        >
          {heroData.bio}
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 pt-1"
        >
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-2">Focus & Tech:</span>
          {techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm"
            >
              {tech.name}
            </span>
          ))}
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-4 pt-3"
        >
          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={heroData.buttons.primary.href} 
            className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2"
          >
            {heroData.buttons.primary.text}
            <span className="text-lg">&rarr;</span>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={heroData.buttons.secondary.href} 
            download 
            className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800/90 dark:hover:bg-slate-800 dark:text-white font-semibold rounded-xl border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
          >
            {heroData.buttons.secondary.text}
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={heroData.buttons.contact.href} 
            className="px-7 py-3.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all"
          >
            {heroData.buttons.contact.text}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Content - Professional Glassmorphic Card */}
      <motion.div 
        className="flex-1 max-w-xs w-full z-10"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div 
          className="relative group"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          {/* Animated Gradient Glow Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-700"></div>
          
          <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-3.5 shadow-2xl">
            <div className="w-full h-80 overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-950">
              <img 
                src={heroData.avatarUrl} 
                alt={heroData.name} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Status Footer */}
            <div className="mt-3.5 p-3 bg-slate-50 dark:bg-slate-800/70 rounded-xl border border-slate-200/60 dark:border-slate-700/50 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{heroData.status}</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">{heroData.statusSubtext}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
