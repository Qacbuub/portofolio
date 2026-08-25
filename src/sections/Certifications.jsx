import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { certificationsData } from '../data/certifications';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={certificationsData.title} subtitle={certificationsData.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.items.map((cert, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-gray-200/80 dark:border-gray-800 shadow-subtle flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">{cert.title}</h3>
                <p className="text-xs font-semibold text-accent">{cert.organization}</p>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">{cert.description}</p>
              </div>
              <span className="text-xs font-mono font-medium text-muted-light dark:text-muted-dark border-t border-gray-200/60 dark:border-gray-800 pt-3 block">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
