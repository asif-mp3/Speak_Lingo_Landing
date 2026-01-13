"use client";

import React from 'react';
import { Quote, Star, GraduationCap } from 'lucide-react';

const testimonials = [
  {
    quote: "My essay grades went from B's to A's. The grammar corrections actually taught me why my writing was wrong, not just what was wrong.",
    author: "Priya M.",
    role: "University Student",
    school: "Stanford University",
    color: "bg-blue-50/50"
  },
  {
    quote: "As an ESL teacher, I've seen my students' confidence soar. They practice speaking without fear of judgment, and their progress is remarkable.",
    author: "James K.",
    role: "ESL Teacher",
    school: "International Academy",
    color: "bg-amber-50/50"
  },
  {
    quote: "I used to freeze during presentations. After practicing with SpeakLingo, I nailed my college interview and got into my dream school.",
    author: "Sofia R.",
    role: "High School Senior",
    school: "Accepted to MIT",
    color: "bg-purple-50/50"
  },
  {
    quote: "Coming from Brazil, English was my biggest barrier. Now I write research papers that my professors actually compliment. Life-changing.",
    author: "Marcus T.",
    role: "International Student",
    school: "Columbia University",
    color: "bg-green-50/50"
  }
];

export default function TestimonialsEdu() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9A825]/10 rounded-full border border-[#F9A825]/20 mb-6">
            <GraduationCap size={14} className="text-[#F9A825]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#6B5439]">Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0f172a] mb-6 tracking-tight">
            Students Who <br />
            <span className="text-[#F9A825]">Transformed Their English.</span>
          </h2>

          <p className="text-xl text-[#475569] font-medium max-w-[600px] mx-auto opacity-80">
            From struggling with grammar to excelling in academics. Real stories from real students.
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
                  "{t.quote}"
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
                    <p className="text-xs font-medium text-[#F9A825]">{t.school}</p>
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

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "50K+", label: "Students Learning", sublabel: "Worldwide" },
            { value: "4.9", label: "Average Rating", sublabel: "On App Store" },
            { value: "40%", label: "Grade Improvement", sublabel: "Average" },
            { value: "3x", label: "Writing Speed", sublabel: "Increase" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-slate-50/50 rounded-[24px] border border-slate-100">
              <div className="text-3xl md:text-4xl font-black text-[#0f172a] mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-[#475569]">{stat.label}</div>
              <div className="text-xs font-medium text-slate-400">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 max-w-[800px]">
            <p className="text-lg font-bold text-[#475569] italic mb-2">
              These students were just like you — uncertain about their English skills, worried about making mistakes. Then they started practicing with SpeakLingo, and everything changed.
            </p>
            <p className="text-xs font-black text-[#94a3b8] uppercase tracking-[0.3em]">
              Join the next generation of confident communicators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
