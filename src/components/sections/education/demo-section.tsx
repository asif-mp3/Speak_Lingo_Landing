"use client";

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Type, CheckCircle, Lightbulb, Zap, Clock, Globe } from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';

const steps = [
  {
    id: 'speak',
    icon: Mic,
    label: 'Speak',
    description: 'Talk naturally',
    color: '#3b82f6',
  },
  {
    id: 'transcribe',
    icon: Type,
    label: 'Transcribe',
    description: 'Text appears',
    color: '#F9A825',
  },
  {
    id: 'correct',
    icon: CheckCircle,
    label: 'Correct',
    description: 'Grammar fixed',
    color: '#22c55e',
  },
  {
    id: 'learn',
    icon: Lightbulb,
    label: 'Learn',
    description: 'Get tips',
    color: '#a855f7',
  },
];

// Waveform component
const WaveformBars = memo(() => (
  <div className="flex items-end justify-center gap-1 h-16">
    {[...Array(24)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ height: [12, 30 + Math.random() * 30, 12] }}
        transition={{ duration: 0.5 + Math.random() * 0.3, repeat: Infinity, delay: i * 0.04 }}
        className="w-1.5 bg-blue-500 rounded-full"
      />
    ))}
  </div>
));

WaveformBars.displayName = 'WaveformBars';

// Demo content component
const DemoContent = memo(({ currentStep, displayText, showCorrection, showTip }: {
  currentStep: number;
  displayText: string;
  showCorrection: boolean;
  showTip: boolean;
}) => {
  const originalText = "She don't understand the homework assignment";
  const correctedText = "She doesn't understand the homework assignment";

  return (
    <div className="min-h-[280px] flex flex-col items-center justify-center p-8">
      {/* Step 0: Speaking - Waveform */}
      {currentStep === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <Mic size={36} className="text-blue-500" />
          </motion.div>
          <WaveformBars />
          <p className="text-slate-400 font-medium">Listening to your voice...</p>
        </motion.div>
      )}

      {/* Step 1: Transcribing - Typewriter */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          <p className="text-xl md:text-2xl font-medium text-[#0f172a] leading-relaxed">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-[#F9A825] ml-1 align-middle"
            />
          </p>
        </motion.div>
      )}

      {/* Step 2: Correcting - Show fixes */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            <span className="text-[#0f172a]">She </span>
            {showCorrection ? (
              <>
                <span className="line-through text-red-500 opacity-60">don&apos;t</span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 font-bold"
                >
                  doesn&apos;t
                </motion.span>
              </>
            ) : (
              <span className="text-[#0f172a]">don&apos;t</span>
            )}
            <span className="text-[#0f172a]"> understand the homework assignment</span>
          </p>
        </motion.div>
      )}

      {/* Step 3: Learning - Show tip */}
      {currentStep === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full space-y-6"
        >
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            <span className="text-[#0f172a]">She </span>
            <span className="text-green-600 font-bold">doesn&apos;t</span>
            <span className="text-[#0f172a]"> understand the homework assignment</span>
          </p>

          <AnimatePresence>
            {showTip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-purple-50 border border-purple-200 rounded-2xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Lightbulb size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-purple-800">Grammar Tip</p>
                    <p className="text-sm text-purple-600 mt-1">
                      Use &quot;doesn&apos;t&quot; for third person singular (he, she, it).
                      &quot;Don&apos;t&quot; is for I, you, we, they.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
});

DemoContent.displayName = 'DemoContent';

export default function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCorrection, setShowCorrection] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const fullText = "She don't understand the homework assignment";

  useEffect(() => {
    let isMounted = true;

    const runDemo = async () => {
      // Reset
      setCurrentStep(0);
      setDisplayText("");
      setShowCorrection(false);
      setShowTip(false);

      // Step 0: Speaking (2s)
      await new Promise(r => setTimeout(r, 2500));
      if (!isMounted) return;

      // Step 1: Transcribing
      setCurrentStep(1);
      const words = fullText.split(' ');
      for (let i = 0; i < words.length; i++) {
        if (!isMounted) return;
        await new Promise(r => setTimeout(r, 120));
        setDisplayText(words.slice(0, i + 1).join(' '));
      }
      await new Promise(r => setTimeout(r, 800));
      if (!isMounted) return;

      // Step 2: Correcting
      setCurrentStep(2);
      await new Promise(r => setTimeout(r, 500));
      if (!isMounted) return;
      setShowCorrection(true);
      await new Promise(r => setTimeout(r, 1500));
      if (!isMounted) return;

      // Step 3: Learning
      setCurrentStep(3);
      await new Promise(r => setTimeout(r, 500));
      if (!isMounted) return;
      setShowTip(true);
      await new Promise(r => setTimeout(r, 3000));

      // Loop
      if (isMounted) {
        runDemo();
      }
    };

    runDemo();

    return () => { isMounted = false; };
  }, []);

  return (
    <section className="py-24 bg-[#FFFAE7] relative overflow-hidden">
      {/* Background blob */}
      <AnimatedBlob color="#a855f7" size={300} position={{ bottom: '10%', left: '5%' }} delay={3} duration={25} />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-bold text-[#0f172a] shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-6">
            Live Demo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight mb-4">
            See It{" "}
            <span className="text-[#F9A825]">In Action</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[500px] mx-auto">
            Watch how Syping transforms your voice into perfect text while teaching you along the way.
          </p>
        </motion.div>

        {/* Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          {/* Step indicators */}
          <div className="px-8 py-6 border-b border-slate-100">
            <div className="flex items-center justify-between max-w-[600px] mx-auto">
              {steps.map((step, i) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      animate={{
                        scale: currentStep === i ? 1.1 : 1,
                        backgroundColor: currentStep >= i ? step.color : '#e2e8f0',
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
                    >
                      <step.icon
                        size={20}
                        className={currentStep >= i ? 'text-white' : 'text-slate-400'}
                      />
                    </motion.div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${currentStep >= i ? 'text-[#0f172a]' : 'text-slate-300'}`}>
                      {step.label}
                    </span>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-4 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: currentStep > i ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: steps[i + 1].color }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Demo content */}
          <DemoContent
            currentStep={currentStep}
            displayText={displayText}
            showCorrection={showCorrection}
            showTip={showTip}
          />

          {/* Stats footer */}
          <div className="px-8 py-6 bg-slate-50 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-[#F9A825]" />
              <span className="text-sm font-bold text-slate-600">0.3s latency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span className="text-sm font-bold text-slate-600">98% accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-blue-500" />
              <span className="text-sm font-bold text-slate-600">100+ languages</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mt-8"
        >
          Every correction is a mini-lesson. Every sentence makes you better.
        </motion.p>
      </div>
    </section>
  );
}
