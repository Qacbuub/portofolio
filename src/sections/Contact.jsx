import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { contactInfo, socialLinks } from '../data/socials';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Youtube, Video } from 'lucide-react';

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Facebook: Facebook,
  Youtube: Youtube,
  Video: Video,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-surface-light-subtle/50 dark:bg-surface-dark-subtle/30 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="CONTACT ME" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
              I am open to web development opportunities, networking collaborations, or technical projects. Feel free to reach out.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-muted-light dark:text-muted-dark">Email</p>
                  <p className="text-sm font-semibold text-heading-light dark:text-heading-dark">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-muted-light dark:text-muted-dark">Phone</p>
                  <p className="text-sm font-semibold text-heading-light dark:text-heading-dark">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-muted-light dark:text-muted-dark">Location</p>
                  <p className="text-sm font-semibold text-heading-light dark:text-heading-dark">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs font-mono uppercase text-muted-light dark:text-muted-dark mb-3">Social Channels</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((item) => {
                  const Icon = iconMap[item.icon] || Mail;
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark-card border border-gray-200 dark:border-gray-800 text-muted-light dark:text-muted-dark hover:text-primary hover:border-primary/40 transition-all"
                      aria-label={item.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-gray-200/80 dark:border-gray-800 shadow-subtle space-y-4">
              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-accent text-sm font-medium">
                  Message placeholder triggered! Connect your backend (Formspree/EmailJS) to send real messages.
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-heading-light dark:text-heading-dark mb-1">Your Name</label>
                  <input required type="text" placeholder="Abdullahi Hassan" className="w-full px-4 py-2.5 rounded-xl bg-surface-light-subtle dark:bg-surface-dark-subtle border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-heading-light dark:text-heading-dark mb-1">Your Email</label>
                  <input required type="email" placeholder="example@domain.com" className="w-full px-4 py-2.5 rounded-xl bg-surface-light-subtle dark:bg-surface-dark-subtle border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-heading-light dark:text-heading-dark mb-1">Subject</label>
                <input required type="text" placeholder="Project Inquiry" className="w-full px-4 py-2.5 rounded-xl bg-surface-light-subtle dark:bg-surface-dark-subtle border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-xs font-medium text-heading-light dark:text-heading-dark mb-1">Message</label>
                <textarea required rows={4} placeholder="Your message here..." className="w-full px-4 py-2.5 rounded-xl bg-surface-light-subtle dark:bg-surface-dark-subtle border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium text-sm transition-all shadow-subtle">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
