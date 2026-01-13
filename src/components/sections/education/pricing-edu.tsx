"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, WifiOff, Zap, GraduationCap, Check, Sparkles } from 'lucide-react';

const pricingTiers = [
  {
    name: "Student Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for trying out SpeakLingo",
    features: [
      "2,000 words/month",
      "Basic grammar correction",
      "5 practice sessions/day",
      "Progress tracking",
      "Community support"
    ],
    cta: "Get Started Free",
    highlighted: false
  },
  {
    name: "Student Pro",
    price: "$5",
    period: "/month",
    description: "Everything you need to excel",
    features: [
      "Unlimited words",
      "Advanced grammar + explanations",
      "Unlimited practice sessions",
      "Pronunciation feedback",
      "Essay templates",
      "Priority support",
      "Offline mode"
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular"
  },
  {
    name: "School License",
    price: "Custom",
    period: "",
    description: "For schools and institutions",
    features: [
      "Bulk student accounts",
      "Teacher dashboard",
      "Class progress reports",
      "Assignment integration",
      "Admin controls",
      "Dedicated support",
      "Custom branding"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

export default function PricingEdu() {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <section className="py-32 bg-[#FFFAE7] overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1140px] relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9A825]/10 rounded-full border border-[#F9A825]/20 mb-6">
            <GraduationCap size={14} className="text-[#F9A825]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#6B5439]">Special Student Pricing</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 tracking-tighter">
            Invest in Your <span className="text-[#F9A825]">Future</span>
          </h2>

          <p className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto">
            Affordable plans designed for students and educational institutions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-[32px] p-8 ${
                tier.highlighted
                  ? 'bg-[#0f172a] text-white shadow-[0_40px_80px_rgba(0,0,0,0.2)]'
                  : 'bg-white border-2 border-[#0f172a]'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F9A825] rounded-full border-2 border-[#0f172a]">
                  <span className="text-xs font-black text-[#0f172a] uppercase tracking-wider">{tier.badge}</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-black mb-2 ${tier.highlighted ? 'text-white' : 'text-[#0f172a]'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm font-medium ${tier.highlighted ? 'text-white/60' : 'text-slate-500'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-black ${tier.highlighted ? 'text-[#FFD54F]' : 'text-[#0f172a]'}`}>
                  {tier.price}
                </span>
                <span className={`text-lg font-bold ${tier.highlighted ? 'text-white/60' : 'text-slate-400'}`}>
                  {tier.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      tier.highlighted ? 'bg-[#FFD54F]' : 'bg-[#F9A825]/10'
                    }`}>
                      <Check size={12} className={tier.highlighted ? 'text-[#0f172a]' : 'text-[#F9A825]'} />
                    </div>
                    <span className={`text-sm font-medium ${tier.highlighted ? 'text-white/80' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                tier.highlighted
                  ? 'bg-[#FFD54F] text-[#0f172a] hover:bg-[#FBC02D] shadow-[0_4px_0_#C67C00] hover:shadow-[0_6px_0_#C67C00] active:shadow-none active:translate-y-[4px]'
                  : 'bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_6px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[4px]'
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Privacy Toggle Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-8 border border-blue-100">
              <Shield size={12} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Privacy First</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 tracking-tighter">
              Safe for <br />
              <span className={isOffline ? 'text-blue-600 transition-colors duration-500' : 'text-[#F9A825] transition-colors duration-500'}>
                {isOffline ? 'Exams.' : 'Classrooms.'}
              </span>
            </h3>

            <p className="text-lg text-[#475569] font-medium mb-8 max-w-[400px]">
              SpeakLingo works completely offline. No internet required means no cheating concerns for exams and tests.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "OFFLINE FIRST", icon: WifiOff },
                { label: "LOCAL PROCESSING", icon: Zap },
                { label: "STUDENT SAFE", icon: Shield }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <item.icon size={14} className="text-slate-400" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full scale-150" />

            <div className={`rounded-[48px] p-1 border-2 transition-all duration-700 ${
              isOffline ? 'border-blue-500/30 bg-slate-950' : 'border-[#F9A825]/30 bg-[#FFFAE7]'
            }`}>
              <div className="rounded-[44px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[400px]">

                <AnimatePresence mode="wait">
                  {!isOffline ? (
                    <motion.div
                      key="online"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="relative z-10"
                    >
                      <div className="w-24 h-24 bg-[#FFD54F]/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-[#FFD54F] rounded-full"
                        />
                        <div className="w-16 h-16 bg-[#FFD54F] rounded-full flex items-center justify-center shadow-lg">
                          <GraduationCap size={32} className="text-white" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-black text-[#6B5439] mb-3">Classroom Mode</h4>
                      <p className="text-[#6B5439]/60 font-medium text-sm">
                        Full features with cloud sync for progress tracking.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="offline"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="relative z-10"
                    >
                      <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                        <motion.div
                          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 border-2 border-blue-500 rounded-full"
                        />
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                          <Lock size={32} className="text-white" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-black text-white mb-3">Exam Mode</h4>
                      <p className="text-blue-200/50 font-medium text-sm italic">
                        100% offline. Perfect for test environments.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-12 relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
                    Toggle Mode
                  </div>
                  <button
                    onClick={() => setIsOffline(!isOffline)}
                    className={`group relative w-20 h-10 rounded-full p-1 transition-all duration-500 ${
                      isOffline ? 'bg-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'bg-[#F9A825]'
                    }`}
                  >
                    <motion.div
                      animate={{ x: isOffline ? 40 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isOffline ? 'bg-blue-600' : 'bg-[#F9A825]'}`} />
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
