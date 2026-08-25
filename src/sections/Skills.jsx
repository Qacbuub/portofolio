import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={skillsData.title} subtitle={skillsData.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.categories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-gray-200/80 dark:border-gray-800 shadow-subtle space-y-4"
            >
              <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark border-b border-gray-200/60 dark:border-gray-800 pb-3">
                {category.name}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-heading-light dark:text-heading-dark">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                        skill.level === 'Comfortable'
                          ? 'bg-accent/10 text-accent border border-accent/20'
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
