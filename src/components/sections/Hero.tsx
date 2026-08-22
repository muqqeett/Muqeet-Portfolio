import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { cinematicEase, editorialEase } from '../../utils/motion';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  // Scroll-Driven Hero Transformation & Multi-Layer Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 65]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  const bgGlowY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  // Subtle 3D Perspective on Portrait (Desktop Only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 220,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 220,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="hero"
      ref={sectionRef}
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 px-5 sm:px-8 overflow-hidden"
    >
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: bgGlowY }}
        className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-white/[0.025] rounded-full blur-[110px] pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hierarchical Art-Directed Entrance */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* 1. Live Availability Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: editorialEase }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* 2. Top Greeting */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: editorialEase }}
              className="text-xs sm:text-sm font-display font-bold uppercase tracking-widest text-slate-400 mb-2 block"
            >
              {personalInfo.shortGreeting}
            </motion.span>

            {/* 3. Main Heading with Line Mask Reveal + Scroll Parallax */}
            <motion.div 
              style={{ y: headingY, opacity: headingOpacity }}
              className="overflow-hidden mb-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.3, ease: cinematicEase }}
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-[1.04]"
              >
                {personalInfo.name}
              </motion.h1>
            </motion.div>

            {/* Supporting Content Group with Layered Scroll Exit */}
            <motion.div style={{ y: contentY, opacity: contentOpacity }} className="w-full">
              {/* 4. Professional Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42, ease: editorialEase }}
                className="text-xs sm:text-sm font-display font-bold tracking-widest uppercase text-slate-400 mb-6"
              >
                {personalInfo.role}
              </motion.p>

              {/* 5. Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: editorialEase }}
                className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
              >
                {personalInfo.headline}
              </motion.p>

              {/* 6. Magnetic Tactile CTAs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.58, ease: cinematicEase }}
                className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
              >
                <MagneticButton strength={8}>
                  <a
                    href="#contact"
                    className="gajda-btn-primary px-8 py-3.5 text-xs font-display font-black uppercase tracking-widest cursor-pointer text-center block inline-flex items-center gap-2 group"
                  >
                    <span>CONTACT ME</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={8}>
                  <a
                    href="#portfolio"
                    className="gajda-btn-secondary px-8 py-3.5 text-xs font-display font-bold uppercase tracking-widest cursor-pointer text-center block"
                  >
                    SEE MY WORK
                  </a>
                </MagneticButton>
              </motion.div>

              {/* 7. Social Links Bar */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.68, ease: editorialEase }}
                className="flex items-center gap-4 pt-4 border-t border-white/10 w-full"
              >
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                  CONNECT:
                </span>
                
                <MagneticButton strength={6}>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-white/15 hover:border-white text-slate-300 hover:text-white transition-all duration-200 block cursor-pointer"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={6}>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-white/15 hover:border-white text-slate-300 hover:text-white transition-all duration-200 block cursor-pointer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={6}>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 border border-white/15 hover:border-white text-slate-300 hover:text-white transition-all duration-200 block cursor-pointer"
                    aria-label="Email Inquiries"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Hero Portrait with 3D Depth & Scroll Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.62, ease: cinematicEase }}
            style={{ y: portraitY, scale: portraitScale, opacity: portraitOpacity }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div 
              style={{ perspective: 1200 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative max-w-[340px] sm:max-w-[380px] w-full group"
            >
              <motion.div
                style={{
                  rotateX: isTouch ? 0 : rotateX,
                  rotateY: isTouch ? 0 : rotateY,
                }}
                className="relative"
              >
                {/* Subtle Backlight Glow */}
                <div className="absolute inset-0 bg-white/[0.04] rounded-3xl blur-2xl -z-10 scale-95 transition-transform duration-700 group-hover:scale-105" />

                <div className="overflow-hidden rounded-2xl bg-[#060709] transition-all duration-500 shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Muqeet"
                    className="w-full h-auto aspect-[4/5] object-cover object-top contrast-[105%] transition-all duration-700 rounded-2xl group-hover:scale-[1.03]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
