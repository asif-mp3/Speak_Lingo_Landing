"use client";

import { memo } from 'react';

interface WaveformProps {
  bars?: number;
  isActive?: boolean;
  barColor?: string;
  height?: number;
  className?: string;
}

// Use pure CSS animations for smooth performance
function WaveformComponent({
  bars = 24,
  isActive = true,
  barColor = "#F9A825",
  height = 60,
  className = ""
}: WaveformProps) {
  return (
    <div
      className={`flex items-center justify-center gap-[3px] ${className}`}
      style={{ height }}
    >
      {[...Array(bars)].map((_, i) => {
        // Create a wave pattern - higher in the middle
        const centerDistance = Math.abs(i - bars / 2) / (bars / 2);
        const maxHeight = (1 - centerDistance * 0.6) * height;

        return (
          <div
            key={i}
            className="w-1 rounded-full will-change-transform"
            style={{
              backgroundColor: barColor,
              opacity: isActive ? 0.8 : 0.3,
              height: isActive ? undefined : 4,
              animation: isActive
                ? `waveform-bar 0.8s ease-in-out infinite`
                : 'none',
              animationDelay: `${i * 0.03}s`,
              // Use CSS custom property for max height
              ['--max-height' as string]: `${maxHeight}px`,
            }}
          />
        );
      })}
    </div>
  );
}

const Waveform = memo(WaveformComponent);
export default Waveform;
