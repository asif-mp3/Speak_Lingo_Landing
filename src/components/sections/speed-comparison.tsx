"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SpeedComparison = () => {
  return (
    <section className="bg-[#FBFAF0] py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1400px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-24 md:mb-40">
          <div className="relative inline-block mb-14">
            <h2 className="text-[64px] md:text-[130px] font-serif leading-[0.85] text-black tracking-[-0.04em]">
              4x faster<br />than typing
            </h2>
            {/* Lavender squiggle underline - more authentic shape */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-6 left-0 h-4 bg-[#E4D8FF] rounded-full opacity-70"
              style={{ clipPath: 'polygon(0% 20%, 10% 0%, 20% 30%, 30% 10%, 40% 40%, 50% 10%, 60% 30%, 70% 0%, 80% 20%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 80% 80%, 70% 100%, 60% 80%, 50% 100%, 40% 80%, 30% 100%, 20% 80%, 10% 100%, 0% 80%)' }}
            />
          </div>
          
          <p className="font-sans text-[22px] md:text-[28px] font-bold text-black/30 leading-[1.2] max-w-[800px] tracking-tight">
            After 150 years of using the same keyboard, voice that actually works is finally here. Speak naturally at the speed you think and let Flow handle the rest.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-3 px-10 py-5 bg-[#FBFAF0] border-[1.5px] border-black rounded-[24px] font-bold text-[18px] hover:scale-[0.98] transition-all shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-none active:translate-y-1">
              <div className="w-5 h-5">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </div>
              Try Flow
            </button>
            <button className="flex items-center gap-3 px-10 py-5 bg-[#E4D8FF] border-[1.5px] border-black rounded-[24px] font-bold text-[18px] hover:scale-[0.98] transition-all shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-none active:translate-y-1">
              <div className="w-5 h-5">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
              </div>
              Download for Windows
            </button>
          </div>
        </div>

        {/* Comparison Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-10 items-end max-w-[1250px] mx-auto">
          
          {/* Keyboard Speed Card */}
          <div className="bg-white border-[1.5px] border-black rounded-[48px] p-16 flex flex-col items-center justify-center text-center shadow-2xl h-[400px]">
            <span className="font-sans text-[13px] font-black text-black/20 uppercase tracking-[0.2em] mb-8">Keyboard</span>
            <div className="font-serif text-[80px] md:text-[100px] text-black leading-none mb-6 tracking-tight">
              45 <span className="text-[36px] font-sans font-bold text-black/20">wpm</span>
            </div>
            <p className="font-sans text-[18px] font-bold text-black/40 max-w-[260px] leading-tight tracking-tight">
              Average typing speed for professionals
            </p>
          </div>

          {/* Flow Speed Card */}
          <div className="relative group rounded-[64px] overflow-hidden h-[580px] bg-[#121212] border-[1.5px] border-black shadow-[0_40px_100px_rgba(0,0,0,0.1)] flex items-center justify-center">
            {/* Background Glow */}
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-brand-lavender/10 blur-[120px]"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center px-10 md:px-24 w-full">
              <span className="font-sans text-[13px] font-black text-white/20 uppercase tracking-[0.2em] mb-10">Flow</span>
              <div className="font-serif text-[120px] md:text-[180px] text-white leading-none mb-12 tracking-[-0.04em]">
                220 <span className="text-[48px] font-sans font-bold text-white/20">wpm</span>
              </div>
              
              {/* Live Transcription Simulation */}
              <div className="w-full max-w-[640px] p-10 bg-white/5 backdrop-blur-2xl rounded-[36px] border border-white/10">
                <p className="font-sans text-[22px] md:text-[26px] text-white font-bold leading-tight italic tracking-tight mb-10 text-left">
                  "I was thinking about the project timeline and how we can speed up the delivery without compromising..."
                </p>
                {/* Waveform Animation */}
                <div className="flex items-center justify-center gap-2 h-16">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [15, 50, 15] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }}
                      className="w-[4px] bg-white/80 rounded-full"
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