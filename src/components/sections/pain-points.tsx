"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle2, Mic } from 'lucide-react';

const KeyboardAnimation = () => {
  const [activeKey, setActiveKey] = useState<number | null>(null);
  const [text, setText] = useState("");
  const fullText = "Typing is so slow...";
  
  // Simplified keyboard layout
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        const char = fullText[currentIndex].toUpperCase();
        // Find key index to "press"
        let foundKey = null;
        rows.flat().forEach((key, idx) => {
          if (key === char) foundKey = idx;
        });
        
        setActiveKey(foundKey);
        setText(fullText.slice(0, currentIndex + 1));
        
        // Release key after short delay
        setTimeout(() => setActiveKey(null), 100);
        
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setText("");
        }, 1000);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="bg-slate-100 p-2 rounded-lg w-full font-mono text-[10px] text-slate-500 min-h-[40px] border border-slate-200 text-left">
        {text}<span className="animate-pulse">|</span>
      </div>
      
      <div className="flex flex-col gap-1 items-center scale-[0.8] origin-top">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-1">
            {row.map((key, j) => {
              const globalIdx = rows.slice(0, i).flat().length + j;
              const isActive = activeKey === globalIdx;
              return (
                <motion.div
                  key={key}
                  animate={{ 
                    y: isActive ? 2 : 0,
                    backgroundColor: isActive ? "#cbd5e1" : "#f1f5f9",
                    boxShadow: isActive 
                      ? "0 0px 0px rgba(0,0,0,0.1)" 
                      : "0 2px 0px rgba(0,0,0,0.1)"
                  }}
                  className="w-6 h-6 rounded flex items-center justify-center text-[8px] font-bold text-slate-400 border border-slate-200"
                >
                  {key}
                </motion.div>
              );
            })}
          </div>
        ))}
        <div className="w-24 h-6 bg-slate-100 rounded border border-slate-200 mt-1 shadow-[0_2px_0_rgba(0,0,0,0.1)]" />
      </div>
    </div>
  );
};

const SypingFlowAnimation = () => {
  const [transcript, setTranscript] = useState<string[]>([]);
  const phrases = ["Instantly capturing thoughts...", "150 words per minute...", "Zero friction flow.", "Thinking at light speed."];
  
  useEffect(() => {
    let phraseIdx = 0;
    const interval = setInterval(() => {
      setTranscript(prev => {
        const next = [...prev, phrases[phraseIdx]];
        if (next.length > 3) return next.slice(1);
        return next;
      });
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      {/* Waveform */}
      <div className="flex items-end gap-1 h-12">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              height: [8, 32, 12, 40, 8],
              opacity: [0.3, 1, 0.5, 1, 0.3]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.05,
              ease: "easeInOut" 
            }}
            className="w-1.5 bg-[#FFD54F] rounded-full"
          />
        ))}
      </div>

      {/* Transcription Box */}
      <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 min-h-[100px] flex flex-col gap-2 overflow-hidden relative">
        <div className="absolute top-2 right-3">
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="flex items-center gap-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Live</span>
          </motion.div>
        </div>
        
        <AnimatePresence mode="popLayout">
          {transcript.map((line, i) => (
            <motion.p
              key={`${line}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1 - (transcript.length - 1 - i) * 0.3, x: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs font-medium text-white/90 text-left"
            >
              {line}
            </motion.p>
          ))}
        </AnimatePresence>
        
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-1.5 h-4 bg-[#FFD54F] mt-1"
        />
      </div>
    </div>
  );
};

export default function PainPoints() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 tracking-tight">
              Typing Is <span className="text-[#ef4444]">Slowing You Down.</span>
            </h2>

            <p className="text-xl text-[#475569] font-medium mb-12">
              Every pause. Every correction. Every lost idea. <br />
              <span className="text-[#0f172a] font-bold">You’re not tired — you’re throttled.</span>
            </p>

            <div className="space-y-6 mb-12">
              {[
                "Your thoughts move faster than your fingers.",
                "Typing breaks your flow before your ideas land.",
                "The spark fades while you’re still finding the keys."
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
                  </div>
                  <p className="text-lg font-bold text-[#475569]">{point}</p>
                </div>
              ))}
            </div>

            <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-4 rounded-[20px] text-lg font-bold transition-all shadow-[0_4px_0_rgb(0,0,0)] flex items-center gap-2 border border-black active:shadow-none active:translate-y-[4px]">
              Break the Friction <ArrowRight size={20} />
            </button>
          </div>

          <div className="order-1 lg:order-2 relative flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* The Old Way - Smaller, Gray, Tilted */}
            <motion.div 
              whileHover={{ scale: 0.98, rotate: -2 }}
              className="w-full md:w-5/12 bg-slate-50 rounded-[24px] p-6 border border-slate-200 flex flex-col items-center text-center relative overflow-hidden grayscale opacity-80"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="text-slate-400" size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-600 mb-1">The Old Way</h4>
              <p className="text-[9px] font-bold text-slate-400 mb-6 uppercase tracking-wider">Physical Constraint</p>
              
              <div className="w-full mb-4">
                <KeyboardAnimation />
              </div>
              
              <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-auto pt-4">40 WPM Barrier</div>
            </motion.div>

            {/* The Syping Way - Larger, Vibrant, Glowing */}
            <motion.div 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="w-full md:w-7/12 bg-[#0f172a] rounded-[32px] p-8 border border-white/10 flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-[#FFD54F]/10"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="px-3 py-1 bg-[#FFD54F] text-[#0f172a] rounded-full text-[9px] font-black uppercase tracking-widest">Live Flow</div>
              </div>
              
              <div className="w-14 h-14 bg-[#FFD54F] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#FFD54F]/20">
                <Mic className="text-[#0f172a]" size={28} />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-1">The Syping Way</h4>
              <p className="text-xs font-medium text-[#FFD54F] mb-8 opacity-80 uppercase tracking-[0.2em]">Voice-to-Thought</p>
              
              <div className="w-full relative mb-8">
                <SypingFlowAnimation />
              </div>

              <div className="space-y-2 w-full px-4">
                <div className="flex justify-between text-[10px] font-bold text-[#FFD54F] uppercase tracking-widest mb-1">
                  <span>Input Speed</span>
                  <span>150+ WPM</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-[#FFD54F] shadow-[0_0_10px_#FFD54F]" 
                  />
                </div>
              </div>
            </motion.div>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FFD54F] text-[#0f172a] px-5 py-2 rounded-full font-black text-xs shadow-xl z-10 whitespace-nowrap uppercase tracking-widest border border-[#0f172a]/10">
              Evolution of Thought
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
