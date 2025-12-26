"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award, Flame } from 'lucide-react';
import NumberFlow from '@number-flow/react';

export default function FinalCTA() {
  const [timeSaved, setTimeSaved] = useState(124);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSaved((prev) => prev + Math.floor(Math.random() * 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden !w-full !h-[1135px]">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black text-[#0f172a] mb-10 tracking-[-0.04em] leading-[0.95]">
              Every Minute <br />You Sype, <br />
              <span className="text-[#F9A825]">You Win.</span>
            </h2>

              <p className="text-2xl md:text-3xl font-serif font-bold text-[#475569] mb-12 max-w-[500px] leading-tight">
                “Stop typing start syping”
              </p>

              <div className="space-y-6 mb-12">
                <p className="text-lg font-bold text-[#0f172a]">
                  The moment you start using Syping, the clock flips. Your ideas move 5× faster, your tasks finish before they interrupt your flow.
                </p>
                <p className="text-lg text-[#475569] font-medium">
                  Watch your <span className="text-[#6B5439] font-bold">Time Saved Counter</span> climb every day. Minutes become hours. Hours become freedom.
                </p>
              </div>

              <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 rounded-[24px] text-xl font-bold transition-all shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_5px_0_rgb(0,0,0)] flex items-center gap-3 group border border-black active:shadow-none active:translate-y-[6px]">
                Start Syping Now. <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
          </div>

          <div className="relative">
             <div className="bg-white rounded-[48px] p-12 border border-[#6B5439]/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F9A825] via-[#FFD54F] to-[#F9A825]" />
                
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                      <Flame className="text-orange-500" size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-[#0f172a]">Active Momentum</h4>
                      <p className="text-xs font-black uppercase tracking-widest text-[#94a3b8]">Lifetime Impact</p>
                   </div>
                </div>

                <div className="text-center py-8">
                   <div className="text-7xl md:text-8xl font-black text-[#0f172a] mb-2 flex items-center justify-center gap-2">
                      <NumberFlow value={timeSaved} />
                      <span className="text-4xl text-[#F9A825]">hrs</span>
                   </div>
                   <p className="text-xl font-bold text-[#475569]">Total Freedom Reclaimed</p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4">
                   <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <Clock size={20} className="text-[#6B5439] mb-3" />
                      <h5 className="font-bold text-[#0f172a]">1 Hour Saved</h5>
                      <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">Today's Streak</p>
                   </div>
                   <div className="bg-[#FFFAE7] p-6 rounded-3xl border border-[#F9A825]/20">
                      <Award size={20} className="text-[#F9A825] mb-3" />
                      <h5 className="font-bold text-[#6B5439]">Double Week</h5>
                      <p className="text-xs font-bold text-[#6B5439]/50 uppercase tracking-wider">Current Tier</p>
                   </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 space-y-2">
                   <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#94a3b8]">Progress to next life-level</span>
                      <span className="text-sm font-bold text-[#F9A825]">84%</span>
                   </div>
                   <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "84%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#F9A825] to-[#FFD54F]" />

                   </div>
                </div>
             </div>

             {/* Floating Microcopy */}
             <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-bold text-[#475569]/60 italic whitespace-nowrap">
               “Every second you Sype is a moment returned.”
             </p>
          </div>
        </div>
      </div>
    </section>);

}