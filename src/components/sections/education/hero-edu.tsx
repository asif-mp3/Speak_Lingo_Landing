"use client";

import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mic, Sparkles, CheckCircle, Building2 } from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';
import Waveform from './shared/waveform';

// Grammar correction examples
const examples = [
  {
    spoken: "I goed to the store yesterday and buyed some food",
    corrected: "I went to the store yesterday and bought some food",
    corrections: [
      { wrong: "goed", right: "went", position: 1 },
      { wrong: "buyed", right: "bought", position: 7 },
    ]
  },
  {
    spoken: "She don't understand the homework assignment",
    corrected: "She doesn't understand the homework assignment",
    corrections: [
      { wrong: "don't", right: "doesn't", position: 1 },
    ]
  },
  {
    spoken: "Their going to submit there project tomorrow",
    corrected: "They're going to submit their project tomorrow",
    corrections: [
      { wrong: "Their", right: "They're", position: 0 },
      { wrong: "there", right: "their", position: 4 },
    ]
  },
];

// Voice Demo Component
const VoiceDemo = memo(() => {
  const [phase, setPhase] = useState<'listening' | 'typing' | 'correcting' | 'done'>('listening');
  const [displayText, setDisplayText] = useState("");
  const [currentExample, setCurrentExample] = useState(0);
  const [accuracy, setAccuracy] = useState(94);

  const example = examples[currentExample];

  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      // Phase 1: Listening
      if (!isMounted) return;
      setPhase('listening');
      setDisplayText("");
      setAccuracy(94 + Math.floor(Math.random() * 5));
      await new Promise(r => setTimeout(r, 2000));

      // Phase 2: Typing
      if (!isMounted) return;
      setPhase('typing');
      const words = example.spoken.split(' ');
      for (let i = 0; i < words.length; i++) {
        if (!isMounted) return;
        await new Promise(r => setTimeout(r, 100));
        setDisplayText(words.slice(0, i + 1).join(' '));
      }
      await new Promise(r => setTimeout(r, 600));

      // Phase 3: Correcting
      if (!isMounted) return;
      setPhase('correcting');
      await new Promise(r => setTimeout(r, 1200));

      // Phase 4: Done
      if (!isMounted) return;
      setPhase('done');
      await new Promise(r => setTimeout(r, 2500));

      // Next example
      if (!isMounted) return;
      setCurrentExample((prev) => (prev + 1) % examples.length);
    };

    runSequence();

    return () => { isMounted = false; };
  }, [currentExample]);

  const renderText = () => {
    if (phase === 'listening') return null;

    const words = (phase === 'done' ? example.corrected : displayText).split(' ');

    return (
      <p className="text-lg md:text-xl font-medium leading-relaxed text-[#0f172a]">
        {words.map((word, i) => {
          const correction = example.corrections.find(c => c.position === i);
          const sourceWord = example.spoken.split(' ')[i];

          if (phase === 'correcting' && correction) {
            return (
              <span key={i} className="inline-block mr-1.5">
                <span className="text-red-500 line-through opacity-60">{sourceWord}</span>
                <span className="text-green-600 font-bold ml-1 animate-fade-in">{correction.right}</span>
              </span>
            );
          }

          if (phase === 'done' && correction) {
            return (
              <span key={i} className="inline-block mr-1.5 text-green-600 font-bold">{word}</span>
            );
          }

          return <span key={i} className="inline-block mr-1.5">{word}</span>;
        })}
        {phase === 'typing' && (
          <span className="inline-block w-0.5 h-5 bg-[#F9A825] ml-1 align-middle animate-blink" />
        )}
      </p>
    );
  };

  return (
    <div className="bg-white rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden w-full max-w-[520px]">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {phase === 'listening' && 'Listening...'}
            {phase === 'typing' && 'Transcribing...'}
            {phase === 'correcting' && 'Fixing Grammar...'}
            {phase === 'done' && 'Perfect!'}
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full">
          <Mic size={12} className="text-[#F9A825]" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Voice AI</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 min-h-[200px] flex flex-col justify-center">
        {phase === 'listening' ? (
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-[#FFFAE7] rounded-full flex items-center justify-center"
            >
              <Mic size={28} className="text-[#F9A825]" />
            </motion.div>
            <Waveform bars={28} height={45} isActive={true} />
            <p className="text-sm text-slate-400 font-medium">Speak naturally...</p>
          </div>
        ) : (
          <div className="w-full">{renderText()}</div>
        )}
      </div>

      {/* Footer stats */}
      <div className="px-6 py-4 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {phase === 'done' && <CheckCircle size={14} className="text-green-500" />}
          <span className={`text-xs font-bold ${phase === 'done' ? 'text-green-600' : 'text-slate-400'}`}>
            {phase === 'done' ? 'Grammar Fixed' : 'Processing...'}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-slate-400">Accuracy: <span className="text-[#F9A825]">{accuracy}%</span></span>
          <div className="flex gap-1.5">
            {examples.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${i === currentExample ? 'bg-[#F9A825] scale-125' : 'bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

VoiceDemo.displayName = 'VoiceDemo';

export default function HeroEdu() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-[#FFFAE7]">
      {/* Background blobs */}
      <AnimatedBlob color="#F9A825" size={450} position={{ top: '5%', left: '-5%' }} delay={0} duration={25} />
      <AnimatedBlob color="#FFD54F" size={350} position={{ bottom: '10%', right: '-5%' }} delay={5} duration={30} />

      <div className="container mx-auto px-6 max-w-[1140px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-8"
            >
              <Sparkles size={14} className="text-[#F9A825]" />
              <span className="text-sm font-bold text-[#0f172a]">For Students & Educators</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0f172a] leading-[1.05] tracking-tight mb-6"
            >
              Speak Your Thoughts.
              <br />
              <span className="text-[#F9A825]">Get Perfect Text.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-[#475569] font-medium max-w-[520px] mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Voice-to-text that corrects your grammar, builds your English skills, and saves hours of typing — all at once.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button className="bg-[#0f172a] text-white px-7 py-4 rounded-2xl text-base font-bold shadow-[0_6px_0_#000] hover:shadow-[0_4px_0_#000] hover:translate-y-[2px] active:shadow-[0_2px_0_#000] active:translate-y-[4px] transition-all inline-flex items-center justify-center gap-2 border border-black">
                Try Free for Students <ArrowRight size={18} />
              </button>
              <button className="bg-white border-2 border-[#0f172a] text-[#0f172a] px-7 py-4 rounded-2xl text-base font-bold hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2 shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_4px_0_rgb(0,0,0)] hover:translate-y-[2px] active:shadow-[0_2px_0_rgb(0,0,0)] active:translate-y-[4px]">
                <Building2 size={18} /> For Institutions
              </button>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "50,000+", label: "Students" },
                { value: "500+", label: "Schools" },
                { value: "2M+", label: "Corrections" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <span className="text-2xl font-black text-[#0f172a]">{stat.value}</span>
                  <span className="text-sm text-slate-400 font-medium ml-2">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 w-full flex justify-center lg:justify-end relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFD54F]/15 blur-[100px] -z-10 rounded-full" />
            <VoiceDemo />

            {/* Floating quote */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 lg:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] hidden lg:block"
            >
              <p className="text-xs font-bold text-[#475569] leading-tight">
                "I speak, it types perfectly. My essays are done 3x faster now."
              </p>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">— Priya, Student</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
