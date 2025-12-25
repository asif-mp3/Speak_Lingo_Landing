"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SpeedComparison = () => {
  return (
    <section className="bg-[#FFFAE7] py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1140px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16 md:mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="text-[40px] md:text-[72px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
              Fluency in weeks,<br /><span className="text-[#6B5439]">not years.</span>
            </h2>
            {/* Squiggle underline re-integrated with proper positioning */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute -bottom-5 left-0 h-2 bg-[#FFD54F] rounded-full opacity-60 z-[-1]"
              style={{ clipPath: 'polygon(0% 20%, 10% 0%, 20% 30%, 30% 10%, 40% 40%, 50% 10%, 60% 30%, 70% 0%, 80% 20%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 80% 80%, 70% 100%, 60% 80%, 50% 100%, 40% 80%, 30% 100%, 20% 80%, 10% 100%, 0% 80%)' }}
            />
          </div>
          
            <p className="text-[17px] md:text-[22px] font-bold text-[#475569]/70 leading-[1.3] max-w-[650px] tracking-tight mb-12">
              Stop memorizing vocabulary lists. SpeakLingo's AI-driven interface creates an immersive environment where learning happens naturally.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[900px]">
              {[
                { label: "Hours Saved", value: "240+", icon: "⏱️" },
                { label: "Fluency Gain", value: "4x", icon: "🚀" },
                { label: "Accuracy", value: "99%", icon: "🎯" },
                { label: "Focus Score", value: "Max", icon: "🔥" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/50 border border-[#6B5439]/10 rounded-2xl p-4 shadow-sm"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-[#0f172a]">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#94a3b8]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>


        {/* Comparison Area - Fixing alignment and layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-end max-w-[1000px] mx-auto">
          
          {/* Traditional Method Card */}
          <div className="bg-white border-[2px] border-[#6B5439]/10 rounded-[32px] p-10 flex flex-col items-center justify-center text-center shadow-lg h-[300px] relative">
            <span className="font-sans text-[10px] font-black text-[#64748b]/40 uppercase tracking-[0.25em] mb-6">Traditional Methods</span>
            <div className="text-[60px] md:text-[72px] text-[#0f172a] font-bold leading-none mb-5 tracking-tight">
              12 <span className="text-[28px] font-medium text-[#64748b]/40">mo</span>
            </div>
            <p className="text-[15px] font-bold text-[#475569]/60 max-w-[210px] leading-tight tracking-tight">
              To reach basic conversational fluency
            </p>
            {/* Sad face bubble accent pop out */}
            <div className="absolute -top-3 -left-3 w-14 h-14 bg-[#f1f5f9] rounded-[16px] flex items-center justify-center border-2 border-[#e2e8f0] rotate-[-10deg] shadow-lg">
               <div className="flex flex-col items-center gap-0.5 opacity-30">
                 <div className="flex gap-1"><div className="w-1 h-1 bg-[#0f172a] rounded-full"></div><div className="w-1 h-1 bg-[#0f172a] rounded-full"></div></div>
                 <div className="w-4 h-2 border-t-[1.5px] border-[#0f172a] rounded-full mt-1"></div>
               </div>
            </div>
          </div>

          {/* SpeakLingo Card */}
          <div className="relative group rounded-[48px] overflow-hidden h-[440px] bg-[#0f172a] border-[2px] border-[#FFD54F]/20 shadow-2xl flex items-center justify-center">
            {/* Background Atmosphere */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#FFD54F]/5 blur-[80px]"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 w-full">
              <span className="font-sans text-[10px] font-black text-[#FFD54F]/40 uppercase tracking-[0.25em] mb-8">SpeakLingo Experience</span>
              <div className="text-[90px] md:text-[130px] text-[#FFD54F] font-bold leading-none mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(255,213,79,0.1)]">
                3 <span className="text-[36px] font-medium text-[#FFD54F]/40 tracking-normal">mo</span>
              </div>
              
              {/* Product Component (Interface Detail) */}
              <div className="w-full max-w-[500px] p-8 bg-white/5 backdrop-blur-3xl rounded-[28px] border border-white/10 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FFD54F] rounded-[12px] flex items-center justify-center shadow-[0_0_15px_rgba(255,213,79,0.15)]">
                         <div className="w-5 h-0.5 bg-[#0f172a] rounded-full"></div>
                      </div>
                      <div className="text-left">
                         <div className="text-white text-[16px] font-bold tracking-tight">Daily Mastery</div>
                         <div className="text-white/40 text-[10px] font-bold tracking-wide">AI PROGRESSIVE LEARNING</div>
                      </div>
                   </div>
                   <div className="text-[#FFD54F] text-lg font-black">+4x Faster</div>
                </div>
                {/* Interface Visualizer */}
                <div className="flex items-center justify-center gap-1.5 h-12">
                  {[...Array(24)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [12, 40, 12] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.03, ease: "easeInOut" }}
                      className="w-[3px] bg-[#FFD54F] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeedComparison;