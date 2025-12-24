"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SpeakLingoShowcase = () => {
  const languageCards = [
    { name: "Spanish", level: "Intermediate", progress: 65, flag: "🇪🇸" },
    { name: "French", level: "Beginner", progress: 30, flag: "🇫🇷" },
    { name: "German", level: "Advanced", progress: 85, flag: "🇩🇪" },
    { name: "Japanese", level: "Beginner", progress: 15, flag: "🇯🇵" },
    { name: "Italian", level: "Fluent", progress: 95, flag: "🇮🇹" },
    { name: "Korean", level: "Intermediate", progress: 45, flag: "🇰🇷" },
  ];

  return (
    <section className="px-5 py-24 md:py-32 bg-[#FFFAE7] overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        {/* Main Interface Container */}
        <div 
          className="relative bg-[#0f172a] rounded-[48px] overflow-hidden min-h-[700px] flex flex-col justify-start pt-20 pb-32 px-6 md:px-12 lg:px-20 border-2 border-[#6B5439]/10 shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
        >
          {/* Header Content Section */}
          <div className="relative z-20 text-white max-w-[700px]">
            <div className="flex flex-wrap gap-2.5 mb-10">
              <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                <span className="text-[11px] font-black uppercase tracking-widest text-white/50">Speech-First Learning</span>
              </div>
              <div className="px-5 py-2 bg-[#FFD54F] rounded-full border border-white/10">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#0f172a]">New Methods</span>
              </div>
            </div>

            <h2 className="text-white text-[48px] md:text-[80px] font-bold leading-[0.9] mb-10 tracking-tight">
              Learn while you<br /><span className="text-[#FFD54F]">actually speak</span>
            </h2>
            <p className="text-[#cbd5e1]/50 text-lg md:text-[22px] max-w-[500px] leading-[1.3] mb-12 font-bold tracking-tight">
              Every card, every pill, and every interaction is pulled directly from the SpeakLingo interface.
            </p>
            
            <button className="bg-[#FFFAE7] text-[#0f172a] px-10 py-5 rounded-[20px] font-bold text-lg hover:scale-[1.03] transition-all shadow-xl active:translate-y-[4px]">
              Explore the Interface
            </button>
          </div>

          {/* CURVED PATH ANIMATION (from Wispr style) - Re-integrated with SpeakLingo Cards */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
              <motion.div 
                animate={{ x: [0, -1500] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[8%] left-0 flex items-center gap-16 w-[5000px] py-16"
              >
                {[...Array(6)].map((_, i) => (
                  <React.Fragment key={i}>
                    {languageCards.map((card, idx) => {
                       const angle = ((i * languageCards.length + idx) * 0.45);
                       const yOffset = Math.sin(angle) * 80;
                       const rotation = Math.cos(angle) * 8;
                       
                       return (
                        <div 
                          key={`${i}-${idx}`} 
                          className="shrink-0"
                          style={{ transform: `translateY(${yOffset}px) rotate(${rotation}deg)` }}
                        >
                          <div className="w-[240px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)] group hover:bg-white/10 transition-colors">
                            <div className="flex items-center justify-between mb-8">
                              <div className="text-4xl">{card.flag}</div>
                              <div className="w-10 h-10 bg-[#FFD54F] rounded-[12px] flex items-center justify-center shadow-[0_0_15px_rgba(255,213,79,0.2)]">
                                <div className="w-5 h-5 bg-[#0f172a] rounded-full scale-50"></div>
                              </div>
                            </div>
                            <h4 className="text-[22px] font-bold text-white mb-1.5 tracking-tight">{card.name}</h4>
                            <p className="text-[#94a3b8] text-[11px] font-black uppercase tracking-[0.2em] mb-6">{card.level}</p>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-white/5">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${card.progress}%` }}
                                className="h-full bg-[#FFD54F]"
                                transition={{ duration: 1.5, delay: 0.2 }}
                              />
                            </div>
                          </div>
                        </div>
                       );
                    })}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Central POP OUT element from dashboard UI */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[8%] right-[8%] z-30 hidden lg:block"
          >
            <div className="w-24 h-24 bg-[#FFD54F] rounded-[28px] flex items-center justify-center border-[5px] border-[#0f172a] shadow-[0_15px_40px_rgba(255,213,79,0.15)]">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#0f172a] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#0f172a] rounded-full"></div>
                </div>
                <div className="w-8 h-4 border-b-[4px] border-[#0f172a] rounded-full"></div>
              </div>
            </div>
            {/* Annotation Doodle */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-brand-gold/20 rounded-full scale-x-[1.4] rotate-[15deg] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakLingoShowcase;