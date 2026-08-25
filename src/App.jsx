import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Services from './sections/Services';
import ContentMedia from './sections/ContentMedia';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-body-light dark:bg-body-dark text-heading-light dark:text-heading-dark selection:bg-primary selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Experience />
        <Projects />
        <Services />
        <ContentMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
