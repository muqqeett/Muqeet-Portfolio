import React from 'react';
import { motion } from 'framer-motion';
import { GajdaSectionHeader } from '../ui/GajdaSectionHeader';
import { skillsData } from '../../data/portfolioData';
import { 
  Code2, 
  FileCode2, 
  Layers, 
  Palette, 
  Globe, 
  Flame, 
  Database, 
  Server, 
  GitBranch, 
  Zap, 
  Terminal, 
  Smartphone, 
  Boxes,
  Cpu
} from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import { editorialEase } from '../../utils/motion';

const iconLookup: Record<string, React.FC<{ className?: string }>> = {
  html: Globe,
  css: Palette,
  js: Code2,
  ts: FileCode2,
  react: Zap,
  tailwind: Layers,
  bootstrap: Boxes,
  git: GitBranch,
  nextjs: Zap,
  nodejs: Server,
  postgres: Database,
  cloud: Cpu,
  figma: Palette,
  firebase: Flame,
  supabase: Database,
  redux: Layers,
  api: Server,
  vscode: Terminal,
  responsive: Smartphone,
  github: GitBranch,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <GajdaSectionHeader
          title="SKILLS"
          subtitle="Frameworks, state architectures, cloud databases, and development tooling."
        />

        {/* 1. USING NOW */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
            <h3 className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-widest text-white flex items-center gap-2.5">
              <span className="w-2 h-2 bg-white" />
              <span>USING NOW:</span>
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase">
              Production Stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {skillsData.usingNow.map((skill, idx) => {
              const Icon = iconLookup[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.03, ease: editorialEase }}
                  className="h-full"
                >
                  <TiltCard maxTilt={3}>
                    <div className="gajda-card p-5 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-300 rounded-lg border border-white/10 hover:border-white/35 hover:bg-[#12141c] h-full relative overflow-hidden">
                      <Icon className="w-7 h-7 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-2.5 relative z-10" />
                      <span className="text-[11px] font-display font-bold uppercase tracking-wider text-slate-200 group-hover:text-white relative z-10">
                        {skill.name}
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. LEARNING */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
            <h3 className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-widest text-white flex items-center gap-2.5">
              <span className="w-2 h-2 bg-white/60" />
              <span>LEARNING:</span>
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase">
              Active Growth
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {skillsData.learning.map((skill, idx) => {
              const Icon = iconLookup[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.03, ease: editorialEase }}
                  className="h-full"
                >
                  <TiltCard maxTilt={3}>
                    <div className="gajda-card p-5 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-300 rounded-lg border border-white/10 hover:border-white/35 hover:bg-[#12141c] h-full relative overflow-hidden">
                      <Icon className="w-7 h-7 text-slate-400 mb-2.5 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10" />
                      <span className="text-[11px] font-display font-bold uppercase tracking-wider text-slate-300 group-hover:text-white relative z-10">
                        {skill.name}
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. OTHER SKILLS & TOOLS */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
            <h3 className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-widest text-white flex items-center gap-2.5">
              <span className="w-2 h-2 bg-white/40" />
              <span>OTHER SKILLS & TOOLS:</span>
            </h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase">
              Workflow & Services
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {skillsData.otherSkills.map((skill, idx) => {
              const Icon = iconLookup[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.03, ease: editorialEase }}
                  className="h-full"
                >
                  <TiltCard maxTilt={3}>
                    <div className="gajda-card p-5 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-300 rounded-lg border border-white/10 hover:border-white/35 hover:bg-[#12141c] h-full relative overflow-hidden">
                      <Icon className="w-7 h-7 text-slate-400 mb-2.5 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10" />
                      <span className="text-[11px] font-display font-bold uppercase tracking-wider text-slate-300 group-hover:text-white relative z-10">
                        {skill.name}
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
