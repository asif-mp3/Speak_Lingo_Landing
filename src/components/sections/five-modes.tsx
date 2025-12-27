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
          <div className="relative w-full max-w-[400px] h-[300px] flex items-center justify-between px-4">
            {/* Input Side: Chaos */}
            <div className="flex flex-col gap-2 relative">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: [0, 40, 80],
                    y: [0, (i - 2) * 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.4,
                    ease: "linear"
                  }}
                  className="px-3 py-1 bg-slate-100 rounded-full text-[8px] font-mono text-slate-400 whitespace-nowrap"
                >
                  {["just thinking...", "erratic speech", "random ideas", "vague context", "messy input"][i]}
                </motion.div>
              ))}
            </div>

            {/* Middle: The Transformer Engine */}
            <div className="relative flex items-center justify-center">
              <div className="w-32 h-32 relative">
                {/* Outer Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-[#F9A825]/30 rounded-full"
                />
                {/* Inner Glow */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-4 bg-gradient-to-br from-[#FFD54F] to-[#F9A825] rounded-full blur-xl opacity-40"
                />
                {/* The Core */}
                <div className="absolute inset-8 bg-[#0f172a] rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                  <Brain size={32} className="text-[#FFD54F]" />
                  <motion.div 
                    animate={{ y: [-40, 40] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent shadow-[0_0_10px_#FFD54F]"
                  />
                </div>
              </div>
            </div>

            {/* Output Side: Structured Clarity */}
            <div className="flex flex-col gap-3 relative">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    x: [0, 20],
                    scale: [0.9, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.7 + 1.5,
                    ease: "easeOut"
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                  <div className="h-2 bg-slate-800 rounded-full" style={{ width: `${40 + i * 15}px` }} />
                </motion.div>
              ))}
              <div className="absolute -inset-2 border border-[#F9A825]/20 rounded-lg bg-[#F9A825]/5 p-2 flex flex-col gap-1">
                 <span className="text-[7px] font-black text-[#F9A825] uppercase">Optimized Prompt</span>
                 <div className="w-full h-1 bg-[#F9A825]/20 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="w-1/2 h-full bg-[#F9A825]"
                   />
                 </div>
              </div>
            </div>
          </div>
        </div>);

    case 'Chat':
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Realistic Chat Interface */}
          <div className="relative w-72 h-[380px] bg-[#0f172a] rounded-[40px] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col">
            {/* Dynamic Status Bar */}
            <div className="h-10 px-6 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/40">9:41</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full border border-white/20" />
                <div className="w-3 h-3 rounded-full border border-white/20" />
              </div>
            </div>

            {/* Header */}
            <div className="px-6 py-4 bg-[#1e293b] border-b border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD54F] to-[#F9A825] flex items-center justify-center shadow-lg">
                <MessageSquare size={18} className="text-[#0f172a]" />
              </div>
              <div>
                <p className="text-xs font-black text-white uppercase tracking-tight">Syping Chat</p>
                <div className="flex items-center gap-1">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-green-500" 
                  />
                  <span className="text-[9px] text-green-500/80 font-bold">LIVE_SYNC</span>
                </div>
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {[
                  { id: 1, type: 'user', text: "Schedule a meeting with the design team for tomorrow at 2 PM.", delay: 0 },
                  { id: 2, type: 'ai', text: "Analyzing your calendar... Done! Meeting scheduled. Should I send the invites now?", delay: 1.5 },
                ].map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: msg.delay,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                    className={`max-w-[85%] p-3.5 rounded-2xl text-[11px] font-medium leading-relaxed shadow-sm ${
                      msg.type === 'user' 
                        ? 'self-end bg-[#334155] text-white rounded-tr-none border border-white/5' 
                        : 'self-start bg-white text-[#0f172a] rounded-tl-none border border-slate-100'
                    }`}
                  >
                    {msg.text}
                    {msg.type === 'ai' && (
                      <div className="mt-2 flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">Verified_Action</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Real-time Transcription Visual */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, repeat: Infinity, repeatDelay: 5 }}
                className="self-end flex flex-col items-end gap-2"
              >
                <div className="bg-[#334155]/50 border border-dashed border-white/10 px-3 py-2 rounded-xl flex items-center gap-2">
                   <motion.div 
                     animate={{ opacity: [0.3, 1, 0.3] }}
                     transition={{ duration: 1, repeat: Infinity }}
                     className="w-1.5 h-1.5 rounded-full bg-red-500" 
                   />
                   <span className="text-[9px] text-white/40 font-mono">Transcribing...</span>
                </div>
                <div className="flex gap-1 pr-1">
                   {[...Array(6)].map((_, i) => (
                     <motion.div 
                       key={i}
                       animate={{ height: [4, 12, 4] }}
                       transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                       className="w-0.5 bg-[#FFD54F]/40 rounded-full"
                     />
                   ))}
                </div>
              </motion.div>
            </div>

            {/* Input Interaction Area */}
            <div className="p-4 bg-[#1e293b]/50 border-t border-white/5">
              <div className="w-full h-10 rounded-full bg-[#0f172a] border border-white/10 flex items-center px-4 gap-3">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-5 h-5 rounded-full bg-[#FFD54F] flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0f172a]" />
                </motion.div>
                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FFD54F]/30 to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>);

    case 'Education':
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* DNA of Data Helix - Physical Representation */}
          <div className="relative w-48 h-48 flex flex-col items-center justify-center perspective-[1000px]">
            <div className="relative h-40 w-28 flex flex-col justify-between py-4">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotateY: 360,
                    y: [0, -4, 0]
                  }}
                  transition={{ 
                    rotateY: { duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.2 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
                  }}
                  className="relative w-full h-1 flex items-center justify-between"
                >
                  <div className="w-3 h-3 bg-[#0f172a] rounded-full border border-[#F9A825] shadow-md" />
                  <div className="flex-1 h-[1.5px] bg-gradient-to-r from-[#F9A825] to-[#0f172a] mx-1 opacity-50" />
                  <div className="w-3 h-3 bg-[#F9A825] rounded-full border border-[#0f172a] shadow-md" />
                </motion.div>
              ))}
            </div>
            
            {/* Knowledge Particles Rising */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 80, x: (Math.random() - 0.5) * 50, opacity: 0 }}
                animate={{
                  y: -120,
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-[#F9A825] rounded-full blur-[0.5px]"
              />
            ))}

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-4 px-4 py-1.5 bg-[#0f172a] rounded-full border border-[#F9A825]/30 shadow-xl"
            >
              <span className="text-[9px] font-black text-[#F9A825] tracking-widest uppercase">Adaptive Learning</span>
            </motion.div>
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
    <section className="py-24 bg-[#FFFAE7] overflow-hidden !w-full !h-[1000px]">
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