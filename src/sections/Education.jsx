import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-surface-light-subtle/50 dark:bg-surface-dark-subtle/30 border-y border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={educationData.title} subtitle={educationData.subtitle} />

        <div className="max-w-3xl">
          {educationData.history.map((edu, idx) => (
            <div 
              key={idx}
              className="relative pl-8 border-l-2 border-primary/40 space-y-2 py-2"
            >
              <div className="absolute -left-[17px] top-2 p-1.5 rounded-full bg-primary text-white">
                <GraduationCap className="w-4 h-4" />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary font-semibold">
                  {edu.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-accent">
                {edu.institution}
              </p>

              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed pt-1">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
