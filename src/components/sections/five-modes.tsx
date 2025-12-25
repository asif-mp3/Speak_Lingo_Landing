"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Zap, Terminal, Headphones, Brain, Mic, Sparkles } from 'lucide-react';

const modes = [
  {
    id: 'normal',
    icon: Zap,
    title: "NORMAL",
    headline: "Thought → Screen, Instantly.",
    description: "Speak naturally. Watch it appear — instantly, flawlessly, anywhere. No lag. No correction. No hesitation.",
    insight: "It's not dictation. It's telepathy with a cursor.",
    color: "#FFD54F",
    lightColor: "rgba(255, 213, 79, 0.1)",
    element: "Cursor"
  },
  {
    id: 'tasking',
    icon: Terminal,
    title: "TASKING",
    headline: "Say the task. Get the result.",
    description: "\"Write the email.\" \"Summarize this doc.\" \"Generate ideas.\" No waiting. No second steps.",
    insight: "Your words are execution code for productivity.",
    color: "#F9A825",
    lightColor: "rgba(249, 168, 37, 0.1)",
    element: "Terminal"
  },
  {
    id: 'prompt',
    icon: Brain,
    title: "PROMPT",
    headline: "Think Like an AI.",
    description: "You speak casually. Syping transforms it into a perfect AI prompt. Structured, optimized, intelligent — every time.",
    insight: "You become the smartest communicator in any system.",
    color: "#0f172a",
    lightColor: "rgba(15, 23, 42, 0.1)",
    element: "AI"
  },
  {
    id: 'chat',
    icon: MessageSquare,
    title: "CHAT",
    headline: "Zero Keyboard.",
    description: "Speak. Send. Flow. Hold live AI chats or message anyone without touching a key.",
    insight: "It feels less like talking to a screen, more like talking to possibility.",
    color: "#6B5439",
    lightColor: "rgba(107, 84, 57, 0.1)",
    element: "Chat"
  },
  {
    id: 'grammar',
    icon: Headphones,
    title: "EVOLVE",
    headline: "Effortless Evolution.",
    description: "Every time you speak, Syping listens, corrects, and adapts. No lessons, no stress — just effortless evolution.",
    insight: "Your daily communication becomes your training ground.",
    color: "#FFD54F",
    lightColor: "rgba(255, 213, 79, 0.1)",
    element: "Education"
  }
];

const ModeGraphic = ({ type }: { type: string }) => {
  switch (type) {
    case 'Cursor':
      return (
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end pr-12">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-64 h-64 bg-[#FFD54F]/20 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ x: -20, y: 20 }}
            animate={{ x: 0, y: 0 }}
            className="relative"
          >
            <div className="w-1.5 h-16 bg-[#0f172a] rounded-full animate-pulse" />
            <div className="absolute top-0 left-0 w-10 h-10 bg-[#FFD54F] rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm" />
          </motion.div>
        </div>
      );
    case 'Terminal':
      return (
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end pr-12">
          <div className="w-72 h-56 bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl rotate-3">
            <div className="h-8 bg-slate-800 flex items-center gap-2 px-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="p-6 font-mono text-sm text-[#FFD54F]/80">
              <p className="mb-3">{">"} syping --task "email"</p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white"
              >
                Writing... Done.
              </motion.p>
            </div>
          </div>
        </div>
      );
    case 'AI':
      return (
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end pr-12">
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, delay: i, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#0f172a] rounded-full"
              />
            ))}
            <Brain className="w-32 h-32 text-[#0f172a]" />
          </div>
        </div>
      );
    case 'Chat':
      return (
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end pr-12 space-y-6 flex-col">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-[#FFD54F] text-[#0f172a] p-5 rounded-3xl rounded-tr-none shadow-xl max-w-[220px]"
          >
            <p className="text-base font-bold">Yo, how's it going?</p>
          </motion.div>
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0f172a] text-white p-5 rounded-3xl rounded-tl-none shadow-xl max-w-[220px] ml-12"
          >
            <p className="text-base">Just syping some fire code.</p>
          </motion.div>
        </div>
      );
    case 'Education':
      return (
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end pr-12">
          <div className="w-64 h-64 border-[12px] border-[#FFD54F]/20 rounded-full flex items-center justify-center relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-[12px] border-[#FFD54F] rounded-full"
            />
            <Headphones className="w-24 h-24 text-[#FFD54F]" />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function FiveModes() {
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
    <section className="py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] mb-6 tracking-tight"
          >
            Five Modes. Infinite Power. <br />
            <span className="text-[#F9A825]">One Revolution.</span>
          </motion.h2>
        </div>

        {/* Tab Navigation (Audience Style) */}
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
                ${activeMode.id === mode.id 
                  ? 'bg-white shadow-[0_0_0_2px_#FFD54F,0_10px_30px_rgba(255,213,79,0.3)] scale-110' 
                  : 'bg-white/40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105'}
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

        {/* Display Card (Audience Style) */}
        <motion.div
          key={activeMode.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden min-h-[500px]"
        >
          {/* Header */}
          <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F9A825]" />
              <span className="text-[11px] font-black tracking-widest text-[#0f172a] uppercase">
                {activeMode.title} — SYPING ENGINE ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-black tracking-widest text-green-600 uppercase">
                LATENCY: 0.02ms
              </span>
            </div>
          </div>

            {/* Body */}
            <div className="p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-center min-h-[400px]">
              <div className="w-full lg:flex-1 space-y-8 z-10 relative order-2 lg:order-1">
                <h3 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight tracking-tight">
                  {activeMode.headline}
                </h3>
                
                <div className="min-h-[120px]">
                  <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-[3px] h-6 md:h-8 bg-[#FFD54F] ml-1 align-middle"
                    />
                  </p>
                </div>

                <div className="bg-[#FFFAE7] border-l-[6px] border-[#FFD54F] p-6 rounded-r-2xl shadow-sm inline-block">
                  <p className="text-lg font-bold italic text-[#6B5439] leading-relaxed">
                    “{activeMode.insight}”
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[450px] h-[300px] lg:h-[400px] flex items-center justify-center order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-slate-50/50 rounded-3xl -m-4 lg:-m-8 border border-slate-100/50" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <ModeGraphic type={activeMode.element} />
                </div>
              </div>
            </div>

          {/* Footer Overlay - Listening Pill */}
          <div className="absolute bottom-8 right-8 hidden md:block">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-[#FFFAE7] border border-[#FFD54F]/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm"
            >
              <Mic size={18} className="text-[#F9A825]" />
              <span className="text-sm font-bold text-[#6B5439]">Mode Active...</span>
            </motion.div>
          </div>

          {/* Performance Badge - Floating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-24 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#FFFAE7] rounded-xl flex items-center justify-center">
              <Sparkles className="text-[#F9A825]" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Optimization</p>
              <p className="text-xs font-bold text-[#0f172a]">Peak State</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-[#0f172a] mb-4">You’re not just faster. You’re frictionless.</p>
        </div>
      </div>
    </section>
  );
}
