"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Zap, Terminal, Headphones, Brain, Sparkles, Command, CheckCircle2, ChevronRight } from 'lucide-react';

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
}];


const ModeGraphic = ({ type }: {type: string;}) => {
  switch (type) {
    case 'Cursor':
      return (
        <div className="relative w-full h-full bg-white rounded-2xl border border-slate-100 shadow-inner p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 font-mono text-sm text-slate-400 leading-relaxed">
            <p>The future of writing isn't typing...</p>
            <div className="flex items-center gap-1 mt-2">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="overflow-hidden whitespace-nowrap text-[#0f172a] font-bold border-r-2 border-[#FFD54F]">

                It's Syping.
              </motion.span>
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 right-4 w-24 h-24 bg-[#FFD54F] rounded-full blur-2xl -z-10" />

        </div>);

    case 'Terminal':
      return (
        <div className="relative w-full h-full bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl p-6 font-mono">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Execute_Command</span>
            <Command size={12} className="text-slate-500" />
          </div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-[#FFD54F]">$</span>
              <span className="text-white text-sm">syping --deploy "email_campaign"</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-xs">
              <CheckCircle2 size={12} />
              <span>Analyzing context...</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-xs">
              <CheckCircle2 size={12} />
              <span>Generating drafts...</span>
            </div>
            <div className="h-1 bg-green-500/30 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1/3 h-full bg-green-500" />

            </div>
          </div>
        </div>);

    case 'AI':
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Neural Pulse Animation */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Core Neural Node */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 20px rgba(249, 168, 37, 0.2)",
                  "0 0 40px rgba(249, 168, 37, 0.5)",
                  "0 0 20px rgba(249, 168, 37, 0.2)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-[#0f172a] rounded-[2rem] flex items-center justify-center relative z-10 border border-[#F9A825]/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-2 border-dashed border-[#F9A825]/40 rounded-2xl"
              />
              <Sparkles className="w-8 h-8 text-[#F9A825]" />
            </motion.div>

            {/* Orbiting Synapses */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: [i * 45, i * 45 + 360],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-3 h-3 bg-[#F9A825] rounded-full translate-x-24 blur-[1px]"
                />
              </motion.div>
            ))}

            {/* Neural Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              {[...Array(4)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx="50%"
                  cy="50%"
                  r={40 + i * 30}
                  fill="none"
                  stroke="#F9A825"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                />
              ))}
            </svg>
          </div>
        </div>);

    case 'Chat':
      return (
        <div className="relative w-full h-full bg-slate-50 rounded-2xl p-6 flex flex-col gap-4 overflow-hidden">
          <div className="self-start bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%] transition-all">
            <p className="text-xs font-bold text-[#0f172a]">User: "Summarize the call"</p>
          </div>
          <div className="self-end bg-[#0f172a] p-4 rounded-2xl rounded-tr-none shadow-lg max-w-[80%] transition-all">
            <p className="text-xs text-white leading-relaxed">Syping: Key points identified. Drafting summary now...</p>
          </div>
            <div className="mt-auto flex items-center gap-2 bg-white p-3 rounded-full border border-slate-200">
              <div className="w-2 h-2 rounded-full bg-[#FFD54F] animate-pulse" />
              <div className="h-1 flex-1 bg-slate-100 rounded-full" />
            </div>
        </div>);

    case 'Education':
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Evolutionary Helix Animation */}
          <div className="relative w-64 h-64 flex flex-col items-center justify-center">
            <div className="flex gap-4 items-end h-40">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex flex-col gap-1 items-center">
                  <motion.div
                    animate={{
                      height: [10, 40, 20, 60, 10],
                      backgroundColor: ["#F9A825", "#0f172a", "#F9A825"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="w-2 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    className="w-1.5 h-1.5 bg-[#0f172a] rounded-full"
                  />
                </div>
              ))}
            </div>
            
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 px-6 py-2 bg-[#0f172a] rounded-full border-2 border-[#F9A825]/20 shadow-xl flex items-center gap-3"
            >
              <div className="flex gap-1">
                {[0, 1, 2].map(j => (
                  <motion.div
                    key={j}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: j * 0.2 }}
                    className="w-1 bg-[#F9A825] rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Evolving</span>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100],
                  x: [Math.sin(i) * 30, Math.sin(i) * 50],
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
                className="absolute bottom-10 w-1 h-1 bg-[#F9A825] rounded-full blur-[0.5px]"
              />
            ))}
          </div>
        </div>);

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
    <section className="py-24 bg-[#FFFAE7] overflow-hidden !w-full !h-[1151px]">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
            Five Modes. Infinite Power. <br />
            <span className="text-[#F9A825]">One Revolution.</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-12">
          {modes.map((mode) =>
          <button
            key={mode.id}
            onClick={() => {
              setActiveMode(mode);
              setDisplayText("");
            }}
            className="group flex flex-col items-center gap-3 transition-all">

              <div className={`
                relative w-14 h-14 md:w-16 md:h-16 rounded-[22px] flex items-center justify-center transition-all duration-300
                ${activeMode.id === mode.id ?
            'bg-white shadow-[0_10px_30px_rgba(255,213,79,0.3)] ring-2 ring-[#FFD54F] scale-110' :
            'bg-white/40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105'}
              `}>
                <mode.icon
                size={24}
                className={activeMode.id === mode.id ? 'text-[#0f172a]' : 'text-slate-400'}
                strokeWidth={2} />

              </div>
              <span className={`
                text-[9px] md:text-[10px] font-black tracking-[0.2em] transition-colors
                ${activeMode.id === mode.id ? 'text-[#0f172a]' : 'text-slate-400'}
              `}>
                {mode.title}
              </span>
            </button>
          )}
        </div>

        {/* Display Card */}
        <div
          key={activeMode.id}
          className="relative bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">

          {/* Header */}
          <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#F9A825] animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-[#0f172a] uppercase">
                {activeMode.title} — ENGINE STATUS: NOMINAL
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black text-slate-400 uppercase">Latency</span>
                <span className="text-[10px] font-black text-green-600">0.02ms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black text-slate-400 uppercase">Accuracy</span>
                <span className="text-[10px] font-black text-[#F9A825]">99.9%</span>
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
                    className="inline-block w-[3px] h-6 md:h-8 bg-[#FFD54F] ml-1 align-middle" />

                </p>
              </div>

              <div className="bg-[#FFFAE7] border-l-[6px] border-[#FFD54F] p-6 rounded-r-2xl shadow-sm">
                <p className="text-base md:text-xl font-bold italic text-[#6B5439] leading-relaxed">
                  “{activeMode.insight}”
                </p>
              </div>

              {/* Status Pill moved here to prevent absolute overlap */}
              <div className="flex lg:hidden pt-4">
                <div className="bg-[#0f172a] text-white px-5 py-2.5 rounded-full flex items-center gap-3 shadow-lg">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) =>
                    <motion.div
                      key={i}
                      animate={{ height: [4, 10, 4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 bg-[#FFD54F] rounded-full" />

                    )}
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase">Active</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="aspect-square relative bg-slate-50/50 rounded-[32px] overflow-hidden border border-slate-100 p-8 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FFD54F_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>
                
                <ModeGraphic type={activeMode.element} />

                {/* Secure Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-400 border border-slate-100">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                     SECURE_STREAM
                   </div>
                   <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-400 border border-slate-100">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                     ENCRYPTED
                   </div>
                </div>
              </div>

              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-[#FFD54F]/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[#0f172a]/5 rounded-full blur-3xl" />
            </div>
          </div>


        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-[#0f172a] flex items-center justify-center gap-2">
            Frictionless execution. <ChevronRight className="text-[#F9A825]" /> <span className="text-slate-400">Standardized.</span>
          </p>
        </div>
      </div>
    </section>);

}