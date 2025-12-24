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
    <section className="relative w-full overflow-hidden bg-[#0f172a] rounded-b-[64px] py-20 px-6 flex flex-col items-center border-b-2 border-[#FFD54F]/10">
      <div className="container relative z-10 mx-auto max-w-[1200px]">
        {/* Caption */}
        <div className="mb-14 flex justify-center">
          <p className="font-sans text-[14px] font-black tracking-[0.25em] text-white/40 uppercase text-center">
            The next generation of language learners is here
          </p>
        </div>

        {/* Text-based logos for clean look */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          {LOGO_ASSETS.map((logo, index) => (
            <span 
              key={index}
              className="text-white font-bold text-2xl tracking-tighter"
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
        className="absolute -bottom-10 right-[15%] w-24 h-24 bg-[#FFD54F] rounded-3xl z-20 flex items-center justify-center border-4 border-[#0f172a] shadow-xl"
      >
         <div className="w-10 h-10 border-b-4 border-[#0f172a] rounded-full"></div>
      </motion.div>
    </section>
  );
}