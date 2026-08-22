import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Dynamic light shifts across sections
  const blob1Y = useTransform(smoothProgress, [0, 1], ['10%', '85%']);
  const blob1X = useTransform(smoothProgress, [0, 0.5, 1], ['25%', '70%', '35%']);
  const blob1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.9]);

  const blob2Y = useTransform(smoothProgress, [0, 1], ['40%', '95%']);
  const blob2X = useTransform(smoothProgress, [0, 0.5, 1], ['75%', '20%', '65%']);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Primary Ambient Light Blob */}
      <motion.div
        style={{
          top: blob1Y,
          left: blob1X,
          scale: blob1Scale,
        }}
        className="absolute w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.018] blur-[120px]"
      />

      {/* Secondary Ambient Light Accent */}
      <motion.div
        style={{
          top: blob2Y,
          left: blob2X,
        }}
        className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.012] blur-[100px]"
      />

      {/* Very subtle architectural grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />
    </div>
  );
};
