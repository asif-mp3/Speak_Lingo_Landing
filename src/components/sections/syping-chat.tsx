"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mic,
  Moon,
  Minus,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Copy,
  Trash2,
  BarChart2,
  Trophy,
  MessageSquare,
  Terminal,
  CheckSquare,
  Settings,
  Keyboard,
  Zap,
  Shield,
  Info,
  Smile,
  ArrowRight,
  ArrowUpLeft,
  ArrowDownRight,
  ArrowUpRight,
  ArrowDownLeft} from
'lucide-react';

const CloudCallout = ({ label, description, position, arrowPath, icon: Icon }: { label: string, description: string, position: string, arrowPath: string, icon: any }) => {
  return (
    <div className={`absolute z-20 hidden xl:block ${position}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-5 rounded-[28px] border-2 border-[#0f172a] shadow-[12px_12px_0_#0f172a] max-w-[240px] relative group hover:-translate-y-1 transition-transform"
      >
        <div className="w-10 h-10 bg-[#FFD54F] rounded-2xl flex items-center justify-center mb-3 border border-[#E6A700]">
          <Icon size={20} className="text-[#0f172a]" />
        </div>
        <h4 className="text-[15px] font-black text-[#0f172a] mb-1 uppercase tracking-tight">{label}</h4>
        <p className="text-[12px] font-bold text-slate-500 leading-tight">{description}</p>
        
        {/* Animated Big Arrow */}
        <svg className="absolute top-1/2 left-full w-[160px] h-[100px] -translate-y-1/2 pointer-events-none" style={{ overflow: 'visible' }}>
          <motion.path
            d={arrowPath}
            fill="none"
            stroke="#F9A825"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle
            r="6"
            fill="#F9A825"
            initial={{ offset: 0 }}
            animate={{ offset: 1 }}
          >
            <animateMotion dur="3s" repeatCount="indefinite" path={arrowPath} />
          </motion.circle>
        </svg>
      </motion.div>
    </div>
  );
};

export default function SypingChat() {
  return (
    <section className="py-32 bg-[#FFFAE7]/50 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#0f172a] rounded-full shadow-[4px_4px_0_#0f172a] mb-4">
            <div className="w-2 h-2 bg-[#F9A825] rounded-full animate-ping" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#0f172a]">The Control Center</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] leading-[0.9] tracking-tighter">
            Architected for <br className="hidden md:block" />
            <span className="text-[#F9A825] italic underline decoration-[#0f172a]/10 underline-offset-8">Infinite Momentum.</span>
          </h2>
        </div>

        <div className="relative h-[800px] flex items-center justify-center">
          {/* Main App Card - Centered and static for reference */}
          <div className="relative z-10 max-w-[420px] w-full transform rotate-1">
            <div className="bg-[#FFFAE7] border-4 border-[#0f172a] rounded-[48px] p-8 shadow-[24px_24px_0_rgba(15,23,42,0.1)] overflow-hidden relative ring-8 ring-[#FFFAE7]">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFD54F] rounded-2xl flex items-center justify-center border-2 border-[#0f172a] shadow-sm overflow-hidden p-1.5">
                      <img src="/1.webp" alt="Syping" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-2xl font-black tracking-tighter">
                      <span className="text-[#0f172a]">Syping</span>
                    </div>
                  </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#FFD54F] rounded-xl flex items-center justify-center border-2 border-[#0f172a] shadow-[4px_4px_0_#0f172a]">
                    <Moon size={18} className="text-[#0f172a]" />
                  </div>
                  <div className="w-10 h-10 bg-[#FFD54F] rounded-xl flex items-center justify-center border-2 border-[#0f172a] shadow-[4px_4px_0_#0f172a]">
                    <Minus size={18} className="text-[#0f172a]" />
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between mb-6 bg-[#0f172a]/5 p-3 rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[12px] font-black text-[#0f172a]">LIVE_ENGINE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) =>
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-[#F9A825]' : 'bg-slate-200'}`} />
                    )}
                  </div>
                </div>
              </div>

              {/* Waveform */}
              <div className="bg-[#0f172a] h-12 rounded-2xl flex items-center justify-center gap-1.5 px-6 mb-8 shadow-lg border border-white/10 overflow-hidden">
                {Array.from({ length: 40 }).map((_, i) =>
                <motion.div
                  key={i}
                  animate={{ height: [8, Math.random() * 24 + 8, 8] }}
                  transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                  className="w-1 bg-[#FFD54F] rounded-full opacity-80" />
                )}
              </div>

              {/* Transcription History */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[14px] font-black text-[#0f172a] uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#F9A825]" />
                    History
                  </h4>
                </div>
                <div className="bg-white rounded-3xl p-5 border-2 border-[#0f172a]/10 shadow-inner min-h-[120px]">
                  <p className="text-[14px] font-bold text-slate-400 italic leading-relaxed">
                    Transcription stream initializing... speak now to see results.
                  </p>
                </div>
              </div>

              {/* Productivity Dashboard */}
              <div className="mb-8">
                <div className="bg-[#FFD54F] p-5 rounded-[32px] border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[13px] font-black text-[#0f172a] uppercase">Speed Stats</span>
                    <Trophy size={16} className="text-[#0f172a]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <StatCard label="WPM" value="134" />
                    <StatCard label="Saved" value="22m" />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="grid grid-cols-4 gap-3">
                {[Mic, Terminal, Settings, Globe].map((Icon, i) => (
                  <div key={i} className="aspect-square bg-white rounded-2xl border-2 border-[#0f172a] flex items-center justify-center shadow-[4px_4px_0_#0f172a] hover:bg-[#FFD54F] transition-colors cursor-pointer">
                    <Icon size={20} className="text-[#0f172a]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Callouts - Positioned around the card */}
          <CloudCallout 
            label="Voice Core"
            description="Sub-10ms latency voice processing engine."
            icon={Zap}
            position="left-[5%] top-[10%]"
            arrowPath="M 240 50 Q 320 50 400 150"
          />
          <CloudCallout 
            label="Neural Filter"
            description="AI-powered background noise cancellation."
            icon={Shield}
            position="right-[5%] top-[15%]"
            arrowPath="M -10 50 Q -80 50 -150 180"
          />
          <CloudCallout 
            label="Flow State"
            description="Automatic focus mode keeps distractions away."
            icon={BarChart2}
            position="left-[8%] bottom-[15%]"
            arrowPath="M 240 50 Q 350 50 420 -100"
          />
          <CloudCallout 
            label="Smart Sync"
            description="Real-time multi-device cloud synchronization."
            icon={Monitor}
            position="right-[8%] bottom-[10%]"
            arrowPath="M -10 50 Q -100 50 -180 -120"
          />
        </div>
      </div>
    </section>
  );
}

        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Ready to upgrade your workflow?</p>
          <button className="group bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_8px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[6px] border border-black flex items-center gap-3 !whitespace-pre-line !whitespace-pre-line">Download Syping for Desktop
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>);

}