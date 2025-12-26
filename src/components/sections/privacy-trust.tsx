"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, EyeOff, WifiOff, Zap, Fingerprint } from 'lucide-react';

export default function PrivacyTrust() {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1140px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full mb-8 border border-red-100">
              <Zap size={12} className="text-red-600 fill-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700">Hard Kill Switch</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-8 tracking-tighter leading-[0.95]">
              Privacy is <br />
              <span className={isOffline ? 'text-blue-600 transition-colors duration-500' : 'text-[#F9A825] transition-colors duration-500'}>
                {isOffline ? 'Absolute.' : 'Physical.'}
              </span>
            </h2>

            <p className="text-xl text-[#475569] font-medium mb-12 leading-relaxed max-w-[500px]">
              Syping doesn't just "encrypt" your data. It <span className="text-[#0f172a] font-bold underline decoration-blue-500/30 decoration-4">unplugs</span> from the world.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {[
                { label: "OFFLINE FIRST", icon: WifiOff },
                { label: "LOCAL STORAGE", icon: Fingerprint },
                { label: "ZERO TELEMETRY", icon: EyeOff }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <item.icon size={14} className="text-slate-400" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ height: isOffline ? "100%" : "20%" }}
                  className="w-full bg-blue-500"
                />
              </div>
              <p className="text-lg font-bold text-[#6B5439] pl-4 italic">
                {isOffline 
                  ? "You are currently invisible. The cloud is dead to you."
                  : "Tap the switch to vanish from every server on Earth."}
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* Visual background elements */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full scale-150" />
            
            <div
              className={`rounded-[48px] p-1 border-2 transition-all duration-700 shadow-[0_0_80px_-20px_rgba(0,0,0,0.1)] ${
                isOffline ? 'border-blue-500/30 bg-slate-950' : 'border-[#F9A825]/30 bg-[#FFFAE7]'
              }`}
            >
              <div className="rounded-[44px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[520px]">
                
                <AnimatePresence mode="wait">
                  {!isOffline ? (
                    <motion.div
                      key="online"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="relative z-10"
                    >
                      <div className="w-32 h-32 bg-[#FFD54F]/10 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                         <motion.div 
                           animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                           transition={{ duration: 3, repeat: Infinity }}
                           className="absolute inset-0 bg-[#FFD54F] rounded-full"
                         />
                         <div className="w-20 h-20 bg-[#FFD54F] rounded-full flex items-center justify-center shadow-lg">
                           <WifiOff size={40} className="text-white" />
                         </div>
                      </div>
                      <h3 className="text-3xl font-black text-[#6B5439] mb-4">Standard Mode</h3>
                      <p className="text-[#6B5439]/60 font-medium text-base px-8">
                        The web is active. Data is syncing. Your digital footprint is growing.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="offline"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="relative z-10"
                    >
                      <div className="w-32 h-32 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                         <motion.div 
                           animate={{ 
                             scale: [1, 2],
                             opacity: [0.5, 0]
                           }}
                           transition={{ duration: 2, repeat: Infinity }}
                           className="absolute inset-0 border-2 border-blue-500 rounded-full"
                         />
                         <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                           <Lock size={40} className="text-white" />
                         </div>
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">Pure Offline</h3>
                      <p className="text-blue-200/50 font-medium text-base italic px-8">
                        "If you aren't on the grid, <br />they can't find you."
                      </p>
                      
                      <div className="mt-8 flex justify-center gap-1">
                        {[1, 2, 3].map(i => (
                          <motion.div
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-blue-400"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-16 relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                    Master Privacy Toggle
                  </div>
                  <button
                    onClick={() => setIsOffline(!isOffline)}
                    className={`group relative w-24 h-12 rounded-full p-1.5 transition-all duration-500 ease-in-out ${
                      isOffline ? 'bg-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'bg-[#F9A825]'
                    }`}
                  >
                    <motion.div
                      animate={{ x: isOffline ? 48 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isOffline ? 'bg-blue-600' : 'bg-[#F9A825]'}`} />
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
