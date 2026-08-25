import React from 'react';
import { navLinks } from '../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-surface-light dark:bg-surface-dark-card border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="text-lg font-bold text-heading-light dark:text-heading-dark">
            Abdullahi<span className="text-primary">.dev</span>
          </a>
          <p className="text-xs text-muted-light dark:text-muted-dark mt-1">
            Computer Science Student | Web Developer | IT Enthusiast
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-light dark:text-muted-dark">
          {navLinks.slice(0, 6).map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-light dark:text-muted-dark font-mono">
          © {currentYear} Abdullahi Hassan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
