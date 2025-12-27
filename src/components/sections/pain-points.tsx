"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, MousePointer2, Sparkles, Zap, TrendingUp, Cpu, Brain } from 'lucide-react';

const KeyboardAnimation = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [text, setText] = useState("");
  const fullText = "Too slow... lost the thought...";

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
<<<<<<< HEAD
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']];

=======
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63

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
      <div className="bg-slate-200/50 p-2 rounded-md w-full font-mono text-[10px] text-slate-600 min-h-[40px] border-2 border-slate-300 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50" />
        {text}<span className="w-1.5 h-3 bg-slate-400 inline-block ml-1 animate-pulse" />
      </div>

      <div className="bg-slate-300 p-1.5 rounded-xl border-b-4 border-slate-400 shadow-lg scale-75">
        <div className="flex flex-col gap-1">
<<<<<<< HEAD
          {rows.map((row, i) =>
            <div key={i} className="flex gap-1 justify-center">
              {row.map((key) =>
=======
          {rows.map((row, i) => (
            <div key={i} className="flex gap-1 justify-center">
              {row.map((key) => (
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
                <motion.div
                  key={key}
                  animate={{
                    y: activeKey === key ? 2 : 0,
                    backgroundColor: activeKey === key ? "#cbd5e1" : "#f8fafc",
                    boxShadow: activeKey === key ?
                      "inset 0 1px 2px rgba(0,0,0,0.2)" :
                      "0 2px 0px rgba(0,0,0,0.1)"
                  }}
<<<<<<< HEAD
                  className="w-6 h-6 rounded-[4px] flex items-center justify-center text-[9px] font-black text-slate-400 border border-slate-200">

                  {key}
                </motion.div>
              )}
=======
                  className="w-7 h-7 rounded-[4px] flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-200"
                >
                  {key}
                </motion.div>
              ))}
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
            </div>
          ))}
          <div className="flex justify-center mt-1">
            <motion.div
              animate={{ y: activeKey === " " ? 2 : 0 }}
<<<<<<< HEAD
              className="w-28 h-6 bg-white rounded-[4px] border border-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.1)]" />

=======
              className="w-32 h-7 bg-white rounded-[4px] border border-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.1)]"
            />
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
          </div>
        </div>
      </div>
    </div>
  );
};

const SoundBar = ({ delay }: { delay: number }) => {
  const height = React.useMemo(() => [10, 25 + Math.random() * 40, 10], []);
  const duration = React.useMemo(() => 0.7 + Math.random() * 0.5, []);

  return (
    <motion.div
      animate={{
        height: height,
        opacity: [0.3, 1, 0.3],
        backgroundColor: ["#FFD54F", "#FACC15", "#FFD54F"]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className="w-1.5 rounded-full"
    />
  );
};

const SypingFlowAnimation = () => {
  const [words, setWords] = useState<string[]>([]);
  const fullSentence = "Ideas flow as fast as I can think them without any friction at all.";
  const wordList = React.useMemo(() => fullSentence.split(" "), []);

  useEffect(() => {
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
    }, 200);

    return () => clearInterval(interval);
  }, [wordList]);

  return (
    <div className="w-full relative flex flex-col items-center gap-8">
<<<<<<< HEAD
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
=======
      {/* Smooth Soundwave */}
      <div className="flex items-end justify-center gap-1.5 h-16 w-full">
        {[...Array(24)].map((_, i) => (
          <SoundBar key={i} delay={i * 0.05} />
        ))}
      </div>

      {/* Floating Thoughts becoming Text */}
      <div className="w-full min-h-[140px] bg-white/5 rounded-[32px] p-8 border border-white/10 backdrop-blur-md relative overflow-hidden group/thought">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD54F]/5 via-transparent to-blue-500/5 opacity-50" />
        
        <div className="flex flex-wrap gap-x-2 gap-y-1 relative z-10">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, filter: "blur(8px)", y: 5 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-xl font-bold text-white tracking-tight"
            >
              {word}
            </motion.span>
          ))}
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
            className="w-2 h-7 bg-[#FFD54F] mt-1 shadow-[0_0_15px_#FFD54F]"
          />
        </div>

        <div className="absolute bottom-4 right-6 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Neural Interface Active</span>
        </div>
      </div>
    </div>
  );
};

