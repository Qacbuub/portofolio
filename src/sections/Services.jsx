import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { servicesData } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-surface-light-subtle/50 dark:bg-surface-dark-subtle/30 border-y border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={servicesData.title} subtitle={servicesData.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.items.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-gray-200/80 dark:border-gray-800 space-y-3 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">{item.title}</h3>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed pt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
