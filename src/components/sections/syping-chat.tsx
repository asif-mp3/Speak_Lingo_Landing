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
  Flame,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Copy,
  Trash2,
  Keyboard,
  Lightbulb,
  ZapIcon
} from 'lucide-react';

const StatRow = ({ label, value, unit, icon: Icon, subLabel }: { label: string, value: string, unit?: string, icon?: any, subLabel?: string }) => (
  <div className="bg-white p-3 rounded-xl border border-[#0f172a]/10 shadow-sm flex flex-col justify-between h-full relative overflow-hidden group hover:border-[#F9A825] transition-colors">
    <div className="flex justify-between items-start mb-1">
      <div className="text-[10px] font-black text-slate-400 uppercase tracking-tight">{label}</div>
      {Icon && <Icon size={12} className="text-[#0f172a]/20 group-hover:text-[#F9A825] transition-colors" />}
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-lg font-black text-[#0f172a] leading-none">{value}</span>
      {unit && <span className="text-[10px] font-bold text-slate-400">{unit}</span>}
    </div>
    {subLabel && <div className="text-[9px] font-bold text-slate-400 mt-1">{subLabel}</div>}
    <div className="absolute top-1 right-1 opacity-10 group-hover:opacity-20 transition-opacity">
      <ArrowRight size={14} className="-rotate-45" />
    </div>
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
        className="bg-white p-6 rounded-[32px] border-4 border-[#0f172a] shadow-[16px_16px_0_#0f172a] max-w-[300px] relative group hover:-translate-y-2 transition-transform"
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

        <div className="relative h-[1200px] flex items-center justify-center">
          {/* SVG Arrow Layer */}
          <div className="absolute inset-0 pointer-events-none hidden xl:block">
            {/* Arrows from Card to Symmetrical Clouds */}
            <Arrow id="core" d="M 460 400 Q 400 350 384 250" />
            <Arrow id="live" d="M 940 400 Q 1000 350 1016 250" />
            <Arrow id="history" d="M 460 600 L 384 600" />
            <Arrow id="stats" d="M 940 600 L 1016 600" />
            <Arrow id="tools" d="M 460 800 Q 400 850 384 950" />
            <Arrow id="privacy" d="M 940 800 Q 1000 850 1016 950" />
          </div>

          {/* Main App Card with 3D Phone Frame */}
          <div className="relative z-10 max-w-[480px] w-full transform perspective-[1000px] hover:rotate-y-2 transition-transform duration-700">
            {/* Phone Bezel/Frame */}
            <div className="bg-[#1e293b] rounded-[60px] p-[10px] shadow-[40px_60px_100px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)_inset] relative group">
              {/* Inner Screen */}
              <div className="bg-[#FFFCEE] rounded-[50px] p-6 border-[3px] border-[#0f172a] overflow-hidden relative min-h-[850px]">
                
                {/* Header Section */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src="/1.webp" alt="Logo" className="w-12 h-12 object-contain" />
                    <span className="text-3xl font-black tracking-tight flex items-center">
                      <span className="text-[#0f172a]">Speak</span>
                      <span className="text-[#F9A825]">Lingo</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-[#FFD54F] rounded-full flex items-center justify-center border-2 border-[#0f172a] shadow-sm">
                      <Moon size={18} className="text-[#0f172a]" />
                    </div>
                    <div className="w-10 h-10 bg-[#FFD54F] rounded-full flex items-center justify-center border-2 border-[#0f172a] shadow-sm">
                      <Minus size={18} className="text-[#0f172a]" />
                    </div>
                  </div>
                </div>

                <div className="text-right text-[12px] font-bold text-slate-400 italic mb-2">
                  Type faster than typing!
                </div>

                <div className="w-full h-px bg-[#0f172a]/10 mb-4" />

                {/* Status Row */}
                <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-100 rounded-full" />
                    <span className="text-[12px] font-bold text-slate-500">Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-slate-500">Clarity :</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-100" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Waveform Visualization (Circles/Dots) */}
                <div className="bg-[#FFD54F] h-12 rounded-2xl flex items-center justify-center gap-1.5 px-4 mb-2 shadow-inner border-2 border-[#0f172a]/5 overflow-hidden">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, Math.random() * 1.5 + 0.5, 1] }}
                      transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                      className="w-2 h-2 bg-white rounded-full opacity-90"
                    />
                  ))}
                </div>

                <div className="text-center text-[10px] font-bold text-slate-400 italic mb-6">
                  Speak 'NL2' to insert a new line
                </div>

                {/* Transcription History Header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <h4 className="text-[14px] font-black text-[#0f172a]">Transcription History</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white border border-[#0f172a]/10 rounded-lg px-2 py-1">
                      <ChevronLeft size={14} className="text-slate-400" />
                      <span className="text-[11px] font-bold text-[#0f172a]">1 / 30</span>
                      <ChevronRight size={14} className="text-slate-400" />
                    </div>
                    <div className="flex gap-1">
                      <div className="p-1 bg-white border border-[#0f172a]/10 rounded-lg"><ChevronUp size={14} className="text-slate-400" /><ChevronDown size={14} className="text-slate-400" /></div>
                      <div className="p-1 bg-white border border-[#0f172a]/10 rounded-lg"><Copy size={14} className="text-slate-400" /></div>
                      <div className="p-1 bg-white border border-[#0f172a]/10 rounded-lg text-red-400"><Trash2 size={14} /></div>
                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="bg-[#FFD54F]/80 rounded-[24px] p-5 border-2 border-[#0f172a]/5 shadow-inner min-h-[120px] mb-6">
                  <p className="text-[13px] font-bold text-[#0f172a]/40 italic">
                    Your transcribed text will appear here...
                  </p>
                </div>

                {/* Productivity Dashboard */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-[14px] font-black text-[#0f172a]">Productivity Dashboard</h4>
                    <div className="flex gap-1">
                      <div className="w-8 h-6 bg-[#6B5439] rounded flex items-center justify-center text-white"><BarChart2 size={14} /></div>
                      <div className="w-8 h-6 bg-[#FFD54F] border border-[#0f172a]/10 rounded flex items-center justify-center text-[#6B5439]"><Trophy size={14} /></div>
                    </div>
                  </div>

                  <div className="bg-[#FFD54F] p-4 rounded-[32px] border-2 border-[#0f172a]/5 space-y-4">
                    {/* Today Stats */}
                    <div>
                      <div className="flex justify-between items-center mb-2 px-1">
                        <span className="text-[12px] font-black text-[#6B5439]">Today</span>
                        <div className="flex gap-2">
                          <span className="text-[10px] font-black text-[#6B5439] flex items-center gap-1"><Flame size={12} className="text-orange-500" /> ×13</span>
                          <span className="text-[10px] font-black text-[#6B5439] flex items-center gap-1">❄️ ×1</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <StatRow label="Saved" value="22" unit="m 3s" icon={ZapIcon} />
                        <StatRow label="Words" value="1.2" unit="K" />
                        <StatRow label="WPM" value="134" />
                      </div>
                      <div className="mt-2 bg-white/40 rounded-full h-4 overflow-hidden relative border border-[#0f172a]/5 flex items-center">
                        <div className="bg-[#6B5439] w-[21%] h-full rounded-full" />
                        <span className="absolute left-2 text-[8px] font-black text-white">21%</span>
                        <span className="absolute right-2 text-[8px] font-black text-[#6B5439]">8m to 🔷 Diamond</span>
                      </div>
                    </div>

                    {/* Lifetime Stats */}
                    <div>
                      <div className="flex justify-between items-center mb-2 px-1">
                        <span className="text-[12px] font-black text-[#6B5439]">Lifetime</span>
                        <span className="text-[10px] font-black text-[#6B5439] flex items-center gap-1"><Trophy size={12} className="text-orange-500" /> Apprentice</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <StatRow label="Time Saved" value="43" unit="m 50s" />
                        <StatRow label="Total Words" value="2.4" unit="K" />
                        <StatRow label="Transcripts" value="93" />
                      </div>
                      <div className="mt-2 bg-white/40 rounded-full h-4 overflow-hidden relative border border-[#0f172a]/5 flex items-center">
                        <div className="bg-[#6B5439] w-[16%] h-full rounded-full" />
                        <span className="absolute left-2 text-[8px] font-black text-white">16%</span>
                        <span className="absolute right-2 text-[8px] font-black text-[#6B5439]">2.5K XP to ⚡ Adept</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: MessageSquare, label: 'Chat' },
                    { icon: ChevronRight, label: 'Prompt' },
                    { icon: Copy, label: 'Task' },
                    { icon: Settings, label: 'Settings' },
                    { icon: Mic, label: 'Mic' },
                    { icon: Keyboard, label: 'Hotkey' }
                  ].map((btn, i) => (
                    <div key={i} className="bg-[#FFD54F] rounded-xl border border-[#0f172a]/10 p-3 flex items-center justify-center gap-2 hover:bg-[#F9A825] transition-colors cursor-pointer group">
                      <btn.icon size={16} className="text-[#0f172a]/60 group-hover:text-[#0f172a]" />
                      <span className="text-[11px] font-black text-[#0f172a]/60 group-hover:text-[#0f172a]">{btn.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Tip Bar */}
                <div className="bg-[#FFD54F] rounded-full py-2 px-4 flex items-center gap-2 mb-4 border border-[#0f172a]/10 shadow-sm">
                  <Lightbulb size={14} className="text-[#0f172a]/60" />
                  <span className="text-[9px] font-black text-[#0f172a]/60">Minimize to system tray to keep the app running</span>
                </div>

                {/* Footer Status */}
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 px-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Keyboard size={12} /> Hotkey: Shift</span>
                    <span className="flex items-center gap-1">Mode: Standard</span>
                  </div>
                  <div className="bg-white border border-[#0f172a]/10 rounded-full px-3 py-1 flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-[#0f172a]/60">Connected</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Symmetrical Architecture Callouts */}
          <CloudCallout 
            label="Neural Core"
            description="The engine that turns sound into structure."
            icon={Zap}
            position="left-[6%] top-[250px] -translate-y-1/2"
          />
          <CloudCallout 
            label="Live Insight"
            description="Zero-latency visualization of thought flow."
            icon={Flame}
            position="right-[6%] top-[250px] -translate-y-1/2"
          />
          <CloudCallout 
            label="Smart Memory"
            description="Persistent history of every syped word."
            icon={MessageSquare}
            position="left-[6%] top-[600px] -translate-y-1/2"
          />
          <CloudCallout 
            label="Momentum"
            description="Real-time proof of productivity gains."
            icon={BarChart2}
            position="right-[6%] top-[600px] -translate-y-1/2"
          />
          <CloudCallout 
            label="Power Grid"
            description="One-click access to system commands."
            icon={Terminal}
            position="left-[6%] top-[950px] -translate-y-1/2"
          />
          <CloudCallout 
            label="Zero Trust"
            description="On-device processing keeps ideas safe."
            icon={Shield}
            position="right-[6%] top-[950px] -translate-y-1/2"
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
