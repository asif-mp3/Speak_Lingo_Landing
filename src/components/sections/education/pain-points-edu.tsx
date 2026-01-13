"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, Sparkles, Zap, Brain, BookOpen, Mic } from 'lucide-react';

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

const LearningFlowAnimation = () => {
  const [words, setWords] = useState<string[]>([]);
  const fullSentence = "The research demonstrates that effective communication skills significantly enhance academic performance and career opportunities.";
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
      <div className="flex items-end justify-center gap-1.5 h-16 w-full">
        {[...Array(24)].map((_, i) => (
          <SoundBar key={i} delay={i * 0.05} />
        ))}
      </div>

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
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
            className="w-2 h-7 bg-[#FFD54F] mt-1 shadow-[0_0_15px_#FFD54F]"
          />
        </div>

        <div className="absolute bottom-4 right-6 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Grammar AI Active</span>
        </div>
      </div>
    </div>
  );
};

const FlashCard = ({ point, resolution, description, index }: { point: string; resolution: string; description: string; index: number }) => {
  const [isTorn, setIsTorn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onClick={() => setIsTorn(!isTorn)}
    >
      <AnimatePresence>
        {!isTorn ? (
          <motion.div
            key="front"
            exit={{
              y: -100,
              opacity: 0,
              rotate: [0, -5, 5],
              scale: 0.9,
              transition: { duration: 0.4 }
            }}
            className="bg-white border-2 border-[#0f172a] p-6 rounded-2xl shadow-[8px_8px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 mt-1">
                <AlertCircle size={18} className="text-[#ef4444]" />
              </div>
              <p className="text-base font-bold text-[#0f172a]">{point}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tap to see solution</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="bg-[#FFFAE7] border-2 border-[#F9A825] p-6 rounded-2xl shadow-[8px_8px_0_0_#F9A825] relative overflow-hidden"
          >
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
            <button
              className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#F9A825] hover:underline"
              onClick={(e) => { e.stopPropagation(); setIsTorn(false); }}
            >
              See challenge again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function PainPointsEdu() {
  const points = [
    {
      problem: "Struggle to express ideas clearly in English.",
      resolution: "Grammar AI That Teaches",
      description: "Real-time corrections with explanations help you learn while you write."
    },
    {
      problem: "Fear of making mistakes in class or exams.",
      resolution: "Confidence Through Practice",
      description: "Practice speaking and writing in a judgment-free environment."
    },
    {
      problem: "Essays and assignments take too long to complete.",
      resolution: "Voice-Powered Writing",
      description: "Speak your ideas naturally and watch them transform into polished text."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden w-full relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full mb-8 border border-red-100">
              <BookOpen size={12} className="text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700">Learning Challenges</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0f172a] mb-8 tracking-tighter leading-[0.9]">
              English <br />
              <span className="text-[#ef4444]">Holding You Back?</span>
            </h2>

            <p className="text-xl text-[#475569] font-medium mb-12 max-w-md">
              Every hesitation. Every grammar doubt. Every missed opportunity. <br />
              <span className="text-[#0f172a] font-bold">You deserve better tools.</span>
            </p>

            <div className="grid gap-4 mb-12">
              {points.map((p, i) => (
                <FlashCard key={i} point={p.problem} resolution={p.resolution} description={p.description} index={i} />
              ))}
            </div>

            <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 rounded-[24px] text-xl font-bold transition-all shadow-[0_8px_0_rgb(0,0,0)] hover:shadow-[0_4px_0_rgb(0,0,0)] hover:translate-y-[4px] flex items-center gap-3 border-2 border-black active:shadow-none active:translate-y-[8px]">
              Start Improving Today <ArrowRight size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {/* The Old Way */}
            <div className="w-full bg-[#f8fafc] rounded-[40px] p-8 md:p-10 border-2 border-slate-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-4 right-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">Traditional Learning</div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <BookOpen size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Old Method</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">The Struggle</h4>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-6">
                <p className="text-sm text-slate-500 font-medium italic">
                  "I spend hours reviewing grammar rules but still make mistakes in my essays..."
                </p>
              </div>

              <div className="mt-10 flex justify-between items-center pt-8 border-t border-slate-200">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Confidence</span>
                  <div className="h-1.5 w-32 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-1/5 bg-slate-400" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Progress</span>
                  <span className="text-lg font-black text-[#ef4444]">Slow</span>
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
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a]">AI-Powered Learning</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Real-time Feedback</p>
                </div>
              </motion.div>
            </div>

            {/* The SpeakLingo Way */}
            <div className="w-full bg-[#0f172a] rounded-[40px] p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FFD54F]/10 rounded-full blur-[60px]" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />

              <div className="absolute top-4 right-6 text-[10px] font-black text-white/20 uppercase tracking-widest">Smart Learning</div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-[#FFD54F] mb-1">
                    <Brain size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">AI Tutor</span>
                  </div>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic">The SpeakLingo Way</h4>
                </div>
                <div className="w-14 h-14 bg-[#FFD54F] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform">
                  <Mic className="text-[#0f172a]" size={28} />
                </div>
              </div>

              <LearningFlowAnimation />

              <div className="mt-10 flex justify-between items-center pt-8 border-t border-white/10 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[#FFD54F]/60 uppercase tracking-widest mb-1">Confidence</span>
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
                  <span className="text-[10px] font-black text-[#FFD54F]/60 uppercase tracking-widest block mb-1">Improvement</span>
                  <span className="text-2xl font-black text-[#FFD54F]">3x Faster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
