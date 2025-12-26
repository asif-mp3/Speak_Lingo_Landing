"use client";

import { motion } from "framer-motion";
import { Plus, Equal } from "lucide-react";
import Image from "next/image";

const SpeakAnimation = () =>
<div className="relative w-24 h-24 flex items-center justify-center">
    <div className="w-16 h-16 bg-[#F9A825] rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
      <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 bg-white/20 rounded-full" />

      <div className="relative z-10 flex gap-1 items-end h-8">
        {[0, 1, 2, 3, 4].map((i) =>
      <motion.div
        key={i}
        animate={{
          height: [10, 24, 12, 28, 10]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut"
        }}
        className="w-1.5 bg-white rounded-full" />

      )}
      </div>
    </div>
    {/* Orbiting particles for depth */}
    <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0 border border-[#F9A825]/20 rounded-full" />

  </div>;


const TypingAnimation = () =>
<div className="relative w-24 h-24 flex items-center justify-center">
    <motion.div
    animate={{ y: [0, 2, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-20 h-14 bg-[#e2e8f0] border-2 border-[#0f172a] rounded-xl shadow-[0_6px_0_#94a3b8] flex flex-col p-1.5 gap-1">

      {/* Keyboard Row 1 */}
      <div className="flex gap-1 justify-center">
        {[0, 1, 2, 3].map((i) =>
      <motion.div
        key={i}
        animate={{
          backgroundColor: ["#ffffff", "#F9A825", "#ffffff"],
          y: [0, 1.5, 0],
          boxShadow: ["0 2px 0 #cbd5e1", "0 0px 0 #cbd5e1", "0 2px 0 #cbd5e1"]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut"
        }}
        className="w-3.5 h-3 bg-white rounded-[4px] border border-[#cbd5e1]" />

      )}
      </div>
      {/* Keyboard Row 2 */}
      <div className="flex gap-1 justify-center">
        {[0, 1, 2].map((i) =>
      <motion.div
        key={i}
        animate={{
          backgroundColor: ["#ffffff", "#F9A825", "#ffffff"],
          y: [0, 1.5, 0],
          boxShadow: ["0 2px 0 #cbd5e1", "0 0px 0 #cbd5e1", "0 2px 0 #cbd5e1"]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 0.3 + i * 0.15,
          ease: "easeInOut"
        }}
        className="w-3.5 h-3 bg-white rounded-[4px] border border-[#cbd5e1]" />

      )}
      </div>
      {/* Keyboard Row 3 (Spacebar row) */}
      <div className="flex gap-1 justify-center">
        <motion.div
        animate={{
          backgroundColor: ["#ffffff", "#F9A825", "#ffffff"],
          y: [0, 2, 0],
          boxShadow: ["0 2px 0 #cbd5e1", "0 0px 0 #cbd5e1", "0 2px 0 #cbd5e1"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.8,
          ease: "easeInOut"
        }}
        className="w-12 h-3 bg-white rounded-[4px] border border-[#cbd5e1]" />

      </div>
    </motion.div>
    
    {/* Floating typing particles */}
    {[0, 1, 2].map((i) =>
  <motion.div
    key={i}
    animate={{
      y: [0, -40],
      x: [0, (i - 1) * 15],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5]
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.4,
      ease: "easeOut"
    }}
    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#F9A825] rounded-full" />

  )}
  </div>;



const SypingIcon = () =>
<div className="relative w-32 h-32 flex items-center justify-center">
      <motion.div
    animate={{
      y: [-4, 4, -4],
      scale: [1, 1.02, 1]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="relative z-10">

        <Image
      src="/logo.gif"
      alt="Syping Icon"
      width={120}
      height={120}
      className="w-28 h-28 object-contain drop-shadow-2xl" />

      </motion.div>
      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-[#F9A825] rounded-full blur-3xl opacity-15 scale-90" />
    </div>;


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