import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Facebook, Youtube, Video } from 'lucide-react';
import { heroData } from '../data/hero';
import { socialLinks } from '../data/socials';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Facebook: Facebook,
  Youtube: Youtube,
  Video: Video,
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {heroData.greeting}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-heading-light dark:text-heading-dark">
              {heroData.name}
            </h1>

            <div className="flex flex-wrap gap-2 text-lg sm:text-xl font-medium text-primary">
              {heroData.titles.map((title, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  {title}
                  {idx < heroData.titles.length - 1 && <span className="text-muted-light dark:text-muted-dark opacity-40">•</span>}
                </span>
              ))}
            </div>

            <p className="text-base sm:text-lg text-muted-light dark:text-muted-dark leading-relaxed max-w-2xl">
              {heroData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={heroData.buttons.primary.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium transition-all shadow-subtle hover:shadow-card"
              >
                {heroData.buttons.primary.text}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={heroData.buttons.secondary.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-light-subtle dark:bg-surface-dark-subtle border border-gray-200 dark:border-gray-800 text-heading-light dark:text-heading-dark hover:border-primary transition-all font-medium"
              >
                <Download className="w-4 h-4" />
                {heroData.buttons.secondary.text}
              </a>

              <a
                href={heroData.buttons.tertiary.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-surface-light-subtle dark:hover:bg-surface-dark-subtle text-muted-light dark:text-muted-dark hover:text-heading-light dark:hover:text-heading-dark font-medium transition-all"
              >
                <Mail className="w-4 h-4" />
                {heroData.buttons.tertiary.text}
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-light dark:text-muted-dark">Connect:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = iconMap[item.icon] || Mail;
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface-light-subtle dark:bg-surface-dark-card border border-gray-200/50 dark:border-gray-800 text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary hover:border-primary/50 transition-all"
                      aria-label={item.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Abstract Tech Graphic / Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-transparent p-8 border border-primary/20 flex flex-col justify-between shadow-card">
              <div className="space-y-3 font-mono text-xs text-muted-light dark:text-muted-dark">
                <p className="text-primary font-bold">// STUDENT_PROFILE.js</p>
                <p><span className="text-accent">const</span> student = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-500">"Abdullahi Hassan"</span>,</p>
                <p className="pl-4">univ: <span className="text-emerald-500">"Somali National Univ"</span>,</p>
                <p className="pl-4">degree: <span className="text-emerald-500">"BSc. Computer Science"</span>,</p>
                <p className="pl-4">focus: [<span className="text-emerald-500">"Web"</span>, <span className="text-emerald-500">"Networking"</span>],</p>
                <p className="pl-4">status: <span className="text-amber-500">"Active Learner"</span></p>
                <p>&#125;;</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark-card border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <span className="w-3 h-3 rounded-full bg-accent block animate-ping"></span>
                </div>
                <div>
                  <p className="text-xs font-bold text-heading-light dark:text-heading-dark">Open to Collaboration</p>
                  <p className="text-[11px] text-muted-light dark:text-muted-dark">Web Projects & Networking</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
