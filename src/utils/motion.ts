import { Transition, Variants } from 'framer-motion';

// --- LUXURY CINEMATIC EASINGS ---
export const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const ultraSmoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const dramaticEase: [number, number, number, number] = [0.77, 0, 0.175, 1];

// --- SPRING PRESETS ---
// Tactile spring for buttons and direct physical interactions
export const tactileSpring: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 26,
  mass: 0.8,
};

// Elastic spring for magnetic hover and settle
export const magneticSpring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 20,
  mass: 0.7,
};

// Gentle settling spring for layout indicators and 3D tilts
export const gentleSettlingSpring: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 24,
  mass: 1,
};

// Snappy spring for tabs and modals
export const snappySpring: Transition = {
  type: "spring",
  stiffness: 460,
  damping: 30,
  mass: 0.7,
};

// --- REUSABLE MOTION VARIANTS ---

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const lineRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: cinematicEase,
    },
  },
};

export const editorialRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: editorialEase,
    },
  },
};

export const scaleFadeVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: cinematicEase,
    },
  },
};
