"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "I used to lose ideas mid-sentence. Now, they hit the screen before I even realize I’ve spoken.",
    author: "Aria M.",
    role: "Startup Founder",
    color: "bg-blue-50"
  },
  {
    quote: "Syping didn’t just save me time — it gave me clarity. My thoughts sound like me again.",
    author: "Noah K.",
    role: "Writer & Podcaster",
    color: "bg-amber-50"
  },
  {
    quote: "Every tool claims to boost productivity. SpeakLingo changed my relationship with thinking itself.",
    author: "Devi R.",
    role: "Product Designer",
    color: "bg-purple-50"
  },
  {
    quote: "After this, typing feels primitive — like chiseling ideas into stone.",
    author: "Liam T.",
    role: "Content Strategist",
    color: "bg-green-50"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight"
          >
            The Ones Who Moved First <br />
            <span className="text-[#EAB308]">Never Looked Back.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#475569] font-medium max-w-[700px] mx-auto"
          >
            Before SpeakLingo, they hesitated. Now, their ideas move at the speed of instinct.
          </motion.p>
        </div>

          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`p-12 rounded-[48px] ${t.color} border border-slate-100/50 flex flex-col justify-between group hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1`}
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-slate-50">
                    <Quote size={24} className="text-[#EAB308]" />
                  </div>
                  <p className="text-[26px] md:text-[32px] font-bold text-[#0f172a] leading-[1.1] mb-10 tracking-tight">
                    “{t.quote}”
                  </p>
                </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0f172a]">{t.author}</h4>
                  <p className="text-sm font-medium text-[#475569]">{t.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#EAB308] fill-[#EAB308]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block p-8 bg-slate-50 rounded-[32px] border border-slate-100 max-w-[800px]"
            >
              <p className="text-xl font-bold text-[#475569] italic mb-4">
                They were just like you — thinkers trapped behind keyboards. Then they pressed a hotkey, spoke once… and everything changed.
              </p>
              <p className="text-sm font-black text-[#94a3b8] uppercase tracking-[0.2em]">
                The first generation of unfiltered thinkers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

