"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, MoreHorizontal, User, Zap, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

const TypingBubble = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="flex flex-col items-start gap-1 max-w-[85%]">
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Old Way</span>
      </div>
      <div className="bg-slate-50 p-3.5 rounded-2xl rounded-tl-none border border-slate-200/60 shadow-sm">
        <p className="text-sm font-medium text-slate-500 leading-relaxed">
          {displayText}
          {displayText.length < text.length && (
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-3.5 bg-slate-400 ml-0.5 align-middle"
            />
          )}
        </p>
      </div>
    </div>
  );
};

const SypingBubble = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay / 1000, duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-end gap-1 ml-auto max-w-[85%]"
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-[9px] font-black uppercase tracking-widest text-[#6B5439]/40">Syping Live</span>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
      </div>
      <div className="bg-[#6B5439] p-4 rounded-2xl rounded-tr-none border border-[#5A4530] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD54F]/20 to-transparent" />
        <p className="text-sm font-bold text-white leading-relaxed relative z-10">
          {text}
        </p>
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-[#FFD54F]/10 to-transparent pointer-events-none"
        />
      </div>
      <div className="flex items-center gap-2 mt-0.5">
        <span className="text-[9px] font-black uppercase tracking-widest text-[#EAB308]">Momentum +120%</span>
      </div>
    </motion.div>
  );
};

export default function SypingChat() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#FFFAE7]/30 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#6B5439]/10 rounded-full shadow-sm"
          >
            <div className="w-2 h-2 bg-[#EAB308] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#6B5439]/60">Interactive Messenger Demo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f172a] leading-tight tracking-tight">
            Kill the Friction. <br className="hidden md:block" />
            Start <span className="text-[#EAB308]">Syping.</span>
          </h2>
          
          <p className="text-lg md:text-xl font-bold text-[#475569] max-w-[600px] mx-auto leading-relaxed">
            Stop wrestling with keys. Your thoughts flow instantly into any chat box, email, or document.
          </p>
        </div>

        <div className="relative max-w-[600px] mx-auto">
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-1/4 hidden lg:block"
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="text-green-500" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status</p>
                <p className="text-xs font-bold text-[#0f172a]">Zero Typos</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-12 bottom-1/4 hidden lg:block"
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FFD54F]/20 rounded-lg flex items-center justify-center">
                <Zap className="text-[#6B5439]" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Speed</p>
                <p className="text-xs font-bold text-[#0f172a]">3.5x Faster</p>
              </div>
            </div>
          </motion.div>

          {/* Compact Messenger Card */}
          <div className="relative bg-white rounded-[40px] border-[2px] border-[#6B5439]/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
            <div className="bg-white px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFD54F]/20 rounded-xl flex items-center justify-center border-2 border-[#FFD54F]">
                  <Mic size={20} className="text-[#6B5439]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm tracking-tight">SpeakLingo Flow</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-green-600">Active Session</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                  <MoreHorizontal size={16} />
                </div>
              </div>
            </div>

            <div className="p-6 h-[380px] overflow-y-auto space-y-6 bg-gradient-to-b from-white to-slate-50/50" key={key}>
              <TypingBubble 
                text="Umm, let me see... I want to talk about how typing is slow and I keep making typos..." 
                delay={1000} 
              />
              
              <SypingBubble 
                text="Syping kills the friction. No typos, no pauses, just pure momentum. 🔥" 
                delay={5000} 
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 8.5 }}
                className="flex justify-center"
              >
                <div className="bg-[#6B5439] px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#FFD54F] rounded-full animate-ping" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">Instant Flow Active</span>
                </div>
              </motion.div>
            </div>

            <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-3">
              <div className="flex-1 h-12 bg-slate-50 rounded-xl border border-slate-100 px-4 flex items-center gap-3">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-7 h-7 bg-[#FFD54F] rounded-full flex items-center justify-center"
                >
                  <Mic size={14} className="text-[#6B5439]" />
                </motion.div>
                <div className="h-3 bg-slate-200 rounded-full w-1/2 animate-pulse" />
              </div>
              <div className="w-12 h-12 bg-[#6B5439] rounded-xl flex items-center justify-center shadow-lg">
                <Send size={20} className="text-white ml-0.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-[#6B5439] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_4px_0_rgb(60,45,30)] flex items-center gap-3 transition-all hover:shadow-none hover:translate-y-[4px]"
          >
            Try Syping Messenger <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
