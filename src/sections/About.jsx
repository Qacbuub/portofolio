import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/about';

export default function About() {
  return (
    <section id="about" className="py-20 bg-surface-light-subtle/50 dark:bg-surface-dark-subtle/30 border-y border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={aboutData.title} subtitle={aboutData.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-muted-light dark:text-muted-dark leading-relaxed">
            {aboutData.bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark-card border border-gray-200 dark:border-gray-800"
              >
                <p className="text-xs font-mono uppercase text-primary font-semibold mb-1">{item.title}</p>
                <p className="text-sm font-semibold text-heading-light dark:text-heading-dark">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
