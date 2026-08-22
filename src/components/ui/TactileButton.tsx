import React from 'react';
import { motion } from 'framer-motion';
import { tactileSpring } from '../../utils/motion';

interface TactileButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  hoverY?: number;
}

export const TactileButton: React.FC<TactileButtonProps> = ({
  children,
  className = "",
  onClick,
  hoverY = -1.5,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: hoverY }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={tactileSpring}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
