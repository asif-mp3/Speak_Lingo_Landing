"use client";

import { memo } from 'react';

interface AnimatedBlobProps {
  color?: string;
  size?: number;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  delay?: number;
  duration?: number;
}

// Use pure CSS animations instead of Framer Motion for better performance
function AnimatedBlobComponent({
  color = "#F9A825",
  size = 300,
  position,
  delay = 0,
  duration = 20
}: AnimatedBlobProps) {
  return (
    <div
      className="absolute rounded-full pointer-events-none will-change-transform"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity: 0.08,
        filter: `blur(${size / 3}px)`,
        animation: `blob-float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        ...position,
      }}
    />
  );
}

// Memoize to prevent unnecessary re-renders
const AnimatedBlob = memo(AnimatedBlobComponent);
export default AnimatedBlob;
