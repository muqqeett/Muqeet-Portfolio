import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cinematicEase } from '../../utils/motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const steps = [
    "MUHAMMAD MUQEET",
    "01 // SOFTWARE ENGINEERING",
    "02 // FULL-STACK DEVELOPMENT",
    "03 // CREATING DIGITAL EXPERIENCES"
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 220);
    const t2 = setTimeout(() => setStep(2), 520);
    const t3 = setTimeout(() => setStep(3), 820);
    const t4 = setTimeout(() => {
      setIsFinished(true);
      onComplete();
    }, 1150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="intro-loader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.85, ease: cinematicEase } 
          }}
          className="fixed inset-0 z-[99999] bg-[#050608] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Subtle Ambient Radial Light */}
          <div className="absolute w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-md w-full text-center space-y-6 relative z-10">
            {/* Profile Photo Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-14 h-14 border-2 border-white mx-auto overflow-hidden shadow-2xl relative bg-[#0e0f14]"
            >
              <img
                src="/profile.jpg"
                alt="Muhammad Muqeet"
                className="w-full h-full object-cover object-top contrast-[105%]"
              />
            </motion.div>

            {/* Dynamic Step Text */}
            <div className="h-8 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-white font-bold block"
                >
                  {steps[step]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Minimal Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 mx-auto overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full bg-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
