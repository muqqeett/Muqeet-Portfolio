import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { editorialEase } from '../../utils/motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 py-14 px-5 sm:px-8 text-center relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Back to top with Magnetic attraction */}
        <MagneticButton strength={10}>
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center gap-1.5 group cursor-pointer text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-[9px] font-mono uppercase tracking-widest mt-1">BACK TO TOP</span>
          </button>
        </MagneticButton>

        {/* Social Connectors with Magnetic attraction */}
        <div className="flex items-center gap-3 pt-2">
          <MagneticButton strength={6}>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition-colors block cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={6}>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition-colors block cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={6}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition-colors block cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </MagneticButton>
        </div>

        {/* Monogram / Name */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: editorialEase }}
          className="text-xs font-display font-bold uppercase tracking-widest text-slate-400"
        >
          © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
        </motion.div>

      </div>
    </footer>
  );
};
