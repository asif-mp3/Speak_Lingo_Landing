"use client";

import { motion } from "framer-motion";
import { Plus, Equal } from "lucide-react";

const CartoonSpeak = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    {/* Head/Face shape */}
    <motion.div 
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-20 h-20 bg-[#FFD54F] rounded-full border-4 border-[#0f172a] relative shadow-[0_8px_0_#d97706]"
    >
      {/* Eye */}
      <div className="absolute top-6 left-6 w-2 h-2 bg-[#0f172a] rounded-full" />
      {/* Mouth */}
      <motion.div
        animate={{ 
          scaleY: [0.2, 1, 0.2],
          borderRadius: ["20%", "50%", "20%"]
        }}
        transition={{ duration: 0.4, repeat: Infinity }}
        className="absolute bottom-4 right-4 w-6 h-6 bg-[#0f172a] rounded-full origin-bottom"
      />
    </motion.div>
    {/* Sound waves */}
    <div className="absolute -right-4 top-4 flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ 
            height: [8, 20, 8],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
          className="w-1.5 bg-[#F9A825] rounded-full"
        />
      ))}
    </div>
  </div>
);

const CartoonType = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    {/* Keyboard Key */}
    <motion.div
      whileHover={{ scale: 0.95 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="w-20 h-16 bg-white border-4 border-[#0f172a] rounded-2xl relative shadow-[0_12px_0_#e2e8f0] flex items-center justify-center"
    >
      <div className="w-10 h-2 bg-[#f1f5f9] rounded-full" />
      {/* Hand pressing */}
      <motion.div
        animate={{ 
          y: [-15, 5, -15],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-12 bg-[#FFD54F] border-2 border-[#0f172a] rounded-t-xl rounded-b-lg flex flex-col items-center gap-1 p-1"
      >
        <div className="w-full h-1 bg-[#0f172a]/10 rounded-full" />
        <div className="w-full h-1 bg-[#0f172a]/10 rounded-full" />
      </motion.div>
    </motion.div>
  </div>
);

const CartoonSyping = () => (
  <div className="relative w-28 h-28 flex items-center justify-center">
    {/* Fusion Core */}
    <motion.div
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-gradient-to-tr from-[#FFD54F] via-[#F9A825] to-[#0f172a] rounded-[40%] blur-xl opacity-40"
    />
    
    <motion.div
      animate={{ 
        boxShadow: ["0 0 20px #FFD54F", "0 0 40px #F9A825", "0 0 20px #FFD54F"]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-24 h-24 bg-[#0f172a] border-4 border-[#FFD54F] rounded-[30%] relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              top: ["-10%", "110%"],
              left: [Math.random() * 100 + "%", Math.random() * 100 + "%"]
            }}
            transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "linear" }}
            className="absolute w-1 h-4 bg-[#FFD54F] blur-[1px]"
          />
        ))}
      </div>
      {/* Big "S" Logo */}
      <span className="text-4xl font-black text-[#FFD54F] italic z-10">S</span>
    </motion.div>
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
            <CartoonSpeak />
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
            <CartoonType />
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
            <CartoonSyping />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F9A825] bg-[#0f172a] px-4 py-1.5 rounded-full shadow-lg">Syping</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-[32px] border border-[#0f172a]/5"
        >
          <p className="text-base font-bold text-[#475569] uppercase tracking-[0.3em]">
            Voice Flow <span className="text-[#F9A825] mx-2">+</span> Structure <span className="text-[#0f172a] mx-2">=</span> <span className="text-[#0f172a] underline decoration-[#F9A825] decoration-4 underline-offset-4">Superhuman Speed</span>
          </p>
        </motion.div>
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
