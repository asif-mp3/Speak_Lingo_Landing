"use client";

import React from 'react';
import { Mic, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AIEditingFeatures = () => {
  return (
    <div className="bg-[#FFFAE7] w-full py-32 md:py-56 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1440px]">
        {/* Main Concept Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center mb-64">
          
          {/* Product UI adapted for Landing Page */}
          <div className="relative rounded-[64px] overflow-hidden h-[600px] md:h-[850px] shadow-2xl border-4 border-[#6B5439]/10 bg-white">
            {/* Partial UI View */}
            <div className="absolute inset-0 p-12 flex flex-col">
              {/* App Navigation Motif */}
              <div className="flex items-center justify-between mb-16">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#FFD54F] rounded-2xl flex items-center justify-center shadow-lg">
                       <div className="w-6 h-6 border-b-4 border-[#2D3748] rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                       <div className="w-32 h-4 bg-[#0f172a] rounded-full"></div>
                       <div className="w-20 h-3 bg-[#64748b] rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="w-12 h-12 bg-[#f1f5f9] rounded-full"></div>
                    <div className="w-12 h-12 bg-[#f1f5f9] rounded-full"></div>
                 </div>
              </div>

              {/* Main Interaction Area */}
              <div className="flex-1 bg-[#f8fafc] rounded-[48px] border-2 border-[#e2e8f0] p-10 relative overflow-hidden">
                 {/* Voice Visualizer from UI scaled up */}
                 <div className="flex items-center justify-center gap-3 h-40 mb-12">
                   {[...Array(15)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ height: [40, 120, 40] }}
                       transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                       className="w-2.5 bg-[#FFD54F] rounded-full"
                     />
                   ))}
                 </div>
                 
                 <div className="space-y-8">
                    <div className="p-6 bg-white rounded-3xl border-2 border-[#FFD54F] shadow-xl">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-3 h-3 bg-[#10b981] rounded-full"></div>
                          <div className="text-sm font-bold text-[#64748b] uppercase tracking-widest">Real-time correction</div>
                       </div>
                       <p className="text-2xl font-bold text-[#0f172a] leading-tight">
                          "I <span className="text-[#ef4444] line-through">am having</span> <span className="text-[#10b981]">have</span> a reservation for two people."
                       </p>
                    </div>
                    
                    <div className="p-6 bg-white/50 rounded-3xl border-2 border-[#e2e8f0] opacity-50">
                       <p className="text-xl font-medium text-[#64748b]">
                          Next exercise: Ordering coffee...
                       </p>
                    </div>
                 </div>

                 {/* Elements Popping Out */}
                 <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-[20%] right-[10%] w-16 h-16 bg-[#FFD54F] rounded-2xl shadow-2xl flex items-center justify-center z-20"
                 >
                    <div className="w-6 h-6 bg-[#0f172a] rounded-full scale-50"></div>
                 </motion.div>
                 
                 <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-[10%] left-[20%] bg-[#6B5439] text-white px-6 py-3 rounded-full font-bold shadow-2xl z-20"
                 >
                    Excellent Pronunciation!
                 </motion.div>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="max-w-[600px]">
            <div className="relative inline-block mb-12">
               <h2 className="text-[72px] md:text-[110px] font-bold leading-[0.85] text-[#0f172a] tracking-tight">
                  The interface<br /><span className="text-[#6B5439]">is the coach.</span>
               </h2>
               <div className="absolute -left-12 -top-12 w-24 h-24 bg-[#FFD54F]/20 rounded-full blur-3xl opacity-50"></div>
            </div>
            
            <p className="text-[#475569] text-[22px] md:text-[28px] font-bold leading-relaxed mb-16 tracking-tight">
               No more abstract learning. Every lesson uses real UI components that scale and animate to help you visualize language structures.
            </p>
            
            <div className="flex flex-col gap-6">
               <div className="flex items-center gap-6 p-8 bg-white rounded-[32px] border-2 border-[#6B5439]/5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-[#FFFAE7] rounded-2xl flex items-center justify-center border border-[#FFD54F]">
                     <Mic className="text-[#6B5439]" size={32} />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-[#0f172a] mb-1">Interactive Voice UI</h4>
                     <p className="text-[#64748b] font-medium">The interface reacts to every syllable you speak.</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-6 p-8 bg-white rounded-[32px] border-2 border-[#6B5439]/5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-[#FFD54F]/20 rounded-2xl flex items-center justify-center border border-[#FFD54F]">
                     <ArrowRight className="text-[#6B5439]" size={32} />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-[#0f172a] mb-1">Visual Progression</h4>
                     <p className="text-[#64748b] font-medium">Watch your fluency grow with scaled interface elements.</p>
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