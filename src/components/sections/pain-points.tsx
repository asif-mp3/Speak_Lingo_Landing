"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle2, MousePointer2 } from 'lucide-react';

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const fullText = "Thinking is hard when I have to type every single letter...";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        // Simulate a backspace sometimes
        if (currentIndex > 10 && currentIndex % 15 === 0 && Math.random() > 0.5) {
          setText(prev => prev.slice(0, -3));
          currentIndex -= 3;
        } else {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        }
      } else {
        currentIndex = 0;
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] text-slate-400 leading-relaxed text-left h-20 overflow-hidden relative">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-1 h-3 bg-slate-400 ml-1"
      />
      <motion.div
        animate={{ 
          x: [10, 30, 20, 40], 
          y: [10, 5, 15, 10],
          opacity: [0.5, 1, 0.5] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 pointer-events-none"
      >
        <MousePointer2 size={12} className="text-slate-400" />
      </motion.div>
    </div>
  );
};

const SoundWaveAnimation = () => {
  return (
    <div className="flex items-center justify-center gap-1 h-20">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            height: [10, 40, 10],
            backgroundColor: ["#FFFAE7", "#FFD54F", "#FFFAE7"]
          }}
          transition={{ 
            duration: 1 + Math.random(), 
            repeat: Infinity,
            delay: i * 0.1 
          }}
          className="w-1.5 rounded-full bg-[#FFD54F]"
        />
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-32 h-32 rounded-full border border-[#FFD54F]/20 animate-ping" />
      </motion.div>
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
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="text-slate-400" size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-600 mb-1">The Old Way</h4>
              <p className="text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-wider">Manual Input</p>
              
              <div className="bg-white/50 rounded-xl p-4 w-full mb-6 border border-slate-100 min-h-[120px]">
                <TypingAnimation />
              </div>
              
              <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">40 WPM Barrier</div>
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
              
              <div className="w-16 h-16 bg-[#FFD54F] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#FFD54F]/20">
                <CheckCircle2 className="text-[#0f172a]" size={32} />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-1">The Syping Way</h4>
              <p className="text-xs font-medium text-[#FFD54F] mb-8 opacity-80 uppercase tracking-[0.2em]">Intuitive Speech</p>
              
              <div className="w-full relative mb-8">
                <SoundWaveAnimation />
              </div>

              <div className="space-y-2 w-full px-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-1 bg-[#FFD54F] rounded-full" 
                />
                <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                  <span>Input</span>
                  <span>150+ WPM</span>
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
