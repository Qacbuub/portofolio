import React from 'react';
import { heroData } from '../data/hero';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
          {heroData.greeting}
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          {heroData.name}
        </h1>
        <p className="text-lg text-blue-400 font-medium">
          {heroData.title}
        </p>
        <p className="text-slate-400 max-w-xl leading-relaxed">
          {heroData.bio}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a href={heroData.buttons.primary.href} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-600/20">
            {heroData.buttons.primary.text} &rarr;
          </a>
          <a href={heroData.buttons.secondary.href} download className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all">
            {heroData.buttons.secondary.text}
          </a>
          <a href={heroData.buttons.contact.href} className="px-6 py-3 border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium rounded-lg transition-all">
            {heroData.buttons.contact.text}
          </a>
        </div>
      </div>

      {/* Right Content - Compact Profile Image Card */}
      <div className="flex-1 max-w-xs w-full">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-3 overflow-hidden shadow-2xl">
            <div className="w-full h-80 overflow-hidden rounded-xl border border-slate-800">
              <img 
                src={heroData.avatarUrl} 
                alt={heroData.name} 
                className="w-full h-full object-cover object-top"
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
        </div>
      </div>
    </section>
  );
}
