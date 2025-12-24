import React from 'react';
import Image from 'next/image';
import { Mic } from 'lucide-react';

/**
 * CTAFinal Section Component
 * 
 * Design Instructions:
 * Clone the final call-to-action section with the atmospheric blurred background image of a person running, 
 * headline "Start flowing", and the "Try Flow" and "Download" buttons.
 * 
 * Key Features:
 * - High-contrast contrast CTA on blurred nature background.
 * - Serif typography for the heading "Start flowing".
 * - Rounded container with large radius (48px).
 * - "Neumorphic-Organic" hybrid style.
 */

const CTAFinal = () => {
  // Asset path for the atmospheric background image from the provided <assets>
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/images/682fa15adc306ab5bf96b30e_67ff6a871792c333db148107_-30.avif";

  return (
    <section className="py-20 px-5 md:px-20 bg-brand-cream">
      <div className="relative max-w-[1280px] mx-auto min-h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-[48px] text-center">
        
        {/* Atmospheric Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Person running in a field"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-2xl px-6 py-12">
          <h2 className="font-serif text-[48px] md:text-[80px] text-white leading-[1.1] mb-8 drop-shadow-sm">
            Start flowing
          </h2>
          
          <p className="font-sans text-white/90 text-[18px] md:text-[20px] font-medium leading-[1.5] mb-10 max-w-lg mx-auto text-balance">
            Effortless voice dictation in every application: 4x faster than typing, AI commands and auto-edits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Try Flow Button - Pill shape, white background */}
            <a 
              href="#" 
              className="flex items-center gap-2 px-8 py-3 bg-white text-black font-sans font-semibold text-[16px] rounded-full hover:scale-[0.98] transition-transform duration-200 border border-black shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <Mic className="w-5 h-5" />
              Try Flow
            </a>

            {/* Download Button - Solid Lavender background */}
            <a 
              href="https://wisprflow.onelink.me/PguH/lw5h199m" 
              className="px-8 py-3 bg-brand-lavender text-black font-sans font-semibold text-[16px] rounded-full hover:scale-[0.98] transition-transform duration-200 border border-black shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              Download for free
            </a>
          </div>

          <p className="mt-6 font-sans text-white/70 text-[13px] font-medium">
            Available on Mac, Windows and iPhone
          </p>
        </div>

        {/* Squiggly/Dotted decorative path overlay - replicated from screenshot visual pattern */}
        <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M1050 450C950 450 900 350 900 250C900 150 950 50 1050 50C1150 50 1200 150 1200 250C1200 350 1150 450 1050 450Z" 
              stroke="white" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeDasharray="0.1 15" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;