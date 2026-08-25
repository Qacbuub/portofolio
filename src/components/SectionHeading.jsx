import React from 'react';

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center gap-2 mb-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-1.5 w-8 rounded-full bg-primary inline-block"></span>
        <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
          {subtitle}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading-light dark:text-heading-dark">
        {title}
      </h2>
    </div>
  );
}
