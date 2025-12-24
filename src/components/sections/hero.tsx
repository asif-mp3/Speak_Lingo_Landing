"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BubbleFace = ({ className = "", delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className={`w-12 h-12 bg-[#FFD54F] rounded-[14px] flex items-center justify-center border border-[#E6A700] shadow-lg ${className}`}
  >
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex gap-1.5">
        <div className="w-1 h-1 bg-[#2D3748] rounded-full"></div>
        <div className="w-1 h-1 bg-[#2D3748] rounded-full"></div>
      </div>
      <div className="w-4 h-2 border-b-2 border-[#2D3748] rounded-full"></div>
    </div>
  </motion.div>
);

const FloatingPill = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => (
  <motion.div
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay, duration: 0.6 }}
    className={`bg-white border border-[#e2e8f0] px-4 py-2 rounded-full shadow-md text-sm font-bold text-[#475569] flex items-center gap-2 ${className}`}
  >
    <div className="w-2 h-2 bg-[#FFD54F] rounded-full"></div>
    {text}
  </motion.div>
);

const DashboardMockup = () => {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#FFFAE7] border-2 border-[#6B5439]/10 rounded-[40px] shadow-2xl overflow-hidden p-6">
      {/* Sidebar */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] border-r border-[#6B5439]/10 p-6 flex flex-col gap-6">
        <div className="w-8 h-8 bg-[#FFD54F] rounded-lg"></div>
        <div className="space-y-4">
          <div className="w-full h-2 bg-[#6B5439]/10 rounded-full"></div>
          <div className="w-3/4 h-2 bg-[#6B5439]/10 rounded-full"></div>
          <div className="w-full h-2 bg-[#6B5439]/10 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-[20%] h-full p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="w-40 h-6 bg-[#2D3748] rounded-lg"></div>
            <div className="w-24 h-4 bg-[#64748b] rounded-lg"></div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#FFD54F] rounded-full"></div>
            <div className="w-10 h-10 bg-[#FFD54F] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 h-full pb-10">
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] border border-[#e2e8f0] p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FFFAE7] rounded-xl border border-[#FFD54F] flex items-center justify-center">
                <div className="w-6 h-1 bg-[#FFD54F] rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-4 bg-[#0f172a] rounded-lg"></div>
                <div className="w-2/3 h-4 bg-[#64748b] rounded-lg"></div>
              </div>
            </div>
            <div className="w-full h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1, delay: 1 }}
                className="h-full bg-[#FFD54F]"
              />
            </div>
          </div>

          {/* Card 2 - Visualizer */}
          <div className="bg-[#121212] rounded-[24px] p-6 shadow-sm flex flex-col items-center justify-center gap-6 overflow-hidden">
             <div className="flex items-end gap-1.5 h-12">
               {[0.4, 0.7, 1.0, 0.6, 0.8, 1.2, 0.9, 0.5, 0.8].map((h, i) => (
                 <motion.div
                   key={i}
                   animate={{ height: [h * 20, h * 40, h * 20] }}
                   transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                   className="w-1.5 bg-[#FFD54F] rounded-full"
                 />
               ))}
             </div>
             <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-full bg-brand-amber"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Pop-out Elements originating from Dashboard */}
      <BubbleFace className="absolute top-[20%] right-[-20px] z-30 scale-125" delay={0.8} />
      <BubbleFace className="absolute bottom-[10%] left-[15%] z-30 scale-90" delay={1.2} />
      
      <FloatingPill text="Fluency Check" className="absolute top-[40%] right-[-50px] z-30" delay={1.5} />
      <FloatingPill text="Perfect Accent" className="absolute bottom-[30%] right-[10%] z-30" delay={1.8} />
      <FloatingPill text="New Lesson" className="absolute top-[10%] left-[25%] z-30" delay={2} />

      {/* Decorative Wave Line coming out of dashboard */}
      <svg className="absolute top-[15%] right-[-100px] w-40 h-40 pointer-events-none opacity-20" viewBox="0 0 100 100">
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
          d="M0,50 Q25,25 50,50 T100,50" 
          stroke="#F9A825" 
          strokeWidth="2" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-[1280px] z-10">
        
        {/* Hero Content */}
        <div className="text-center max-w-[900px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD54F]/20 rounded-full mb-6 border border-[#FFD54F]/30"
          >
            <span className="w-2 h-2 bg-[#F9A825] rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-[#6B5439]">Powered by Conversation AI</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[56px] md:text-[88px] font-bold leading-[1] text-[#0f172a] mb-8 tracking-tight"
          >
            Speak fluently,<br />
            <span className="text-[#6B5439]">live naturally.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-[#475569] max-w-[680px] mx-auto mb-10 leading-relaxed"
          >
            The language app that feels like a real conversation. Speak, learn, and grow with SpeakLingo's immersive interface.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-[#6B5439] hover:bg-[#5A4530] text-white px-10 py-5 rounded-[20px] text-lg font-bold transition-all shadow-xl hover:scale-105 active:scale-95">
              Start Free Trial
            </button>
            <button className="bg-white border-2 border-[#6B5439]/10 text-[#6B5439] px-10 py-5 rounded-[20px] text-lg font-bold transition-all hover:bg-[#FFFAE7]">
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Dashboard Showcase with Pop-outs */}
        <motion.div 
          style={{ y: y1 }}
          className="relative max-w-[1000px] mx-auto"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold rounded-full blur-[100px] opacity-20 -z-10" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-amber rounded-full blur-[100px] opacity-20 -z-10" />
          
          <DashboardMockup />
        </motion.div>
      </div>

      {/* Background Motifs */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[20%] right-[5%] opacity-10 pointer-events-none"
      >
        <BubbleFace className="w-24 h-24" />
      </motion.div>
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[20%] left-[5%] opacity-10 pointer-events-none"
      >
        <BubbleFace className="w-32 h-32" />
      </motion.div>
    </section>
  );
}