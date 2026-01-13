"use client";

import { memo, useMemo } from 'react';

interface ConfettiProps {
  active: boolean;
  particleCount?: number;
  colors?: string[];
}

function ConfettiComponent({
  active,
  particleCount = 20,
  colors = ['#F9A825', '#FFD54F', '#22c55e', '#3b82f6', '#a855f7']
}: ConfettiProps) {
  // Memoize particles to avoid recalculating on every render
  const particles = useMemo(() => {
    return [...Array(particleCount)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.5}s`,
      duration: `${2 + Math.random() * 1.5}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 6,
      isCircle: Math.random() > 0.5,
    }));
  }, [particleCount, colors]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.isCircle ? 'rounded-full' : 'rounded-sm'} will-change-transform`}
          style={{
            left: particle.left,
            top: -20,
            width: particle.size,
            height: particle.isCircle ? particle.size : particle.size * 1.5,
            backgroundColor: particle.color,
            animation: `confetti-fall ${particle.duration} ease-out forwards`,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

const Confetti = memo(ConfettiComponent);
export default Confetti;
