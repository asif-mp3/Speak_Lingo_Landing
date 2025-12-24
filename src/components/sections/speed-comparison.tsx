"use client";

import React from 'react';
import Image from 'next/image';

const SpeedComparison = () => {
  return (
    <section className="bg-[#FBFAF0] py-20 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16 lg:mb-24">
          <div className="relative inline-block mb-8">
            <h2 className="text-[32px] md:text-[56px] font-serif leading-[1.2] text-black tracking-[-0.02em]">
              4x faster than typing
            </h2>
            {/* Lavender squiggle underline placeholder */}
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#E4D8FF] rounded-full opacity-60"></div>
          </div>
          
          <p className="font-sans text-[16px] md:text-[20px] text-[#666666] leading-[1.6] max-w-[640px]">
            After 150 years of using the same keyboard, voice that actually works is finally here. 
            When you create, code, and respond faster, you free up time for more. 
            Speak naturally at the speed you think and let Flow handle the rest.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-black rounded-full font-sans font-semibold text-[16px] hover:scale-[0.98] transition-transform">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68335d5ca4a30e3a678bf92d_mic-icon-47.svg" 
                alt="Mic" 
                className="w-4 h-4"
              />
              Try Flow
            </button>
            <button className="px-6 py-3 bg-[#E4D8FF] border border-black rounded-full font-sans font-semibold text-[16px] hover:scale-[0.98] transition-transform">
              Download for free
            </button>
          </div>
        </div>

        {/* Comparison Cards Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 items-end max-w-[1100px] mx-auto">
          
          {/* Keyboard Speed Card */}
          <div className="bg-white rounded-[24px] p-10 flex flex-col items-center justify-center text-center border border-[rgba(0,0,0,0.05)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-auto lg:h-[300px]">
            <span className="font-sans text-[14px] font-medium text-[#666666] uppercase tracking-wider mb-2">Keyboard</span>
            <div className="font-serif text-[48px] md:text-[56px] text-black leading-none">
              45 <span className="text-[24px]">wpm</span>
            </div>
            <p className="font-sans text-[14px] text-[#666666] mt-4 max-w-[180px]">
              Average typing speed for professionals
            </p>
          </div>

          {/* Flow Speed / Video Card */}
          <div className="relative group rounded-[48px] overflow-hidden h-[400px] lg:h-[480px] bg-black shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center justify-center">
            {/* Background Blur Image - Mocking the blurry video backplate from screenshots */}
            <div className="absolute inset-0 opacity-60">
              <img 
                src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713160a3f2ece629f48a35_Icon.svg" 
                alt="Background effect" 
                className="w-full h-full object-cover blur-[40px] scale-110"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center text-center px-10">
              <span className="font-sans text-[14px] font-medium text-white/80 uppercase tracking-wider mb-2">Flow</span>
              <div className="font-serif text-[64px] md:text-[80px] text-white leading-none mb-6">
                220 <span className="text-[32px]">wpm</span>
              </div>
              
              {/* Transcription Mockup */}
              <div className="max-w-[500px] p-6 bg-white/10 backdrop-blur-md rounded-[24px] border border-white/20">
                <p className="font-sans text-[15px] md:text-[18px] text-white leading-relaxed italic">
                  "How would you like to set up the file. Here are a few options. I'm getting started with the project..."
                </p>
                {/* Waveform visual mimic */}
                <div className="mt-4 flex items-center justify-center gap-1 h-8">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-[3px] bg-white rounded-full animate-pulse"
                      style={{ 
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.8s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeedComparison;