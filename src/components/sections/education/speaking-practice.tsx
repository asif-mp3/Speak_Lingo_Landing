"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  MicOff,
  Volume2,
  Play,
  RotateCcw,
  Star,
  TrendingUp,
  MessageCircle,
  Headphones,
  Award,
  Zap,
  Target
} from 'lucide-react';

// Audio waveform visualization
const Waveform = ({ active }: { active: boolean }) => (
  <div className="flex items-center justify-center gap-1 h-16">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        animate={active ? {
          height: [8, 20 + Math.random() * 40, 8],
          opacity: [0.4, 1, 0.4]
        } : { height: 8, opacity: 0.3 }}
        transition={{
          duration: 0.3 + Math.random() * 0.4,
          repeat: active ? Infinity : 0,
          delay: i * 0.03
        }}
        className="w-1 bg-[#F9A825] rounded-full"
      />
    ))}
  </div>
);

// Speaking simulator with scenarios
const SpeakingSimulator = () => {
  const scenarios = [
    { context: "Job Interview", prompt: "Tell me about yourself and your career goals.", difficulty: "Intermediate" },
    { context: "Presentation", prompt: "Explain the key findings of your research.", difficulty: "Advanced" },
    { context: "Casual Chat", prompt: "Describe your favorite hobby and why you enjoy it.", difficulty: "Beginner" },
  ];

  const [currentScenario, setCurrentScenario] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 4000);
    } else {
      setIsRecording(true);
      setShowFeedback(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Scenario tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {scenarios.map((s, i) => (
          <button
            key={i}
            onClick={() => { setCurrentScenario(i); setIsRecording(false); setShowFeedback(false); }}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              i === currentScenario
                ? 'bg-[#0f172a] text-white'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            {s.context}
          </button>
        ))}
      </div>

      {/* Prompt */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-slate-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Prompt</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              scenarios[currentScenario].difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
              scenarios[currentScenario].difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {scenarios[currentScenario].difficulty}
            </span>
          </div>
          <p className="text-lg font-bold text-[#0f172a] leading-tight">
            "{scenarios[currentScenario].prompt}"
          </p>
        </div>

        {/* Waveform */}
        <Waveform active={isRecording} />

        {/* Feedback overlay */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-green-50 border border-green-200 rounded-xl p-3 mt-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="text-green-500 fill-green-500" size={16} />
                <span className="text-sm font-bold text-green-700">Great response!</span>
              </div>
              <p className="text-xs text-green-600">Clear pronunciation, good pacing. Try using more transitional phrases.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
          <RotateCcw size={18} className="text-slate-500" />
        </button>
        <button
          onClick={handleRecord}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
            isRecording
              ? 'bg-red-500 animate-pulse'
              : 'bg-[#0f172a] hover:bg-[#1e293b]'
          }`}
        >
          {isRecording ? (
            <MicOff size={24} className="text-white" />
          ) : (
            <Mic size={24} className="text-white" />
          )}
        </button>
        <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
          <Volume2 size={18} className="text-slate-500" />
        </button>
      </div>
    </div>
  );
};

// Pronunciation score card
const PronunciationScore = () => {
  const [scores, setScores] = useState({
    clarity: 85,
    pace: 72,
    intonation: 90,
    accuracy: 88
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setScores(prev => ({
        clarity: Math.min(100, prev.clarity + Math.floor(Math.random() * 3) - 1),
        pace: Math.min(100, prev.pace + Math.floor(Math.random() * 5) - 1),
        intonation: Math.min(100, prev.intonation + Math.floor(Math.random() * 2) - 1),
        accuracy: Math.min(100, prev.accuracy + Math.floor(Math.random() * 3) - 1),
      }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "Clarity", value: scores.clarity, color: "#22c55e" },
    { label: "Pace", value: scores.pace, color: "#F9A825" },
    { label: "Intonation", value: scores.intonation, color: "#3b82f6" },
    { label: "Accuracy", value: scores.accuracy, color: "#a855f7" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Headphones size={16} className="text-[#F9A825]" />
        <span className="text-xs font-black uppercase tracking-wider text-white/60">Pronunciation Analysis</span>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white/10 rounded-xl p-3 flex flex-col">
            <span className="text-[10px] font-bold text-white/50 uppercase mb-1">{m.label}</span>
            <motion.span
              key={m.value}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-2xl font-black"
              style={{ color: m.color }}
            >
              {m.value}%
            </motion.span>
            <div className="mt-auto h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${m.value}%` }}
                className="h-full rounded-full"
                style={{ backgroundColor: m.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-sm font-bold text-[#F9A825]">
        Overall: Excellent
      </div>
    </div>
  );
};

// Practice streak tracker
const StreakTracker = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completed = [true, true, true, true, true, false, false];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-500">Practice Streak</span>
        <div className="flex items-center gap-1">
          <Zap size={14} className="text-[#F9A825]" />
          <span className="text-sm font-black text-[#F9A825]">5 Days</span>
        </div>
      </div>

      <div className="flex justify-between items-end flex-1">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                completed[i]
                  ? 'bg-[#F9A825] border-2 border-[#0f172a]'
                  : 'bg-slate-100 border-2 border-slate-200'
              }`}
            >
              {completed[i] && <Star size={16} className="text-[#0f172a]" />}
            </motion.div>
            <span className={`text-xs font-bold ${completed[i] ? 'text-[#0f172a]' : 'text-slate-400'}`}>{day}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-xs font-bold text-slate-500">
        2 more days to unlock reward!
      </div>
    </div>
  );
};

// Speaking topics carousel
const SpeakingTopics = () => {
  const topics = [
    { title: "Academic Discussion", count: 24, icon: Award },
    { title: "Interview Prep", count: 18, icon: Target },
    { title: "Casual Conversation", count: 32, icon: MessageCircle },
  ];

  return (
    <div className="h-full flex flex-col">
      <span className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4">Speaking Topics</span>

      <div className="flex-1 space-y-3">
        {topics.map((topic, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-[#F9A825] transition-colors">
              <topic.icon size={18} className="text-[#0f172a]" />
            </div>
            <div className="flex-1 text-left">
              <span className="text-sm font-bold text-[#0f172a]">{topic.title}</span>
              <span className="text-xs text-slate-400 block">{topic.count} prompts</span>
            </div>
            <Play size={14} className="text-slate-400 group-hover:text-[#F9A825] transition-colors" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// Progress chart
const ProgressChart = () => {
  const data = [40, 55, 52, 68, 72, 78, 85];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-slate-500">Fluency Progress</span>
        <TrendingUp size={14} className="text-green-500" />
      </div>

      <div className="flex-1 flex items-end justify-between gap-2">
        {data.map((value, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex-1 bg-gradient-to-t from-[#F9A825] to-[#FFD54F] rounded-t-lg relative group"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold text-[#0f172a]">{value}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between mt-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <span key={i} className="text-[9px] font-bold text-slate-400 flex-1 text-center">{day}</span>
        ))}
      </div>
    </div>
  );
};

export default function SpeakingPractice() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a] rounded-full mb-6">
            <Mic size={14} className="text-[#F9A825]" />
            <span className="text-xs font-black uppercase tracking-wider text-white">Speaking Practice</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0f172a] leading-[0.95] tracking-tight mb-6">
            Speak Confidently. <br />
            <span className="text-[#F9A825]">Sound Naturally.</span>
          </h2>

          <p className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto">
            Practice real conversations with AI feedback. Build confidence without the fear of judgment.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Main Speaking Simulator - spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7 bg-white rounded-[32px] p-6 md:p-8 border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a] min-h-[400px]"
          >
            <SpeakingSimulator />
          </motion.div>

          {/* Pronunciation Score - dark card spans 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 lg:col-span-5 bg-[#0f172a] rounded-[32px] p-6 min-h-[400px]"
          >
            <PronunciationScore />
          </motion.div>

          {/* Streak Tracker - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-4 bg-gradient-to-br from-[#FFFAE7] to-white rounded-[32px] p-6 border-2 border-[#F9A825] shadow-[8px_8px_0_#F9A825] min-h-[220px]"
          >
            <StreakTracker />
          </motion.div>

          {/* Speaking Topics - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-4 bg-white rounded-[32px] p-6 border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a] min-h-[220px]"
          >
            <SpeakingTopics />
          </motion.div>

          {/* Progress Chart - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-12 md:col-span-4 bg-white rounded-[32px] p-6 border-2 border-[#0f172a] shadow-[8px_8px_0_#0f172a] min-h-[220px]"
          >
            <ProgressChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
