"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ClipboardList, FileText, MessageCircle, TrendingUp, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

const modes = [
  {
    id: 'notes',
    icon: BookOpen,
    title: "NOTES",
    headline: "Capture Every Lecture.",
    description: "Transform spoken lectures into organized notes instantly. Never miss an important point while scrambling to write.",
    insight: "Your voice becomes your most efficient note-taking tool.",
    color: "#FFD54F",
    element: "Notes"
  },
  {
    id: 'assignments',
    icon: ClipboardList,
    title: "ASSIGNMENTS",
    headline: "Manage Your Workload.",
    description: "\"Add essay deadline Friday.\" \"Create study plan for finals.\" Voice commands that organize your academic life effortlessly.",
    insight: "Speak your tasks into existence. Organization has never been easier.",
    color: "#F9A825",
    element: "Tasks"
  },
  {
    id: 'essays',
    icon: FileText,
    title: "ESSAYS",
    headline: "Write with Confidence.",
    description: "Speak your ideas naturally. Watch them transform into well-structured, grammatically perfect academic writing.",
    insight: "Your thoughts flow freely while AI handles the polish.",
    color: "#0f172a",
    element: "Essay"
  },
  {
    id: 'practice',
    icon: MessageCircle,
    title: "PRACTICE",
    headline: "Build Speaking Confidence.",
    description: "Practice presentations, interview responses, and everyday conversations with instant grammar feedback.",
    insight: "Every conversation becomes a learning opportunity.",
    color: "#6B5439",
    element: "Practice"
  },
  {
    id: 'progress',
    icon: TrendingUp,
    title: "PROGRESS",
    headline: "Track Your Growth.",
    description: "Watch your grammar accuracy, vocabulary range, and speaking fluency improve over time with detailed analytics.",
    insight: "Data-driven insights that celebrate your learning journey.",
    color: "#FFD54F",
    element: "Progress"
  }
];

