"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SpeedComparison = () => {
  return (
    <section className="bg-[#FBFAF0] py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1400px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-20 md:mb-32">
          <div className="relative inline-block mb-12">
            <h2 className="text-[56px] md:text-[110px] font-serif leading-[0.9] text-black tracking-[-0.04em]">
              4x faster<br />than typing
            </h2>
            {/* Lavender squiggle underline */}
            <div className="absolute -bottom-4 left-0 w-[60%] h-3 bg-[#E4D8FF] rounded-full opacity-60"></div>
          </div>
          
          <p className="font-sans text-[20px] md:text-[24px] font-bold text-black/40 leading-[1.3] max-w-[720px] tracking-tight">
            After 150 years of using the same keyboard, voice that actually works is finally here. 
            When you create, code, and respond faster, you free up time for more. 
            Speak naturally at the speed you think and let Flow handle the rest.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 px-10 py-5 bg-[#FBFAF0] border-[1.5px] border-black rounded-[22px] font-bold text-[18px] hover:scale-[0.98] transition-transform shadow-sm">
              <div className="w-5 h-5">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </div>
              Try Flow
            </button>
            <button className="flex items-center gap-3 px-10 py-5 bg-[#E4D8FF] border-[1.5px] border-black rounded-[22px] font-bold text-[18px] hover:scale-[0.98] transition-transform shadow-sm">
              <div className="w-5 h-5">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
              </div>
              Download for Windows
            </button>
          </div>
        </div>

        {/* Comparison Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 items-end max-w-[1200px] mx-auto">
          
          {/* Keyboard Speed Card */}
          <div className="bg-white border-[1.5px] border-black rounded-[40px] p-12 flex flex-col items-center justify-center text-center shadow-xl h-[360px]">
            <span className="font-sans text-[14px] font-bold text-black/40 uppercase tracking-widest mb-6">Keyboard</span>
            <div className="font-serif text-[72px] md:text-[80px] text-black leading-none mb-4">
              45 <span className="text-[32px] font-sans font-bold text-black/40">wpm</span>
            </div>
            <p className="font-sans text-[16px] font-bold text-black/60 max-w-[220px] leading-tight tracking-tight">
              Average typing speed for professionals
            </p>
          </div>

          {/* Flow Speed Card */}
          <div className="relative group rounded-[56px] overflow-hidden h-[500px] bg-[#121212] border-[1.5px] border-black shadow-2xl flex items-center justify-center">
            {/* Pulsing Visual Effect */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-brand-lavender/10 blur-[100px]"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-20">
              <span className="font-sans text-[14px] font-bold text-white/40 uppercase tracking-widest mb-8">Flow</span>
              <div className="font-serif text-[100px] md:text-[140px] text-white leading-none mb-10 tracking-[-0.04em]">
                220 <span className="text-[40px] font-sans font-bold text-white/40">wpm</span>
              </div>
              
              {/* Live Transcription Simulation */}
              <div className="w-full max-w-[600px] p-8 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10">
                <p className="font-sans text-[18px] md:text-[22px] text-white font-bold leading-tight italic tracking-tight mb-8">
                  "I was thinking about the project timeline and how we can speed up the delivery without compromising on the quality of the final result..."
                </p>
                {/* Waveform Animation */}
                <div className="flex items-center justify-center gap-1.5 h-12">
                  {[...Array(15)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [10, 40, 10] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                      className="w-[3px] bg-white rounded-full"
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