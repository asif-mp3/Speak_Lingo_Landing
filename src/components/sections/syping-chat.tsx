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
  ZapIcon,
  Sparkles } from
'lucide-react';

const StatRow = ({ label, value, unit, icon: Icon, subLabel }: {label: string;value: string;unit?: string;icon?: any;subLabel?: string;}) =>
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
  </div>;


const ConnectorLine = ({ d }: {d: string;}) =>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
    <motion.path
    d={d}
    fill="none"
    stroke="#0f172a"
    strokeWidth="3"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 0.2 }}
    transition={{ duration: 1.5, ease: "easeInOut" }} />

    <motion.path
    d={d}
    fill="none"
    stroke="#F9A825"
    strokeWidth="3"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: [0, 0.5, 0] }}
    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />

  </svg>;


const CloudCallout = ({ label, description, position, icon: Icon }: {label: string;description: string;position: string;icon: any;}) => {
  return (
    <div className={`absolute z-20 hidden xl:block ${position}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-[32px] border-4 border-[#0f172a] shadow-[16px_16px_0_#0f172a] max-w-[300px] relative group hover:-translate-y-2 transition-transform">

        <div className="w-14 h-14 bg-[#FFD54F] rounded-2xl flex items-center justify-center mb-4 border-2 border-[#0f172a] shadow-sm">
          <Icon size={28} className="text-[#0f172a]" />
        </div>
        <h4 className="text-[18px] font-black text-[#0f172a] mb-2 uppercase tracking-tight leading-none">{label}</h4>
        <p className="text-[14px] font-bold text-slate-500 leading-tight">{description}</p>
      </motion.div>
    </div>);

};

export default function SypingChat() {
  return (
    <section className="py-32 bg-white overflow-hidden relative !w-full !h-[1559px]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-32 space-y-6">

          
          <h2 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-[0.85] tracking-tighter">
            Total Command. <br className="hidden md:block" />
            <span className="text-[#F9A825] italic underline decoration-[#0f172a]/10 underline-offset-[12px]">Zero Friction.</span>
          </h2>
        </div>

        <div className="relative h-[850px] flex items-center justify-center">
          {/* SVG Connector Layer */}
          <div className="absolute inset-0 pointer-events-none hidden xl:block">
            {/* Lines from Card to Symmetrical Clouds */}
            <ConnectorLine d="M 510 200 Q 460 150 180 150" />
            <ConnectorLine d="M 890 200 Q 940 150 1220 150" />
            <ConnectorLine d="M 510 425 L 180 425" />
            <ConnectorLine d="M 890 425 L 1220 425" />
            <ConnectorLine d="M 510 650 Q 460 750 180 750" />
            <ConnectorLine d="M 890 650 Q 940 750 1220 750" />
          </div>

          {/* Main App Card with 3D Phone Frame */}
          <div className="relative z-10 max-w-[380px] w-full transform perspective-[1000px] hover:rotate-y-2 transition-transform duration-700">
            {/* Phone Bezel/Frame */}
            <div className="bg-[#1e293b] rounded-[60px] p-[10px] shadow-[40px_60px_100px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)_inset] relative group">
              {/* Inner Screen */}
              <div className="bg-[#FFFCEE] rounded-[50px] p-6 border-[3px] border-[#0f172a] overflow-hidden relative min-h-[580px]">
                
                {/* Header Section */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img src="/1.webp" alt="Logo" className="w-10 h-10 object-contain" />
                    <span className="text-2xl font-black tracking-tight flex items-center">
                      <span className="text-[#0f172a]">Speak</span>
                      <span className="text-[#F9A825]">Lingo</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#FFD54F] rounded-full flex items-center justify-center border-2 border-[#0f172a] shadow-sm">
                      <Moon size={16} className="text-[#0f172a]" />
                    </div>
                    <div className="w-8 h-8 bg-[#FFD54F] rounded-full flex items-center justify-center border-2 border-[#0f172a] shadow-sm">
                      <Minus size={16} className="text-[#0f172a]" />
                    </div>
                  </div>
                </div>

                <div className="text-right text-[12px] font-bold text-slate-400 italic mb-2">
                  Type faster than typing!
                </div>

                <div className="w-full h-px bg-[#0f172a]/10 mb-3" />

                {/* Status Row */}
                <div className="flex justify-between items-center mb-2 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-blue-100 rounded-full" />
                    <span className="text-[12px] font-bold text-slate-500">Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-slate-500">Clarity :</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) =>
                      <div key={i} className="w-2 h-2 rounded-full bg-slate-100" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Waveform Visualization (Circles/Dots) */}
                <div className="bg-[#FFD54F] h-8 rounded-2xl flex items-center justify-center gap-2 px-6 mb-2 shadow-inner border-2 border-[#0f172a]/5 overflow-hidden">
                  {Array.from({ length: 24 }).map((_, i) =>
                  <motion.div
                    key={i}
                    animate={{ scale: [1, Math.random() * 1.5 + 0.5, 1] }}
                    transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-white rounded-full opacity-90" />

                  )}
                </div>

                <div className="text-center text-[11px] font-bold text-slate-400 italic mb-3">
                  Speak 'NL2' to insert a new line
                </div>

                {/* Transcription History Header */}
                <div className="flex items-center justify-between mb-2 px-1">
                  <h4 className="text-[14px] font-black text-[#0f172a]">Transcription History</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white border border-[#0f172a]/10 rounded-lg px-2 py-1">
                      <ChevronLeft size={14} className="text-slate-400" />
                      <span className="text-[11px] font-bold text-[#0f172a]">1/30</span>
                      <ChevronRight size={14} className="text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="bg-[#FFD54F]/80 rounded-[24px] p-4 border-2 border-[#0f172a]/5 shadow-inner min-h-[140px] mb-3 flex flex-col items-center justify-center text-center">
                  <motion.div
                    animate={{
                      y: [-4, 4, -4],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mb-3"
                  >
                    <img src="/logo.gif" alt="Syping Icon" className="w-12 h-12 object-contain opacity-40 grayscale group-hover:grayscale-0 transition-all" />
                  </motion.div>
                  <p className="text-[12px] font-bold text-[#0f172a]/40 italic">
                    Your transcribed text will appear here...
                  </p>
                </div>

                {/* Productivity Dashboard */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-[14px] font-black text-[#0f172a]">Productivity</h4>
                    <div className="flex gap-2">
                      <div className="w-8 h-6 bg-[#6B5439] rounded-lg flex items-center justify-center text-white"><BarChart2 size={14} /></div>
                    </div>
                  </div>

                  <div className="bg-[#FFD54F] p-3 rounded-[32px] border-2 border-[#0f172a]/5 space-y-2">
                    {/* Today Stats */}
                    <div>
                      <div className="flex justify-between items-center mb-1 px-1">
                        <span className="text-[12px] font-black text-[#6B5439]">Today</span>
                        <div className="flex gap-2">
                          <span className="text-[10px] font-black text-[#6B5439] flex items-center gap-1"><Flame size={12} className="text-orange-500" /> ×13</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <StatRow label="Saved" value="22" unit="m" icon={ZapIcon} />
                        <StatRow label="Words" value="1.2" unit="K" />
                        <StatRow label="WPM" value="134" />
                      </div>
                    </div>

                    {/* Lifetime Stats */}
                    <div>
                      <div className="flex justify-between items-center mb-1 px-1">
                        <span className="text-[12px] font-black text-[#6B5439]">Lifetime</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <StatRow label="Saved" value="43" unit="m" />
                        <StatRow label="Words" value="2.4" unit="K" />
                        <StatRow label="Trans" value="93" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons Grid */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                  { icon: MessageSquare, label: 'Chat' },
                  { icon: ChevronRight, label: 'Prompt' },
                  { icon: Copy, label: 'Task' },
                  { icon: Settings, label: 'Settings' },
                  { icon: Mic, label: 'Mic' },
                  { icon: Keyboard, label: 'Hotkey' }].
                  map((btn, i) =>
                  <div key={i} className="bg-[#FFD54F] rounded-xl border border-[#0f172a]/10 p-2 flex flex-col items-center justify-center gap-1 hover:bg-[#F9A825] transition-colors cursor-pointer group">
                      <btn.icon size={14} className="text-[#0f172a]/60 group-hover:text-[#0f172a]" />
                      <span className="text-[10px] font-black text-[#0f172a]/60 group-hover:text-[#0f172a]">{btn.label}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Tip Bar */}
                <div className="bg-[#FFD54F] rounded-full py-2 px-4 flex items-center gap-2 mb-3 border border-[#0f172a]/10 shadow-sm">
                  <Lightbulb size={14} className="text-[#0f172a]/60" />
                  <span className="text-[9px] font-black text-[#0f172a]/60 truncate">Minimize to tray to keep running</span>
                </div>

                {/* Footer Status */}
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 px-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Keyboard size={12} /> Shift</span>
                  </div>
                  <div className="bg-white border border-[#0f172a]/10 rounded-full px-3 py-0.5 flex items-center gap-1 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[#0f172a]/60">Live</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Symmetrical Architecture Callouts */}
          <CloudCallout
            label="Offline Core"
            description="Write from a plane or a bunker. No cloud dependency."
            icon={Zap}
            position="left-[2%] top-[150px] -translate-y-1/2" />

          <CloudCallout
            label="Zero Latency"
            description="Words appear faster than you can speak them."
            icon={Flame}
            position="right-[2%] top-[150px] -translate-y-1/2" />

          <CloudCallout
            label="Universal Paste"
            description="Direct insertion into any active text field or IDE."
            icon={Copy}
            position="left-[2%] top-[425px] -translate-y-1/2" />

          <CloudCallout
            label="Auto-Format"
            description="Perfect punctuation and structure without effort."
            icon={Sparkles}
            position="right-[2%] top-[425px] -translate-y-1/2" />

          <CloudCallout
            label="Context Aware"
            description="Understands your specific jargon and project terms."
            icon={Lightbulb}
            position="left-[2%] top-[700px] -translate-y-1/2" />

          <CloudCallout
            label="Encrypted Privacy"
            description="Military-grade on-device encryption for every word."
            icon={Shield}
            position="right-[2%] top-[700px] -translate-y-1/2" />

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
    </section>);

}