"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, Sparkles, BookOpen, Clock, Heart, ArrowRight } from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';
import XPCounter from './shared/xp-counter';

const benefits = [
  {
    icon: Mic,
    title: "Speak → Perfect Text",
    description: "Your voice becomes flawless writing instantly",
    color: "#F9A825",
    bgColor: "#FFFAE7",
  },
  {
    icon: Sparkles,
    title: "Auto-Correct + Tips",
    description: "Grammar mistakes fixed with quick explanations",
    color: "#22c55e",
    bgColor: "#f0fdf4",
  },
  {
    icon: BookOpen,
    title: "Learn Naturally",
    description: "No lessons needed — learn as you work",
    color: "#3b82f6",
    bgColor: "#eff6ff",
  },
  {
    icon: Clock,
    title: "Save Hours Weekly",
    description: "Instant output means more time for you",
    color: "#a855f7",
    bgColor: "#faf5ff",
  },
  {
    icon: Heart,
    title: "Feel Fluent",
    description: "Confidence without fear of mistakes",
    color: "#ef4444",
    bgColor: "#fef2f2",
  },
];

// Live dashboard component
const LiveDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-green-500 rounded-full"
        />
        <span className="text-sm font-bold text-slate-500">Live Progress Dashboard</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Time Saved */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-[#FFFAE7] rounded-2xl p-6 text-center"
        >
          <div className="text-4xl font-black text-[#0f172a] mb-2">
            {isInView && <XPCounter value={3} prefix="+" suffix="m" duration={1.5} />}
          </div>
          <p className="text-sm font-bold text-slate-500">Time Saved</p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-[#F9A825] rounded-full mt-3"
          />
        </motion.div>

        {/* Grammar Accuracy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-green-50 rounded-2xl p-6 text-center"
        >
          <div className="text-4xl font-black text-[#0f172a] mb-2">
            {isInView && <XPCounter value={8} prefix="+" suffix="%" duration={1.5} />}
          </div>
          <p className="text-sm font-bold text-slate-500">Grammar Accuracy</p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80%" } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-1 bg-green-500 rounded-full mt-3 mx-auto"
          />
        </motion.div>

        {/* Confidence Streak */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-orange-50 rounded-2xl p-6 text-center"
        >
          <div className="text-4xl font-black text-[#0f172a] mb-2 flex items-center justify-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              🔥
            </motion.span>
            {isInView && <XPCounter value={7} prefix="Day " duration={1} />}
          </div>
          <p className="text-sm font-bold text-slate-500">Confidence Streak</p>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                className="w-4 h-4 bg-orange-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function RevealSection() {
  return (
    <section className="py-24 bg-[#FFFAE7] relative overflow-hidden">
      {/* Background blobs */}
      <AnimatedBlob
        color="#22c55e"
        size={350}
        position={{ top: '10%', left: '5%' }}
        delay={1}
      />
      <AnimatedBlob
        color="#F9A825"
        size={300}
        position={{ bottom: '20%', right: '10%' }}
        delay={4}
      />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-bold text-[#0f172a] shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-6"
          >
            The Magic Reveal
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] leading-tight mb-4">
            Every Sentence You Speak
            <br />
            <span className="text-[#F9A825]">Makes You Better.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[550px] mx-auto">
            SpeakLingo turns every spoken word into a private English lesson.
            <br />
            It fixes grammar while you talk, and teaches without interrupting.
          </p>
        </motion.div>

        {/* Benefits grid - floating cards */}
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-6 text-center cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: benefit.bgColor }}
              >
                <benefit.icon size={24} style={{ color: benefit.color }} />
              </motion.div>
              <h3 className="text-sm font-black text-[#0f172a] mb-1">{benefit.title}</h3>
              <p className="text-xs text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Live Dashboard */}
        <LiveDashboard />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#F9A825] text-[#0f172a] px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_8px_0_#C67C00] hover:shadow-[0_6px_0_#C67C00] hover:translate-y-[2px] transition-all inline-flex items-center gap-2"
          >
            Speak. Learn. Win. <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
