"use client";

import { motion } from "framer-motion";
import { Plus, Equal } from "lucide-react";
import Image from "next/image";

const SpeakAnimation = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <div className="w-16 h-16 bg-[#F9A825] rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-white/20 rounded-full"
      />
      <div className="relative z-10 flex gap-1 items-end h-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              height: [10, 24, 12, 28, 10],
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="w-1.5 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
    {/* Orbiting particles for depth */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-[#F9A825]/20 rounded-full"
    />
  </div>
);

const TypingAnimation = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <motion.div
      animate={{ y: [0, 2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-20 h-14 bg-white border-2 border-[#0f172a]/10 rounded-xl shadow-md flex flex-col p-2 gap-1.5"
    >
      <div className="flex gap-1">
        <div className="w-4 h-3 bg-[#f1f5f9] rounded-sm" />
        <motion.div 
          animate={{ backgroundColor: ["#f1f5f9", "#F9A825", "#f1f5f9"] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          className="w-4 h-3 bg-[#f1f5f9] rounded-sm" 
        />
        <div className="w-4 h-3 bg-[#f1f5f9] rounded-sm" />
      </div>
      <div className="flex gap-1 justify-center">
        <motion.div 
          animate={{ backgroundColor: ["#f1f5f9", "#F9A825", "#f1f5f9"] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: 0.5 }}
          className="w-8 h-3 bg-[#f1f5f9] rounded-sm" 
        />
        <div className="w-4 h-3 bg-[#f1f5f9] rounded-sm" />
      </div>
    </motion.div>
    {/* Floating cursors/indicators */}
    <motion.div
      animate={{ 
        x: [20, 40, 20],
        y: [-20, -10, -20],
        opacity: [0, 1, 0]
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute top-1/2 right-0 w-1 h-4 bg-[#F9A825] rounded-full"
    />
  </div>
);

const SypingIcon = () => (
  <div className="relative w-28 h-28 flex items-center justify-center">
    <motion.div
      animate={{ 
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10"
    >
      <Image 
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1-resized-1766734648295.webp?width=8000&height=8000&resize=contain"
        alt="Syping Icon"
        width={96}
        height={96}
        className="w-24 h-24 object-contain drop-shadow-xl"
      />
    </motion.div>
    {/* Subtle glow behind the icon */}
    <div className="absolute inset-0 bg-[#F9A825] rounded-full blur-2xl opacity-20 scale-75" />
  </div>
);

export default function SypingEquation() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          {/* Speak */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <SpeakAnimation />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0f172a] bg-white px-3 py-1 rounded-full border border-[#0f172a]">Speak</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Plus size={32} className="text-[#F9A825] stroke-[3px]" />
          </motion.div>

          {/* Typing */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <TypingAnimation />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0f172a] bg-white px-3 py-1 rounded-full border border-[#0f172a]">Typing</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Equal size={32} className="text-[#F9A825] stroke-[3px]" />
          </motion.div>

          {/* Syping */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <SypingIcon />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F9A825] bg-[#0f172a] px-4 py-1.5 rounded-full shadow-lg">Syping</span>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-4">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#94a3b8]">See how it works</p>
          <div className="w-px h-16 bg-gradient-to-b from-[#F9A825] via-[#F9A825]/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
