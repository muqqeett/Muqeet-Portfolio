import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GajdaSectionHeader } from '../ui/GajdaSectionHeader';
import { portfolioProjects, PortfolioProject } from '../../data/portfolioData';
import { Github, ArrowUpRight, Code2, ShoppingBag, Landmark, Timer, CheckSquare, X, Check, ExternalLink } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { TiltCard } from '../ui/TiltCard';
import { editorialEase, snappySpring } from '../../utils/motion';

const projectVisualIcons: Record<string, React.FC<{ className?: string }>> = {
  everlane: ShoppingBag,
  banking: Landmark,
  stopwatch: Timer,
  'todo-list': CheckSquare,
};

// Project Card with Extreme Interaction, Image Parallax, and 3D Perspective Tilt
const ProjectCard: React.FC<{
  project: PortfolioProject;
  idx: number;
  onOpenDetails: (project: PortfolioProject) => void;
}> = ({ project, idx, onOpenDetails }) => {
  const IconComponent = projectVisualIcons[project.id] || Code2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: idx * 0.08, ease: editorialEase }}
      className="h-full"
    >
      <TiltCard maxTilt={3.5}>
        <div className="gajda-card p-6 sm:p-7 flex flex-col justify-between group h-full relative overflow-hidden rounded-xl border border-white/10 hover:border-white/35 transition-all duration-300">
          <div>
            {/* Visual Screenshot / Mock Header Frame */}
            <div 
              onClick={() => onOpenDetails(project)}
              className="h-52 bg-[#050608] border border-white/10 mb-5 relative overflow-hidden group-hover:border-white/40 transition-all rounded-lg cursor-pointer"
            >
              {project.image ? (
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.07] group-hover:-translate-y-1.5"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-black/40 opacity-70 group-hover:opacity-25 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="w-full h-full p-4 flex flex-col justify-between items-center">
                  <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="font-bold text-white tracking-widest">{project.number}</span>
                    <span className="px-2 py-0.5 border border-white/20 uppercase tracking-wider text-slate-300">
                      {project.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-center py-2">
                    <IconComponent className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="w-full text-left text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
                    {project.category}
                  </div>
                </div>
              )}

              {/* Top Overlay Badges */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                <span className="font-mono text-xs font-black text-white bg-black/80 px-2.5 py-0.5 border border-white/20 backdrop-blur-sm">
                  {project.number}
                </span>

                {project.liveUrl ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] px-2.5 py-0.5 border border-emerald-500/40 bg-black/80 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LIVE</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 border border-white/20 uppercase tracking-wider text-slate-300 bg-black/80 backdrop-blur-sm text-[10px] font-mono">
                    {project.type}
                  </span>
                )}
              </div>

              {/* Bottom Category Overlay on Image */}
              {project.image && (
                <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-white/90 bg-black/75 px-2 py-0.5 backdrop-blur-sm border border-white/10 uppercase tracking-wider z-10">
                  {project.category}
                </div>
              )}
            </div>

            {/* Title with Subtle Hover Lift */}
            <h3 
              onClick={() => onOpenDetails(project)}
              className="text-lg sm:text-xl font-display font-extrabold uppercase tracking-wide text-white mb-2 group-hover:text-slate-200 cursor-pointer transition-colors group-hover:translate-x-0.5 duration-200"
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono border border-white/10 text-slate-300 uppercase bg-white/[0.02] group-hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Bar */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <MagneticButton strength={6}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-white hover:underline group/btn"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </MagneticButton>
              )}

              <MagneticButton strength={6}>
                <button
                  onClick={() => onOpenDetails(project)}
                  className="text-xs font-display font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Details
                </button>
              </MagneticButton>
            </div>

            {project.githubUrl && (
              <MagneticButton strength={6}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/20 text-slate-300 hover:text-white hover:border-white transition-colors block cursor-pointer"
                  aria-label="View Code on GitHub"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </MagneticButton>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'CODED' | 'DESIGNED'>('ALL');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Lock background scroll when modal is open and add keyboard ESC listener
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  const filteredProjects = portfolioProjects.filter((project) => {
    if (filter === 'ALL') return true;
    return project.type === filter;
  });

  return (
    <section id="portfolio" className="py-20 lg:py-28 px-5 sm:px-8 bg-[#08090d] border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        <GajdaSectionHeader
          title="PORTFOLIO"
          subtitle="Real-world web applications and interfaces engineered with modern frameworks and clean architecture."
        />

        {/* Filter Navigation Tabs with Shared Layout Indicator */}
        <div className="flex items-center justify-center gap-3 mb-14">
          {(['ALL', 'CODED', 'DESIGNED'] as const).map((tab) => {
            const count = tab === 'ALL' 
              ? portfolioProjects.length 
              : portfolioProjects.filter(p => p.type === tab).length;

            const isSelected = filter === tab;

            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-5 py-2 text-xs font-display font-bold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer ${
                  isSelected ? 'text-black font-extrabold' : 'text-slate-400 hover:text-white border border-white/15'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-white shadow-lg shadow-white/10"
                    transition={snappySpring}
                  />
                )}
                <span className="relative z-10">{tab}</span>
                <span className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-black/15 text-black' : 'bg-white/10 text-slate-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: PortfolioProject, idx: number) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                idx={idx} 
                onOpenDetails={(p) => setSelectedProject(p)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Project Details Modal with Dedicated Scroll Isolation */}
        <AnimatePresence>
          {selectedProject && (
            <div 
              data-lenis-prevent="true"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedProject(null);
              }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            >
              <motion.div
                data-lenis-prevent="true"
                onWheel={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={snappySpring}
                className="bg-[#0b0c10] border-2 border-white max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[85vh] rounded-xl overscroll-contain my-auto"
              >
                {/* Close Button */}
                <MagneticButton strength={6} className="sticky top-0 float-right z-30 -mr-2 -mt-2 mb-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-slate-400 hover:text-white border border-white/20 hover:border-white transition-colors cursor-pointer block bg-[#0b0c10]/90 backdrop-blur-md rounded-md"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </MagneticButton>

                <div className="space-y-6 clear-both">
                  {/* Modal Image */}
                  {selectedProject.image && (
                    <div className="rounded-lg overflow-hidden border border-white/20 max-h-72 relative shadow-lg bg-black">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                      PROJECT {selectedProject.number} • {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Key Technical Features:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <div className="w-4 h-4 border border-white/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
                      Technologies & Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono border border-white/20 text-white bg-white/[0.04]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons in Modal */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                    {selectedProject.liveUrl && (
                      <MagneticButton strength={6}>
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gajda-btn-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                        >
                          <span>Open Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </MagneticButton>
                    )}

                    {selectedProject.githubUrl && (
                      <MagneticButton strength={6}>
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gajda-btn-secondary px-6 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
