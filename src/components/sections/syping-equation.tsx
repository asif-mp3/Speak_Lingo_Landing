"use client";

import { motion } from "framer-motion";
import { Plus, Equal, Sparkles } from "lucide-react";
import Image from "next/image";

const SpeakAnimation = () => (
  <div className="relative w-28 h-28 flex items-center justify-center">
    {/* Physical Microphone Body */}
    <div className="relative z-10 w-12 h-20 bg-gradient-to-b from-[#475569] to-[#0f172a] rounded-full border-2 border-[#F9A825]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col items-center pt-2">
      {/* Mic Grille */}
      <div className="w-8 h-10 bg-[#1e293b] rounded-full border border-white/10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:4px_4px]" />
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#F9A825]/20"
        />
      </div>
      {/* Mic Body Details */}
      <div className="w-1 h-4 bg-[#F9A825]/40 mt-2 rounded-full" />
    </div>
    
    {/* Sound Waves - Physical Rings */}
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        animate={{
          scale: [0.8, 2],
          opacity: [0.6, 0],
          borderWidth: ["4px", "1px"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeOut"
        }}
        className="absolute inset-0 border border-[#F9A825] rounded-full"
      />
    ))}
  </div>
);

const TypingAnimation = () => (
  <div className="relative w-28 h-28 flex items-center justify-center perspective-[1000px]">
    <motion.div
      initial={{ rotateX: 25 }}
      animate={{ rotateX: [25, 30, 25] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-24 h-16 bg-[#cbd5e1] rounded-xl border-b-[8px] border-[#94a3b8] shadow-2xl p-2 grid grid-cols-4 gap-1.5"
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, 4, 0],
            backgroundColor: i % 3 === 0 ? ["#ffffff", "#F9A825", "#ffffff"] : ["#ffffff", "#ffffff", "#ffffff"],
            boxShadow: [
              "0 2px 0 #94a3b8",
              "0 0px 0 #94a3b8",
              "0 2px 0 #94a3b8"
            ]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          className="bg-white rounded-[4px] border border-slate-200"
        />
      ))}
      <motion.div
        animate={{
          y: [0, 4, 0],
          boxShadow: ["0 2px 0 #94a3b8", "0 0px 0 #94a3b8", "0 2px 0 #94a3b8"]
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        className="col-span-4 h-3 bg-white rounded-[4px] border border-slate-200"
      />
    </motion.div>
  </div>
);

const SypingIcon = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    {/* Synthesis Core - More Physical */}
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Outer Shell */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-4 border-[#0f172a] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-xl"
      />
      {/* Inner Core */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            "0 0 20px rgba(249, 168, 37, 0.3)",
            "0 0 40px rgba(249, 168, 37, 0.6)",
            "0 0 20px rgba(249, 168, 37, 0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-12 h-12 bg-[#F9A825] rounded-full border-4 border-[#0f172a] flex items-center justify-center z-10"
      >
        <Sparkles className="text-[#0f172a] w-6 h-6" />
      </motion.div>
      
      {/* Floating Orbital Nodes */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 2.6 }}
          className="absolute inset-[-10px]"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-[#0f172a] rounded-full border-2 border-[#F9A825] absolute top-0 left-1/2 -translate-x-1/2"
          />
        </motion.div>
      ))}
    </div>
    
    {/* Ambient Pulse */}
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute inset-0 bg-[#F9A825] rounded-full blur-3xl"
    />
  </div>
);


export default function SypingEquation() {
  return (
    <div className="py-16 flex flex-col items-center justify-center !w-full !h-[520px]">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
          {/* Speak */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4">

            <SpeakAnimation />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0f172a]/60 px-3 py-1">Speak</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}>

            <Plus size={24} className="text-[#F9A825] opacity-50" />
          </motion.div>

          {/* Typing */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4">

            <TypingAnimation />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0f172a]/60 px-3 py-1">Typing</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}>

            <Equal size={24} className="text-[#F9A825] opacity-50" />
          </motion.div>

          {/* Syping */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4">

            <SypingIcon />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#F9A825] bg-[#0f172a] px-6 py-2 rounded-full shadow-xl ring-4 ring-[#F9A825]/10">Syping</span>
          </motion.div>
        </div>
      </div>


      <div className="mt-20 flex flex-col items-center gap-4">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2">

          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#94a3b8]">See how it works</p>
          <div className="w-px h-16 bg-gradient-to-b from-[#F9A825] via-[#F9A825]/50 to-transparent" />
        </motion.div>
      </div>
    </div>);

}