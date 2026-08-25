import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-surface-light-subtle/50 dark:bg-surface-dark-subtle/30 border-y border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={experienceData.title} subtitle={experienceData.subtitle} />
        <div className="max-w-3xl space-y-6">
          {experienceData.roles.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-gray-200/80 dark:border-gray-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">{item.role}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/10 text-accent font-semibold">{item.period}</span>
                </div>
                <p className="text-sm font-semibold text-primary">{item.organization} <span className="text-xs font-normal text-muted-light dark:text-muted-dark">({item.type})</span></p>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed pt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
