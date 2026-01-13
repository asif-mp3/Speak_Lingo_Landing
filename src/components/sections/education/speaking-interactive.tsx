"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { Mic, MicOff, Volume2, RotateCcw, Star, Sparkles } from 'lucide-react';

const prompts = [
  { text: "Tell me about yourself.", difficulty: "Easy", duration: 10 },
  { text: "Describe your favorite place to visit.", difficulty: "Medium", duration: 15 },
  { text: "What are your goals for the future?", difficulty: "Medium", duration: 15 },
  { text: "Explain why education is important.", difficulty: "Hard", duration: 20 },
];

// Smooth waveform visualization
const Waveform = ({ active, intensity = 1 }: { active: boolean; intensity?: number }) => {
  const bars = 32;

  return (
    <div className="flex items-center justify-center gap-[3px] h-20">
      {[...Array(bars)].map((_, i) => {
        const delay = i * 0.02;
        const centerDistance = Math.abs(i - bars / 2) / (bars / 2);
        const maxHeight = 60 * (1 - centerDistance * 0.5) * intensity;

        return (
          <motion.div
            key={i}
            animate={active ? {
              height: [8, maxHeight * (0.5 + Math.random() * 0.5), 8],
              opacity: [0.5, 1, 0.5],
            } : { height: 4, opacity: 0.2 }}
            transition={{
              duration: 0.15 + Math.random() * 0.15,
              repeat: active ? Infinity : 0,
              delay: delay,
              ease: "easeInOut",
            }}
            className="w-1 rounded-full bg-gradient-to-t from-[#F9A825] to-[#FFD54F]"
          />
        );
      })}
    </div>
  );
};

// Animated score counter
const AnimatedScore = ({ value, label, color }: { value: number; label: string; color: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="text-3xl font-black"
        style={{ color }}
      >
        <motion.span>{rounded}</motion.span>%
      </motion.div>
      <span className="text-xs text-white/50 font-medium">{label}</span>
    </div>
  );
};

// Circular progress ring
const ProgressRing = ({ progress, isRecording }: { progress: number; isRecording: boolean }) => {
  const circumference = 2 * Math.PI * 54;

  return (
    <div className="relative w-36 h-36">
      {/* Background ring */}
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="72"
          cy="72"
          r="54"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
        />
        <motion.circle
          cx="72"
          cy="72"
          r="54"
          fill="none"
          stroke="#F9A825"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
          transition={{ duration: 0.3 }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>

      {/* Center mic button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={isRecording ? {
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 0 0 rgba(249, 168, 37, 0.4)',
              '0 0 0 20px rgba(249, 168, 37, 0)',
              '0 0 0 0 rgba(249, 168, 37, 0.4)',
            ]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
            isRecording ? 'bg-red-500' : 'bg-[#F9A825]'
          }`}
        >
          {isRecording ? (
            <MicOff size={32} className="text-white" />
          ) : (
            <Mic size={32} className="text-[#0f172a]" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default function SpeakingInteractive() {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scores, setScores] = useState({ clarity: 0, pace: 0, confidence: 0 });

  const prompt = prompts[currentPrompt];

  // Simulate recording progress
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRecording(false);
            setShowFeedback(true);
            // Generate random scores
            setScores({
              clarity: 85 + Math.floor(Math.random() * 15),
              pace: 80 + Math.floor(Math.random() * 20),
              confidence: 88 + Math.floor(Math.random() * 12),
            });
            return 0;
          }
          return prev + (100 / (prompt.duration * 10));
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRecording, prompt.duration]);

  const handleMicClick = () => {
    if (!showFeedback) {
      setIsRecording(!isRecording);
      if (!isRecording) {
        setProgress(0);
      }
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setProgress(0);
    setCurrentPrompt((prev) => (prev + 1) % prompts.length);
  };

  return (
    <section className="py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F9A825]/5 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 max-w-[800px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/10"
          >
            <Mic size={16} className="text-[#F9A825]" />
            <span className="text-sm font-bold text-white/80">Speaking Practice</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Speak Without <span className="text-[#F9A825]">Fear</span>
          </h2>
          <p className="text-xl text-white/50">
            Practice speaking with instant AI feedback. No judgment, just progress.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1e293b] rounded-[40px] border border-white/10 overflow-hidden"
        >
          {/* Prompt Section */}
          <div className="p-8 md:p-12 border-b border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  prompt.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  prompt.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {prompt.difficulty}
                </span>
                <span className="text-xs text-white/40">{prompt.duration}s</span>
              </div>
              <div className="flex gap-1">
                {prompts.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ backgroundColor: i === currentPrompt ? '#F9A825' : 'rgba(255,255,255,0.2)' }}
                    className="w-2 h-2 rounded-full"
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={currentPrompt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl md:text-4xl font-bold text-white text-center leading-tight"
              >
                "{prompt.text}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Recording Section */}
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!showFeedback ? (
                <motion.div
                  key="recording"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  {/* Waveform */}
                  <div className="mb-8 w-full">
                    <Waveform active={isRecording} intensity={isRecording ? 1 : 0.3} />
                  </div>

                  {/* Recording button with progress */}
                  <div onClick={handleMicClick} className="mb-6 cursor-pointer">
                    <ProgressRing progress={progress} isRecording={isRecording} />
                  </div>

                  <p className="text-white/40 text-sm">
                    {isRecording ? 'Recording... Click to stop' : 'Click the microphone to start'}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {/* Success message */}
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <motion.div
                      initial={{ rotate: -30, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <Sparkles size={24} className="text-[#F9A825]" />
                    </motion.div>
                    <span className="text-xl font-bold text-white">Great job!</span>
                    <motion.div
                      initial={{ rotate: 30, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", delay: 0.3 }}
                    >
                      <Sparkles size={24} className="text-[#F9A825]" />
                    </motion.div>
                  </motion.div>

                  {/* Score cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <AnimatedScore value={scores.clarity} label="Clarity" color="#22c55e" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <AnimatedScore value={scores.pace} label="Pace" color="#F9A825" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <AnimatedScore value={scores.confidence} label="Confidence" color="#3b82f6" />
                    </motion.div>
                  </div>

                  {/* Feedback text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4"
                  >
                    <p className="text-green-400 text-sm text-center">
                      Excellent pronunciation! Try varying your tone more for emphasis.
                    </p>
                  </motion.div>

                  {/* XP earned */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.6 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <Star size={20} className="text-[#F9A825] fill-[#F9A825]" />
                    <span className="text-lg font-bold text-[#F9A825]">+25 XP earned!</span>
                  </motion.div>

                  {/* Next button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="w-full bg-[#F9A825] text-[#0f172a] py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_#C67C00] hover:shadow-[0_2px_0_#C67C00] hover:translate-y-[2px] transition-all"
                  >
                    <RotateCcw size={20} />
                    Try Another Prompt
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-12 text-white/40"
        >
          <span className="text-sm"><span className="text-white font-bold">50K+</span> students practicing</span>
          <span className="text-sm"><span className="text-white font-bold">1M+</span> sessions completed</span>
        </motion.div>
      </div>
    </section>
  );
}
