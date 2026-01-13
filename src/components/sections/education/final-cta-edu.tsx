"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Trophy, TrendingUp, Sparkles, GraduationCap } from 'lucide-react';

export default function FinalCtaEdu() {
  const [grammarFixes, setGrammarFixes] = useState(2847);
  const [wordsLearned, setWordsLearned] = useState(156);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrammarFixes((prev) => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setWordsLearned((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden w-full min-h-screen">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9A825]/10 rounded-full border border-[#F9A825]/20 mb-8">
              <GraduationCap size={14} className="text-[#F9A825]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#6B5439]">Your Journey Starts Here</span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black text-[#0f172a] mb-10 tracking-[-0.04em] leading-[0.95]">
              Every Word <br />You Speak, <br />
              <span className="text-[#F9A825]">You Improve.</span>
            </h2>

            <p className="text-2xl md:text-3xl font-serif font-bold text-[#475569] mb-12 max-w-[500px] leading-tight">
              "The best time to improve your English was yesterday. The second best time is now."
            </p>

            <div className="space-y-6 mb-12">
              <p className="text-lg font-bold text-[#0f172a]">
                From the moment you start using SpeakLingo, your English gets better. Grammar corrections become lessons. Speaking practice builds confidence.
              </p>
              <p className="text-lg text-[#475569] font-medium">
                Watch your <span className="text-[#6B5439] font-bold">Progress Counter</span> grow every day. Words become fluency. Fluency becomes opportunity.
              </p>
            </div>

            <button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-10 py-5 rounded-[24px] text-xl font-bold transition-all shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_5px_0_rgb(0,0,0)] flex items-center gap-3 group border border-black active:shadow-none active:translate-y-[6px]">
              Start Learning Free <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[48px] p-12 border border-[#6B5439]/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F9A825] via-[#FFD54F] to-[#F9A825]" />

              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a]">Learning Progress</h4>
                  <p className="text-xs font-black uppercase tracking-widest text-[#94a3b8]">This Semester</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center py-6 bg-green-50 rounded-3xl border border-green-100">
                  <motion.div
                    key={grammarFixes}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-green-600 mb-1"
                  >
                    {grammarFixes.toLocaleString()}
                  </motion.div>
                  <p className="text-sm font-bold text-green-700">Grammar Fixes</p>
                  <p className="text-xs text-green-600/60">Corrections learned from</p>
                </div>
                <div className="text-center py-6 bg-[#FFFAE7] rounded-3xl border border-[#F9A825]/20">
                  <motion.div
                    key={wordsLearned}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-[#F9A825] mb-1"
                  >
                    +{wordsLearned}
                  </motion.div>
                  <p className="text-sm font-bold text-[#6B5439]">New Words</p>
                  <p className="text-xs text-[#6B5439]/60">Added to vocabulary</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <BookOpen size={20} className="text-[#6B5439] mb-3" />
                  <h5 className="font-bold text-[#0f172a]">12 Essays</h5>
                  <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">Improved</p>
                </div>
                <div className="bg-[#FFFAE7] p-6 rounded-3xl border border-[#F9A825]/20">
                  <Trophy size={20} className="text-[#F9A825] mb-3" />
                  <h5 className="font-bold text-[#6B5439]">14-Day Streak</h5>
                  <p className="text-xs font-bold text-[#6B5439]/50 uppercase tracking-wider">Keep it up!</p>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-[#0f172a]">Grammar Mastery</span>
                  <span className="text-sm font-black text-green-600">94%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-500 to-green-400"
                  />
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-bold text-[#0f172a]">Speaking Confidence</span>
                  <span className="text-sm font-black text-[#F9A825]">78%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#F9A825] to-[#FFD54F]"
                  />
                </div>
              </div>

              {/* Motivational badge */}
              <div className="mt-8 flex items-center justify-center gap-2 py-3 bg-[#F9A825]/10 rounded-2xl border border-[#F9A825]/20">
                <Sparkles size={16} className="text-[#F9A825]" />
                <span className="text-sm font-bold text-[#6B5439]">You're in the top 15% of learners this month!</span>
              </div>
            </div>

            {/* Floating Microcopy */}
            <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-bold text-[#475569]/60 italic whitespace-nowrap">
              "Every practice session makes you more confident."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
