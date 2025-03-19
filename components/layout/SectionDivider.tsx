"use client";

import { motion } from 'framer-motion';

type SectionDividerProps = {
  variant?: 'wave' | 'angle' | 'curve' | 'zigzag';
  from?: string;
  to?: string;
  flipY?: boolean;
  className?: string;
  height?: number;
};

export default function SectionDivider({
  variant = 'wave',
  from = '#0D0D12',
  to = '#0A0A10',
  flipY = false,
  className = '',
  height = 70
}: SectionDividerProps) {
  // SVG paths for different divider styles
  const paths = {
    wave: "M0,0 C100,40 200,-40 300,0 C400,40 500,-40 600,0 C700,40 800,-40 900,0 C1000,40 1100,-40 1200,0 V50 H0 Z",
    angle: "M0,0 L1440,50 L1440,50 L0,50 Z",
    curve: "M0,0 C480,60 960,60 1440,0 L1440,50 L0,50 Z",
    zigzag: "M0,0 L240,30 L480,0 L720,30 L960,0 L1200,30 L1440,0 L1440,50 L0,50 Z"
  };

  const selectedPath = paths[variant];
  
  return (
    <div className={`absolute w-full overflow-hidden ${className}`} style={{ height }}>
      <motion.svg
        width="100%"
        height={height}
        viewBox={`0 0 1440 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          transform: flipY ? 'scaleY(-1)' : 'none',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <path
          d={selectedPath}
          fill={to}
        />
      </motion.svg>
      <div
        className="absolute inset-0"
        style={{
          background: from,
          height: flipY ? '100%' : '50%',
          bottom: flipY ? 'auto' : 0,
          top: flipY ? 0 : 'auto',
        }}
      />
    </div>
  );
} 