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
  ArrowRight } from
'lucide-react';

const StatCard = ({ label, value, unit = "", icon: Icon }: any) =>
<div className="bg-white/80 p-3 rounded-xl border border-black/5 shadow-sm">
    <div className="flex justify-between items-start mb-1">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{label}</div>
      {Icon && <Icon size={12} className="text-slate-400" />}
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-sm font-black text-[#0f172a]">{value}</span>
      {unit && <span className="text-[10px] font-bold text-slate-400">{unit}</span>}
    </div>
  </div>;


const ActionButton = ({ icon: Icon, label, active = false }: any) =>
<button className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl transition-all ${active ? 'bg-[#FFD54F] shadow-[0_4px_0_rgb(230,167,0)] border border-black/10' : 'bg-[#FFD54F]/60 hover:bg-[#FFD54F] border border-black/5'}`}>
    <Icon size={18} className="text-[#6B5439]" />
    <span className="text-[11px] font-bold text-[#6B5439]">{label}</span>
  </button>;


export default function SypingChat() {
  return (
    <section className="py-24 bg-[#FFFAE7]/50 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#6B5439]/10 rounded-full shadow-sm mb-2">
            <div className="w-1.5 h-1.5 bg-[#F9A825] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#6B5439]/60">Interface Preview</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight tracking-tight">
            The Dashboard for <br className="hidden md:block" />
            <span className="text-[#F9A825]">Infinite Momentum.</span>
          </h2>
          
          <p className="text-lg md:text-xl font-bold text-slate-600 max-w-[640px] mx-auto leading-relaxed">
            Every feature designed to keep you in the flow. No menus, no friction, just pure expression.
          </p>
        </div>

        <div className="relative max-w-[440px] mx-auto scale-90 md:scale-100">
          {/* Main App Container */}
          <div className="bg-[#FFFAE7] border-2 border-[#F9A825]/30 rounded-[32px] p-6 shadow-[0_30px_100px_rgba(249,168,37,0.15)] overflow-hidden relative">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFD54F] rounded-xl flex items-center justify-center border border-[#E6A700] shadow-sm overflow-hidden p-1">
                    <img src="/1.webp" alt="Syping" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-xl font-black tracking-tighter">
                    <span className="text-[#0f172a]">Syping</span>
                  </div>
                </div>
              <div className="flex gap-2">
                <div className="w-9 h-9 bg-[#FFD54F] rounded-full flex items-center justify-center shadow-sm">
                  <Moon size={18} className="text-[#6B5439]" />
                </div>
                <div className="w-9 h-9 bg-[#FFD54F] rounded-full flex items-center justify-center shadow-sm">
                  <Minus size={18} className="text-[#6B5439]" />
                </div>
              </div>
            </div>

            <div className="text-right mb-6">
              <span className="text-[11px] font-bold text-slate-400 italic">Type faster than typing!</span>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400/30 rounded-full flex items-center justify-center">
                   <div className="w-1 h-1 bg-blue-400 rounded-full" />
                </div>
                <span className="text-[11px] font-bold text-slate-500">Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500">Clarity :</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) =>
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 5 ? 'bg-slate-200' : 'bg-slate-100'}`} />
                  )}
                </div>
              </div>
            </div>

            {/* Waveform */}
            <div className="bg-[#FFD54F] h-8 rounded-full flex items-center justify-center gap-1 px-4 mb-2 shadow-inner border border-black/5">
              {Array.from({ length: 40 }).map((_, i) =>
              <motion.div
                key={i}
                animate={{ height: [4, Math.random() * 12 + 4, 4] }}
                transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                className="w-1 bg-white/80 rounded-full" />

              )}
            </div>
            
            <div className="text-center mb-6">
              <span className="text-[10px] font-bold text-slate-400 italic">Speak 'NL2' to insert a new line</span>
            </div>

            {/* Transcription History */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[13px] font-black text-[#0f172a]">Transcription History</h4>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <button className="p-1 text-slate-400 hover:text-[#0f172a]"><ChevronLeft size={14} /></button>
                    <span className="text-[11px] font-bold text-slate-500">1 / 30</span>
                    <button className="p-1 text-slate-400 hover:text-[#0f172a]"><ChevronRight size={14} /></button>
                  </div>
                  <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
                    <button className="text-slate-400 hover:text-[#0f172a]"><ChevronUp size={14} className="-mb-1" /><ChevronDown size={14} className="-mt-1" /></button>
                    <button className="text-slate-400 hover:text-[#0f172a]"><Copy size={14} /></button>
                    <button className="text-red-300 hover:text-red-500"><Trash2 size={14} /></button>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFD54F]/80 min-h-[100px] rounded-2xl p-4 border border-[#E6A700]/30 shadow-inner">
                <p className="text-[13px] font-bold text-[#6B5439]/60 italic">Your transcribed text will appear here...</p>
              </div>
            </div>

            {/* Productivity Dashboard */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[13px] font-black text-[#0f172a]">Productivity Dashboard</h4>
                <div className="flex gap-2">
                  <div className="bg-[#6B5439] p-1 rounded-md"><BarChart2 size={14} className="text-white" /></div>
                  <div className="bg-[#FFD54F] p-1 rounded-md border border-[#E6A700]"><Trophy size={14} className="text-[#6B5439]" /></div>
                </div>
              </div>
              
              <div className="bg-[#FFD54F] p-4 rounded-3xl space-y-4 shadow-md border border-[#E6A700]/40">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[12px] font-black text-[#6B5439]">Today</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#6B5439]"><Zap size={12} className="text-blue-400" /> x1</span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#6B5439]"><Zap size={12} className="text-orange-500" /> x13</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <StatCard label="Saved" value="22m 3s" icon={ArrowRight} />
                    <StatCard label="Words" value="1.2K" icon={ArrowRight} />
                    <StatCard label="WPM" value="134" icon={ArrowRight} />
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/50 rounded-full overflow-hidden">
                      <div className="w-[21%] h-full bg-[#6B5439]/80 rounded-full" />
                    </div>
                    <span className="text-[10px] font-bold text-[#6B5439]">8m to Diamond</span>
                  </div>
                </div>

                <div>
                   <div className="flex justify-between items-center mb-2">
                    <span className="text-[12px] font-black text-[#6B5439]">Lifetime</span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#6B5439]"><Trophy size={12} className="text-orange-500" /> Apprentice</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <StatCard label="Time Saved" value="43m 50s" />
                    <StatCard label="Total Words" value="2.4K" />
                    <StatCard label="Transcripts" value="93" />
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/50 rounded-full overflow-hidden">
                      <div className="w-[16%] h-full bg-[#6B5439]/80 rounded-full" />
                    </div>
                    <span className="text-[10px] font-bold text-[#6B5439]">2.5K XP to Adept</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <ActionButton icon={MessageSquare} label="Chat" active />
              <ActionButton icon={Terminal} label="Prompt" />
              <ActionButton icon={CheckSquare} label="Task" />
              <ActionButton icon={Settings} label="Settings" />
              <ActionButton icon={Mic} label="Mic" />
              <ActionButton icon={Keyboard} label="Hotkey" />
            </div>

            {/* Footer Status */}
            <div className="bg-[#FFD54F]/60 p-2 rounded-xl border border-black/5 mb-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Info size={12} className="text-[#6B5439]" />
                <span className="text-[10px] font-bold text-[#6B5439]">Minimize to system tray to keep the app running</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-1.5">
                   <Keyboard size={12} className="text-slate-400" />
                   <span className="text-[10px] font-bold text-slate-500">Hotkey: Shift</span>
                 </div>
                 <div className="h-3 w-px bg-slate-200" />
                 <span className="text-[10px] font-bold text-slate-500">Mode: Standard</span>
               </div>
               <div className="bg-white px-2 py-1 rounded-full border border-black/5 flex items-center gap-1.5">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                 <span className="text-[10px] font-bold text-slate-600">Connected</span>
               </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-[9px] font-bold text-slate-300">© 2025 Varootabay.ai. All rights reserved.</p>
            </div>

          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 space-y-4 hidden xl:block">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 w-48">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <Shield className="text-green-500" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security</p>
                <p className="text-xs font-bold text-[#0f172a]">Private & Local</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 w-48">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Zap className="text-blue-500" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Speed</p>
                <p className="text-xs font-bold text-[#0f172a]">Instant Output</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Ready to upgrade your workflow?</p>
          <button className="group bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_8px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[6px] border border-black flex items-center gap-3 !whitespace-pre-line !whitespace-pre-line">Download Syping for Desktop
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>);

}