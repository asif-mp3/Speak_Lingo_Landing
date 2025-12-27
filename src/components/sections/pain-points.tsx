"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, MousePointer2, Sparkles, Zap } from 'lucide-react';

const KeyboardAnimation = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [text, setText] = useState("");
  const fullText = "Too slow... lost the thought...";

  const rows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']];


  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        const char = fullText[currentIndex].toUpperCase();
        setActiveKey(char);
        setText(fullText.slice(0, currentIndex + 1));
        setTimeout(() => setActiveKey(null), 80);
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setText("");
        }, 1500);
      }
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="bg-slate-200/50 p-3 rounded-md w-full font-mono text-[11px] text-slate-600 min-h-[50px] border-2 border-slate-300 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50" />
        {text}<span className="w-1.5 h-3 bg-slate-400 inline-block ml-1 animate-pulse" />
      </div>
      
      <div className="bg-slate-300 p-2 rounded-xl border-b-4 border-slate-400 shadow-lg scale-90">
        <div className="flex flex-col gap-1">
          {rows.map((row, i) =>
          <div key={i} className="flex gap-1 justify-center">
              {row.map((key) =>
            <motion.div
              key={key}
              animate={{
                y: activeKey === key ? 2 : 0,
                backgroundColor: activeKey === key ? "#cbd5e1" : "#f8fafc",
                boxShadow: activeKey === key ?
                "inset 0 1px 2px rgba(0,0,0,0.2)" :
                "0 2px 0px rgba(0,0,0,0.1)"
              }}
              className="w-7 h-7 rounded-[4px] flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-200">

                  {key}
                </motion.div>
            )}
            </div>
          )}
          <div className="flex justify-center mt-1">
            <motion.div
              animate={{ y: activeKey === " " ? 2 : 0 }}
              className="w-32 h-7 bg-white rounded-[4px] border border-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.1)]" />

          </div>
        </div>
      </div>
    </div>);

};

