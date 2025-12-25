"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I used to lose ideas mid-sentence. Now, they hit the screen before I even realize I’ve spoken.",
    author: "Aria M.",
    role: "Startup Founder",
    color: "bg-blue-50/50"
  },
  {
    quote: "Syping didn’t just save me time — it gave me clarity. My thoughts sound like me again.",
    author: "Noah K.",
    role: "Writer & Podcaster",
    color: "bg-amber-50/50"
  },
  {
    quote: "Every tool claims to boost productivity. Syping changed my relationship with thinking itself.",
    author: "Devi R.",
    role: "Product Designer",
    color: "bg-purple-50/50"
  },
  {
    quote: "After this, typing feels primitive — like chiseling ideas into stone.",
    author: "Liam T.",
    role: "Content Strategist",
    color: "bg-green-50/50"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 tracking-tight">
            The Ones Who Moved First <br />
            <span className="text-[#EAB308]">Never Looked Back.</span>
          </h2>
          <p className="text-lg text-[#475569] font-medium max-w-[600px] mx-auto opacity-80">
            Before Syping, they hesitated. Now, their ideas move at the speed of instinct.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-6 rounded-[24px] ${t.color} border border-slate-100/80 flex flex-col justify-between group hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-300`}
            >
              <div>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm border border-slate-50">
                  <Quote size={14} className="text-[#EAB308]" />
                </div>
                <p className="text-base md:text-lg font-bold text-[#0f172a] leading-tight mb-6 tracking-tight">
                  “{t.quote}”
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-[#0f172a]">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0f172a]">{t.author}</h4>
                    <p className="text-[10px] font-medium text-[#475569]">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-[#EAB308] fill-[#EAB308]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 bg-slate-50/50 rounded-[24px] border border-slate-100 max-w-[700px]">
            <p className="text-base font-bold text-[#475569] italic mb-2">
              They were just like you — thinkers trapped behind keyboards. Then they pressed a hotkey, spoke once… and everything changed.
            </p>
            <p className="text-[10px] font-black text-[#94a3b8] uppercase tracking-[0.2em]">
              The first generation of unfiltered thinkers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
