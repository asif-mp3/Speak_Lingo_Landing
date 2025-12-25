"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, Shield, Activity, ArrowRight } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, delay }: any) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPulse(true), delay * 1000 + 500);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className="group bg-white p-8 rounded-[32px] border border-[#6B5439]/10 hover:border-[#EAB308]/30 transition-all hover:shadow-[0_20px_50px_rgba(234,179,8,0.08)] relative overflow-hidden">
      <AnimatePresence>
        {pulse && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0, 0.2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-[#FFD54F] rounded-full blur-3xl pointer-events-none"
          />
        )}
      </AnimatePresence>
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD54F]/5 rounded-full -mr-12 -mt-12 group-hover:bg-[#FFD54F]/10 transition-colors" />
      <div className="w-14 h-14 bg-[#FFFAE7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm relative overflow-hidden">
        <Icon className="text-[#6B5439] relative z-10" size={28} />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#EAB308]/20"
        />
      </div>
      <h3 className="text-2xl font-bold text-[#0f172a] mb-3 tracking-tight">{title}</h3>
      <p className="text-[#475569] leading-relaxed font-medium">{description}</p>
      
      <div className="mt-8">
        <button className="text-sm font-bold text-[#EAB308] hover:text-[#6B5439] flex items-center gap-2 transition-colors group/btn">
          Feel the speed <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="h-1 bg-[#FFD54F] absolute bottom-0 left-0 w-full opacity-20" />
    </div>
  );
};

export default function KeyBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "3× Faster Thinking",
      description: "Your voice moves where typing hesitates. Flow returns the moment you speak.",
    },
    {
      icon: Globe,
      title: "Work Everywhere",
      description: "One hotkey. Any app. The world becomes your workspace.",
    },
    {
      icon: Shield,
      title: "Offline. Private. Yours.",
      description: "No servers. No eavesdropping. Just your voice — fully owned.",
    },
      {
        icon: Activity,
        title: "Adapts to You",
        description: "Speak normally, task instantly, chat naturally. Every mode bends to your rhythm.",
      },

  ];

  return (
    <section className="py-24 bg-[#FFFAE7]">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">
            This Is What <span className="text-[#EAB308]">Instant</span> Feels Like
          </h2>
          <p className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto">
            No lag. No limits. Just raw thought — hitting the screen at the speed of your voice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (benefit &&
            <BenefitCard key={index} {...benefit} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
