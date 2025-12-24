"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTAFinal = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#FFFAE7]">
      <div className="relative max-w-[1140px] mx-auto min-h-[500px] flex flex-col items-center justify-center overflow-hidden rounded-[40px] text-center border-4 border-[#6B5439]/5 shadow-xl bg-[#0f172a]">
        
        {/* Animated Background Motifs (derived from UI) */}
        <div className="absolute inset-0 z-0 opacity-15 overflow-hidden">
           {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               animate={{ 
                 y: [0, -30, 0],
                 x: [0, i % 2 === 0 ? 15 : -15, 0],
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
                <div className="w-12 h-12 bg-[#FFD54F] rounded-[18px] flex items-center justify-center">
                   <div className="w-5 h-2 border-b-2 border-[#2D3748] rounded-full"></div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Floating Pills accents */}
        <motion.div 
          animate={{ x: [-15, 15] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[15%] left-[8%] bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-white text-sm font-bold hidden lg:block"
        >
          Daily Challenge
        </motion.div>
        
        <motion.div 
          animate={{ x: [15, -15] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-[15%] right-[8%] bg-[#FFD54F] px-5 py-2.5 rounded-full text-[#0f172a] text-sm font-bold hidden lg:block"
        >
          Start Lesson 14
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full max-w-3xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[80px] text-white font-bold leading-[0.9] mb-8 tracking-tight"
          >
            Start your<br /><span className="text-[#FFD54F]">adventure.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#cbd5e1]/60 text-lg md:text-[22px] font-medium leading-[1.3] mb-12 max-w-xl mx-auto tracking-tight"
          >
            Join 500,000+ learners who transformed their fluency with SpeakLingo's immersive product interface.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-[#FFD54F] text-[#0f172a] px-10 py-4 rounded-[18px] font-bold text-lg hover:scale-[1.02] transition-all shadow-lg">
              Get Started for Free
            </button>
            <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-4 rounded-[18px] font-bold text-lg hover:bg-white/20 transition-all">
              View All Courses
            </button>
          </motion.div>

          <p className="mt-10 text-[#94a3b8] text-[12px] font-black tracking-widest uppercase">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;