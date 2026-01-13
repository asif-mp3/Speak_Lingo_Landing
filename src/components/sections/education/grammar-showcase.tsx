"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  BookOpen,
  PenTool,
  Lightbulb,
  ArrowRight,
  Zap,
  MessageSquare,
  GraduationCap
} from 'lucide-react';

// Live correction animation component
const LiveCorrectionDemo = () => {
  const corrections = [
    { original: "Their going to the store", corrected: "They're going to the store", type: "Homophones" },
    { original: "The data shows that", corrected: "The data show that", type: "Subject-Verb Agreement" },
    { original: "Me and my friend went", corrected: "My friend and I went", type: "Pronoun Order" },
    { original: "Less people attended", corrected: "Fewer people attended", type: "Count vs Non-count" },
  ];

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'original' | 'correcting' | 'corrected'>('original');

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase(prev => {
        if (prev === 'original') return 'correcting';
        if (prev === 'correcting') return 'corrected';
        setIndex(i => (i + 1) % corrections.length);
        return 'original';
      });
    }, 1500);
    return () => clearInterval(timer);
  }, [corrections.length]);

  const current = corrections[index];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-black uppercase tracking-wider text-slate-500">Live Correction</span>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {phase === 'original' && (
            <motion.div
              key="original"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <p className="text-lg font-bold text-red-600 line-through decoration-2">{current.original}</p>
              </div>
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.3 }}
                  className="h-full bg-red-400"
                />
              </div>
            </motion.div>
          )}

          {phase === 'correcting' && (
            <motion.div
              key="correcting"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-[#F9A825] border-t-transparent rounded-full"
              />
            </motion.div>
          )}

          {phase === 'corrected' && (
            <motion.div
              key="corrected"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                <p className="text-lg font-bold text-green-600">{current.corrected}</p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F9A825]/20 rounded-full">
                <Sparkles size={12} className="text-[#F9A825]" />
                <span className="text-xs font-bold text-[#6B5439]">{current.type}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Grammar score meter
const GrammarScoreMeter = () => {
  const [score, setScore] = useState(72);

  useEffect(() => {
    const timer = setInterval(() => {
      setScore(prev => {
        const next = prev + Math.floor(Math.random() * 3) + 1;
        return next > 98 ? 72 : next;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-500">Grammar Score</span>
        <GraduationCap size={16} className="text-[#F9A825]" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="12"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke={score > 90 ? "#22c55e" : score > 75 ? "#F9A825" : "#ef4444"}
              strokeWidth="12"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: score / 100 }}
              transition={{ duration: 0.5 }}
              style={{ strokeDasharray: "352", strokeDashoffset: 0 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              key={score}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-3xl font-black text-[#0f172a]"
            >
              {score}%
            </motion.span>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Accuracy</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs font-bold text-green-600">
        +26% improvement this week
      </div>
    </div>
  );
};

// Common mistakes tracker
const CommonMistakes = () => {
  const mistakes = [
    { rule: "Subject-Verb Agreement", count: 12, trend: "down" },
    { rule: "Article Usage", count: 8, trend: "down" },
    { rule: "Tense Consistency", count: 5, trend: "up" },
    { rule: "Comma Splices", count: 3, trend: "down" },
  ];

  return (
    <div className="h-full">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={16} className="text-[#F9A825]" />
        <span className="text-xs font-black uppercase tracking-wider text-slate-500">Learning Focus</span>
      </div>

      <div className="space-y-3">
        {mistakes.map((m, i) => (
          <motion.div
            key={m.rule}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-2 bg-slate-50 rounded-xl"
          >
            <span className="text-sm font-bold text-[#0f172a]">{m.rule}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-slate-400">{m.count}x</span>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${m.trend === 'down' ? 'bg-green-100' : 'bg-amber-100'}`}>
                <span className={`text-[10px] ${m.trend === 'down' ? 'text-green-600' : 'text-amber-600'}`}>
                  {m.trend === 'down' ? '↓' : '↑'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Writing tips carousel
const WritingTips = () => {
  const tips = [
    { icon: Lightbulb, tip: "Use active voice for clearer, more engaging writing" },
    { icon: PenTool, tip: "Vary sentence length to improve readability" },
    { icon: MessageSquare, tip: "Read your work aloud to catch awkward phrasing" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [tips.length]);

  const Icon = tips[current].icon;

  return (
    <div className="h-full flex flex-col">
      <span className="text-xs font-black uppercase tracking-wider text-white/60 mb-4">Pro Tip</span>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex-1 flex flex-col items-center justify-center text-center"
        >
          <div className="w-12 h-12 bg-[#F9A825] rounded-2xl flex items-center justify-center mb-4">
            <Icon size={24} className="text-[#0f172a]" />
          </div>
          <p className="text-lg font-bold text-white leading-tight">{tips[current].tip}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-4">
        {tips.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-[#F9A825]' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

// Vocabulary builder
const VocabBuilder = () => {
  const words = [
    { word: "Ubiquitous", meaning: "Present everywhere", level: "Advanced" },
    { word: "Ephemeral", meaning: "Lasting a short time", level: "Advanced" },
    { word: "Pragmatic", meaning: "Practical, realistic", level: "Intermediate" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-500">Word of the Day</span>
        <span className="text-xs font-bold text-[#F9A825]">+{(index + 1) * 5} XP</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-black text-[#0f172a] mb-2">{words[index].word}</h3>
          <p className="text-sm text-slate-600 mb-3">{words[index].meaning}</p>
          <span className="inline-block px-2 py-1 bg-[#F9A825]/20 rounded-full text-xs font-bold text-[#6B5439] w-fit">
            {words[index].level}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function GrammarShowcase() {
  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-[#0f172a] shadow-[4px_4px_0_#0f172a] mb-6">
            <Zap size={14} className="text-[#F9A825]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#0f172a]">Grammar AI</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0f172a] leading-[0.95] tracking-tight mb-6">
            Master Grammar <br />
            <span className="text-[#F9A825]">One Correction at a Time.</span>
          </h2>

          <p className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto">
            Every mistake is a learning opportunity. Our AI doesn't just fix—it teaches.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large Live Correction Demo - spans 8 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 bg-white rounded-[32px] p-6 md:p-8 border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a] min-h-[280px]"
          >
            <LiveCorrectionDemo />
          </motion.div>

          {/* Grammar Score - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-4 bg-white rounded-[32px] p-6 border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a] min-h-[280px]"
          >
            <GrammarScoreMeter />
          </motion.div>

          {/* Common Mistakes - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-4 bg-white rounded-[32px] p-6 border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a] min-h-[260px]"
          >
            <CommonMistakes />
          </motion.div>

          {/* Writing Tips - Dark card spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-4 bg-[#0f172a] rounded-[32px] p-6 border-2 border-[#0f172a] min-h-[260px]"
          >
            <WritingTips />
          </motion.div>

          {/* Vocabulary Builder - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-12 md:col-span-4 bg-gradient-to-br from-[#F9A825]/20 to-[#FFD54F]/20 rounded-[32px] p-6 border-2 border-[#F9A825] shadow-[8px_8px_0_#F9A825] min-h-[260px]"
          >
            <VocabBuilder />
          </motion.div>

          {/* CTA Banner - full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-12 bg-[#0f172a] rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#0f172a]"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-2">Ready to Perfect Your Grammar?</h3>
              <p className="text-white/60 font-medium">Join 50,000+ students improving their English daily.</p>
            </div>
            <button className="bg-[#F9A825] text-[#0f172a] px-8 py-4 rounded-2xl text-lg font-bold flex items-center gap-2 hover:bg-[#FFD54F] transition-colors shadow-[0_4px_0_#6B5439] hover:shadow-[0_2px_0_#6B5439] hover:translate-y-[2px]">
              Start Learning Free <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
