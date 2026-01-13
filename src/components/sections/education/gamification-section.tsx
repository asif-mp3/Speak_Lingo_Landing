"use client";

import { useState, useEffect, useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Zap, TrendingUp, ArrowRight, Clock } from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';
import XPCounter from './shared/xp-counter';
import Confetti from './shared/confetti';

// Memoized level badge using CSS animations
const LevelBadge = memo(({ level, title, isActive }: { level: number; title: string; isActive: boolean }) => {
  return (
    <div className={`relative ${isActive ? 'scale-110' : 'opacity-50'}`}>
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
          isActive ? 'bg-[#F9A825] animate-pulse-ring' : 'bg-white/10'
        }`}
      >
        <span className={`text-2xl font-black ${isActive ? 'text-[#0f172a]' : 'text-white/50'}`}>
          {level}
        </span>
      </div>
      <p className={`text-xs font-bold mt-2 text-center ${isActive ? 'text-white' : 'text-white/30'}`}>
        {title}
      </p>
    </div>
  );
});

LevelBadge.displayName = 'LevelBadge';

// Memoized progress bar
const ProgressBar = memo(({ progress, label, delay = 0 }: { progress: number; label: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/70 font-medium">{label}</span>
        <span className="text-[#F9A825] font-bold">{progress}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#F9A825] to-[#FFD54F] rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${progress}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

// Memoized stat card
const StatCard = memo(({ icon: Icon, value, suffix, label, delay, isInView, iconColor = "text-[#F9A825]" }: {
  icon: typeof Clock;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  isInView: boolean;
  iconColor?: string;
}) => (
  <div
    className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon className={`w-8 h-8 ${iconColor} mx-auto mb-3`} />
    <div className="text-3xl font-black text-white mb-1">
      {isInView && <XPCounter value={value} suffix={suffix} />}
    </div>
    <p className="text-sm text-white/50">{label}</p>
  </div>
));

StatCard.displayName = 'StatCard';

export default function GamificationSection() {
  const [showConfetti, setShowConfetti] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowConfetti(true), 2500);
      const hideTimer = setTimeout(() => setShowConfetti(false), 4500);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [isInView]);

  const levels = [
    { level: 1, title: "Starter" },
    { level: 2, title: "Speaker" },
    { level: 3, title: "Writer" },
    { level: 4, title: "Fluent" },
    { level: 5, title: "Master" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#FFFAE7] relative overflow-hidden">
      {/* Background blob - reduced to 1 for performance */}
      <AnimatedBlob
        color="#F9A825"
        size={400}
        position={{ top: '10%', left: '10%' }}
        delay={0}
        duration={30}
      />

      {/* Confetti celebration */}
      <Confetti active={showConfetti} particleCount={15} />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-bold text-[#0f172a] shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-6">
            Track Your Growth
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] leading-tight mb-4">
            Every Word You Speak
            <br />
            <span className="text-[#F9A825]">Saves Time — and Builds Skill.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[550px] mx-auto">
            Track your progress. Watch your confidence grow.
            <br />
            Every second of Syping earns rewards, streaks, and improvement badges.
          </p>
        </motion.div>

        {/* Main dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f172a] rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.2)] p-8 md:p-12 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#F9A825]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Stats row */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 relative z-10">
            <StatCard icon={Clock} value={2} suffix="h" label="Hours Saved" delay={100} isInView={isInView} />
            <StatCard icon={TrendingUp} value={5} suffix="%" label="Grammar Boost" delay={200} isInView={isInView} iconColor="text-green-500" />
            <StatCard icon={Zap} value={1250} suffix=" XP" label="Points Earned" delay={300} isInView={isInView} />

            {/* Streak with fire */}
            <div
              className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <span className="text-3xl block mb-2">🔥</span>
              <div className="text-3xl font-black text-white mb-1">
                {isInView && <XPCounter value={7} suffix=" Day" />}
              </div>
              <p className="text-sm text-white/50">Streak</p>
            </div>
          </div>

          {/* Level progression */}
          <div className="mb-12 relative z-10">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Trophy className="text-[#F9A825]" size={20} />
              Level Progression
            </h3>
            <div className="flex justify-between items-end">
              {levels.map((l, i) => (
                <LevelBadge key={i} level={l.level} title={l.title} isActive={i === 3} />
              ))}
            </div>
            {/* Progress line */}
            <div className="h-1 bg-white/10 rounded-full mt-4 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#F9A825] to-[#FFD54F] rounded-full transition-all duration-1500 ease-out"
                style={{ width: isInView ? '75%' : '0%', transitionDelay: '500ms' }}
              />
            </div>
          </div>

          {/* Skills progress */}
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <ProgressBar progress={85} label="Speaking Fluency" delay={600} />
            <ProgressBar progress={78} label="Grammar Accuracy" delay={700} />
            <ProgressBar progress={92} label="Vocabulary Range" delay={800} />
            <ProgressBar progress={88} label="Confidence Score" delay={900} />
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#0f172a] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_8px_0_#000] hover:shadow-[0_6px_0_#000] hover:translate-y-[2px] active:shadow-[0_2px_0_#000] active:translate-y-[6px] transition-all inline-flex items-center gap-2">
            Start Syping. Start Winning. <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