const SypingFlowAnimation = () => {
  const [words, setWords] = useState<string[]>([]);
  const fullSentence = "Ideas flow as fast as I can think them without any friction at all.";

  useEffect(() => {
    const wordList = fullSentence.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      setWords((prev) => {
        if (index >= wordList.length) {
          index = 0;
          return [];
        }
        const next = [...prev, wordList[index]];
        index++;
        return next;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative flex flex-col items-center gap-8">
      {/* Dynamic Soundwave */}
      <div className="flex items-center justify-center gap-1.5 h-16 w-full">
        {[...Array(24)].map((_, i) =>
        <motion.div
          key={i}
          animate={{
            height: [10, Math.random() * 50 + 10, 10],
            opacity: [0.3, 0.8, 0.3],
            backgroundColor: ["#FFD54F", "#FACC15", "#FFD54F"]
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-1.5 rounded-full" />

        )}
      </div>

      {/* Floating Thoughts becoming Text */}
      <div className="w-full min-h-[120px] bg-gradient-to-br from-white/10 to-transparent rounded-[24px] p-6 border border-white/20 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#FFD54F]/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl" />
        
        <div className="flex flex-wrap gap-x-2 gap-y-1 relative z-10">
          <AnimatePresence mode="popLayout">
            {words.map((word, i) =>
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-lg font-bold text-white tracking-tight">

                {word}
              </motion.span>
            )}
          </AnimatePresence>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="w-2 h-6 bg-[#FFD54F] mt-1 shadow-[0_0_8px_#FFD54F]" />

        </div>

        <div className="absolute top-2 right-4 flex items-center gap-2">
          <Sparkles size={12} className="text-[#FFD54F] animate-pulse" />
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Real-time AI</span>
        </div>
      </div>
    </div>);

};

const FlashCard = ({ point, resolution, description, index }: {point: string;resolution: string;description: string;index: number;}) => {
  const [isTorn, setIsTorn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onClick={() => setIsTorn(!isTorn)}>

      <AnimatePresence>
        {!isTorn ?
        <motion.div
          key="front"
          exit={{
            y: -100,
            opacity: 0,
            rotate: [0, -5, 5],
            scale: 0.9,
            transition: { duration: 0.4 }
          }}
          className="bg-white border-2 border-[#0f172a] p-6 rounded-2xl shadow-[8px_8px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 mt-1">
                <AlertCircle size={18} className="text-[#ef4444]" />
              </div>
              <p className="text-lg font-bold text-[#0f172a]">{point}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tear to resolve →</span>
            </div>
          </motion.div> :

        <motion.div
          key="back"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="bg-[#FFFAE7] border-2 border-[#F9A825] p-6 rounded-2xl shadow-[8px_8px_0_0_#F9A825] relative overflow-hidden">

              <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#F9A825]/10 rounded-full blur-xl" />
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles size={18} className="text-[#F9A825]" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#6B5439]">{resolution}</p>
                  <p className="text-xs font-medium text-[#6B5439]/60 mt-1 italic">{description}</p>
                </div>
              </div>
              <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#F9A825] hover:underline" onClick={(e) => {e.stopPropagation();setIsTorn(false);}}>
                ← Bring back the pain
              </button>
            </motion.div>

        }
      </AnimatePresence>
    </motion.div>);

};

export default function PainPoints() {
  const points = [
  {
    problem: "Your thoughts move faster than your fingers.",
    resolution: "Synced to your Speed",
    description: "Words keep pace with your intuition. No more mechanical bottlenecks."
  },
  {
    problem: "Typing breaks your flow before your ideas land.",
    resolution: "Seamless Flow State",
    description: "The bridge between mind and screen is finally invisible."
  },
  {
    problem: "The spark fades while you’re still finding the keys.",
    resolution: "Instant Capture",
    description: "Capture brilliance the moment it hits. The keys are no longer your limit."
  }];


    return (
    <section className="py-24 bg-white overflow-hidden w-full relative">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 sticky top-24">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0f172a] mb-8 tracking-tighter leading-[0.9]">
              Typing Is <br />
              <span className="text-[#ef4444]">Slowing You Down.</span>
            </h2>


            <p className="text-xl text-[#475569] font-medium mb-12 max-w-md">
              Every pause. Every correction. Every lost idea. <br />
              <span className="text-[#0f172a] font-bold">You’re not tired — you’re throttled.</span>
            </p>

            <div className="grid gap-4 mb-12">
              {points.map((p, i) =>
                <FlashCard key={i} point={p.problem} resolution={p.resolution} description={p.description} index={i} />
              )}
            </div>

            <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 rounded-[24px] text-xl font-bold transition-all shadow-[0_8px_0_rgb(0,0,0)] hover:shadow-[0_4px_0_rgb(0,0,0)] hover:translate-y-[4px] flex items-center gap-3 border-2 border-black active:shadow-none active:translate-y-[8px]">
              Break the Friction <ArrowRight size={24} />
            </button>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center">
            {/* The Old Way - Grid Card */}
            <div className="w-full bg-[#f1f5f9] rounded-[40px] p-8 md:p-10 border-2 border-slate-200 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-300" />
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">The Old Way</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Mechanical Bottleneck</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm">
                  <MousePointer2 className="text-slate-400" size={24} />
                </div>
              </div>

              <KeyboardAnimation />

              <div className="mt-10 flex justify-between items-center pt-8 border-t border-slate-200/60">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</span>
                  <span className="text-lg font-black text-slate-400">20%</span>
                </div>
                <span className="px-4 py-2 bg-slate-200 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest italic border border-slate-300">Low Bandwidth</span>
              </div>
            </div>

            {/* The Leap Connector */}
            <div className="relative h-32 w-full flex flex-col items-center justify-center z-10 -my-6">
              <div className="w-1 h-full bg-gradient-to-b from-slate-300 via-[#FFD54F] to-[#0f172a]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#FFD54F] text-[#0f172a] px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_10px_40px_rgba(250,204,21,0.4)] border-4 border-[#0f172a] whitespace-nowrap"
                >
                  The Syping Leap
                </motion.div>
              </div>
            </div>

            {/* The Syping Way - Futuristic Glass Card */}
            <div className="w-full bg-[#0f172a] rounded-[40px] p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] group">
              {/* Background Glows */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#FFD54F]/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter">The Syping Way</h4>
                  <p className="text-[10px] font-bold text-[#FFD54F] uppercase tracking-[0.3em] mt-2">Unfiltered Cognition</p>
                </div>
                <div className="w-14 h-14 bg-[#FFD54F] rounded-[22px] flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)] transform group-hover:rotate-12 transition-transform">
                  <Zap className="text-[#0f172a]" size={28} />
                </div>
              </div>

              <SypingFlowAnimation />

              <div className="mt-10 flex justify-between items-center pt-8 border-t border-white/10 relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-[#FFD54F]/60 uppercase tracking-widest">Efficiency</span>
                  <span className="text-2xl font-black text-[#FFD54F]">98%</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                  <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Optimal Flow</span>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[9px] font-bold text-white uppercase tracking-[0.5em]">Think. Speak. Done.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}