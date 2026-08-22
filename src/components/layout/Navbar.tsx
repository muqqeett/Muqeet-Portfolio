import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo, navItems } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      // Fast, smooth scroll direction detection
      if (currentScrollY > 180 && currentScrollY > lastScrollY && !mobileOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      // If in Hero section (top of page), clear active section underline
      if (currentScrollY < 300) {
        setActiveSection('');
        return;
      }

      // Precise Active section tracking
      const sections = ['about', 'skills', 'portfolio', 'education', 'contact'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element is in active viewport zone
          if (rect.top <= 200 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set accurate state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -90, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className={`transition-all duration-300 ${
        scrolled ? 'bg-[#060709]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Profile Photo Logo with Magnetic Response */}
          <MagneticButton strength={6}>
            <a href="#" className="flex items-center gap-3 group cursor-pointer" aria-label="Home">
              <div className="w-9 h-9 border-2 border-white overflow-hidden flex items-center justify-center bg-[#0e0f14] shadow-md transition-all duration-200 group-hover:border-white">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Muqeet"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300 contrast-[105%]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-white group-hover:text-slate-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">
                  PORTFOLIO
                </span>
              </div>
            </a>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[11px] font-display font-bold uppercase tracking-widest transition-colors relative py-1.5 group cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  
                  {/* Clean, Non-Buggy Active & Hover Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-all duration-300 ease-out origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'
                    }`}
                  />
                </a>
              );
            })}

            <div className="h-4 w-[1px] bg-white/20" />

            <div className="flex items-center gap-2">
              <MagneticButton strength={6}>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={6}>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors block cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>

            <MagneticButton strength={8}>
              <a
                href="#contact"
                className="px-4 py-2 border border-white text-[11px] font-display font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-200 inline-flex items-center gap-1.5 group cursor-pointer"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:text-slate-300 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#08090d] border-b border-white/15 px-6 py-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-xs font-display font-bold uppercase tracking-widest py-1.5 flex items-center justify-between transition-colors ${
                      isActive ? 'text-white font-extrabold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 text-slate-400">
                <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white p-1" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white p-1" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2 border border-white text-xs font-display font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
