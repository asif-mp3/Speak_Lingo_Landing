"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award, Flame } from 'lucide-react';
import NumberFlow from '@number-flow/react';

export default function FinalCTA() {
  const [timeSaved, setTimeSaved] = useState(124);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSaved(prev => prev + Math.floor(Math.random() * 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black text-[#0f172a] mb-10 tracking-[-0.04em] leading-[0.95]">
              Every Minute <br />You Speak, <br />
              <span className="text-[#F9A825]">You Win.</span>
            </h2>

                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F9A825] via-[#FFD54F] to-[#F9A825]" />

                     <div className="text-7xl md:text-8xl font-black text-[#0f172a] mb-2 flex items-center justify-center gap-2">
                        <NumberFlow value={timeSaved} />
                        <span className="text-4xl text-[#F9A825]">hrs</span>
                     </div>

                     <div className="bg-[#FFFAE7] p-6 rounded-3xl border border-[#F9A825]/20">
                        <Award size={20} className="text-[#F9A825] mb-3" />
                        <h5 className="font-bold text-[#6B5439]">Double Week</h5>
                        <p className="text-xs font-bold text-[#6B5439]/50 uppercase tracking-wider">Current Tier</p>
                     </div>

                        <span className="text-sm font-bold text-[#F9A825]">84%</span>
                     </div>
                     <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "84%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#F9A825] to-[#FFD54F]"
                        />

                   </div>
                </div>
             </div>

             {/* Floating Microcopy */}
             <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-bold text-[#475569]/60 italic whitespace-nowrap">
               “Every second you Sype is a moment returned.”
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
