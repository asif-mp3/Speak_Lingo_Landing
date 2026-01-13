"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, CreditCard, RotateCcw, Clock, TrendingUp, MessageSquare, Flame, Building2 } from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';
import XPCounter from './shared/xp-counter';

const trustBadges = [
  { icon: CreditCard, text: "No credit card" },
  { icon: RotateCcw, text: "7-day free trial" },
  { icon: Shield, text: "Cancel anytime" },
];

// Achievement card with animated metrics
const AchievementCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showStreak, setShowStreak] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowStreak(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="bg-[#0f172a] rounded-[40px] p-8 relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
    >
      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#F9A825]/15 rounded-full blur-[60px]" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div>
          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Your First Week</span>
          <h4 className="text-xl font-black text-white">Progress Preview</h4>
        </div>
        {showStreak && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 rounded-full"
          >
            <Flame size={16} className="text-orange-500" />
            <span className="text-xs font-black text-orange-500">Day 7</span>
          </motion.div>
        )}
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
        <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
          <Clock size={20} className="text-[#F9A825] mx-auto mb-2" />
          <div className="text-2xl font-black text-white">
            {isInView && <XPCounter value={2} suffix="h" />}
          </div>
          <p className="text-[10px] text-white/50 font-bold">Time Saved</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
          <TrendingUp size={20} className="text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-black text-white">
            {isInView && <XPCounter value={8} suffix="%" />}
          </div>
          <p className="text-[10px] text-white/50 font-bold">Grammar Up</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
          <MessageSquare size={20} className="text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-black text-white">
            {isInView && <XPCounter value={150} suffix="" />}
          </div>
          <p className="text-[10px] text-white/50 font-bold">Words Spoken</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-white/50">Level Progress</span>
          <span className="text-xs font-bold text-[#F9A825]">Level 2</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "65%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#F9A825] to-[#FFD54F] rounded-full"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-white/30">Getting Started</span>
          <span className="text-[10px] text-[#F9A825]">Building Confidence</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-[#FFFAE7] relative overflow-hidden">
      {/* Background blobs */}
      <AnimatedBlob color="#F9A825" size={400} position={{ top: '20%', left: '5%' }} delay={0} duration={20} />
      <AnimatedBlob color="#FFD54F" size={300} position={{ bottom: '10%', right: '10%' }} delay={5} duration={25} />

      <div className="container mx-auto px-6 max-w-[1140px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-sm font-bold text-[#0f172a]">Start Today</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] leading-[1.05] tracking-tight mb-6"
            >
              Ready to Transform
              <br />
              <span className="text-[#F9A825]">How You Learn?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 max-w-[450px] mb-10"
            >
              Join thousands of students speaking their way to better English.{" "}
              <span className="font-bold text-[#0f172a]">Your first week is on us.</span>
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className="bg-[#0f172a] text-white px-8 py-4 rounded-2xl text-base font-bold shadow-[0_6px_0_#000] hover:shadow-[0_4px_0_#000] hover:translate-y-[2px] active:shadow-[0_2px_0_#000] active:translate-y-[4px] transition-all inline-flex items-center justify-center gap-2">
                Get Syping Free <ArrowRight size={18} />
              </button>
              <button className="bg-white border-2 border-[#0f172a] text-[#0f172a] px-8 py-4 rounded-2xl text-base font-bold hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2 shadow-[0_6px_0_rgb(0,0,0)] hover:shadow-[0_4px_0_rgb(0,0,0)] hover:translate-y-[2px] active:shadow-[0_2px_0_rgb(0,0,0)] active:translate-y-[4px]">
                <Building2 size={18} /> Institution Demo
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                  <badge.icon size={16} className="text-[#F9A825]" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Achievement card */}
          <AchievementCard />
        </div>

        {/* Bottom social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-sm text-slate-400 mb-4">
            Trusted by <span className="font-bold text-[#0f172a]">50,000+</span> students and <span className="font-bold text-[#0f172a]">500+</span> schools
          </p>

          {/* Avatar stack */}
          <div className="flex justify-center">
            <div className="flex -space-x-3">
              {['A', 'R', 'Z', 'M', 'P'].map((initial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                  className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-[#0f172a] border-2 border-white"
                  style={{
                    backgroundColor: ['#FFFAE7', '#f0fdf4', '#eff6ff', '#faf5ff', '#fef2f2'][i],
                  }}
                >
                  {initial}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.85, type: "spring" }}
                className="w-10 h-10 rounded-full bg-[#F9A825] shadow-lg flex items-center justify-center text-xs font-bold text-[#0f172a] border-2 border-white"
              >
                +50K
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
