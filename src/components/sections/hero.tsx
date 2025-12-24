"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Hero component for Wispr Flow
 * Clones the high-impact hero section with headline, CTA, and animated elements.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAF0] pt-[120px] pb-[160px] md:pt-[160px] md:pb-[240px]">
      {/* Decorative Wave Text Path Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <svg
          className="w-full h-full opacity-10 md:opacity-[0.08]"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="textPathHero"
            d="M-200,450 Q200,300 500,500 T1200,400 T1600,600"
            fill="transparent"
          />
          <text className="font-sans text-[20px] md:text-[24px] uppercase tracking-[0.2em] font-medium fill-black">
            <textPath href="#textPathHero" startOffset="0%">
              what's going on so can you check in with them and see if the notes from yesterday's meeting were sent out, or if they need more time what's going on so can you check in with them and see if the notes from yesterday's meeting were sent out
            </textPath>
          </text>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-20 max-w-[1280px]">
        {/* Promo Tag */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/50 backdrop-blur-sm border border-black/10 rounded-full px-4 py-1 flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-wider uppercase text-black/40">Promo</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-[900px] mx-auto">
          <h1 className="font-serif text-[48px] md:text-[96px] leading-[1.1] text-black mb-10 tracking-[-0.02em]">
            <span className="text-black/20">Don't type, </span>
            just speak
          </h1>

          <p className="font-sans text-[18px] md:text-[20px] font-semibold text-black max-w-[560px] mx-auto mb-10 leading-[1.5]">
            The voice-to-text AI that turns speech into clear, polished writing in every app.
          </p>

          {/* Download CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://wisprflow.onelink.me/PguH/lw5h199m"
              className="inline-flex items-center justify-center bg-[#E4D8FF] border border-black text-[#121212] font-semibold py-4 px-10 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              Download for free
            </a>
            <p className="text-[14px] text-[#666666]">
              Available on Mac, Windows and iPhone
            </p>
          </div>
        </div>

        {/* Floating Animated UI Elements */}
        <div className="mt-20 relative flex flex-col items-center">
          {/* Grammar Corrected Pill */}
          <div className="mb-6 animate-bounce-slow">
            <div className="bg-[#004D40] text-white flex items-center gap-3 px-6 py-3 rounded-full shadow-lg">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L6 12L17 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-sans font-semibold text-[16px]">Grammar corrected</span>
            </div>
          </div>

          {/* Audio Visualizer Pill */}
          <div className="neumorphic-card bg-white border border-black/5 rounded-[32px] p-6 max-w-[200px] w-full flex items-center justify-center shadow-xl">
            <div className="flex items-end gap-1 h-[40px]">
              {[0.4, 0.7, 1.0, 0.6, 0.8, 0.5, 0.9, 0.4, 0.7, 0.6].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-black rounded-full transition-all duration-300 animate-pulse"
                  style={{ 
                    height: `${h * 100}%`,
                    animationDelay: `${i * 100}ms`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Handdrawn Squiggly Underline Visual Metaphor */}
          <div className="absolute -bottom-12 md:-bottom-24 w-full max-w-[1000px] opacity-20 pointer-events-none">
             <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68a2f7b01a0cde72bf0f9177_squiggly-49.svg"
                alt=""
                width={1000}
                height={100}
                className="w-full h-auto"
             />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes pulse-audio {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse-audio 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}