"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SpeedComparison = () => {
  return (
    <section className="bg-[#FFFAE7] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1200px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-20 md:mb-28">
          <div className="relative inline-block mb-10">
            <h2 className="text-[48px] md:text-[90px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
              Fluency in weeks,<br /><span className="text-[#6B5439]">not years.</span>
            </h2>
            {/* Squiggle underline re-integrated with proper positioning */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute -bottom-6 left-0 h-3 bg-[#FFD54F] rounded-full opacity-60 z-[-1]"
              style={{ clipPath: 'polygon(0% 20%, 10% 0%, 20% 30%, 30% 10%, 40% 40%, 50% 10%, 60% 30%, 70% 0%, 80% 20%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 80% 80%, 70% 100%, 60% 80%, 50% 100%, 40% 80%, 30% 100%, 20% 80%, 10% 100%, 0% 80%)' }}
            />
          </div>
          
          <p className="text-[18px] md:text-[24px] font-bold text-[#475569]/50 leading-[1.3] max-w-[750px] tracking-tight">
            Stop memorizing vocabulary lists. SpeakLingo's AI-driven interface creates an immersive environment where learning happens naturally.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="bg-[#6B5439] text-white px-10 py-4 rounded-[20px] font-bold text-lg hover:scale-[1.02] transition-all shadow-[0_5px_0_rgb(60,45,30)] active:shadow-none active:translate-y-[5px]">
              Start Your Journey
            </button>
            <button className="bg-white border-2 border-[#6B5439]/10 text-[#6B5439] px-10 py-4 rounded-[20px] font-bold text-lg hover:bg-[#FFFAE7] shadow-sm">
              Compare Methods
            </button>
          </div>
        </div>

        {/* Comparison Area - Fixing alignment and layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 items-end max-w-[1100px] mx-auto">
          
          {/* Traditional Method Card */}
          <div className="bg-white border-[2px] border-[#6B5439]/10 rounded-[40px] p-12 flex flex-col items-center justify-center text-center shadow-lg h-[360px] relative">
            <span className="font-sans text-[11px] font-black text-[#64748b]/40 uppercase tracking-[0.25em] mb-8">Traditional Methods</span>
            <div className="text-[72px] md:text-[88px] text-[#0f172a] font-bold leading-none mb-6 tracking-tight">
              12 <span className="text-[32px] font-medium text-[#64748b]/40">mo</span>
            </div>
            <p className="text-[17px] font-bold text-[#475569]/60 max-w-[240px] leading-tight tracking-tight">
              To reach basic conversational fluency
            </p>
            {/* Sad face bubble accent pop out */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#f1f5f9] rounded-[20px] flex items-center justify-center border-2 border-[#e2e8f0] rotate-[-12deg] shadow-lg">
               <div className="flex flex-col items-center gap-1 opacity-40">
                 <div className="flex gap-1.5"><div className="w-1 h-1 bg-[#0f172a] rounded-full"></div><div className="w-1 h-1 bg-[#0f172a] rounded-full"></div></div>
                 <div className="w-5 h-2.5 border-t-2 border-[#0f172a] rounded-full mt-1"></div>
               </div>
            </div>
          </div>

          {/* SpeakLingo Card */}
          <div className="relative group rounded-[56px] overflow-hidden h-[520px] bg-[#0f172a] border-[2px] border-[#FFD54F]/20 shadow-2xl flex items-center justify-center">
            {/* Background Atmosphere */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#FFD54F]/5 blur-[100px]"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-16 w-full">
              <span className="font-sans text-[11px] font-black text-[#FFD54F]/40 uppercase tracking-[0.25em] mb-10">SpeakLingo Experience</span>
              <div className="text-[110px] md:text-[160px] text-[#FFD54F] font-bold leading-none mb-10 tracking-tight drop-shadow-[0_0_20px_rgba(255,213,79,0.15)]">
                3 <span className="text-[44px] font-medium text-[#FFD54F]/40 tracking-normal">mo</span>
              </div>
              
              {/* Product Component (Interface Detail) */}
              <div className="w-full max-w-[600px] p-10 bg-white/5 backdrop-blur-3xl rounded-[36px] border border-white/10 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FFD54F] rounded-[16px] flex items-center justify-center shadow-[0_0_20px_rgba(255,213,79,0.2)]">
                         <div className="w-6 h-1 bg-[#0f172a] rounded-full"></div>
                      </div>
                      <div className="text-left">
                         <div className="text-white text-[19px] font-bold tracking-tight">Daily Mastery</div>
                         <div className="text-white/40 text-[12px] font-bold tracking-wide">AI PROGRESSIVE LEARNING</div>
                      </div>
                   </div>
                   <div className="text-[#FFD54F] text-xl font-black">+4x Faster</div>
                </div>
                {/* Interface Visualizer */}
                <div className="flex items-center justify-center gap-2 h-14">
                  {[...Array(24)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [15, 50, 15] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.03, ease: "easeInOut" }}
                      className="w-[4px] bg-[#FFD54F] rounded-full"
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