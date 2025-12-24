"use client";

import React from 'react';
import Image from 'next/image';

const AIComparisonCard = () => {
  return (
    <section className="w-full py-[160px] bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-5 lg:px-20 max-w-[1280px]">
        {/* Main Comparison Card Container */}
        <div className="relative w-full max-w-[1100px] mx-auto bg-white border border-black rounded-[24px] px-8 py-12 lg:px-16 lg:py-14 text-center overflow-hidden neumorphic-card">
          
          {/* Content Layout */}
          <div className="flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-[18px] lg:text-[24px] font-sans font-bold tracking-wider uppercase mb-6 text-black">
              STILL NOT SURE THAT WISPR FLOW IS RIGHT FOR YOU?
            </h2>

            {/* Subtext */}
            <div className="max-width-[600px] mb-10">
              <p className="text-[16px] lg:text-[18px] text-muted-foreground leading-relaxed">
                Let ChatGPT, Claude, or Perplexity do the thinking for you.
                <br />
                Click a button and see what your favorite AI says about Wispr Flow.
              </p>
            </div>

            {/* Social CTA Group */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 relative z-10">
              {/* ChatGPT Button */}
              <a
                href="https://chatgpt.com/?q=Tell%20me%20about%20Wispr%20Flow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E4D8FF] border border-black rounded-[12px] px-6 py-3 transition-transform hover:scale-[0.98] active:scale-95"
              >
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/69011ae5743d004709411c7e_chatgpt-icon-53.svg"
                  alt="ChatGPT"
                  className="w-5 h-5"
                />
                <span className="text-[15px] font-semibold text-black">Ask ChatGPT</span>
              </a>

              {/* Claude Button */}
              <a
                href="https://claude.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E4D8FF] border border-black rounded-[12px] px-6 py-3 transition-transform hover:scale-[0.98] active:scale-95"
              >
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/69011af9e252a56521cc1514_claude-icon-54.svg"
                  alt="Claude"
                  className="w-5 h-5"
                />
                <span className="text-[15px] font-semibold text-black">Ask Claude</span>
              </a>

              {/* Perplexity Button */}
              <a
                href="https://www.perplexity.ai/search?q=What%20is%20Wispr%20Flow?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E4D8FF] border border-black rounded-[12px] px-6 py-3 transition-transform hover:scale-[0.98] active:scale-95"
              >
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/69011b0477ae36eedf3f7fe8_perplexity-icon-55.svg"
                  alt="Perplexity"
                  className="w-5 h-5"
                />
                <span className="text-[15px] font-semibold text-black">Ask Perplexity</span>
              </a>
            </div>
          </div>

          {/* Whimsical Character Illustration - Desktop/Right Side */}
          <div className="absolute bottom-0 right-4 lg:right-16 translate-y-2 hidden sm:block">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/69011bf425b294b6fd8eae9f_ask-ai-graphic-56.svg"
              alt="Wispr Character Illustration"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIComparisonCard;