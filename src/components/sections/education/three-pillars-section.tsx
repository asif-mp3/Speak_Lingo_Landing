"use client";

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle, Mic, Clock, TrendingUp, Heart, Keyboard, ArrowRight } from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';

const pillars = [
  {
    id: 'productivity',
    icon: Zap,
    title: "PRODUCTIVITY",
    headline: "10x Faster Writing",
    description: "Speak naturally at 150 words/minute. Get clean, formatted text instantly. No more hunt-and-peck typing slowing down your thoughts.",
    insight: "Your voice becomes your keyboard. Your ideas flow without friction.",
    stat: { value: "2+", label: "hours saved per assignment" },
    color: "#F9A825",
  },
  {
    id: 'grammar',
    icon: CheckCircle,
    title: "GRAMMAR",
    headline: "Learn While You Work",
    description: "Every grammar mistake becomes a micro-lesson. See corrections in real-time, understand why, and never make the same error twice.",
    insight: "You're not studying grammar. You're absorbing it through daily use.",
    stat: { value: "+15%", label: "grammar accuracy in 30 days" },
    color: "#22c55e",
  },
  {
    id: 'speaking',
    icon: Mic,
    title: "SPEAKING",
    headline: "Speak Without Fear",
    description: "Practice English naturally by using the app. No awkward lessons, no judgment. Just real improvement through daily use.",
    insight: "Every sentence you speak builds confidence you can feel.",
    stat: { value: "87%", label: "report increased confidence" },
    color: "#3b82f6",
  },
];

