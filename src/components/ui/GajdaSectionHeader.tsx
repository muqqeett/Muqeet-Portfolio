import React from 'react';
import { motion } from 'framer-motion';
import { cinematicEase, editorialEase } from '../../utils/motion';

interface GajdaSectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const GajdaSectionHeader: React.FC<GajdaSectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
      
      {/* Boxed Title with Masked Line Reveal & Subtle Border Pulse */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: cinematicEase }}
        className="relative mb-5"
      >
        <div className="section-header-box tracking-widest sm:text-2xl text-lg px-8 py-3 border-2 sm:border-[2.5px] border-white relative overflow-hidden group">
          <span className="relative z-10">{title}</span>
        </div>
      </motion.div>

      {/* Expanding Decorative Center Element */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 40, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: cinematicEase }}
          className="h-[1.5px] bg-white/40"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.35, ease: cinematicEase }}
          className="w-1.5 h-1.5 bg-white rotate-45"
        />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 40, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: cinematicEase }}
          className="h-[1.5px] bg-white/40"
        />
      </div>

      {/* Staggered Subtitle Text */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: editorialEase }}
          className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
