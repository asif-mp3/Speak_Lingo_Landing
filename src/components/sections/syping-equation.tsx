"use client";

import { motion } from "framer-motion";
import { Mic, Keyboard, Zap, Plus, Equal } from "lucide-react";

export default function SypingEquation() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Speak */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl shadow-[0_10px_0_#e2e8f0] border-2 border-[#0f172a] flex items-center justify-center relative overflow-hidden group">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#FFD54F]"
              />
              <Mic size={40} className="text-[#0f172a] relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0f172a]">Speak</span>
          </motion.div>

          <Plus size={24} className="text-[#F9A825] mt-[-24px]" />

          {/* Typing */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl shadow-[0_10px_0_#e2e8f0] border-2 border-[#0f172a] flex items-center justify-center relative group">
              <Keyboard size={40} className="text-[#0f172a] group-hover:rotate-6 transition-transform" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F9A825] rounded-full border-2 border-[#0f172a] flex items-center justify-center">
                 <Zap size={12} className="text-[#0f172a] fill-current" />
              </div>
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0f172a]">Typing</span>
          </motion.div>

          <Equal size={24} className="text-[#F9A825] mt-[-24px]" />

          {/* Syping */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0f172a] rounded-3xl shadow-[0_10px_0_#000] border-2 border-[#0f172a] flex items-center justify-center relative overflow-hidden group">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
              >
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#FFD54F,transparent)]" />
              </motion.div>
              <Zap size={40} className="text-[#FFD54F] fill-current relative z-10 group-hover:scale-125 transition-transform" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-[#F9A825]">Syping</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p className="text-sm font-bold text-[#475569] uppercase tracking-[0.2em]">
            Voice Power + Keyboard Precision = <span className="text-[#0f172a]">Universal Flow</span>
          </p>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 animate-bounce">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#94a3b8]">See how it works</p>
        <div className="w-px h-12 bg-gradient-to-b from-[#EAB308] to-transparent" />
      </div>
    </div>
  );
}