const FlashCard = ({ point, resolution, description, index }: { point: string; resolution: string; description: string; index: number; }) => {
  const [isTorn, setIsTorn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onClick={() => setIsTorn(!isTorn)}
<<<<<<< HEAD
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsTorn(!isTorn);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={isTorn ? `Show problem: ${point}` : `Show solution for: ${point}`}
      aria-pressed={isTorn}
    >

      <AnimatePresence>
        {!isTorn ?
=======
    >
      <AnimatePresence>
        {!isTorn ? (
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
          <motion.div
            key="front"
            exit={{
              y: -100,
              opacity: 0,
              rotate: [0, -5, 5],
              scale: 0.9,
              transition: { duration: 0.4 }
            }}
<<<<<<< HEAD
            className="bg-white border-2 border-[#0f172a] p-5 rounded-2xl shadow-[6px_6px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">

=======
            className="bg-white border-2 border-[#0f172a] p-6 rounded-2xl shadow-[8px_8px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 mt-1">
                <AlertCircle size={18} className="text-[#ef4444]" />
              </div>
              <p className="text-base font-bold text-[#0f172a]">{point}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tear to resolve →</span>
            </div>
<<<<<<< HEAD
          </motion.div> :

=======
          </motion.div>
        ) : (
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
          <motion.div
            key="back"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
<<<<<<< HEAD
            className="bg-[#FFFAE7] border-2 border-[#F9A825] p-6 rounded-2xl shadow-[8px_8px_0_0_#F9A825] relative overflow-hidden">

=======
            className="bg-[#FFFAE7] border-2 border-[#F9A825] p-6 rounded-2xl shadow-[8px_8px_0_0_#F9A825] relative overflow-hidden"
          >
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
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
<<<<<<< HEAD
            <button className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#F9A825] hover:underline" onClick={(e) => { e.stopPropagation(); setIsTorn(false); }}>
              ← Bring back the pain
            </button>
          </motion.div>

        }
=======
            <button
              className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#F9A825] hover:underline"
              onClick={(e) => { e.stopPropagation(); setIsTorn(false); }}
            >
              ← Bring back the pain
            </button>
          </motion.div>
        )}
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
      </AnimatePresence>
    </motion.div>
  );
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
<<<<<<< HEAD
    }];


  return (
    <section className="py-16 bg-white overflow-hidden w-full min-h-screen" aria-label="Pain points and solutions">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a] mb-6 tracking-tight">
              Typing Is <span className="text-[#ef4444]">Slowing You Down.</span>
            </h2>


            <p className="text-lg text-[#475569] font-medium mb-10">
=======
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden w-full relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0f172a] mb-8 tracking-tighter leading-[0.9]">
              Typing Is <br />
              <span className="text-[#ef4444]">Slowing You Down.</span>
            </h2>

            <p className="text-xl text-[#475569] font-medium mb-12 max-w-md">
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
              Every pause. Every correction. Every lost idea. <br />
              <span className="text-[#0f172a] font-bold">You’re not tired — you’re throttled.</span>
            </p>

            <div className="grid gap-4 mb-12">
<<<<<<< HEAD
              {points.map((p, i) =>
                <FlashCard key={i} point={p.problem} resolution={p.resolution} description={p.description} index={i} />
              )}
            </div>

            <button
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-4 rounded-[20px] text-lg font-bold transition-all shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_5px_0_rgb(0,0,0)] flex items-center gap-2 border border-black active:shadow-none active:translate-y-[4px]"
              aria-label="Learn more about breaking the friction"
            >
              Break the Friction <ArrowRight size={20} />
