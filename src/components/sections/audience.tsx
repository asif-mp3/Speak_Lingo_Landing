"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Slack, 
  Mail, 
  Search, 
  Framer, 
  Mic, 
  CheckCircle2, 
  Wifi, 
  Zap,
  Layout
} from 'lucide-react';

const apps = [
  { id: 'slack', name: 'SLACK', icon: Slack, color: '#4A154B' },
  { id: 'email', name: 'EMAIL', icon: Mail, color: '#EA4335' },
  { id: 'search', name: 'SEARCH', icon: Search, color: '#4285F4' },
  { id: 'figma', name: 'FIGMA', icon: Framer, color: '#F24E1E' },
];

export default function Audience() {
  const [activeApp, setActiveApp] = useState(apps[0]);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Hey team, let's push the new build to production. I've verified the offline syping engine and it's 3x faster than our previous typing benchmarks.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [activeApp]);

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px]">
        {/* Tab Navigation */}
        <div className="flex justify-center items-end gap-6 md:gap-12 mb-12">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                setActiveApp(app);
                setDisplayText("");
                setIsTyping(true);
              }}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className={`
                relative w-16 h-16 md:w-20 md:h-20 rounded-[24px] flex items-center justify-center transition-all duration-300
                ${activeApp.id === app.id 
                  ? 'bg-white shadow-[0_0_0_2px_#FFD54F,0_10px_30px_rgba(255,213,79,0.3)] scale-110' 
                  : 'bg-white/40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105'}
              `}>
                <app.icon 
                  size={32} 
                  className={activeApp.id === app.id ? 'text-[#0f172a]' : 'text-slate-400'} 
                  strokeWidth={1.5}
                />
              </div>
              <span className={`
                text-[10px] md:text-xs font-black tracking-[0.2em] transition-colors
                ${activeApp.id === app.id ? 'text-[#0f172a]' : 'text-slate-400'}
              `}>
                {app.name}
              </span>
            </button>
          ))}
        </div>

        {/* Demo Window */}
        <motion.div
          key={activeApp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
        >
          {/* Header */}
          <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4A154B]" />
              <span className="text-[11px] font-black tracking-widest text-[#0f172a] uppercase">
                {activeApp.name} — SYPING ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-black tracking-widest text-green-600 uppercase">
                OFFLINE AI READY
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-10 md:p-16 min-h-[340px] flex flex-col justify-center">
            <p className="text-2xl md:text-4xl font-medium text-[#0f172a] leading-[1.4] tracking-tight max-w-[800px]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-9 md:h-12 bg-[#FFD54F] ml-1 align-middle"
              />
            </p>
          </div>

          {/* Footer Overlay - Listening Pill */}
          <div className="absolute bottom-8 right-8">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-[#FFFAE7] border border-[#FFD54F]/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm"
            >
              <Mic size={18} className="text-[#F9A825]" />
              <span className="text-sm font-bold text-[#6B5439]">Listening...</span>
            </motion.div>
          </div>

          {/* Performance Badge - Floating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-24 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <Zap className="text-green-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Momentum</p>
              <p className="text-xs font-bold text-[#0f172a]">3x Faster</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
