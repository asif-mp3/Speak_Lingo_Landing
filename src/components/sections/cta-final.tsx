"use client";

import React from 'react';
import Image from 'next/image';
import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const CTAFinal = () => {
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/images/682fa15adc306ab5bf96b30e_67ff6a871792c333db148107_-30.avif";

  return (
    <section className="py-24 px-6 md:px-20 bg-[#FBFAF0]">
      <div className="relative max-w-[1300px] mx-auto min-h-[700px] flex flex-col items-center justify-center overflow-hidden rounded-[56px] text-center border-[1.5px] border-black shadow-2xl">
        
        {/* Atmospheric Background Image */}
        <div className="absolute inset-0 z-0 scale-110">
          <Image
            src={backgroundImage}
            alt="Person running"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        </div>

        {/* Curved Dotted Line Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
           <svg className="w-full h-full opacity-60" viewBox="0 0 1000 700" fill="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M1000,100 Q800,400 1000,700" 
                stroke="white" 
                strokeWidth="3" 
                strokeDasharray="12 12" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                d="M1000,200 Q850,450 1000,600" 
                stroke="white" 
                strokeWidth="3" 
                strokeDasharray="12 12" 
              />
           </svg>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full max-w-4xl px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[64px] md:text-[130px] text-white leading-[0.85] mb-12 tracking-[-0.04em] drop-shadow-xl"
          >
            Start flowing
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-white text-[20px] md:text-[24px] font-bold leading-[1.3] mb-14 max-w-xl mx-auto tracking-tight"
          >
            Effortless voice dictation in every application: 4x faster than typing, AI commands and auto-edits.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#" 
              className="flex items-center gap-2 px-10 py-5 bg-[#FBFAF0] text-black font-bold text-[18px] rounded-[22px] hover:scale-[0.98] transition-transform duration-200 border-[1.5px] border-black shadow-xl"
            >
              <Mic size={24} className="fill-black" />
              Try Flow
            </a>

            <a 
              href="https://wisprflow.onelink.me/PguH/lw5h199m" 
              className="flex items-center gap-3 px-10 py-5 bg-[#E4D8FF] text-black font-bold text-[18px] rounded-[22px] hover:scale-[0.98] transition-transform duration-200 border-[1.5px] border-black shadow-xl"
            >
              <div className="w-5 h-5">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
              </div>
              Download for Windows
            </a>
          </motion.div>

          <p className="mt-8 font-sans text-white/60 text-[14px] font-bold tracking-tight">
            Available on Mac, Windows and iPhone
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;