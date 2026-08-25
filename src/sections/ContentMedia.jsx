import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { contentData } from '../data/content';
import { PlaySquare } from 'lucide-react';

export default function ContentMedia() {
  return (
    <section id="content" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={contentData.title} subtitle={contentData.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contentData.brands.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-gray-200/80 dark:border-gray-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <PlaySquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark">{item.name}</h3>
                  <p className="text-xs font-mono text-primary font-medium">{item.slogan}</p>
                </div>
              </div>
              <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">{item.description}</p>
              <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-accent/10 text-accent">{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
