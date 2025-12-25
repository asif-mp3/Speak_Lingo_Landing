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
    <section className="px-5 py-20 md:py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="mx-auto max-w-[1140px]">
        {/* Main Interface Container */}
        <div 
          className="relative bg-[#0f172a] rounded-[40px] overflow-hidden min-h-[600px] flex flex-col justify-start pt-16 pb-28 px-6 md:px-10 lg:px-16 border-2 border-[#6B5439]/10 shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
        >
          {/* Header Content Section */}
            <div className="relative z-20 text-white max-w-[640px]">
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Syping Everywhere</span>
                </div>
                <div className="px-4 py-1.5 bg-[#FFD54F] rounded-full border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0f172a]">Multi-Language Flow</span>
                </div>
              </div>

                <h2 className="text-white text-[48px] md:text-[80px] font-bold leading-[0.9] mb-8 tracking-[-0.04em]">
                  Your voice, <br /><span className="text-[#FFD54F]">in any language</span>
                </h2>
                <p className="text-[#cbd5e1]/80 text-lg md:text-2xl max-w-[520px] leading-relaxed mb-10 font-medium tracking-tight">
                  Sype in Japanese, French, or Spanish as naturally as you think. <span className="text-white font-bold">SpeakLingo</span> adapts to your accent and your rhythm.
                </p>

            </div>


          {/* CURVED PATH ANIMATION (from Wispr style) - Re-integrated with SpeakLingo Cards */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
              <motion.div 
                animate={{ x: [0, -1200] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[6%] left-0 flex items-center gap-12 w-[4000px] py-12"
              >
                {[...Array(6)].map((_, i) => (
                  <React.Fragment key={i}>
                    {languageCards.map((card, idx) => {
                       const angle = ((i * languageCards.length + idx) * 0.45);
                       const yOffset = Math.sin(angle) * 60;
                       const rotation = Math.cos(angle) * 6;
                       
                       return (
                        <div 
                          key={`${i}-${idx}`} 
                          className="shrink-0"
                          style={{ transform: `translateY(${yOffset}px) rotate(${rotation}deg)` }}
                        >
                            <div className="w-[240px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-7 shadow-[0_20px_40px_rgba(0,0,0,0.3)] group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                              <div className="flex items-center justify-between mb-6">
                                <div className="text-4xl filter drop-shadow-lg">{card.flag}</div>
                                <div className="w-10 h-10 bg-[#FFD54F] rounded-[14px] flex items-center justify-center shadow-[0_0_20px_rgba(255,213,79,0.2)]">
                                  <div className="w-5 h-5 bg-[#0f172a] rounded-full scale-[0.4] animate-pulse"></div>
                                </div>
                              </div>
                              <h4 className="text-[22px] font-bold text-white mb-1 tracking-tight">{card.name}</h4>
                              <p className="text-[#94a3b8] text-[11px] font-black uppercase tracking-[0.2em] mb-6">{card.level}</p>
                              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${card.progress}%` }}
                                  className="h-full bg-gradient-to-r from-[#FFD54F] to-[#EAB308]"
                                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                                />
                                <div className="absolute inset-0 bg-white/5 animate-pulse" />
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
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[10%] z-30 hidden lg:block"
          >
            <div className="w-20 h-20 bg-[#FFD54F] rounded-[24px] flex items-center justify-center border-[4px] border-[#0f172a] shadow-[0_12px_30px_rgba(255,213,79,0.12)]">
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#0f172a] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#0f172a] rounded-full"></div>
                </div>
                <div className="w-7 h-3 border-b-[3px] border-[#0f172a] rounded-full"></div>
              </div>
            </div>
            {/* Annotation Doodle */}
            <div className="absolute -bottom-5 -left-5 w-28 h-28 border-[1.5px] border-brand-gold/15 rounded-full scale-x-[1.3] rotate-[12deg] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakLingoShowcase;