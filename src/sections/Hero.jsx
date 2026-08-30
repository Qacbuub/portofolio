import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/hero';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      
      {/* Left Content - Animated */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
        >
          {heroData.greeting}
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          {heroData.name}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-blue-400 font-medium"
        >
          {heroData.title}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-slate-400 max-w-xl leading-relaxed"
        >
          {heroData.bio}
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={heroData.buttons.primary.href} 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-600/20"
          >
            {heroData.buttons.primary.text} &rarr;
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={heroData.buttons.secondary.href} 
            download 
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all"
          >
            {heroData.buttons.secondary.text}
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={heroData.buttons.contact.href} 
            className="px-6 py-3 border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium rounded-lg transition-all"
          >
            {heroData.buttons.contact.text}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Content - Animated Profile Card */}
      <motion.div 
        className="flex-1 max-w-xs w-full"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div 
          className="relative group"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-3 overflow-hidden shadow-2xl">
            <div className="w-full h-80 overflow-hidden rounded-xl border border-slate-800">
              <img 
                src={heroData.avatarUrl} 
                alt={heroData.name} 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 p-2.5 bg-slate-800/60 rounded-lg border border-slate-700/50 flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <div>
                <p className="text-[11px] text-slate-400">{heroData.status}</p>
                <p className="text-xs font-semibold text-white">{heroData.statusSubtext}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
