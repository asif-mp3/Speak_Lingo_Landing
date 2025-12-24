"use client";

import React from 'react';
import { Mic, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AIEditingFeatures = () => {
  return (
    <div className="bg-[#FFFAE7] w-full py-24 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1140px]">
        {/* Main Concept Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-40">
          
          {/* Product UI adapted for Landing Page - Scaled down Interface */}
          <div className="relative rounded-[48px] overflow-visible h-[480px] md:h-[640px] shadow-[0_30px_80px_rgba(0,0,0,0.05)] border-[2px] border-[#6B5439]/5 bg-white">
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col">
              {/* App Navigation Motif */}
              <div className="flex items-center justify-between mb-6 md:mb-10">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FFD54F] rounded-[14px] flex items-center justify-center shadow-lg">
                       <div className="w-6 h-6 border-b-[3px] border-[#2D3748] rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                       <div className="w-24 h-3 bg-[#0f172a] rounded-full"></div>
                       <div className="w-16 h-1.5 bg-[#64748b]/20 rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-9 h-9 bg-[#f8fafc] rounded-full border border-[#e2e8f0]"></div>
                    <div className="w-9 h-9 bg-[#FFD54F] rounded-full shadow-md"></div>
                 </div>
              </div>

              {/* Main Interaction Area - The "Product" View */}
              <div className="flex-1 bg-[#f8fafc] rounded-[36px] border-2 border-[#e2e8f0] p-6 md:p-8 relative overflow-hidden flex flex-col">
                 <div className="flex items-center justify-center gap-2.5 h-24 md:h-32 mb-6 md:mb-10">
                   {[...Array(18)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ height: [30, 100, 30] }}
                       transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.08 }}
                       className="w-2 bg-[#FFD54F] rounded-full shadow-[0_0_10px_rgba(255,213,79,0.1)]"
                     />
                   ))}
                 </div>
                 
                 <div className="space-y-4 md:space-y-6 relative z-10">
                    <div className="p-5 md:p-6 bg-white rounded-[24px] border-[2px] border-[#FFD54F] shadow-[0_12px_30px_rgba(0,0,0,0.02)] transform hover:scale-[1.01] transition-transform">
                       <div className="flex items-center gap-2 mb-3 md:mb-4">
                          <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full shadow-[0_0_6px_rgba(16,185,129,0.3)]"></div>
                          <div className="text-[9px] font-black text-[#64748b]/60 uppercase tracking-[0.2em]">Real-time correction</div>
                       </div>
                       <p className="text-lg md:text-2xl font-bold text-[#0f172a] leading-tight tracking-tight">
                          "I <span className="text-[#ef4444] line-through decoration-[2px] mr-1">am having</span> <span className="text-[#10b981]">have</span> a reservation for two people."
                       </p>
                    </div>
                    
                    <div className="p-4 md:p-5 bg-[#0f172a]/5 rounded-[22px] border-[1.5px] border-dashed border-[#0f172a]/10 opacity-60">
                       <p className="text-base md:text-lg font-bold text-[#64748b] italic">
                          Next exercise: Ordering coffee...
                       </p>
                    </div>
                 </div>
              </div>

              {/* ELEMENTS POPPING OUT FROM INTERFACE - Moved outside overflow-hidden */}
              <motion.div 
                 initial={{ scale: 0, opacity: 0, rotate: 20 }}
                 whileInView={{ scale: 1.1, opacity: 1, rotate: -5 }}
                 viewport={{ once: true }}
                 className="absolute top-[35%] -right-8 w-14 h-14 bg-[#FFD54F] rounded-[18px] shadow-2xl flex items-center justify-center z-20 border-[4px] border-white"
              >
                 <div className="w-6 h-3 border-b-3 border-[#0f172a] rounded-full"></div>
              </motion.div>
              
              <motion.div 
                 initial={{ x: 60, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="absolute bottom-[4%] -left-8 bg-[#6B5439] text-white px-6 py-3 rounded-[16px] font-bold text-base shadow-2xl z-30"
              >
                 Excellent Pronunciation!
              </motion.div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="max-w-[480px]">
            <div className="relative inline-block mb-10">
               <h2 className="text-[48px] md:text-[72px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
                  The interface<br /><span className="text-[#6B5439]">is the coach.</span>
               </h2>
               {/* Sun doodle re-integrated from Wispr style but matching SpeakLingo */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute -left-12 -top-12 w-28 h-28 opacity-10"
               >
                  <svg viewBox="0 0 100 100" fill="none" stroke="#6B5439" strokeWidth="4">
                    <circle cx="50" cy="50" r="20" />
                    {[...Array(12)].map((_, i) => (
                      <line key={i} x1="50" y1="20" x2="50" y2="4" transform={`rotate(${i * 30} 50 50)`} strokeLinecap="round" />
                    ))}
                  </svg>
               </motion.div>
            </div>
            
            <p className="text-[#475569]/60 text-[19px] md:text-[24px] font-bold leading-[1.3] mb-12 tracking-tight">
               No more abstract learning. Every lesson uses real UI components that scale and animate to help you visualize language structures.
            </p>
            
            <div className="flex flex-col gap-5">
               <div className="group flex items-center gap-5 p-6 bg-white rounded-[28px] border-[2px] border-[#6B5439]/5 shadow-sm hover:shadow-lg transition-all hover:scale-[1.01]">
                  <div className="w-14 h-14 bg-[#FFFAE7] rounded-[18px] flex items-center justify-center border-2 border-[#FFD54F] shadow-inner">
                     <Mic className="text-[#6B5439] group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-[#0f172a] mb-1 tracking-tight">Interactive Voice UI</h4>
                     <p className="text-[#64748b] text-[15px] font-bold opacity-60">The interface reacts to every syllable you speak.</p>
                  </div>
               </div>
               
               <div className="group flex items-center gap-5 p-6 bg-white rounded-[28px] border-[2px] border-[#6B5439]/5 shadow-sm hover:shadow-lg transition-all hover:scale-[1.01]">
                  <div className="w-14 h-14 bg-[#FFD54F]/20 rounded-[18px] flex items-center justify-center border-2 border-[#FFD54F] shadow-inner">
                     <ArrowRight className="text-[#6B5439] group-hover:translate-x-2 transition-transform" size={28} />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-[#0f172a] mb-1 tracking-tight">Visual Progression</h4>
                     <p className="text-[#64748b] text-[15px] font-bold opacity-60">Watch your fluency grow with scaled interface elements.</p>
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