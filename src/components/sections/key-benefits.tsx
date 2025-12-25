"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Activity, ArrowRight } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="group bg-white p-8 rounded-[32px] border border-[#6B5439]/10 hover:border-[#EAB308]/30 transition-all hover:shadow-[0_20px_50px_rgba(234,179,8,0.08)] relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD54F]/5 rounded-full -mr-12 -mt-12 group-hover:bg-[#FFD54F]/10 transition-colors" />
    <div className="w-14 h-14 bg-[#FFFAE7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
      <Icon className="text-[#6B5439]" size={28} />
    </div>
    <h3 className="text-2xl font-bold text-[#0f172a] mb-3 tracking-tight">{title}</h3>
    <p className="text-[#475569] leading-relaxed font-medium">{description}</p>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.3, duration: 0.8 }}
      className="h-1 bg-gradient-to-r from-[#FFD54F] to-transparent absolute bottom-0 left-0"
    />
  </motion.div>
);

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
      description: "Sype normally, task instantly, chat naturally. Every mode bends to your rhythm.",
    },
  ];

  return (
    <section className="py-24 bg-[#FFFAE7]">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight"
          >
            This Is What <span className="text-[#EAB308]">Instant</span> Feels Like
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto"
          >
            No lag. No limits. Just raw thought — hitting the screen at the speed of your voice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
