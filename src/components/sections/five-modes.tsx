"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Zap, Terminal, Headphones, Brain, ArrowRight } from 'lucide-react';

const modes = [
  {
    id: 'normal',
    icon: Zap,
    title: "Normal Syping Mode",
    headline: "Thought → Screen, Instantly.",
    description: "Speak naturally. Watch it appear — instantly, flawlessly, anywhere. No lag. No correction. No hesitation.",
    insight: "It's not dictation. It's telepathy with a cursor.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    flashColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    id: 'tasking',
    icon: Terminal,
    title: "Tasking Mode — Command Reality.",
    headline: "Say the task. Get the result.",
    description: "\"Write the email.\" \"Summarize this doc.\" \"Generate ideas.\" No waiting. No second steps.",
    insight: "Your words are execution code for productivity.",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    flashColor: "rgba(168, 85, 247, 0.5)"
  },
  {
    id: 'prompt',
    icon: Brain,
    title: "Prompt Mode — Talk Like a Human.",
    headline: "Think Like an AI.",
    description: "You speak casually. SpeakLingo transforms it into a perfect AI prompt. Structured, optimized, intelligent — every time.",
    insight: "You become the smartest communicator in any system.",
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    flashColor: "rgba(245, 158, 11, 0.5)"
  },
  {
    id: 'chat',
    icon: MessageSquare,
    title: "Chat Mode — Real Conversation.",
    headline: "Zero Keyboard.",
    description: "Speak. Send. Flow. Hold live AI chats or message anyone without touching a key.",
    insight: "It feels less like talking to a screen, more like talking to possibility.",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    flashColor: "rgba(34, 197, 94, 0.5)"
  },
  {
    id: 'grammar',
    icon: Headphones,
    title: "Grammar Training System — Learn by Living.",
    headline: "Effortless Evolution.",
    description: "Every time you speak, SpeakLingo listens, corrects, and adapts. No lessons, no stress — just effortless evolution.",
    insight: "Your daily communication becomes your training ground.",
    color: "bg-red-500",
    lightColor: "bg-red-50",
    flashColor: "rgba(239, 68, 68, 0.5)"
  }
];

export default function FiveModes() {
  const [activeMode, setActiveMode] = useState(modes[0]);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleModeChange = (mode: any) => {
    setActiveMode(mode);
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 300);
  };

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight"
          >
            Five Modes. Infinite Power. <br />
            <span className="text-[#EAB308]">One Revolution.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#475569] font-medium max-w-[700px] mx-auto"
          >
            This isn’t an upgrade — it’s an extinction event for typing. Five intelligent modes, one voice-driven engine. Every word you speak becomes <span className="text-[#0f172a] font-bold">impact</span>, not input.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Navigation */}
          <div className="w-full lg:w-1/3 space-y-3">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => handleModeChange(mode)}
                className={`w-full text-left p-6 rounded-[24px] transition-all duration-300 flex items-center gap-4 group ${
                  activeMode.id === mode.id 
                    ? 'bg-white shadow-xl shadow-amber-500/5 border border-[#EAB308]/20 translate-x-2' 
                    : 'hover:bg-white/50 border border-transparent'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                  activeMode.id === mode.id ? mode.color : 'bg-white border border-slate-200'
                }`}>
                  <mode.icon size={24} className={activeMode.id === mode.id ? 'text-white' : 'text-slate-400'} />
                </div>
                <div>
                  <h4 className={`font-bold transition-colors ${activeMode.id === mode.id ? 'text-[#0f172a]' : 'text-slate-500'}`}>
                    {mode.title}
                  </h4>
                  <p className="text-xs font-black uppercase tracking-widest text-[#94a3b8] mt-1">Mode 0{modes.indexOf(mode) + 1}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Display */}
          <div className="flex-1 w-full bg-white rounded-[40px] border border-[#EAB308]/10 shadow-[0_30px_100px_rgba(234,179,8,0.05)] p-10 min-h-[500px] relative overflow-hidden">
            <AnimatePresence>
              {isFlashing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-50 pointer-events-none"
                  style={{ backgroundColor: activeMode.flashColor }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${activeMode.lightColor} rounded-full mb-8`}>
                   <activeMode.icon size={18} className={activeMode.color.replace('bg-', 'text-')} />
                   <span className={`text-xs font-black uppercase tracking-widest ${activeMode.color.replace('bg-', 'text-')}`}>
                     {activeMode.title}
                   </span>
                </div>

                <h3 className="text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
                  {activeMode.headline}
                </h3>
                
                <p className="text-xl text-[#475569] font-medium leading-relaxed mb-10">
                  {activeMode.description}
                </p>

                  <div className="bg-slate-50 border-l-4 border-[#EAB308] p-6 rounded-r-2xl mb-12">
                     <p className="text-lg font-bold italic text-[#0f172a]">
                       {activeMode.insight}
                     </p>
                  </div>
                </motion.div>
              </AnimatePresence>


            {/* Visual Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
               <svg viewBox="0 0 400 400" className="w-full h-full">
                 <motion.path
                   animate={{ 
                     d: [
                       "M100,200 Q150,100 200,200 T300,200",
                       "M100,200 Q150,300 200,200 T300,200",
                       "M100,200 Q150,100 200,200 T300,200"
                     ]
                   }}
                   transition={{ duration: 4, repeat: Infinity }}
                   stroke="currentColor"
                   strokeWidth="20"
                   fill="none"
                   className="text-slate-900"
                 />
               </svg>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-[#0f172a] mb-4">You’re not just faster. You’re frictionless.</p>
        </div>
      </div>
    </section>
  );
}
