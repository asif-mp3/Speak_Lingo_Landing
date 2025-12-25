"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function PainPoints() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 tracking-tight"
            >
              Typing Is <span className="text-[#ef4444]">Slowing You Down.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#475569] font-medium mb-12"
            >
              Every pause. Every correction. Every lost idea. <br />
              <span className="text-[#0f172a] font-bold">You’re not tired — you’re throttled.</span>
            </motion.p>

            <div className="space-y-6 mb-12">
              {[
                "Your thoughts move faster than your fingers.",
                "Typing breaks your flow before your ideas land.",
                "The spark fades while you’re still finding the keys."
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
                  </div>
                  <p className="text-lg font-bold text-[#475569]">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#6B5439] hover:bg-[#5A4530] text-white px-8 py-4 rounded-[20px] text-lg font-bold transition-all shadow-[0_4px_0_rgb(60,45,30)] flex items-center gap-2"
            >
              Break the Friction <ArrowRight size={20} />
            </motion.button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Pain Side */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-[32px] p-6 border border-slate-200 flex flex-col items-center justify-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-red-400 opacity-30" />
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <AlertCircle className="text-red-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">The Old Way</h4>
                <p className="text-sm font-medium text-slate-500 mb-8">Frustrated typing, lagging text, lost momentum.</p>
                <div className="space-y-2 w-full">
                  <div className="h-2 bg-slate-200 rounded-full w-full animate-pulse" />
                  <div className="h-2 bg-slate-200 rounded-full w-3/4 animate-pulse" />
                  <div className="h-2 bg-slate-200 rounded-full w-1/2 animate-pulse" />
                </div>
                <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-slate-400">40 WPM bottleneck</div>
              </motion.div>

              {/* Solution Side */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#FFFAE7] rounded-[32px] p-6 border border-[#EAB308]/20 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl shadow-yellow-500/5"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#EAB308]" />
                <div className="w-16 h-16 bg-[#FFD54F]/20 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-[#EAB308]" size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#6B5439] mb-2">The Syping Way</h4>
                <p className="text-sm font-medium text-[#6B5439]/70 mb-8">Relaxed speaking, words appear instantly.</p>
                <div className="space-y-2 w-full">
                  <motion.div 
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-2 bg-[#EAB308] rounded-full" 
                  />
                  <motion.div 
                    animate={{ width: ["0%", "80%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                    className="h-2 bg-[#EAB308]/60 rounded-full" 
                  />
                  <motion.div 
                    animate={{ width: ["0%", "60%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                    className="h-2 bg-[#EAB308]/40 rounded-full" 
                  />
                </div>
                <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#EAB308]">150+ WPM flow</div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white px-6 py-3 rounded-full font-bold shadow-2xl z-10 whitespace-nowrap"
            >
              Feel the difference.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
