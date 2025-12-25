"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, EyeOff, WifiOff, ArrowRight } from 'lucide-react';

export default function PrivacyTrust() {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1140px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-50 rounded-full mb-8 border border-green-100"
            >
              <Shield size={14} className="text-green-600" />
              <span className="text-[10px] font-black uppercase tracking-wider text-green-700">Zero Data Storage</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 tracking-tight"
            >
              Privacy Isn’t a Setting. <br />
              <span className="text-[#EAB308]">It’s a Switch.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#475569] font-medium mb-12"
            >
              Tap one button — and SpeakLingo goes <span className="text-[#0f172a] font-bold">Pure Offline.</span> No listening. No sending. No background anything.
            </motion.p>

            <div className="grid gap-6 mb-12">
              {[
                { icon: WifiOff, title: "Pure Offline Mode", desc: "No cloud. No sync. No data movement — total silence." },
                { icon: Lock, title: "Your Control, Always", desc: "You decide when it listens, when it learns, and when it stops." },
                { icon: EyeOff, title: "No Hidden Channels", desc: "No analytics, no ghost uploads. Your voice never leaves your device." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <item.icon size={24} className="text-[#6B5439]" />
                  </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a]">{item.title}</h4>
                      <p className="text-sm font-medium text-[#475569]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 bg-[#FFFAE7] border-l-4 border-[#EAB308] rounded-r-2xl"
              >
                <p className="text-lg font-bold italic text-[#6B5439]">
                  "When you go offline in SpeakLingo, you vanish — by design."
                </p>
              </motion.div>
            </div>


            <div className="relative">
              <motion.div
                animate={{ 
                  backgroundColor: isOffline ? "#0f172a" : "#FFFAE7",
                  borderColor: isOffline ? "#1e293b" : "#EAB308"
                }}
                className="rounded-[40px] p-10 border-2 min-h-[480px] flex flex-col items-center justify-center text-center shadow-2xl relative transition-colors duration-700 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EAB308]/20 to-transparent" />
              <AnimatePresence mode="wait">
                {!isOffline ? (
                  <motion.div
                    key="online"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="space-y-8"
                  >
                    <div className="w-24 h-24 bg-[#FFD54F]/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                       <motion.div 
                         animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="absolute inset-0 bg-[#FFD54F] rounded-full"
                       />
                       <WifiOff size={40} className="text-[#EAB308] relative z-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#6B5439]">Connected Mode</h3>
                    <p className="text-[#6B5439]/70 font-medium">Standard processing enabled.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="offline"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="space-y-8"
                  >
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                       <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-full" />
                       <Lock size={40} className="text-blue-400 relative z-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Pure Offline</h3>
                    <p className="text-slate-400 font-medium italic">"Nothing leaves. Nothing listens. Only you remain."</p>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="h-1 bg-blue-500/50 rounded-full w-full max-w-[200px] mx-auto overflow-hidden"
                    >
                      <motion.div 
                        animate={{ x: [-200, 200] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-blue-400"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-12">
                <button
                  onClick={() => setIsOffline(!isOffline)}
                  className={`relative w-20 h-10 rounded-full transition-colors duration-500 flex items-center px-1 ${
                    isOffline ? 'bg-blue-600' : 'bg-[#EAB308]'
                  }`}
                >
                  <motion.div
                    animate={{ x: isOffline ? 40 : 0 }}
                    className="w-8 h-8 bg-white rounded-full shadow-lg"
                  />
                </button>
                <p className={`mt-4 text-xs font-black uppercase tracking-widest ${isOffline ? 'text-slate-500' : 'text-[#6B5439]/50'}`}>
                  Toggle Privacy Mode
                </p>
              </div>
            </motion.div>

            {/* Floating Trust Badge */}
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
