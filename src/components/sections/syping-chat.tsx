"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mic,
  Moon,
  Minus,
  BarChart2,
  Trophy,
  MessageSquare,
  Terminal,
  Settings,
  Zap,
  Shield,
  Monitor,
  Globe,
  ArrowRight,
  Flame
} from 'lucide-react';

const StatCard = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-white/90 p-3 rounded-2xl border border-[#0f172a]/5 shadow-sm">
    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">{label}</div>
    <div className="text-lg font-black text-[#0f172a]">{value}</div>
  </div>
);

const Arrow = ({ d, id }: { d: string, id: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
    <defs>
      <marker
        id={`arrowhead-${id}`}
        markerWidth="10"
        markerHeight="7"
        refX="9"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#0f172a" />
      </marker>
    </defs>
    <motion.path
      d={d}
      fill="none"
      stroke="#0f172a"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="12 8"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      markerEnd={`url(#arrowhead-${id})`}
    />
    <motion.path
      d={d}
      fill="none"
      stroke="#F9A825"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </svg>
);

const CloudCallout = ({ label, description, position, icon: Icon }: { label: string, description: string, position: string, icon: any }) => {
  return (
    <div className={`absolute z-20 hidden xl:block ${position}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-[32px] border-4 border-[#0f172a] shadow-[16px_16px_0_#0f172a] max-w-[280px] relative group hover:-translate-y-2 transition-transform"
      >
        <div className="w-14 h-14 bg-[#FFD54F] rounded-2xl flex items-center justify-center mb-4 border-2 border-[#0f172a] shadow-sm">
          <Icon size={28} className="text-[#0f172a]" />
        </div>
        <h4 className="text-[18px] font-black text-[#0f172a] mb-2 uppercase tracking-tight leading-none">{label}</h4>
        <p className="text-[14px] font-bold text-slate-500 leading-tight">{description}</p>
      </motion.div>
    </div>
  );
};

export default function SypingChat() {
  return (
    <section className="py-32 bg-[#FFFAE7]/50 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-32 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#0f172a] rounded-full shadow-[6px_6px_0_#0f172a] mb-4">
            <div className="w-2.5 h-2.5 bg-[#F9A825] rounded-full animate-ping" />
            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#0f172a]">The Architecture of Speed</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-[0.85] tracking-tighter">
            Total Command. <br className="hidden md:block" />
            <span className="text-[#F9A825] italic underline decoration-[#0f172a]/10 underline-offset-[12px]">Zero Friction.</span>
          </h2>
        </div>

        <div className="relative h-[1100px] flex items-center justify-center">
          {/* SVG Arrow Layer */}
          <div className="absolute inset-0 pointer-events-none hidden xl:block">
            {/* Arrows from Card to Clouds */}
            {/* Core engine to top-left cloud */}
            <Arrow id="core" d="M 650 450 Q 500 400 350 250" />
            {/* Waveform to top-right cloud */}
            <Arrow id="live" d="M 800 480 Q 950 400 1080 280" />
            {/* History to middle-left cloud */}
            <Arrow id="history" d="M 620 600 Q 500 600 320 550" />
            {/* Stats to middle-right cloud */}
            <Arrow id="stats" d="M 850 750 Q 1000 750 1100 650" />
            {/* Tools to bottom-left cloud */}
            <Arrow id="tools" d="M 650 900 Q 550 950 350 950" />
            {/* Security to bottom-right cloud */}
            <Arrow id="privacy" d="M 820 900 Q 950 950 1100 900" />
          </div>

          {/* Main App Card */}
          <div className="relative z-10 max-w-[440px] w-full transform -rotate-1">
            <div className="bg-[#FFFAE7] border-4 border-[#0f172a] rounded-[56px] p-10 shadow-[32px_32px_0_rgba(15,23,42,0.1)] overflow-hidden relative ring-[12px] ring-[#FFFAE7]">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#FFD54F] rounded-2xl flex items-center justify-center border-2 border-[#0f172a] shadow-sm overflow-hidden p-2">
                      <img src="/1.webp" alt="Syping" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-3xl font-black tracking-tighter">
                      <span className="text-[#0f172a]">Syping</span>
                    </div>
                  </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#FFD54F] rounded-2xl flex items-center justify-center border-2 border-[#0f172a] shadow-[4px_4px_0_#0f172a]">
                    <Moon size={22} className="text-[#0f172a]" />
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border-2 border-[#0f172a] shadow-[4px_4px_0_#0f172a]">
                    <Minus size={22} className="text-[#0f172a]" />
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between mb-8 bg-[#0f172a]/5 p-4 rounded-3xl border border-[#0f172a]/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[13px] font-black text-[#0f172a] tracking-widest">LIVE_CORE_ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((i) =>
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-[#F9A825]' : 'bg-slate-200'}`} />
                    )}
                  </div>
                </div>
              </div>

              {/* Waveform */}
              <div className="bg-[#0f172a] h-16 rounded-[28px] flex items-center justify-center gap-2 px-8 mb-10 shadow-xl border border-white/10 overflow-hidden">
                {Array.from({ length: 32 }).map((_, i) =>
                <motion.div
                  key={i}
                  animate={{ height: [12, Math.random() * 32 + 12, 12] }}
                  transition={{ duration: 0.8 + Math.random(), repeat: Infinity }}
                  className="w-1.5 bg-[#FFD54F] rounded-full opacity-90" />
                )}
              </div>

              {/* Transcription History */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[15px] font-black text-[#0f172a] uppercase tracking-[0.2em] flex items-center gap-2">
                    <MessageSquare size={16} className="text-[#F9A825]" />
                    Stream
                  </h4>
                </div>
                <div className="bg-white rounded-[32px] p-6 border-2 border-[#0f172a]/10 shadow-inner min-h-[140px] flex items-center justify-center">
                  <p className="text-[15px] font-bold text-slate-400 italic text-center leading-relaxed">
                    Voice stream initializing... <br />Start syping to see magic.
                  </p>
                </div>
              </div>

              {/* Productivity Dashboard */}
              <div className="mb-10">
                <div className="bg-[#FFD54F] p-6 rounded-[40px] border-2 border-[#0f172a] shadow-[12px_12px_0_#0f172a]">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[14px] font-black text-[#0f172a] uppercase tracking-widest">Efficiency</span>
                    <Zap size={20} className="text-[#0f172a]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard label="WPM" value="148" />
                    <StatCard label="SAVED" value="34m" />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="grid grid-cols-4 gap-4">
                {[Mic, Terminal, Settings, Globe].map((Icon, i) => (
                  <div key={i} className="aspect-square bg-white rounded-2xl border-2 border-[#0f172a] flex items-center justify-center shadow-[6px_6px_0_#0f172a] hover:bg-[#FFD54F] transition-all cursor-pointer hover:-translate-y-1 active:translate-y-0 active:shadow-none">
                    <Icon size={24} className="text-[#0f172a]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Callouts - No Overlap */}
          <CloudCallout 
            label="Syping Core"
            description="The neural engine that turns sound into structure."
            icon={Zap}
            position="left-[5%] top-[10%]"
          />
          <CloudCallout 
            label="Live Stream"
            description="Zero-latency visualization of your thought flow."
            icon={Flame}
            position="right-[5%] top-[15%]"
          />
          <CloudCallout 
            label="Context History"
            description="Persistent memory of every word you've syped."
            icon={MessageSquare}
            position="left-[2%] top-[45%]"
          />
          <CloudCallout 
            label="Momentum Stats"
            description="Real-time proof of your productivity gains."
            icon={BarChart2}
            position="right-[2%] top-[50%]"
          />
          <CloudCallout 
            label="Power Tools"
            description="One-click access to system-level commands."
            icon={Terminal}
            position="left-[8%] bottom-[10%]"
          />
          <CloudCallout 
            label="Privacy Shield"
            description="On-device processing keeps your ideas yours."
            icon={Shield}
            position="right-[8%] bottom-[15%]"
          />
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
          <div className="flex items-center gap-4 text-[#475569]">
            <div className="h-px w-12 bg-[#0f172a]/10" />
            <p className="text-[12px] font-black uppercase tracking-[0.4em]">Ready for Liftoff?</p>
            <div className="h-px w-12 bg-[#0f172a]/10" />
          </div>
          <button className="group bg-[#0f172a] hover:bg-[#1e293b] text-white px-12 py-6 rounded-3xl text-2xl font-black transition-all shadow-[0_8px_0_rgb(0,0,0)] hover:shadow-[0_10px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[8px] border-2 border-black flex items-center gap-4">
            Start Syping Now
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
