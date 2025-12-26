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
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1140px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0f172a] mb-6 tracking-tight">
                The Ones Who Moved First <br />
                <span className="text-[#F9A825]">Never Looked Back.</span>
              </h2>

            <p className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto opacity-80">
              Before Syping, they hesitated. Now, their ideas move at the speed of instinct.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`p-10 rounded-[40px] ${t.color} border border-slate-100/80 flex flex-col justify-between group hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-500`}
              >
                <div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-50">
                      <Quote size={20} className="text-[#F9A825]" />
                    </div>

                  <p className="text-lg md:text-2xl font-bold text-[#0f172a] leading-tight mb-8 tracking-tight">
                    “{t.quote}”
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-black text-[#0f172a] shadow-sm">
                      {t.author[0]}
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#0f172a]">{t.author}</h4>
                      <p className="text-xs font-bold text-[#475569] opacity-60">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#EAB308] fill-[#EAB308]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 max-w-[800px]">
              <p className="text-lg font-bold text-[#475569] italic mb-2">
                They were just like you — thinkers trapped behind keyboards. Then they pressed a hotkey, spoke once… and everything changed.
              </p>
              <p className="text-xs font-black text-[#94a3b8] uppercase tracking-[0.3em]">
                The first generation of unfiltered thinkers.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
