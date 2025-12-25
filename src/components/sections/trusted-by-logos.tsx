"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGO_ASSETS = [
  { name: "Duolingo", opacity: 0.3 },
  { name: "Babbel", opacity: 0.3 },
  { name: "Rosetta Stone", opacity: 0.3 },
  { name: "Memrise", opacity: 0.3 },
  { name: "Busuu", opacity: 0.3 },
];

export default function TrustedByLogos() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f172a] rounded-b-[40px] py-16 px-6 flex flex-col items-center border-b-2 border-[#FFD54F]/10">
      <div className="container relative z-10 mx-auto max-w-[1140px]">
        {/* Caption */}
        <div className="mb-10 flex justify-center">
          <p className="font-sans text-[11px] font-black tracking-[0.25em] text-white/30 uppercase text-center">
            The next generation of language learners is here
          </p>
        </div>

        {/* Text-based logos for clean look */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {LOGO_ASSETS.map((logo, index) => (
            <span 
              key={index}
              className="text-white font-bold text-xl tracking-tighter"
              style={{ opacity: logo.opacity }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>

      {/* Interface accent pooping out */}
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -bottom-8 right-[15%] w-20 h-20 bg-[#FFD54F] rounded-[24px] z-20 flex items-center justify-center border-[6px] border-[#0f172a] shadow-xl overflow-hidden p-3"
      >
         <img src="/1.webp" alt="Logo" className="w-full h-full object-contain" />
      </motion.div>
    </section>
  );
}