// Productivity Graphic - Keyboard vs Voice comparison
const ProductivityGraphic = memo(() => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-6">
    {/* Old way - slow keyboard */}
    <div className="relative w-full bg-slate-100 rounded-2xl p-4 border border-slate-200">
      <div className="flex items-center gap-2 mb-3">
        <Keyboard size={14} className="text-slate-400" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Typing</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: ["0%", "30%", "35%", "40%"] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          className="h-full bg-slate-400 rounded-full"
        />
      </div>
      <span className="text-[10px] text-slate-400 mt-2 block">~40 WPM</span>
    </div>

    {/* New way - fast voice */}
    <div className="relative w-full bg-[#FFFAE7] rounded-2xl p-4 border-2 border-[#F9A825]">
      <div className="flex items-center gap-2 mb-3">
        <Mic size={14} className="text-[#F9A825]" />
        <span className="text-[10px] font-bold text-[#F9A825] uppercase tracking-wider">Syping</span>
      </div>
      <div className="h-2 bg-[#FFD54F]/30 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="h-full bg-gradient-to-r from-[#F9A825] to-[#FFD54F] rounded-full"
        />
      </div>
      <span className="text-[10px] text-[#F9A825] font-bold mt-2 block">~150 WPM</span>
    </div>

    {/* Speed comparison badge */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="px-4 py-2 bg-[#0f172a] rounded-full"
    >
      <span className="text-xs font-black text-[#F9A825]">3.75x FASTER</span>
    </motion.div>
  </div>
));

ProductivityGraphic.displayName = 'ProductivityGraphic';

// Grammar Graphic - Correction animation
const GrammarGraphic = memo(() => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="w-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        {/* Grammar correction demo */}
        <div className="text-lg font-medium text-[#0f172a] leading-relaxed">
          {phase === 0 && (
            <span>She <span className="text-[#0f172a]">don't</span> understand the lesson.</span>
          )}
          {phase === 1 && (
            <span>
              She <span className="line-through text-red-500 opacity-60">don't</span>{" "}
              <span className="text-green-600 font-bold animate-fade-in">doesn't</span> understand the lesson.
            </span>
          )}
          {phase === 2 && (
            <span>She <span className="text-green-600 font-bold">doesn't</span> understand the lesson.</span>
          )}
        </div>

        {/* Tip tooltip */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 bg-[#FFFAE7] rounded-xl border border-[#F9A825]/30"
            >
              <p className="text-xs text-[#6B5439] font-medium">
                <span className="font-bold text-[#F9A825]">Tip:</span> Use "doesn't" for third person singular (he, she, it).
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress indicators */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${i === phase ? 'bg-green-500 scale-125' : 'bg-slate-200'}`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
          <CheckCircle size={12} className="text-green-500" />
          <span className="text-[10px] font-bold text-green-600">Grammar Fixed</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFFAE7] rounded-full">
          <TrendingUp size={12} className="text-[#F9A825]" />
          <span className="text-[10px] font-bold text-[#F9A825]">Learning Active</span>
        </div>
      </div>
    </div>
  );
});

GrammarGraphic.displayName = 'GrammarGraphic';

// Speaking Graphic - Confidence meter
const SpeakingGraphic = memo(() => {
  const [confidence, setConfidence] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setConfidence((prev) => {
        if (prev >= 95) return 20;
        return prev + 15;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getLabel = (value: number) => {
    if (value < 40) return "Nervous";
    if (value < 60) return "Getting Better";
    if (value < 80) return "Confident";
    return "Fluent!";
  };

  const getColor = (value: number) => {
    if (value < 40) return "#ef4444";
    if (value < 60) return "#f59e0b";
    if (value < 80) return "#22c55e";
    return "#3b82f6";
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      {/* Confidence meter */}
      <div className="relative w-48 h-48">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="12"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="80"
            fill="none"
            stroke={getColor(confidence)}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={502}
            animate={{ strokeDashoffset: 502 - (502 * confidence) / 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={confidence}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-4xl font-black"
            style={{ color: getColor(confidence) }}
          >
            {confidence}%
          </motion.span>
          <span className="text-sm font-bold text-slate-500">{getLabel(confidence)}</span>
        </div>
      </div>

      {/* Speaking indicator */}
      <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-3 h-3 bg-blue-500 rounded-full"
        />
        <span className="text-xs font-bold text-slate-600">Speaking Practice Active</span>
      </div>

      {/* Stats row */}
      <div className="flex gap-3">
        <div className="px-3 py-1.5 bg-blue-50 rounded-full">
          <span className="text-[10px] font-bold text-blue-600">Day 12 Streak</span>
        </div>
        <div className="px-3 py-1.5 bg-green-50 rounded-full">
          <span className="text-[10px] font-bold text-green-600">+23% This Week</span>
        </div>
      </div>
    </div>
  );
});

SpeakingGraphic.displayName = 'SpeakingGraphic';

// Graphic selector
const PillarGraphic = memo(({ type }: { type: string }) => {
  switch (type) {
    case 'productivity':
      return <ProductivityGraphic />;
    case 'grammar':
      return <GrammarGraphic />;
    case 'speaking':
      return <SpeakingGraphic />;
    default:
      return null;
  }
});

PillarGraphic.displayName = 'PillarGraphic';

export default function ThreePillarsSection() {
  const [activePillar, setActivePillar] = useState(pillars[0]);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      setDisplayText(activePillar.description.slice(0, i));
      i++;
      if (i > activePillar.description.length) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [activePillar]);

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden relative">
      {/* Background blob */}
      <AnimatedBlob color="#22c55e" size={300} position={{ top: '20%', right: '5%' }} delay={2} duration={28} />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-bold text-[#0f172a] shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-6">
            Three Superpowers
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight mb-4">
            One Tool.{" "}
            <span className="text-[#F9A825]">Three Superpowers.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[550px] mx-auto">
            Productivity, grammar mastery, and speaking confidence — all in one seamless experience.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-12">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar)}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div
                className={`
                  relative w-14 h-14 md:w-16 md:h-16 rounded-[22px] flex items-center justify-center transition-all duration-300
                  ${activePillar.id === pillar.id
                    ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] ring-2 scale-110'
                    : 'bg-white/40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105'}
                `}
                style={{
                  ringColor: activePillar.id === pillar.id ? pillar.color : 'transparent',
                }}
              >
                <pillar.icon
                  size={24}
                  className={activePillar.id === pillar.id ? '' : 'text-slate-400'}
                  style={{ color: activePillar.id === pillar.id ? pillar.color : undefined }}
                  strokeWidth={2}
                />
              </div>
              <span
                className={`
                  text-[9px] md:text-[10px] font-black tracking-[0.15em] transition-colors
                  ${activePillar.id === pillar.id ? 'text-[#0f172a]' : 'text-slate-400'}
                `}
              >
                {pillar.title}
              </span>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <motion.div
          key={activePillar.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
        >
          {/* Header */}
          <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: activePillar.color }}
              />
              <span className="text-[10px] font-black tracking-widest text-[#0f172a] uppercase">
                {activePillar.title} MODE — ACTIVE
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: `${activePillar.color}15` }}>
              <span className="text-[10px] font-black" style={{ color: activePillar.color }}>
                {activePillar.stat.value} {activePillar.stat.label}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12 grid lg:grid-cols-12 gap-12 items-center">
            {/* Text content */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a] leading-tight tracking-tight">
                {activePillar.headline}
              </h3>

              <div className="min-h-[100px]">
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[3px] h-5 md:h-6 ml-1 align-middle"
                    style={{ backgroundColor: activePillar.color }}
                  />
                </p>
              </div>

              <div
                className="p-6 rounded-2xl border-l-[6px]"
                style={{
                  backgroundColor: `${activePillar.color}08`,
                  borderColor: activePillar.color,
                }}
              >
                <p className="text-base md:text-lg font-bold italic text-[#475569] leading-relaxed">
                  "{activePillar.insight}"
                </p>
              </div>

              {/* Mobile stat */}
              <div className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full w-fit" style={{ backgroundColor: `${activePillar.color}15` }}>
                <span className="text-sm font-black" style={{ color: activePillar.color }}>
                  {activePillar.stat.value} {activePillar.stat.label}
                </span>
              </div>
            </div>

            {/* Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square relative bg-slate-50/50 rounded-[32px] overflow-hidden border border-slate-100 p-6 flex items-center justify-center">
                <PillarGraphic type={activePillar.id} />
              </div>

              {/* Glow effects */}
              <div
                className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: activePillar.color }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-[#0f172a] flex items-center justify-center gap-2 flex-wrap">
            Speak once.{" "}
            <ArrowRight className="text-[#F9A825]" size={20} />{" "}
            <span className="text-slate-400">Learn forever.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
