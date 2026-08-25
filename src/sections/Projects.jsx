import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/projects';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData.list
    : projectsData.list.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={projectsData.title} subtitle={projectsData.subtitle} />
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projectsData.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-subtle'
                  : 'bg-surface-light-subtle dark:bg-surface-dark-subtle text-muted-light dark:text-muted-dark hover:text-heading-light dark:hover:text-heading-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-gray-200/80 dark:border-gray-800 shadow-subtle hover:shadow-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold">{project.category}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark">{project.title}</h3>
                  <p className="text-xs font-mono text-primary font-medium">{project.slogan}</p>
                </div>
                <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-4 border-t border-gray-200/60 dark:border-gray-800 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-light-subtle dark:bg-surface-dark-subtle text-muted-light dark:text-muted-dark">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-light dark:text-muted-dark hover:text-primary"><Github className="w-4 h-4" /> Code</a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-light dark:text-muted-dark hover:text-accent"><ExternalLink className="w-4 h-4" /> Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
