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
  ];

  return (
    <section className="px-5 py-24 bg-[#FFFAE7]">
      <div className="mx-auto max-w-[1280px]">
        {/* Main Interface Container */}
        <div 
          className="relative bg-[#0f172a] rounded-[64px] overflow-hidden min-h-[800px] flex flex-col justify-start pt-24 pb-32 px-6 md:px-16 lg:px-24 border-2 border-[#6B5439]/20 shadow-2xl"
        >
          {/* Header Content */}
          <div className="z-10 text-white max-w-[750px]">
            <div className="flex gap-3 mb-12">
              <div className="px-5 py-2.5 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
                <span className="text-sm font-bold">Speech-First Learning</span>
              </div>
              <div className="px-5 py-2.5 bg-[#FFD54F] rounded-full border border-white/10">
                <span className="text-sm font-bold text-[#0f172a]">New Methods</span>
              </div>
            </div>

            <h2 className="text-white text-[64px] md:text-[96px] font-bold leading-[0.9] mb-10 tracking-tight">
              Learn while you<br /><span className="text-[#FFD54F]">actually speak</span>
            </h2>
            <p className="text-[#cbd5e1] text-[20px] md:text-[24px] max-w-[540px] leading-relaxed mb-16 font-medium">
              Every card, every pill, and every interaction on this page is pulled directly from the SpeakLingo interface.
            </p>
            
            <button className="bg-[#FFFAE7] text-[#0f172a] px-10 py-5 rounded-[24px] font-bold text-[18px] hover:scale-105 transition-all shadow-xl active:scale-95">
              Explore the Interface
            </button>
          </div>

          {/* Scrolling Interface Elements (Cards from UI) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[20%] left-0 flex items-center gap-12 w-[4000px]"
              >
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    {languageCards.map((card, idx) => (
                      <div 
                        key={`${i}-${idx}`} 
                        className="shrink-0 w-[280px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl"
                      >
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-4xl">{card.flag}</div>
                          <div className="w-10 h-10 bg-[#FFD54F] rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-[#0f172a] rounded-full scale-50"></div>
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">{card.name}</h4>
                        <p className="text-[#94a3b8] text-sm font-bold uppercase tracking-widest mb-6">{card.level}</p>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#FFD54F]" 
                            style={{ width: `${card.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Pop-out Bubble Face supporting elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[10%] z-20"
          >
            <div className="w-20 h-20 bg-[#FFD54F] rounded-[24px] flex items-center justify-center border-2 border-white/20 shadow-2xl">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#0f172a] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#0f172a] rounded-full"></div>
                </div>
                <div className="w-8 h-4 border-b-4 border-[#0f172a] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakLingoShowcase;