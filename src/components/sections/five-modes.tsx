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
    color: "bg-brand-gold",
    lightColor: "bg-brand-gold/10",
    flashColor: "rgba(255, 213, 79, 0.3)",
    element: "Cursor"
  },
  {
    id: 'tasking',
    icon: Terminal,
    title: "Tasking Mode",
    headline: "Say the task. Get the result.",
    description: "\"Write the email.\" \"Summarize this doc.\" \"Generate ideas.\" No waiting. No second steps.",
    insight: "Your words are execution code for productivity.",
    color: "bg-brand-amber",
    lightColor: "bg-brand-amber/10",
    flashColor: "rgba(249, 168, 37, 0.3)",
    element: "Terminal"
  },
  {
    id: 'prompt',
    icon: Brain,
    title: "Prompt Mode",
    headline: "Think Like an AI.",
    description: "You speak casually. Syping transforms it into a perfect AI prompt. Structured, optimized, intelligent — every time.",
    insight: "You become the smartest communicator in any system.",
    color: "bg-brand-navy",
    lightColor: "bg-brand-navy/10",
    flashColor: "rgba(15, 23, 42, 0.3)",
    element: "AI"
  },
  {
    id: 'chat',
    icon: MessageSquare,
    title: "Chat Mode",
    headline: "Zero Keyboard.",
    description: "Speak. Send. Flow. Hold live AI chats or message anyone without touching a key.",
    insight: "It feels less like talking to a screen, more like talking to possibility.",
    color: "bg-brand-brown",
    lightColor: "bg-brand-brown/10",
    flashColor: "rgba(107, 84, 57, 0.3)",
    element: "Chat"
  },
  {
    id: 'grammar',
    icon: Headphones,
    title: "Grammar Training",
    headline: "Effortless Evolution.",
    description: "Every time you speak, Syping listens, corrects, and adapts. No lessons, no stress — just effortless evolution.",
    insight: "Your daily communication becomes your training ground.",
    color: "bg-brand-gold",
    lightColor: "bg-brand-gold/10",
    flashColor: "rgba(255, 213, 79, 0.3)",
    element: "Education"
  }
];

