"use client";

import React from 'react';
import { Mic, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AIEditingFeatures = () => {
  return (
    <div className="bg-[#FFFAE7] w-full py-40 md:py-60 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1440px]">
        {/* Main Concept Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-center mb-72">
          
          {/* Product UI adapted for Landing Page - Scaled up Interface */}
          <div className="relative rounded-[72px] overflow-visible h-[650px] md:h-[900px] shadow-[0_50px_120px_rgba(0,0,0,0.1)] border-[4px] border-[#6B5439]/5 bg-white">
            <div className="absolute inset-0 p-12 md:p-16 flex flex-col">
              {/* App Navigation Motif */}
              <div className="flex items-center justify-between mb-20">
                 <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-[#FFD54F] rounded-[22px] flex items-center justify-center shadow-lg">
                       <div className="w-8 h-8 border-b-[5px] border-[#2D3748] rounded-full"></div>
                    </div>
                    <div className="space-y-1.5">
                       <div className="w-40 h-5 bg-[#0f172a] rounded-full"></div>
                       <div className="w-24 h-3 bg-[#64748b]/20 rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-14 h-14 bg-[#f8fafc] rounded-full border border-[#e2e8f0]"></div>
                    <div className="w-14 h-14 bg-[#FFD54F] rounded-full shadow-md"></div>
                 </div>
              </div>

              {/* Main Interaction Area - The "Product" View */}
              <div className="flex-1 bg-[#f8fafc] rounded-[56px] border-2 border-[#e2e8f0] p-12 relative overflow-hidden flex flex-col">
                 <div className="flex items-center justify-center gap-4 h-52 mb-16">
                   {[...Array(18)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ height: [50, 160, 50] }}
                       transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.08 }}
                       className="w-3 bg-[#FFD54F] rounded-full shadow-[0_0_20px_rgba(255,213,79,0.2)]"
                     />
                   ))}
                 </div>
                 
                 <div className="space-y-10 relative z-10">
                    <div className="p-10 bg-white rounded-[40px] border-[3px] border-[#FFD54F] shadow-[0_20px_50px_rgba(0,0,0,0.05)] transform hover:scale-[1.02] transition-transform">
                       <div className="flex items-center gap-4 mb-6">
                          <div className="w-3.5 h-3.5 bg-[#10b981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                          <div className="text-[13px] font-black text-[#64748b]/60 uppercase tracking-[0.2em]">Real-time correction</div>
                       </div>
                       <p className="text-3xl md:text-4xl font-bold text-[#0f172a] leading-tight tracking-tight">
                          "I <span className="text-[#ef4444] line-through decoration-[4px] mr-1">am having</span> <span className="text-[#10b981]">have</span> a reservation for two people."
                       </p>
                    </div>
                    
                    <div className="p-8 bg-[#0f172a]/5 rounded-[36px] border-2 border-dashed border-[#0f172a]/10 opacity-60">
                       <p className="text-2xl font-bold text-[#64748b] italic">
                          Next exercise: Ordering coffee...
                       </p>
                    </div>
                 </div>

                 {/* ELEMENTS POPPING OUT FROM INTERFACE */}
                 <motion.div 
                    initial={{ scale: 0, opacity: 0, rotate: 20 }}
                    whileInView={{ scale: 1.4, opacity: 1, rotate: -5 }}
                    viewport={{ once: true }}
                    className="absolute top-[25%] -right-12 w-20 h-20 bg-[#FFD54F] rounded-[24px] shadow-2xl flex items-center justify-center z-20 border-[6px] border-white"
                 >
                    <div className="w-8 h-4 border-b-4 border-[#0f172a] rounded-full"></div>
                 </motion.div>
                 
                 <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-[8%] -left-10 bg-[#6B5439] text-white px-10 py-5 rounded-[24px] font-bold text-xl shadow-2xl z-20"
                 >
                    Excellent Pronunciation!
                 </motion.div>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="max-w-[650px]">
            <div className="relative inline-block mb-16">
               <h2 className="text-[72px] md:text-[120px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
                  The interface<br /><span className="text-[#6B5439]">is the coach.</span>
               </h2>
               {/* Sun doodle re-integrated from Wispr style but matching SpeakLingo */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute -left-20 -top-20 w-40 h-40 opacity-10"
               >
                  <svg viewBox="0 0 100 100" fill="none" stroke="#6B5439" strokeWidth="4">
                    <circle cx="50" cy="50" r="20" />
                    {[...Array(12)].map((_, i) => (
                      <line key={i} x1="50" y1="20" x2="50" y2="4" transform={`rotate(${i * 30} 50 50)`} strokeLinecap="round" />
                    ))}
                  </svg>
               </motion.div>
            </div>
            
            <p className="text-[#475569]/60 text-[24px] md:text-[32px] font-bold leading-[1.2] mb-20 tracking-tight">
               No more abstract learning. Every lesson uses real UI components that scale and animate to help you visualize language structures.
            </p>
            
            <div className="flex flex-col gap-8">
               <div className="group flex items-center gap-8 p-10 bg-white rounded-[44px] border-2 border-[#6B5439]/5 shadow-sm hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="w-20 h-20 bg-[#FFFAE7] rounded-[24px] flex items-center justify-center border-2 border-[#FFD54F] shadow-inner">
                     <Mic className="text-[#6B5439] group-hover:scale-110 transition-transform" size={40} />
                  </div>
                  <div>
                     <h4 className="text-2xl font-bold text-[#0f172a] mb-2 tracking-tight">Interactive Voice UI</h4>
                     <p className="text-[#64748b] text-lg font-bold opacity-60">The interface reacts to every syllable you speak.</p>
                  </div>
               </div>
               
               <div className="group flex items-center gap-8 p-10 bg-white rounded-[44px] border-2 border-[#6B5439]/5 shadow-sm hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="w-20 h-20 bg-[#FFD54F]/20 rounded-[24px] flex items-center justify-center border-2 border-[#FFD54F] shadow-inner">
                     <ArrowRight className="text-[#6B5439] group-hover:translate-x-2 transition-transform" size={40} />
                  </div>
                  <div>
                     <h4 className="text-2xl font-bold text-[#0f172a] mb-2 tracking-tight">Visual Progression</h4>
                     <p className="text-[#64748b] text-lg font-bold opacity-60">Watch your fluency grow with scaled interface elements.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEditingFeatures;