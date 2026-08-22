import React from 'react';
import { motion } from 'framer-motion';
import { GajdaSectionHeader } from '../ui/GajdaSectionHeader';
import { personalInfo, aboutPillars } from '../../data/portfolioData';
import { Palette, Code, Database } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import { editorialEase } from '../../utils/motion';

const pillarIcons: Record<string, React.FC<{ className?: string }>> = {
  Palette,
  Code,
  Database,
};

export const About: React.FC = () => {
  const stats = [
    { label: "DEGREE PROGRAM", value: "BS Software Eng.", detail: "NCBA&E Study" },
    { label: "PRIMARY STACK", value: "React & TypeScript", detail: "Component Systems" },
    { label: "BACKEND & CLOUD", value: "Firebase & Supabase", detail: "Real-time Sync" },
    { label: "DESIGN SYSTEM", value: "Figma & Tailwind", detail: "UI Engineering" }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 px-5 sm:px-8 bg-[#08090d] border-y border-white/10 relative">
      <div className="max-w-5xl mx-auto">
        <GajdaSectionHeader
          title="ABOUT ME"
          subtitle="Engineering background, software principles, and core technical pillars."
        />

        {/* Narrative Biography with Editorial Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: editorialEase }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          <p>
            {personalInfo.bio}
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            Currently pursuing my degree in Software Engineering at National College of Business Administration & Economics (NCBA&E), I focus on building accessible, high-performance web applications, writing maintainable TypeScript codebases, and translating complex product logic into seamless user experiences.
          </p>
        </motion.div>

        {/* Verified Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {stats.map((stat, sIdx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: sIdx * 0.07, ease: editorialEase }}
              whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.35)", backgroundColor: "#141620" }}
              className="p-4 bg-[#0c0d12] border border-white/10 flex flex-col justify-between transition-all duration-200 group cursor-default"
            >
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                {stat.label}
              </span>
              <span className="text-sm sm:text-base font-display font-extrabold uppercase text-white block group-hover:text-slate-200">
                {stat.value}
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 3 Signature Feature Pillars (DESIGN, DEVELOPMENT, INTEGRATION) with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {aboutPillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[pillar.icon] || Code;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: editorialEase }}
                className="h-full"
              >
                <TiltCard maxTilt={5}>
                  <div className="gajda-card p-6 sm:p-8 flex flex-col items-center text-center group h-full justify-between relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex flex-col items-center relative z-10">
                      <div className="w-14 h-14 border border-white/30 flex items-center justify-center text-white mb-6 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-105 transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="text-sm font-display font-extrabold tracking-widest text-white uppercase mb-3 group-hover:tracking-[0.28em] transition-all duration-300">
                        {pillar.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