=======
              {points.map((p, i) => (
                <FlashCard key={i} point={p.problem} resolution={p.resolution} description={p.description} index={i} />
              ))}
            </div>

            <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 rounded-[24px] text-xl font-bold transition-all shadow-[0_8px_0_rgb(0,0,0)] hover:shadow-[0_4px_0_rgb(0,0,0)] hover:translate-y-[4px] flex items-center gap-3 border-2 border-black active:shadow-none active:translate-y-[8px]">
              Break the Friction <ArrowRight size={24} />
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {/* The Old Way */}
            <div className="w-full bg-[#f8fafc] rounded-[40px] p-8 md:p-10 border-2 border-slate-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-4 right-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">v1.0 Mechanical</div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Cpu size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Input Protocol</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">The Old Way</h4>
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm">
                  <MousePointer2 className="text-slate-400" size={24} />
                </div>
              </div>

              <KeyboardAnimation />

<<<<<<< HEAD
              <div className="mt-8 flex justify-between items-center pt-6 border-t border-slate-200">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency: 20%</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest italic">Low Bandwidth</span>
              </div>
            </div>

            {/* The Syping Way - Futuristic Glass Card */}
            <div className="w-full bg-[#0f172a] rounded-[32px] p-8 border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
              {/* Background Glows */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FFD54F]/20 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-[80px] animate-pulse" />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter">The Syping Way</h4>
                  <p className="text-xs font-bold text-[#FFD54F] uppercase tracking-widest mt-1">Unfiltered Cognition</p>
                </div>
                <div className="w-12 h-12 bg-[#FFD54F] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                  <Zap className="text-[#0f172a]" size={24} />
                </div>
              </div>

              <SypingFlowAnimation />

              <div className="mt-8 flex justify-between items-center pt-6 border-t border-white/10 relative z-10">
                <span className="text-[10px] font-black text-[#FFD54F] uppercase tracking-widest">Efficiency: 98%</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Optimal Flow</span>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Think. Speak. Done.</p>
              </div>
            </div>
=======
              <div className="mt-10 flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Bandwidth</span>
                  <div className="h-1.5 w-32 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/5 bg-slate-400" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Lost Ideas</span>
                  <span className="text-lg font-black text-[#ef4444]">High</span>
                </div>
              </div>
            </div>

            {/* The Evolution Leap */}
            <div className="relative py-12 flex flex-col items-center">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-slate-200 via-slate-400 to-[#0f172a]" />
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative bg-white border-2 border-[#0f172a] p-1 rounded-2xl shadow-[6px_6px_0_0_#0f172a] z-10 flex items-center gap-3 pr-6"
              >
                <div className="bg-[#FFD54F] p-3 rounded-xl border-2 border-[#0f172a] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]">
                  <Zap size={20} className="text-[#0f172a] fill-[#0f172a]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a]">The Cognitive Leap</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Bypassing Mechanical Limits</p>
                </div>
              </motion.div>

              <div className="mt-4 flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Friction</div>
                  <div className="text-[10px] font-bold text-[#ef4444] line-through opacity-40">100%</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Throughput</div>
                  <div className="text-[10px] font-bold text-green-500 underline">+800%</div>
                </div>
              </div>
            </div>

            {/* The Syping Way */}
            <div className="w-full bg-[#0f172a] rounded-[40px] p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FFD54F]/10 rounded-full blur-[60px]" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />
              
              <div className="absolute top-4 right-6 text-[10px] font-black text-white/20 uppercase tracking-widest">v2.0 Cognitive</div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-[#FFD54F] mb-1">
                    <Brain size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Neural Flow</span>
                  </div>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic">The Syping Way</h4>
                </div>
                <div className="w-14 h-14 bg-[#FFD54F] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform">
                  <Zap className="text-[#0f172a]" size={28} />
                </div>
              </div>
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63

              <SypingFlowAnimation />

              <div className="mt-10 flex justify-between items-center pt-8 border-t border-white/10 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[#FFD54F]/60 uppercase tracking-widest mb-1">Bandwidth</span>
                  <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-[#FFD54F]" 
                    />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-[#FFD54F]/60 uppercase tracking-widest block mb-1">Efficiency</span>
                  <span className="text-2xl font-black text-[#FFD54F]">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>);

}
=======
    </section>
  );
}
>>>>>>> de4760345b8529b80dd37bb4aebbf7fadb81fd63
