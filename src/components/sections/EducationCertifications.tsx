import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GajdaSectionHeader } from '../ui/GajdaSectionHeader';
import { educationAndCertifications, CertificationItem } from '../../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { TiltCard } from '../ui/TiltCard';
import { editorialEase } from '../../utils/motion';

export const EducationCertifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-Driven Timeline Progress Line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 80%"]
  });

  const timelineScaleY = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 lg:py-28 px-5 sm:px-8 bg-[#060709] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        <GajdaSectionHeader
          title="EDUCATION & CREDENTIALS"
          subtitle="Formal academic foundations in Software Engineering and verified professional credentials."
        />

        {/* Scroll Progress Accent Line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-36 bottom-12 w-[1px] bg-white/10 overflow-hidden pointer-events-none">
          <motion.div
            style={{ scaleY: timelineScaleY, originY: 0 }}
            className="w-full h-full bg-white/40"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
          
          {/* 1. Education Card (NCBA&E) */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: editorialEase }}
            className="h-full"
          >
            <TiltCard maxTilt={3.5}>
              <div className="gajda-card p-6 sm:p-8 flex flex-col justify-between border-t-2 border-t-white h-full relative overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-300 rounded-xl">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 border border-white/20 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold">
                      {educationAndCertifications.education.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-extrabold uppercase tracking-wide text-white mb-2">
                    {educationAndCertifications.education.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-4 uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span className="font-semibold">{educationAndCertifications.education.institution}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {educationAndCertifications.education.description}
                  </p>

                  {/* Core Academic Topics */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                      Core Engineering Subjects:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Data Structures", "Algorithms", "OOP", "Database Systems", "Software Architecture", "Web Engineering"].map((subject) => (
                        <span key={subject} className="px-2 py-0.5 text-[10px] font-mono border border-white/10 text-slate-300 bg-white/[0.02] group-hover:border-white/20 transition-colors">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>NCBA&E • Software Engineering Department</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* 2. Certifications Card (IEC) */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: editorialEase }}
            className="h-full"
          >
            <TiltCard maxTilt={3.5}>
              <div className="gajda-card p-6 sm:p-8 flex flex-col justify-between border-t-2 border-t-white h-full relative overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-300 rounded-xl">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 border border-white/20 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-white/20 text-slate-300 font-bold">
                      VERIFIED CREDENTIAL
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-extrabold uppercase tracking-wide text-white mb-4">
                    PROFESSIONAL CERTIFICATION
                  </h3>

                  <div className="space-y-4">
                    {educationAndCertifications.certifications.map((cert: CertificationItem) => (
                      <div key={cert.title} className="p-4 bg-black/50 border border-white/15 space-y-3 group-hover:border-white/30 transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-sm sm:text-base font-display font-black uppercase text-white tracking-wide">
                            {cert.title}
                          </h4>
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{cert.date}</span>
                          </span>
                        </div>

                        <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                          {cert.issuer}
                        </span>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {cert.description}
                        </p>

                        <div className="pt-2">
                          <MagneticButton strength={6}>
                            <a
                              href={cert.officialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 text-[11px] font-mono uppercase tracking-wider transition-all"
                            >
                              <span>View Official Certificate</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </MagneticButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Full-Stack Web Development Certified</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
