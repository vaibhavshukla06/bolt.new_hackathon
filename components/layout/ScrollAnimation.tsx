"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimation({ children, className = '' }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 