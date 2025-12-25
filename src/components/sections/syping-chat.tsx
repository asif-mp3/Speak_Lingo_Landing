"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, MoreHorizontal, User, Zap, MessageSquare, ArrowRight } from 'lucide-react';

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
    <div className="flex flex-col items-start gap-1 max-w-[80%]">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center">
          <User size={12} className="text-slate-500" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Old Way (Typing)</span>
      </div>
      <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
        <p className="text-sm font-medium text-slate-600 leading-relaxed">
          {displayText}
          {displayText.length < text.length && (
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-4 bg-slate-400 ml-0.5 align-middle"
            />
          )}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-1 opacity-40">
        <span className="text-[9px] font-bold text-slate-400 italic">Deleting typo...</span>
      </div>
    </div>
  );
};

const SypingBubble = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: delay / 1000, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-end gap-1 ml-auto max-w-[80%]"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#6B5439]/60">SpeakLingo (Syping)</span>
        <div className="w-5 h-5 bg-[#FFD54F] rounded-full flex items-center justify-center">
          <Mic size={12} className="text-[#6B5439]" />
        </div>
      </div>
      <div className="bg-[#6B5439] p-5 rounded-2xl rounded-tr-none border border-[#5A4530] shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD54F]/30 to-transparent" />
        <p className="text-sm md:text-base font-bold text-white leading-relaxed relative z-10">
          {text}
        </p>
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-[#FFD54F]/10 to-transparent pointer-events-none"
        />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-[#EAB308] rounded-full"
            />
          ))}
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#EAB308]">Momentum Active</span>
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
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[#FFFAE7]/50 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative bg-[#f8fafc] rounded-[48px] border-[2px] border-[#6B5439]/5 shadow-2xl overflow-hidden aspect-[4/5] md:aspect-square flex flex-col">
              {/* Messenger Header */}
              <div className="bg-white px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#FFD54F]/20 rounded-2xl flex items-center justify-center border-2 border-[#FFD54F]">
                      <Mic size={24} className="text-[#6B5439]" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0f172a] text-lg tracking-tight">SpeakLingo Flow</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-600">Syping Session Live</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <MoreHorizontal size={20} />
                  </div>
                </div>
              </div>

              {/* Chat Canvas */}
              <div className="flex-1 p-8 overflow-y-auto space-y-10 bg-gradient-to-b from-white to-[#f8fafc]" key={key}>
                <TypingBubble 
                  text="Umm, let me see... I want to talk about how typing is slow and I keep making typos and it's frustrating." 
                  delay={1000} 
                />
                
                <SypingBubble 
                  text="Syping kills the friction. My thoughts hit the screen at the speed of my voice. No typos, no pauses, just pure momentum. 🔥" 
                  delay={5000} 
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 8.5 }}
                  className="flex justify-center"
                >
                  <div className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-100 shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#EAB308] rounded-full animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Instant correction applied</span>
                  </div>
                </motion.div>
              </div>

              {/* Message Input Mockup */}
              <div className="p-6 bg-white border-t border-slate-100 flex items-center gap-4">
                <div className="flex-1 h-14 bg-slate-50 rounded-2xl border border-slate-100 px-6 flex items-center gap-3">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 bg-[#FFD54F] rounded-full flex items-center justify-center"
                  >
                    <Mic size={16} className="text-[#6B5439]" />
                  </motion.div>
                  <div className="h-4 bg-slate-200 rounded-full w-2/3 animate-pulse" />
                </div>
                <div className="w-14 h-14 bg-[#6B5439] rounded-2xl flex items-center justify-center shadow-lg">
                  <Send size={24} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#0f172a] leading-[0.95] tracking-tight">
                Kill the Friction. <br />
                Start <span className="text-[#EAB308]">Syping.</span>
              </h2>
              
              <p className="text-xl md:text-2xl font-bold text-[#475569] leading-relaxed max-w-[500px]">
                Stop wrestling with keys. SpeakLingo transforms your voice into a high-speed messenger, anywhere you work.
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#FFD54F]/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Zap className="text-[#6B5439]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-2">Zero Latency Flow</h4>
                  <p className="text-[#475569] font-medium leading-relaxed">Your thoughts flow instantly into any chat box, email, or document. No more "Typing..." bubbles for 5 minutes.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#6B5439]/5 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageSquare className="text-[#6B5439]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-2">Chat-First Design</h4>
                  <p className="text-[#475569] font-medium leading-relaxed">Optimized for natural conversation. Emojis, tone, and pacing are handled with intelligent precision.</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#6B5439] text-white px-10 py-5 rounded-[24px] text-xl font-bold shadow-[0_6px_0_rgb(60,45,30)] flex items-center gap-3"
            >
              Try Syping Messenger <ArrowRight size={24} />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
