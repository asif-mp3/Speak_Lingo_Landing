"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hand,
  FileText,
  Users,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Mic
} from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';

const scenarios = [
  {
    id: 'classroom',
    icon: Hand,
    title: "In the Classroom",
    problem: "You know the answer, but fear saying it wrong in front of everyone.",
    solution: "Speak your thoughts privately first. Syping corrects your grammar instantly, so you can raise your hand with confidence.",
    stat: "87%",
    statLabel: "feel more confident",
    color: "#3b82f6",
    emoji: "🙋"
  },
  {
    id: 'assignments',
    icon: FileText,
    title: "Writing Assignments",
    problem: "Essays take forever. You type slowly and second-guess every sentence.",
    solution: "Just speak your ideas. Syping types at 150 WPM with perfect grammar. A 3-hour essay becomes 45 minutes.",
    stat: "3x",
    statLabel: "faster writing",
    color: "#22c55e",
    emoji: "📝"
  },
  {
    id: 'presentations',
    icon: Users,
    title: "Group Projects",
    problem: "You have great ideas but struggle to express them clearly in English.",
    solution: "Practice speaking naturally. Every word you say improves your fluency without awkward lessons.",
    stat: "+23%",
    statLabel: "fluency gain",
    color: "#F9A825",
    emoji: "🎯"
  },
  {
    id: 'exams',
    icon: Clock,
    title: "Timed Exams",
    problem: "You run out of time because typing is slow and you keep fixing mistakes.",
    solution: "Voice-to-text is 3x faster than typing. Spend time thinking, not correcting typos.",
    stat: "2h+",
    statLabel: "saved per week",
    color: "#a855f7",
    emoji: "⏱️"
  },
];

// Scenario card component
const ScenarioCard = ({ scenario, index }: { scenario: typeof scenarios[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 h-full relative overflow-hidden"
      >
        {/* Background glow on hover */}
        <motion.div
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          className="absolute inset-0 rounded-[32px]"
          style={{ backgroundColor: scenario.color }}
        />

        {/* Icon and emoji */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? -5 : 0
            }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${scenario.color}15` }}
          >
            <scenario.icon size={26} style={{ color: scenario.color }} />
          </motion.div>
          <motion.span
            animate={{ scale: isHovered ? 1.2 : 1 }}
            className="text-3xl"
          >
            {scenario.emoji}
          </motion.span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-[#0f172a] mb-4 relative z-10">
          {scenario.title}
        </h3>

        {/* Content switches between problem and solution */}
        <div className="min-h-[100px] relative z-10">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="problem"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-slate-500 font-medium leading-relaxed">
                  {scenario.problem}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-[#0f172a] font-medium leading-relaxed">
                  {scenario.solution}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Stat badge */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            backgroundColor: isHovered ? scenario.color : '#f8fafc'
          }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full relative z-10"
        >
          <motion.span
            animate={{ color: isHovered ? '#fff' : scenario.color }}
            className="text-lg font-black"
          >
            {scenario.stat}
          </motion.span>
          <motion.span
            animate={{ color: isHovered ? 'rgba(255,255,255,0.8)' : '#64748b' }}
            className="text-xs font-bold"
          >
            {scenario.statLabel}
          </motion.span>
        </motion.div>

        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-400 transition-colors">
          {isHovered ? '✓ Solution' : 'Hover for solution'}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animated counter for the bottom section
const AnimatedStat = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="text-center"
  >
    <motion.span
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2, type: "spring" }}
      className="text-4xl md:text-5xl font-black text-[#0f172a] block"
    >
      {value}
    </motion.span>
    <span className="text-sm text-slate-500 font-medium">{label}</span>
  </motion.div>
);

export default function PainSection() {
  return (
    <section className="py-24 bg-[#FFFAE7] relative overflow-hidden">
      {/* Background blobs */}
      <AnimatedBlob color="#3b82f6" size={300} position={{ top: '10%', right: '5%' }} delay={2} duration={25} />
      <AnimatedBlob color="#22c55e" size={250} position={{ bottom: '20%', left: '5%' }} delay={4} duration={28} />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-bold text-[#0f172a] shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-6"
          >
            Sound Familiar?
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight mb-4">
            Every Student Moment,{" "}
            <span className="text-[#F9A825]">Transformed.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[550px] mx-auto">
            Hover over each scenario to see how Syping changes everything.
          </p>
        </motion.div>

        {/* Scenario grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {scenarios.map((scenario, i) => (
            <ScenarioCard key={scenario.id} scenario={scenario} index={i} />
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
              <CheckCircle size={16} className="text-green-500" />
              <span className="text-sm font-bold text-green-700">Student Results</span>
            </div>
            <p className="text-lg text-slate-500">
              Based on <span className="font-bold text-[#0f172a]">50,000+</span> students using Syping
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat value="3x" label="Faster Writing" delay={0.1} />
            <AnimatedStat value="87%" label="More Confident" delay={0.2} />
            <AnimatedStat value="+23%" label="Grammar Accuracy" delay={0.3} />
            <AnimatedStat value="2h+" label="Saved Weekly" delay={0.4} />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <button className="bg-[#0f172a] text-white px-8 py-4 rounded-2xl text-base font-bold shadow-[0_6px_0_#000] hover:shadow-[0_4px_0_#000] hover:translate-y-[2px] active:shadow-[0_2px_0_#000] active:translate-y-[4px] transition-all inline-flex items-center gap-2">
              <Mic size={18} />
              Start Speaking Better Today
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
