"use client";

import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "You're making texting actually delightful right now! Can see it becoming a can't live without product fast.",
      author: "Founding Partner at Strange Ventures",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68adad7636f0ab1d3b12582e_gaurav-v2_20_1_-4.png", // Fallback logic will use closest
    },
    {
      quote: "This is the best AI product I've used since ChatGPT.",
      author: "Rahul Vohra, CEO, Superhuman",
    },
    {
      quote: "I've been using Wispr almost every day since I downloaded it. It's probably my favorite part of the day, especially at the end when I go through my inbox with Wispr.",
      author: "Suzanne Xie, Partner, Neo",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68adad7636f0ab1d3b12582e_gaurav-v2_20_1_-4.png",
    },
    {
      quote: "I can make quick edits while speaking to it because flow really understands me perfectly and can make the necessary changes. Flow's accuracy and speed make it a real game changer.",
      author: "Shashank Vemuri, Scout at Soma Capital",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68adad76cd1cce8916b80878_greg-vx-5.png",
    },
    {
      quote: "I have Parkinson's, and this app has just made my life so much easier using my Mac. I can't even explain the change that it has provided for me.",
      author: "Rich Pankey, Indirect Sourcing Manager",
    },
  ];

  const caseStudies = [
    {
      title: "4x faster responses",
      description: "The \"surprisingly fast\" advisor.",
      author: "Gaurav Vohra",
      role: "Startup Advisor & Growth Leader",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68adad7636f0ab1d3b12582e_gaurav-v2_20_1_-4.png",
    },
    {
      title: "50+ hours saved",
      description: "Before Flow, writing was a battle. Now, it's a conversation.",
      author: "Greg Dickson",
      role: "Author",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68adad76cd1cce8916b80878_greg-vx-5.png",
    },
  ];

  return (
    <section className="bg-[#121212] rounded-[48px] pt-24 pb-32 overflow-hidden mx-4 my-10 relative">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Header Decorator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <div className="w-[1px] h-12 bg-emerald-700/50 rotate-[15deg]"></div>
            <div className="w-[1px] h-10 bg-emerald-700/50 -rotate-[10deg]"></div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="font-serif text-[48px] md:text-[64px] text-[#FBFAF0] leading-[1.1] transform -rotate-2">
            Love letters <br /> to Flow
          </h2>
        </div>

        {/* Testimonials Horizontal Scroll/Grid */}
        <div className="flex flex-nowrap overflow-x-auto pb-12 gap-6 scrollbar-hide snap-x px-4 -mx-4">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 w-[300px] md:w-[360px] bg-[#FBFAF0] rounded-[32px] p-8 snap-center flex flex-col justify-between neumorphic-card ${
                idx % 2 === 0 ? 'mt-8' : 'mb-8'
              }`}
            >
              <div>
                <div className="flex justify-center mb-6">
                  {t.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-black/5">
                      <img src={t.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center border border-black/5">
                      <span className="text-[10px] text-gray-500">USER</span>
                    </div>
                  )}
                </div>
                <p className="text-[16px] md:text-[18px] text-black italic text-center font-sans tracking-tight leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div className="text-center">
                <p className="text-[12px] text-[#666666] uppercase tracking-wider font-semibold">
                  {t.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx} 
              className="bg-[#004D40] rounded-[32px] p-10 flex flex-col justify-between relative group cursor-pointer hover:bg-[#003d33] transition-colors"
            >
              <div className="absolute top-8 right-8 text-[#FBFAF0] transform rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-[32px] text-[#FBFAF0] mb-2">{study.title}</h3>
                <p className="text-[#FBFAF0]/80 text-[18px] mb-12">{study.description}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={study.image} alt={study.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#FBFAF0] leading-none mb-1">{study.author}</p>
                  <p className="text-[12px] text-[#FBFAF0]/60 leading-none">{study.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;