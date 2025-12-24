"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BubbleFace = ({ className = "", delay = 0, scale = 1 }: { className?: string, delay?: number, scale?: number }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale, opacity: 1 }}
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
    className={`bg-white border border-[#e2e8f0] px-4 py-2 rounded-full shadow-md text-sm font-bold text-[#475569] flex items-center gap-2 whitespace-nowrap ${className}`}
  >
    <div className="w-2 h-2 bg-[#FFD54F] rounded-full"></div>
    {text}
  </motion.div>
);

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-[800px] aspect-[16/9] bg-white border-[2px] border-[#6B5439]/10 rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.06)] overflow-visible p-5 mx-auto">
      {/* Sidebar Mockup */}
      <div className="absolute left-0 top-0 bottom-0 w-[18%] border-r border-[#6B5439]/10 p-4 flex flex-col gap-4 overflow-hidden">
        <div className="w-6 h-6 bg-[#FFD54F] rounded-md"></div>
        <div className="space-y-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-1.5 bg-[#6B5439]/5 rounded-full" style={{ width: `${70 + Math.random() * 30}%` }}></div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-[18%] h-full p-5 flex flex-col gap-5">
        <div className="flex justify-between items-center mb-2">
          <div className="space-y-1.5">
            <div className="w-24 h-5 bg-[#2D3748] rounded-md"></div>
            <div className="w-16 h-2 bg-[#64748b]/20 rounded-lg"></div>
          </div>
          <div className="flex gap-2.5">
            <div className="w-8 h-8 bg-[#FFFAE7] border border-[#FFD54F] rounded-full flex items-center justify-center">
               <div className="w-3 h-3 bg-[#FFD54F] rounded-sm"></div>
            </div>
            <div className="w-8 h-8 bg-[#FFD54F] rounded-full shadow-sm"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 h-full pb-6">
          <div className="bg-[#FFFAE7]/30 rounded-[20px] border border-[#FFD54F]/20 p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-white rounded-lg border border-[#FFD54F]/30 shadow-sm flex items-center justify-center">
                <div className="w-4 h-1 bg-[#FFD54F] rounded-full"></div>
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-2.5 bg-[#0f172a] rounded-md"></div>
                <div className="w-3/4 h-2.5 bg-[#64748b]/30 rounded-md"></div>
              </div>
            </div>
            <div className="w-full h-1.5 bg-white rounded-full overflow-hidden border border-[#FFD54F]/10">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-[#FFD54F]"
              />
            </div>
          </div>

          <div className="bg-[#121212] rounded-[20px] p-5 shadow-xl flex flex-col items-center justify-center gap-4 overflow-hidden">
             <div className="flex items-end gap-1 h-8">
               {[0.5, 0.8, 1.2, 0.7, 1.0, 1.4, 0.9, 0.6, 1.1, 0.7, 0.9, 0.6].map((h, i) => (
                 <motion.div
                   key={i}
                   animate={{ height: [h * 12, h * 28, h * 12] }}
                   transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                   className="w-1 bg-[#FFD54F] rounded-full"
                 />
               ))}
             </div>
             <div className="w-full max-w-[100px] h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-brand-amber"
                />
             </div>
          </div>
        </div>
      </div>

      {/* POP OUT ELEMENTS - Positioned relative to dashboard but outside its clip */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <BubbleFace className="absolute -top-10 -right-6 scale-[1.1] pointer-events-auto" delay={0.8} />
        <BubbleFace className="absolute bottom-10 -left-8 scale-[0.8] pointer-events-auto" delay={1.2} />
        
        <FloatingPill text="Fluency Check" className="absolute top-[10%] -right-16 pointer-events-auto" delay={1.4} />
        <FloatingPill text="Perfect Accent" className="absolute bottom-[25%] -right-8 pointer-events-auto" delay={1.7} />
        <FloatingPill text="New Lesson" className="absolute -top-4 left-[25%] pointer-events-auto" delay={1.9} />
      </div>
    </div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const wavyY = useTransform(scrollY, [0, 1000], [0, -200]);
  const dashboardY = useTransform(scrollY, [0, 1000], [0, -50]);
  const textWavy = "speak naturally speak lingo speak naturally speak lingo speak naturally speak lingo speak naturally speak lingo";

  return (
    <section className="relative pt-[100px] pb-[60px] md:pt-[150px] md:pb-[100px] overflow-hidden bg-[#FFFAE7]">
      {/* Wavy Background Text Animation (from Wispr style) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-[0.03]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ y: wavyY }}
          className="w-[4000px] h-full"
        >
          <svg className="w-full h-full" viewBox="0 0 3000 800" fill="none">
            <path id="textPathHero" d="M0,450 Q400,200 800,450 T1600,450 T2400,450 T3200,450" fill="transparent" />
            <text className="font-sans text-[24px] uppercase tracking-[0.25em] font-black fill-brand-brown">
              <textPath href="#textPathHero" startOffset="0%">{textWavy} {textWavy} {textWavy}</textPath>
            </text>
          </svg>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1140px]">
        
        {/* Circular Floating Text Animation on Left (from Wispr style) */}
        <div className="absolute -left-12 top-20 w-[200px] h-[200px] pointer-events-none opacity-[0.05] hidden xl:block">
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="w-full h-full"
           >
             <svg viewBox="0 0 200 200" className="w-full h-full">
               <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" fill="transparent" />
               <text className="font-sans text-[8px] uppercase tracking-[0.25em] font-black fill-brand-brown">
                 <textPath href="#circlePath">
                    Learn by speaking • Experience fluency • Natural conversations • SpeakLingo
                 </textPath>
               </text>
             </svg>
           </motion.div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-[800px] mx-auto mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFD54F]/20 rounded-full mb-6 border border-[#FFD54F]/30 backdrop-blur-sm shadow-sm"
          >
            <span className="w-1.5 h-1.5 bg-[#F9A825] rounded-full animate-pulse shadow-[0_0_6px_rgba(249,168,37,0.5)]"></span>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#6B5439]">Powered by Conversation AI</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] md:text-[72px] font-bold leading-[1] text-[#0f172a] mb-6 tracking-tight"
          >
            Speak fluently,<br />
            <span className="text-[#6B5439]">live naturally.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-[20px] font-bold text-[#475569]/60 max-w-[580px] mx-auto mb-8 leading-[1.3] tracking-tight"
          >
            The language app that feels like a real conversation. Speak, learn, and grow with SpeakLingo's immersive interface.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-[#6B5439] hover:bg-[#5A4530] text-white px-8 py-3.5 rounded-[18px] text-[16px] font-bold transition-all shadow-[0_4px_0_rgb(60,45,30)] hover:shadow-[0_5px_0_rgb(60,45,30)] active:shadow-none active:translate-y-[4px]">
              Start Free Trial
            </button>
            <button className="bg-white border-2 border-[#6B5439]/10 text-[#6B5439] px-8 py-3.5 rounded-[18px] text-[16px] font-bold transition-all hover:bg-[#FFFAE7]">
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Dashboard Showcase with pop-outs - Proper layout */}
        <motion.div 
          style={{ y: dashboardY }}
          className="relative px-4"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-brand-gold rounded-full blur-[100px] opacity-[0.1] -z-10" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}