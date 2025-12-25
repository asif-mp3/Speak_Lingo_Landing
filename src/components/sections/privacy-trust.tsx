"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, EyeOff, WifiOff } from 'lucide-react';

export default function PrivacyTrust() {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1140px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full mb-6 border border-green-100">
              <Shield size={12} className="text-green-600" />
              <span className="text-[9px] font-black uppercase tracking-wider text-green-700">Zero Data Storage</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
              Privacy Isn’t a Setting. <br />
              <span className="text-[#EAB308]">It’s a Switch.</span>
            </h2>

            <p className="text-lg text-[#475569] font-medium mb-10 leading-relaxed max-w-[480px]">
              Tap one button — and Syping goes <span className="text-[#0f172a] font-bold">Pure Offline.</span> No listening. No sending. No background anything.
            </p>

            <div className="grid gap-5 mb-10">
              {[
                { icon: WifiOff, title: "Pure Offline Mode", desc: "No cloud. No sync. No data movement — total silence." },
                { icon: Lock, title: "Your Control, Always", desc: "You decide when it listens, when it learns, and when it stops." },
                { icon: EyeOff, title: "No Hidden Channels", desc: "No analytics, no ghost uploads. Your voice never leaves your device." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <item.icon size={20} className="text-[#6B5439]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm">{item.title}</h4>
                    <p className="text-[13px] font-medium text-[#475569] leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-[#FFFAE7] border-l-4 border-[#EAB308] rounded-r-2xl max-w-[480px]">
              <p className="text-base font-bold italic text-[#6B5439]">
                "When you go offline in Syping, you vanish — by design."
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[460px] mx-auto lg:ml-auto">
            <div
              className={`rounded-[32px] p-8 border-2 min-h-[400px] flex flex-col items-center justify-center text-center shadow-2xl relative transition-colors duration-700 overflow-hidden ${
                isOffline ? 'bg-[#0f172a] border-[#1e293b]' : 'bg-[#FFFAE7] border-[#EAB308]'
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EAB308]/20 to-transparent" />
              <AnimatePresence mode="wait">
                {!isOffline ? (
                  <motion.div
                    key="online"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="w-20 h-20 bg-[#FFD54F]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                       <motion.div 
                         animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="absolute inset-0 bg-[#FFD54F] rounded-full"
                       />
                       <WifiOff size={32} className="text-[#EAB308] relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#6B5439]">Connected Mode</h3>
                    <p className="text-[#6B5439]/70 font-medium text-sm">Standard processing enabled.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="offline"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                       <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-full" />
                       <Lock size={32} className="text-blue-400 relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Pure Offline</h3>
                    <p className="text-slate-400 font-medium italic text-sm">"Nothing leaves. Nothing listens. Only you remain."</p>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="h-1 bg-blue-500/50 rounded-full w-full max-w-[160px] mx-auto overflow-hidden"
                    >
                      <motion.div 
                        animate={{ x: [-160, 160] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-blue-400"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-10">
                <button
                  onClick={() => setIsOffline(!isOffline)}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-500 flex items-center px-1 ${
                    isOffline ? 'bg-blue-600' : 'bg-[#EAB308]'
                  }`}
                >
                  <motion.div
                    animate={{ x: isOffline ? 32 : 0 }}
                    className="w-6 h-6 bg-white rounded-full shadow-lg"
                  />
                </button>
                <p className={`mt-4 text-[9px] font-black uppercase tracking-widest ${isOffline ? 'text-slate-500' : 'text-[#6B5439]/50'}`}>
                  Toggle Privacy Mode
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white border border-slate-100 p-6 rounded-3xl shadow-xl flex items-center gap-4 max-w-[240px]"
            >
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                <Shield className="text-green-500" size={20} />
              </div>
              <p className="text-sm font-bold text-[#0f172a] leading-tight">
                No analytics. No ghost uploads. Ever.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
