"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function CtaSimple() {
  return (
    <section className="py-32 bg-[#FFFAE7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F9A825]/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD54F]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 max-w-[900px] relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-[#0f172a] shadow-[4px_4px_0_#0f172a] mb-8"
          >
            <Sparkles size={16} className="text-[#F9A825]" />
            <span className="text-sm font-bold text-[#0f172a]">Start Your Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6">
            Ready to <span className="text-[#F9A825]">Transform</span>
            <br />Your English?
          </h2>
          <p className="text-xl text-slate-500 max-w-[500px] mx-auto">
            Join thousands of students improving their grammar and speaking skills every day.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[32px] p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-black text-[#0f172a] mb-2">Free Forever</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-[#0f172a]">$0</span>
              <span className="text-slate-400 font-medium">/month</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">Perfect for getting started</p>
            <ul className="space-y-4 mb-8">
              {[
                "Basic grammar corrections",
                "5 speaking sessions/day",
                "Progress tracking",
                "Community support"
              ].map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-green-600" />
                  </div>
                  {f}
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl border-2 border-[#0f172a] font-bold text-[#0f172a] hover:bg-slate-50 transition-colors shadow-[0_4px_0_#0f172a] hover:shadow-[0_2px_0_#0f172a] hover:translate-y-[2px]"
            >
              Get Started Free
            </motion.button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#0f172a] rounded-[32px] p-8 relative shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="absolute -top-4 right-6 px-4 py-2 bg-[#F9A825] rounded-full border-2 border-[#0f172a]"
            >
              <span className="text-sm font-black text-[#0f172a]">Most Popular</span>
            </motion.div>

            <h3 className="text-xl font-black text-white mb-2">Pro</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-[#F9A825]">$5</span>
              <span className="text-slate-400 font-medium">/month</span>
            </div>
            <p className="text-sm text-white/50 mb-6">Everything you need to excel</p>
            <ul className="space-y-4 mb-8">
              {[
                "Unlimited grammar corrections",
                "Unlimited speaking practice",
                "Advanced AI feedback",
                "Pronunciation analysis",
                "Essay templates",
                "Priority support"
              ].map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <div className="w-5 h-5 rounded-full bg-[#F9A825] flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[#0f172a]" />
                  </div>
                  {f}
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-[#F9A825] font-bold text-[#0f172a] hover:bg-[#FFD54F] transition-colors flex items-center justify-center gap-2 shadow-[0_4px_0_#C67C00] hover:shadow-[0_2px_0_#C67C00] hover:translate-y-[2px]"
            >
              Start 7-Day Free Trial <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400"
        >
          No credit card required. Cancel anytime. 7-day money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
}
