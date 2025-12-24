"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const wavyText = "what's going on so can you check in with them and see if the notes from yesterday's meeting were sent out, or if they need more time what's going on so can you check in with them and see if the notes from yesterday's meeting were sent out";

  return (
    <section className="relative overflow-hidden bg-[#FBFAF0] pt-[160px] pb-[120px] md:pt-[240px] md:pb-[200px]">
      {/* Curved Text Path Background - Moving Animation */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[4000px] h-full opacity-[0.04]"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 3000 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="textPathHero"
              d="M0,450 Q400,200 800,450 T1600,450 T2400,450 T3200,450"
              fill="transparent"
            />
            <text className="font-sans text-[32px] uppercase tracking-[0.2em] font-bold fill-black">
              <textPath href="#textPathHero" startOffset="0%">
                {wavyText} {wavyText} {wavyText}
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-20 max-w-[1280px]">
        
        {/* Circular Floating Text Animation on the Left */}
        <div className="absolute left-[-150px] md:left-[0px] top-[100px] md:top-[150px] w-[340px] h-[340px] pointer-events-none opacity-[0.08] hidden lg:block">
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="w-full h-full"
           >
             <svg viewBox="0 0 200 200" className="w-full h-full">
               <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" fill="transparent" />
               <text className="font-sans text-[9px] uppercase tracking-[0.25em] font-black">
                 <textPath href="#circlePath">
                    Also, I told the team the new timeline should be ready by Friday, although it's probably going to be a bit tight. I'm not totally sure.
                 </textPath>
               </text>
             </svg>
           </motion.div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-[1100px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[64px] md:text-[120px] leading-[0.9] text-black mb-12 tracking-[-0.04em]"
          >
            <motion.span 
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.2 }}
              className="text-black"
            >Don't type, </motion.span>
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >just speak</motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[20px] md:text-[24px] font-bold text-black max-w-[640px] mx-auto mb-14 leading-[1.25] tracking-tight"
          >
            The voice-to-text AI that turns speech into clear, polished writing in every app.
          </motion.p>

          {/* Download CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="https://wisprflow.onelink.me/PguH/lw5h199m"
              className="group relative inline-flex items-center justify-center bg-[#E4D8FF] border-[1.5px] border-black text-[#121212] font-bold py-5 px-10 rounded-[24px] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_6px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[4px] gap-3 text-lg"
            >
              <div className="w-5 h-5">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
              </div>
              Download for Windows
            </a>
            <p className="text-[15px] font-bold text-black/30 tracking-tight">
              Available on Mac, Windows and iPhone
            </p>
          </motion.div>
        </div>

        {/* Floating Waveform Element Bottom Center */}
        <div className="mt-40 relative flex flex-col items-center">
          <div className="relative">
            {/* Waveform Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-[#FBFAF0] border-[1.5px] border-black rounded-[44px] px-12 py-7 flex items-center gap-2 h-[100px] shadow-sm z-20 relative"
            >
              {[0.4, 0.7, 1.0, 0.6, 0.8, 1.2, 0.9, 0.5, 0.8, 0.6, 0.9, 0.5, 0.7, 0.4, 0.8, 0.6].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [h * 25, h * 50, h * 25] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                  className="w-[4px] bg-black rounded-full"
                />
              ))}
            </motion.div>

            {/* Scrolling Tape Ribbon Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[70px] bg-black rotate-[-3deg] flex items-center overflow-hidden z-10">
               <motion.div 
                 animate={{ x: [0, -1000] }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="flex whitespace-nowrap"
               >
                 {[...Array(10)].map((_, i) => (
                   <span key={i} className="text-white font-bold text-2xl uppercase tracking-[0.1em] px-10 flex items-center">
                     I also told the team the new timeline should be ready by Friday
                   </span>
                 ))}
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}