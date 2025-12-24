"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTAFinal = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#FFFAE7]">
      <div className="relative max-w-[1300px] mx-auto min-h-[700px] flex flex-col items-center justify-center overflow-hidden rounded-[64px] text-center border-4 border-[#6B5439]/10 shadow-2xl bg-[#0f172a]">
        
        {/* Animated Background Motifs (derived from UI) */}
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
           {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               animate={{ 
                 y: [0, -40, 0],
                 x: [0, i % 2 === 0 ? 20 : -20, 0],
                 rotate: [0, 5, 0]
               }}
               transition={{ 
                 duration: 4 + i, 
                 repeat: Infinity, 
                 ease: "easeInOut",
                 delay: i * 0.5
               }}
               className="absolute"
               style={{ 
                 top: `${Math.random() * 100}%`, 
                 left: `${Math.random() * 100}%` 
               }}
             >
                <div className="w-16 h-16 bg-[#FFD54F] rounded-2xl flex items-center justify-center">
                   <div className="w-6 h-3 border-b-2 border-[#2D3748] rounded-full"></div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Floating Pills accents */}
        <motion.div 
          animate={{ x: [-20, 20] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[20%] left-[10%] bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-white font-bold hidden lg:block"
        >
          Daily Challenge
        </motion.div>
        
        <motion.div 
          animate={{ x: [20, -20] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-[20%] right-[10%] bg-[#FFD54F] px-6 py-3 rounded-full text-[#0f172a] font-bold hidden lg:block"
        >
          Start Lesson 14
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full max-w-4xl px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[64px] md:text-[120px] text-white font-bold leading-[0.9] mb-12 tracking-tight"
          >
            Start your<br /><span className="text-[#FFD54F]">adventure.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#cbd5e1] text-[22px] md:text-[28px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto tracking-tight"
          >
            Join 500,000+ learners who transformed their fluency with SpeakLingo's immersive product interface.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="bg-[#FFD54F] text-[#0f172a] px-12 py-6 rounded-[24px] font-bold text-xl hover:scale-105 transition-all shadow-xl active:scale-95">
              Get Started for Free
            </button>
            <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-12 py-6 rounded-[24px] font-bold text-xl hover:bg-white/20 transition-all">
              View All Courses
            </button>
          </motion.div>

          <p className="mt-12 text-[#94a3b8] text-[15px] font-bold tracking-widest uppercase">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;