"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SpeedComparison = () => {
  return (
    <section className="bg-[#FFFAE7] py-32 md:py-56 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1400px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-32 md:mb-48">
          <div className="relative inline-block mb-16">
            <h2 className="text-[64px] md:text-[130px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
              Fluency in weeks,<br /><span className="text-[#6B5439]">not years.</span>
            </h2>
            {/* Squiggle underline re-integrated with proper positioning */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute -bottom-8 left-0 h-4 bg-[#FFD54F] rounded-full opacity-60 z-[-1]"
              style={{ clipPath: 'polygon(0% 20%, 10% 0%, 20% 30%, 30% 10%, 40% 40%, 50% 10%, 60% 30%, 70% 0%, 80% 20%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 80% 80%, 70% 100%, 60% 80%, 50% 100%, 40% 80%, 30% 100%, 20% 80%, 10% 100%, 0% 80%)' }}
            />
          </div>
          
          <p className="text-[22px] md:text-[32px] font-bold text-[#475569]/50 leading-[1.2] max-w-[850px] tracking-tight">
            Stop memorizing vocabulary lists. SpeakLingo's AI-driven interface creates an immersive environment where learning happens naturally.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <button className="bg-[#6B5439] text-white px-12 py-5 rounded-[24px] font-bold text-xl hover:scale-105 transition-all shadow-[0_6px_0_rgb(60,45,30)] active:shadow-none active:translate-y-[6px]">
              Start Your Journey
            </button>
            <button className="bg-white border-2 border-[#6B5439]/10 text-[#6B5439] px-12 py-5 rounded-[24px] font-bold text-xl hover:bg-[#FFFAE7] shadow-sm">
              Compare Methods
            </button>
          </div>
        </div>

        {/* Comparison Area - Fixing alignment and layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-12 items-end max-w-[1300px] mx-auto">
          
          {/* Traditional Method Card */}
          <div className="bg-white border-[3px] border-[#6B5439]/10 rounded-[56px] p-20 flex flex-col items-center justify-center text-center shadow-xl h-[460px] relative">
            <span className="font-sans text-[13px] font-black text-[#64748b]/40 uppercase tracking-[0.25em] mb-10">Traditional Methods</span>
            <div className="text-[90px] md:text-[110px] text-[#0f172a] font-bold leading-none mb-8 tracking-tight">
              12 <span className="text-[40px] font-medium text-[#64748b]/40">mo</span>
            </div>
            <p className="text-[19px] font-bold text-[#475569]/60 max-w-[280px] leading-tight tracking-tight">
              To reach basic conversational fluency
            </p>
            {/* Sad face bubble accent pop out */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#f1f5f9] rounded-3xl flex items-center justify-center border-2 border-[#e2e8f0] rotate-[-12deg] shadow-lg">
               <div className="flex flex-col items-center gap-1 opacity-40">
                 <div className="flex gap-2"><div className="w-1.5 h-1.5 bg-[#0f172a] rounded-full"></div><div className="w-1.5 h-1.5 bg-[#0f172a] rounded-full"></div></div>
                 <div className="w-6 h-3 border-t-2 border-[#0f172a] rounded-full mt-1"></div>
               </div>
            </div>
          </div>

          {/* SpeakLingo Card */}
          <div className="relative group rounded-[72px] overflow-hidden h-[640px] bg-[#0f172a] border-[3px] border-[#FFD54F]/20 shadow-2xl flex items-center justify-center">
            {/* Background Atmosphere */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#FFD54F]/5 blur-[120px]"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center px-10 md:px-24 w-full">
              <span className="font-sans text-[13px] font-black text-[#FFD54F]/40 uppercase tracking-[0.25em] mb-12">SpeakLingo Experience</span>
              <div className="text-[140px] md:text-[200px] text-[#FFD54F] font-bold leading-none mb-14 tracking-tight drop-shadow-[0_0_30px_rgba(255,213,79,0.2)]">
                3 <span className="text-[54px] font-medium text-[#FFD54F]/40 tracking-normal">mo</span>
              </div>
              
              {/* Product Component (Interface Detail) */}
              <div className="w-full max-w-[680px] p-12 bg-white/5 backdrop-blur-3xl rounded-[44px] border border-white/10 shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-[#FFD54F] rounded-[18px] flex items-center justify-center shadow-[0_0_30px_rgba(255,213,79,0.3)]">
                         <div className="w-7 h-1 bg-[#0f172a] rounded-full"></div>
                      </div>
                      <div className="text-left">
                         <div className="text-white text-[22px] font-bold tracking-tight">Daily Mastery</div>
                         <div className="text-white/40 text-[14px] font-bold tracking-wide">AI PROGRESSIVE LEARNING</div>
                      </div>
                   </div>
                   <div className="text-[#FFD54F] text-2xl font-black">+4x Faster</div>
                </div>
                {/* Interface Visualizer */}
                <div className="flex items-center justify-center gap-2.5 h-20">
                  {[...Array(24)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [20, 70, 20] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.03, ease: "easeInOut" }}
                      className="w-[4.5px] bg-[#FFD54F] rounded-full"
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