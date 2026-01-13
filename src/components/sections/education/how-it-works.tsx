"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mic, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: "Speak or Type",
    description: "Express yourself naturally in English - speak or write whatever's on your mind.",
    color: "#F9A825",
  },
  {
    icon: Sparkles,
    title: "AI Analyzes",
    description: "Our AI instantly identifies grammar errors, awkward phrasing, and pronunciation issues.",
    color: "#3b82f6",
  },
  {
    icon: CheckCircle,
    title: "Learn & Improve",
    description: "Get corrections with clear explanations so you understand the 'why' behind each fix.",
    color: "#22c55e",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Watch your grammar accuracy and speaking confidence grow over time.",
    color: "#a855f7",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-gradient-to-b from-[#FFF8E1] via-white to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6">
            How It <span className="text-[#F9A825]">Works</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-[500px] mx-auto">
            Four simple steps to better English
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-b from-[#F9A825] via-[#3b82f6] to-[#22c55e] origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center gap-8 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ x: i % 2 === 1 ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <span className="text-xs font-black text-slate-300 uppercase tracking-widest mb-2 block">
                      Step {i + 1}
                    </span>
                    <h3 className="text-2xl font-black text-[#0f172a] mb-3">{step.title}</h3>
                    <p className="text-slate-500 font-medium">{step.description}</p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 shrink-0"
                >
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon size={32} className="text-white" />
                  </div>
                  {/* Pulse effect */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute inset-0 rounded-3xl"
                    style={{ backgroundColor: step.color }}
                  />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