const ModeGraphic = ({ type }: { type: string }) => {
  switch (type) {
    case 'Notes':
      return (
        <div className="relative w-full h-full bg-white rounded-2xl border border-slate-100 shadow-inner p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Lecture Notes - Biology 101</div>
          <div className="flex-1 font-mono text-sm text-slate-600 leading-relaxed space-y-2">
            <p>Cell division occurs in two main phases...</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="text-[#0f172a] font-bold"
            >
              Mitosis produces identical daughter cells
            </motion.div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 right-4 w-24 h-24 bg-[#FFD54F] rounded-full blur-2xl -z-10"
          />
        </div>
      );

    case 'Tasks':
      return (
        <div className="relative w-full h-full bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl p-6 font-mono">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Study_Planner</span>
            <ClipboardList size={12} className="text-slate-500" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-400 text-xs">
              <CheckCircle2 size={12} />
              <span>Math homework - Complete</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400 text-xs">
              <div className="w-3 h-3 border border-amber-400 rounded" />
              <span>Essay draft - Due Friday</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <div className="w-3 h-3 border border-slate-400 rounded" />
              <span>Exam prep - Next week</span>
            </div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-[#FFD54F] text-xs"
            >
              + "Add presentation practice..."
            </motion.div>
          </div>
        </div>
      );

    case 'Essay':
      return (
        <div className="relative w-full h-full bg-white rounded-2xl border border-slate-100 shadow-inner p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={14} className="text-[#F9A825]" />
            <span className="text-xs font-bold text-slate-600">Essay Draft</span>
          </div>
          <div className="flex-1 text-sm text-slate-600 leading-relaxed">
            <p className="mb-2">The impact of technology on education...</p>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="overflow-hidden whitespace-nowrap text-[#0f172a] font-medium inline-block"
            >
              has fundamentally transformed how students learn and engage with information.
            </motion.span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-600">
            <Sparkles size={12} />
            <span className="font-bold">Grammar: Perfect</span>
          </div>
        </div>
      );

    case 'Practice':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#FFFAE7] to-white rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-[#FFD54F] rounded-full flex items-center justify-center mb-4 shadow-lg">
            <MessageCircle size={32} className="text-[#0f172a]" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-[#0f172a] mb-2">"Tell me about yourself"</p>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-green-600 font-bold"
            >
              Recording response...
            </motion.div>
          </div>
          <div className="mt-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [8, 20 + Math.random() * 20, 8] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-[#F9A825] rounded-full"
              />
            ))}
          </div>
        </div>
      );

    case 'Progress':
      return (
        <div className="relative w-full h-full bg-white rounded-2xl border border-slate-100 shadow-inner p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">This Month</span>
            <TrendingUp size={14} className="text-green-500" />
          </div>
          <div className="space-y-4">
            {[
              { label: "Grammar Accuracy", value: 94, color: "#22c55e" },
              { label: "Vocabulary Growth", value: 78, color: "#F9A825" },
              { label: "Speaking Fluency", value: 85, color: "#3b82f6" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">{stat.label}</span>
                  <span className="font-bold" style={{ color: stat.color }}>{stat.value}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: stat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default function LearningModes() {
  const [activeMode, setActiveMode] = useState(modes[0]);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(activeMode.description.slice(0, i));
      i++;
      if (i > activeMode.description.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [activeMode]);

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden !w-full !h-[1000px]">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
            Five Learning Modes. <br />
            <span className="text-[#F9A825]">One Smart Assistant.</span>
          </h2>
          <p className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto">
            From note-taking to exam prep, SpeakLingo adapts to every part of your academic journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-12">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                setActiveMode(mode);
                setDisplayText("");
              }}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className={`
                relative w-14 h-14 md:w-16 md:h-16 rounded-[22px] flex items-center justify-center transition-all duration-300
                ${activeMode.id === mode.id ?
                  'bg-white shadow-[0_10px_30px_rgba(255,213,79,0.3)] ring-2 ring-[#FFD54F] scale-110' :
                  'bg-white/40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105'}
              `}>
                <mode.icon
                  size={24}
                  className={activeMode.id === mode.id ? 'text-[#0f172a]' : 'text-slate-400'}
                  strokeWidth={2}
                />
              </div>
              <span className={`
                text-[9px] md:text-[10px] font-black tracking-[0.2em] transition-colors
                ${activeMode.id === mode.id ? 'text-[#0f172a]' : 'text-slate-400'}
              `}>
                {mode.title}
              </span>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div
          key={activeMode.id}
          className="relative bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
        >
          {/* Header */}
          <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#F9A825] animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-[#0f172a] uppercase">
                {activeMode.title} MODE — LEARNING ACTIVE
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black text-slate-400 uppercase">Grammar</span>
                <span className="text-[10px] font-black text-green-600">98%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black text-slate-400 uppercase">Vocabulary</span>
                <span className="text-[10px] font-black text-[#F9A825]">+124</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8 relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight tracking-tight">
                {activeMode.headline}
              </h3>

              <div className="min-h-[120px]">
                <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[3px] h-6 md:h-8 bg-[#FFD54F] ml-1 align-middle"
                  />
                </p>
              </div>

              <div className="bg-[#FFFAE7] border-l-[6px] border-[#FFD54F] p-6 rounded-r-2xl shadow-sm">
                <p className="text-base md:text-xl font-bold italic text-[#6B5439] leading-relaxed">
                  "{activeMode.insight}"
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="aspect-square relative bg-slate-50/50 rounded-[32px] overflow-hidden border border-slate-100 p-8 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FFD54F_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                <ModeGraphic type={activeMode.element} />
              </div>

              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-[#FFD54F]/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[#0f172a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-[#0f172a] flex items-center justify-center gap-2">
            Learn smarter, not harder. <ChevronRight className="text-[#F9A825]" /> <span className="text-slate-400">Every day.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
