"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SpeedComparison = () => {
  return (
    <section className="bg-[#FFFAE7] py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1400px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-24 md:mb-40">
          <div className="relative inline-block mb-14">
            <h2 className="text-[64px] md:text-[120px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
              Fluency in weeks,<br /><span className="text-[#6B5439]">not years.</span>
            </h2>
            {/* Golden squiggle underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-6 left-0 h-4 bg-[#FFD54F] rounded-full opacity-60"
            />
          </div>
          
          <p className="font-sans text-[22px] md:text-[28px] font-bold text-[#475569] leading-[1.2] max-w-[800px] tracking-tight">
            Stop memorizing vocabulary lists. SpeakLingo's AI-driven interface creates an immersive environment where learning happens naturally.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-3 px-10 py-5 bg-[#6B5439] text-white rounded-[24px] font-bold text-[18px] hover:scale-105 transition-all shadow-xl active:scale-95">
              Start Your Journey
            </button>
            <button className="flex items-center gap-3 px-10 py-5 bg-white border-2 border-[#6B5439]/10 text-[#6B5439] rounded-[24px] font-bold text-[18px] hover:bg-[#FFFAE7] transition-all">
              Compare Methods
            </button>
          </div>
        </div>

        {/* Comparison Area - Reuse UI Pills as accents */}
        <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-10 items-end max-w-[1250px] mx-auto">
          
          {/* Traditional Method Card */}
          <div className="bg-white border-2 border-[#e2e8f0] rounded-[48px] p-16 flex flex-col items-center justify-center text-center shadow-xl h-[400px]">
            <span className="font-sans text-[13px] font-black text-[#64748b] uppercase tracking-[0.2em] mb-8">Traditional</span>
            <div className="text-[80px] md:text-[100px] text-[#0f172a] font-bold leading-none mb-6 tracking-tight">
              12 <span className="text-[36px] font-medium text-[#64748b]">months</span>
            </div>
            <p className="font-sans text-[18px] font-bold text-[#475569] max-w-[260px] leading-tight tracking-tight">
              To reach basic conversational fluency
            </p>
          </div>

          {/* SpeakLingo Card - Reusing Dashboard Motif */}
          <div className="relative group rounded-[64px] overflow-hidden h-[580px] bg-[#0f172a] border-2 border-[#FFD54F]/20 shadow-2xl flex items-center justify-center">
            {/* Background Glow */}
            <motion.div 
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-[#FFD54F]/10 blur-[120px]"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center px-10 md:px-24 w-full">
              <span className="font-sans text-[13px] font-black text-[#FFD54F]/40 uppercase tracking-[0.2em] mb-10">SpeakLingo</span>
              <div className="text-[120px] md:text-[180px] text-[#FFD54F] font-bold leading-none mb-12 tracking-tight">
                3 <span className="text-[48px] font-medium text-[#FFD54F]/40">months</span>
              </div>
              
              {/* UI Interface Element (Lesson Progress) */}
              <div className="w-full max-w-[640px] p-10 bg-white/5 backdrop-blur-2xl rounded-[36px] border border-white/10">
                <div className="flex justify-between items-center mb-8">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FFD54F] rounded-xl"></div>
                      <div className="text-left">
                         <div className="text-white font-bold text-lg">Daily Mastery</div>
                         <div className="text-white/40 text-sm">Real-world Practice</div>
                      </div>
                   </div>
                   <div className="text-[#FFD54F] font-bold">+25% faster</div>
                </div>
                {/* Visualizer from UI */}
                <div className="flex items-center justify-center gap-2 h-16">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [15, 50, 15] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }}
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