const ModeGraphic = ({ type }: { type: string }) => {
  switch (type) {
    case 'Cursor':
      return (
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ x: -20, y: 20 }}
            animate={{ x: 0, y: 0 }}
            className="relative"
          >
            <div className="w-1 h-12 bg-brand-navy rounded-full animate-pulse" />
            <div className="absolute top-0 left-0 w-8 h-8 bg-brand-gold rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm" />
          </motion.div>
        </div>
      );
    case 'Terminal':
      return (
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block w-64 h-48 bg-brand-navy rounded-2xl overflow-hidden shadow-2xl rotate-3">
          <div className="h-6 bg-slate-800 flex items-center gap-1.5 px-3">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-amber-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="p-4 font-mono text-xs text-brand-gold/80">
            <p className="mb-2">{">"} syping --task "email"</p>
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
      );
    case 'AI':
      return (
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, delay: i, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-navy rounded-full"
              />
            ))}
            <Brain className="w-24 h-24 text-brand-navy" />
          </div>
        </div>
      );
    case 'Chat':
      return (
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block space-y-4">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-brand-gold text-brand-navy p-4 rounded-2xl rounded-tr-none shadow-lg max-w-[180px]"
          >
            <p className="text-sm font-bold">Yo, how's it going?</p>
          </motion.div>
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-brand-navy text-white p-4 rounded-2xl rounded-tl-none shadow-lg max-w-[180px] ml-auto"
          >
            <p className="text-sm">Just syping some fire code.</p>
          </motion.div>
        </div>
      );
    case 'Education':
      return (
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
          <div className="w-48 h-48 border-8 border-brand-gold/20 rounded-full flex items-center justify-center relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-8 border-brand-gold rounded-full"
            />
            <Headphones className="w-16 h-16 text-brand-gold" />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ModeBadge = ({ type }: { type: string }) => {
  switch (type) {
    case 'Cursor':
      return <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="absolute -top-1 -right-1 w-3 h-3 bg-brand-navy rounded-full border-2 border-white" />;
    case 'Terminal':
      return <div className="absolute -bottom-1 -right-1 w-4 h-2 bg-brand-gold rounded-sm border border-brand-navy" />;
    case 'AI':
      return <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity }} className="absolute -top-2 -right-2 text-[10px] font-bold text-brand-navy">AI+</motion.div>;
    case 'Chat':
      return <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" />;
    case 'Education':
      return <div className="absolute -bottom-2 -left-2 text-xs">✨</div>;
    default:
      return null;
  }
};

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
              className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy mb-6 tracking-tight"
            >
              Five Modes. Infinite Power. <br />
              <span className="text-brand-gold">One Revolution.</span>
            </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium max-w-[700px] mx-auto"
          >
            This isn’t an upgrade — it’s an extinction event for typing. Five intelligent modes, one voice-driven engine. Every word you speak becomes <span className="text-brand-navy font-bold">impact</span>, not input.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Navigation */}
          <div className="w-full lg:w-1/3 space-y-3">
            {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => handleModeChange(mode)}
                  className={`w-full text-left p-6 rounded-[32px] transition-all duration-500 flex items-center gap-5 group relative ${
                    activeMode.id === mode.id 
                      ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-brand-gold/20 translate-x-3' 
                      : 'hover:bg-white/40 border border-transparent'
                  }`}
                >
                  {activeMode.id === mode.id && (
                    <motion.div 
                      layoutId="active-pill"
                      className="absolute left-0 w-1.5 h-12 bg-brand-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`w-14 h-14 rounded-[22px] flex items-center justify-center shrink-0 transition-all duration-500 relative ${
                    activeMode.id === mode.id ? mode.color + ' scale-110 rotate-3' : 'bg-white border border-slate-100 group-hover:border-slate-200'
                  }`}>
                    <mode.icon size={26} className={activeMode.id === mode.id ? 'text-white' : 'text-slate-400'} />
                    <ModeBadge type={mode.element} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold transition-colors duration-300 ${activeMode.id === mode.id ? 'text-brand-navy' : 'text-slate-500 group-hover:text-slate-700'}`}>
                      {mode.title}
                    </h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94a3b8] mt-1.5 opacity-60">Mode 0{modes.indexOf(mode) + 1}</p>
                  </div>
                </button>

            ))}
          </div>

          {/* Display */}
          <div className="flex-1 w-full bg-white rounded-[40px] border border-brand-gold/10 shadow-[0_30px_100px_rgba(255,213,79,0.05)] p-10 min-h-[500px] relative overflow-hidden">
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
                   <activeMode.icon size={18} className={activeMode.id === 'prompt' ? 'text-white' : activeMode.color.replace('bg-', 'text-')} />
                   <span className={`text-xs font-black uppercase tracking-widest ${activeMode.id === 'prompt' ? 'text-white' : activeMode.color.replace('bg-', 'text-')}`}>
                     {activeMode.title}
                   </span>
                </div>

                  <h3 className="text-4xl md:text-[54px] font-bold text-brand-navy mb-8 leading-[0.95] tracking-[-0.04em]">
                    {activeMode.headline}
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12 max-w-[600px]">
                    {activeMode.description}
                  </p>

                    <div className="bg-brand-cream border-l-[6px] border-brand-gold p-8 rounded-r-[32px] mb-12 shadow-sm">
                       <p className="text-xl font-bold italic text-brand-navy leading-relaxed">
                         “{activeMode.insight}”
                       </p>
                    </div>

                    <ModeGraphic type={activeMode.element} />

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
                   className="text-brand-navy"
                 />
               </svg>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-brand-navy mb-4">You’re not just faster. You’re frictionless.</p>
        </div>
      </div>
    </section>
  );
}
