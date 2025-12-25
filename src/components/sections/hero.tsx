"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, ArrowRight, Play } from 'lucide-react';

const BubblePhase = ({ active }: { active: boolean }) => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <AnimatePresence>
        {active && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.4,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-[#FFD54F] rounded-full blur-xl opacity-20"
              />
            ))}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10 w-12 h-12 bg-[#FFD54F] rounded-full flex items-center justify-center border border-[#E6A700] shadow-lg"
            >
              <Mic size={20} className="text-[#2D3748]" />
            </motion.div>
          </>
        )}
        {!active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 w-12 h-12 bg-white/50 rounded-full flex items-center justify-center border border-[#e2e8f0]"
          >
            <Mic size={20} className="text-[#94a3b8]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

  const DocumentMockup = ({ active }: { active: boolean }) => {
    const [text, setText] = useState("");
      const fullText = "Typing slows thought. SpeakLingo replaces keys with Syping—so your ideas flow from voice to screen in real time.";



  useEffect(() => {
    if (!active) {
      setText("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
           if (active) setText("");
        }, 3000);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="bg-white rounded-[32px] border border-[#6B5439]/10 shadow-[0_30px_80px_rgba(0,0,0,0.06)] p-8 w-full max-w-[500px] aspect-[4/3] relative overflow-hidden">
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="space-y-4">
        <p className="text-[#0f172a] text-xl font-medium leading-relaxed tracking-tight">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-[#EAB308] ml-1 align-middle"
          />
        </p>
        <AnimatePresence>
          {!active && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="space-y-4"
             >
               <div className="h-4 bg-slate-100 rounded-full w-3/4" />
               <div className="h-4 bg-slate-100 rounded-full w-1/2" />
               <div className="h-4 bg-slate-100 rounded-full w-2/3" />
             </motion.div>
          )}
        </AnimatePresence>
      </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 mb-2">
             <div className="px-3 py-1 bg-green-50 rounded-full border border-green-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-wider text-green-700">Live WPM: {active ? "142" : "0"}</span>
             </div>
             <div className="px-3 py-1 bg-amber-50 rounded-full border border-amber-100 flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">Streak: {active ? "🔥 12m" : "0m"}</span>
             </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94a3b8]">
            {active ? "Syping Active" : "Waiting for Voice"}
          </p>
          <BubblePhase active={active} />
        </div>

    </div>
  );
};

export default function Hero() {
  const [isSyping, setIsSyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyping(prev => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-[140px] pb-[80px] overflow-hidden bg-[#FFFAE7]">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD54F]/20 rounded-full mb-6 border border-[#FFD54F]/30 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 bg-[#F9A825] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black uppercase tracking-wider text-[#6B5439]">The Syping Revolution</span>
              </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#0f172a] mb-6 tracking-[-0.03em]"
                >
                  Kill the <span className="text-[#EAB308]">Keyboard</span>.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="flex items-center justify-center lg:justify-start gap-4 mb-8"
                >
                  <span className="text-lg md:text-xl font-serif text-[#475569]">Stop Typing</span>
                  <div className="w-8 h-[1px] bg-[#EAB308]/40" />
                  <span className="text-lg md:text-xl font-black text-[#0f172a] italic tracking-tight">Start Syping...</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                  className="text-base md:text-lg font-medium text-[#64748b] mb-10 leading-relaxed max-w-[520px] mx-auto lg:mx-0"
                >
                  Typing slows thought. <span className="text-[#0f172a] font-bold">SpeakLingo</span> replaces keys with <span className="text-[#EAB308] font-bold">Syping</span>—so your ideas flow from voice to screen in real time.
                </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="w-full sm:w-auto bg-[#6B5439] hover:bg-[#5A4530] text-white px-10 py-5 rounded-[20px] text-lg font-bold transition-all shadow-[0_6px_0_rgb(60,45,30)] hover:shadow-[0_8px_0_rgb(60,45,30)] active:shadow-none active:translate-y-[6px] flex items-center justify-center gap-2">
                Start Syping Now <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-[#6B5439]/10 text-[#6B5439] px-10 py-5 rounded-[20px] text-lg font-bold transition-all hover:bg-[#FFFAE7] flex items-center justify-center gap-2">
                <Play size={18} fill="currentColor" /> Watch It Replace Typing
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 space-y-2"
            >
              <p className="text-sm font-bold text-[#475569]/60 uppercase tracking-widest">
                Typing was built for machines. You were built for momentum.
              </p>
              <p className="text-lg font-bold text-[#0f172a]">
                Speak. Watch your thoughts appear.
              </p>
            </motion.div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFD54F]/10 blur-[120px] -z-10 rounded-full" />
            <DocumentMockup active={isSyping} />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-[#e2e8f0] max-w-[180px]"
            >
              <p className="text-xs font-bold text-[#475569] leading-tight">
                "The keyboard is the bottleneck of human potential."
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 animate-bounce">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#94a3b8]">See how it works</p>
          <div className="w-px h-12 bg-gradient-to-b from-[#EAB308] to-transparent" />
        </div>
      </div>
    </section>
  );
}
