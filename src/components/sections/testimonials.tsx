"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

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
    quote: "Every tool claims to boost productivity. Syping changed my relationship with thinking itself.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">
            The Ones Who Moved First <br />
            <span className="text-[#EAB308]">Never Looked Back.</span>
          </h2>
          <p className="text-xl text-[#475569] font-medium max-w-[700px] mx-auto">
            Before Syping, they hesitated. Now, their ideas move at the speed of instinct.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 rounded-[32px] ${t.color} border border-slate-100/50 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1`}
            >
              <div>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-50">
                  <Quote size={20} className="text-[#EAB308]" />
                </div>
                <p className="text-xl md:text-2xl font-bold text-[#0f172a] leading-tight mb-8 tracking-tight">
                  “{t.quote}”
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#0f172a]">{t.author}</h4>
                  <p className="text-xs font-medium text-[#475569]">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#EAB308] fill-[#EAB308]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-12">
          <div className="inline-block p-8 bg-slate-50 rounded-[32px] border border-slate-100 max-w-[800px]">
            <p className="text-xl font-bold text-[#475569] italic mb-4">
              They were just like you — thinkers trapped behind keyboards. Then they pressed a hotkey, spoke once… and everything changed.
            </p>
            <p className="text-sm font-black text-[#94a3b8] uppercase tracking-[0.2em]">
              The first generation of unfiltered thinkers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
