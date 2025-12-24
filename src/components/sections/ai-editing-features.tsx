"use client";

import React from 'react';
import { Mic, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AIEditingFeatures = () => {
  return (
    <div className="bg-[#FFFAE7] w-full py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1240px]">
        {/* Main Concept Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center mb-48">
          
          {/* Product UI adapted for Landing Page - Scaled down Interface */}
          <div className="relative rounded-[56px] overflow-visible h-[550px] md:h-[750px] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border-[3px] border-[#6B5439]/5 bg-white">
            <div className="absolute inset-0 p-10 md:p-12 flex flex-col">
              {/* App Navigation Motif */}
              <div className="flex items-center justify-between mb-14">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#FFD54F] rounded-[18px] flex items-center justify-center shadow-lg">
                       <div className="w-7 h-7 border-b-[4px] border-[#2D3748] rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                       <div className="w-32 h-4 bg-[#0f172a] rounded-full"></div>
                       <div className="w-20 h-2 bg-[#64748b]/20 rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="w-11 h-11 bg-[#f8fafc] rounded-full border border-[#e2e8f0]"></div>
                    <div className="w-11 h-11 bg-[#FFD54F] rounded-full shadow-md"></div>
                 </div>
              </div>

              {/* Main Interaction Area - The "Product" View */}
              <div className="flex-1 bg-[#f8fafc] rounded-[44px] border-2 border-[#e2e8f0] p-10 relative overflow-hidden flex flex-col">
                 <div className="flex items-center justify-center gap-3 h-40 mb-12">
                   {[...Array(18)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ height: [40, 130, 40] }}
                       transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.08 }}
                       className="w-2.5 bg-[#FFD54F] rounded-full shadow-[0_0_15px_rgba(255,213,79,0.15)]"
                     />
                   ))}
                 </div>
                 
                 <div className="space-y-8 relative z-10">
                    <div className="p-8 bg-white rounded-[32px] border-[2px] border-[#FFD54F] shadow-[0_15px_40px_rgba(0,0,0,0.03)] transform hover:scale-[1.01] transition-transform">
                       <div className="flex items-center gap-3 mb-5">
                          <div className="w-3 h-3 bg-[#10b981] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                          <div className="text-[11px] font-black text-[#64748b]/60 uppercase tracking-[0.2em]">Real-time correction</div>
                       </div>
                       <p className="text-2xl md:text-3xl font-bold text-[#0f172a] leading-tight tracking-tight">
                          "I <span className="text-[#ef4444] line-through decoration-[3px] mr-1">am having</span> <span className="text-[#10b981]">have</span> a reservation for two people."
                       </p>
                    </div>
                    
                    <div className="p-6 bg-[#0f172a]/5 rounded-[28px] border-2 border-dashed border-[#0f172a]/10 opacity-60">
                       <p className="text-xl font-bold text-[#64748b] italic">
                          Next exercise: Ordering coffee...
                       </p>
                    </div>
                 </div>

                 {/* ELEMENTS POPPING OUT FROM INTERFACE */}
                 <motion.div 
                    initial={{ scale: 0, opacity: 0, rotate: 20 }}
                    whileInView={{ scale: 1.2, opacity: 1, rotate: -5 }}
                    viewport={{ once: true }}
                    className="absolute top-[25%] -right-8 w-16 h-16 bg-[#FFD54F] rounded-[20px] shadow-2xl flex items-center justify-center z-20 border-[4px] border-white"
                 >
                    <div className="w-7 h-3.5 border-b-4 border-[#0f172a] rounded-full"></div>
                 </motion.div>
                 
                 <motion.div 
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-[8%] -left-8 bg-[#6B5439] text-white px-8 py-4 rounded-[20px] font-bold text-lg shadow-2xl z-20"
                 >
                    Excellent Pronunciation!
                 </motion.div>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="max-w-[550px]">
            <div className="relative inline-block mb-12">
               <h2 className="text-[56px] md:text-[90px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
                  The interface<br /><span className="text-[#6B5439]">is the coach.</span>
               </h2>
               {/* Sun doodle re-integrated from Wispr style but matching SpeakLingo */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute -left-16 -top-16 w-32 h-32 opacity-10"
               >
                  <svg viewBox="0 0 100 100" fill="none" stroke="#6B5439" strokeWidth="4">
                    <circle cx="50" cy="50" r="20" />
                    {[...Array(12)].map((_, i) => (
                      <line key={i} x1="50" y1="20" x2="50" y2="4" transform={`rotate(${i * 30} 50 50)`} strokeLinecap="round" />
                    ))}
                  </svg>
               </motion.div>
            </div>
            
            <p className="text-[#475569]/60 text-[20px] md:text-[26px] font-bold leading-[1.3] mb-16 tracking-tight">
               No more abstract learning. Every lesson uses real UI components that scale and animate to help you visualize language structures.
            </p>
            
            <div className="flex flex-col gap-6">
               <div className="group flex items-center gap-6 p-8 bg-white rounded-[36px] border-[2px] border-[#6B5439]/5 shadow-sm hover:shadow-lg transition-all hover:scale-[1.01]">
                  <div className="w-16 h-16 bg-[#FFFAE7] rounded-[20px] flex items-center justify-center border-2 border-[#FFD54F] shadow-inner">
                     <Mic className="text-[#6B5439] group-hover:scale-110 transition-transform" size={32} />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-[#0f172a] mb-1.5 tracking-tight">Interactive Voice UI</h4>
                     <p className="text-[#64748b] text-base font-bold opacity-60">The interface reacts to every syllable you speak.</p>
                  </div>
               </div>
               
               <div className="group flex items-center gap-6 p-8 bg-white rounded-[36px] border-[2px] border-[#6B5439]/5 shadow-sm hover:shadow-lg transition-all hover:scale-[1.01]">
                  <div className="w-16 h-16 bg-[#FFD54F]/20 rounded-[20px] flex items-center justify-center border-2 border-[#FFD54F] shadow-inner">
                     <ArrowRight className="text-[#6B5439] group-hover:translate-x-2 transition-transform" size={32} />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-[#0f172a] mb-1.5 tracking-tight">Visual Progression</h4>
                     <p className="text-[#64748b] text-base font-bold opacity-60">Watch your fluency grow with scaled interface elements.</p>
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