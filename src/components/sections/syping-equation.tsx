"use client";

import { motion } from "framer-motion";
import { Plus, Equal, Sparkles } from "lucide-react";
import Image from "next/image";

const SpeakAnimation = () => (
  <div className="relative w-20 h-20 flex items-center justify-center">
    {/* Physical Microphone Body */}
    <div className="relative z-10 w-9 h-14 bg-gradient-to-b from-[#475569] to-[#0f172a] rounded-full border-2 border-[#F9A825]/30 shadow-[0_6px_20px_rgba(0,0,0,0.3)] flex flex-col items-center pt-1.5">
      {/* Mic Grille */}
      <div className="w-6 h-7 bg-[#1e293b] rounded-full border border-white/10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:3px_3px]" />
        <motion.div
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#F9A825]/20"
        />
      </div>
      {/* Mic Body Details */}
      <div className="w-1 h-2.5 bg-[#F9A825]/40 mt-1.5 rounded-full" />
    </div>

    {/* Sound Waves - Physical Rings */}
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        animate={{
          scale: [0.8, 1.8],
          opacity: [0.6, 0],
          borderWidth: ["3px", "1px"]
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
  <div className="relative w-20 h-20 flex items-center justify-center perspective-[1000px]">
    <motion.div
      initial={{ rotateX: 25 }}
      animate={{ rotateX: [25, 30, 25] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-18 h-12 bg-[#cbd5e1] rounded-lg border-b-[6px] border-[#94a3b8] shadow-xl p-1.5 grid grid-cols-4 gap-1"
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, 3, 0],
            backgroundColor: i % 3 === 0 ? ["#ffffff", "#F9A825", "#ffffff"] : ["#ffffff", "#ffffff", "#ffffff"],
            boxShadow: [
              "0 1.5px 0 #94a3b8",
              "0 0px 0 #94a3b8",
              "0 1.5px 0 #94a3b8"
            ]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          className="bg-white rounded-[3px] border border-slate-200"
        />
      ))}
      <motion.div
        animate={{
          y: [0, 3, 0],
          boxShadow: ["0 1.5px 0 #94a3b8", "0 0px 0 #94a3b8", "0 1.5px 0 #94a3b8"]
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        className="col-span-4 h-2 bg-white rounded-[3px] border border-slate-200"
      />
    </motion.div>
  </div>
);

const SypingIcon = () => (
  <div className="relative w-28 h-28 flex items-center justify-center rounded-2xl">
    <Image
      src="/slgifsquare.gif"
      alt="Syping animation"
      width={112}
      height={112}
      className="rounded-2xl"
      unoptimized
    />
  </div>
);






export default function SypingEquation() {
  return (
    <div className="py-12 flex flex-col items-center justify-center !w-full !h-[420px]">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-end justify-center gap-6 md:gap-16">
          {/* Speak Column */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4">
            <SpeakAnimation />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0f172a] text-center">Speak</span>
          </motion.div>

          {/* Plus Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-2">
            <Plus size={24} className="text-[#F9A825] opacity-50" />
          </motion.div>

          {/* Typing Column */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4">
            <TypingAnimation />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0f172a] text-center">Typing</span>
          </motion.div>

          {/* Equal Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-2">
            <Equal size={24} className="text-[#F9A825] opacity-50" />
          </motion.div>

          {/* Syping Column */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4">
            <SypingIcon />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0f172a] text-center">Syping</span>
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