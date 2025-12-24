"use client";

import React from "react";
import Image from "next/image";

/**
 * TrustedByLogos Component
 * 
 * A marquee-style scrolling section showcasing company logos.
 * Design Specifications:
 * - Background: Dark Green (#004D40) as per High Level Design.
 * - Content: Scrolling logos of Mercury, Groupon, Vercel, OpenAI, Replit, Nuuly, Warp.
 * - Text: "Used by professionals everywhere to speed up their thoughts" centered above.
 */

const LOGO_ASSETS = [
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/689f1210efd813db213a4714_mercury-lumon-32.svg",
    alt: "Mercury Logo",
    width: 140,
    height: 32,
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/689f1376ce57025556d25a77_groupon-lumon-v3-33.svg",
    alt: "Groupon Logo",
    width: 140,
    height: 33,
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68cd489e5cc5b3b63d17259a_vercel-logo1-35.svg",
    alt: "Vercel Logo",
    width: 110,
    height: 35,
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68cd48f7ceada1605ba5f9bb_OpenAI-logo-36.svg",
    alt: "OpenAI Logo",
    width: 130,
    height: 36,
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68d282cf6db9e65365e93c86_replit-lumen-v2-37.svg",
    alt: "Replit Logo",
    width: 120,
    height: 37,
  },
];

export default function TrustedByLogos() {
  return (
    <section className="relative w-full overflow-hidden bg-[#004D40] py-[44px]">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Caption */}
        <div className="mb-8 flex justify-center">
          <p className="font-sans text-[14px] font-medium tracking-wide text-white/80 md:text-[16px]">
            Used by professionals everywhere to speed up their thoughts
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden">
          {/* First set of logos */}
          <div className="flex animate-infinite-scroll items-center gap-x-12 whitespace-nowrap md:gap-x-20">
            {LOGO_ASSETS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex h-10 w-auto items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-auto max-h-[28px] object-contain opacity-90 transition-opacity hover:opacity-100 md:max-h-[32px]"
                  style={{ width: "auto" }}
                />
              </div>
            ))}
          </div>

          {/* Duplicated set for seamless loop */}
          <div
            className="flex animate-infinite-scroll items-center gap-x-12 whitespace-nowrap md:gap-x-20"
            aria-hidden="true"
          >
            {LOGO_ASSETS.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex h-10 w-auto items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-auto max-h-[28px] object-contain opacity-90 transition-opacity hover:opacity-100 md:max-h-[32px]"
                  style={{ width: "auto" }}
                />
              </div>
            ))}
          </div>
          
          {/* Third set to ensure no gaps on very wide screens */}
          <div
            className="flex animate-infinite-scroll items-center gap-x-12 whitespace-nowrap md:gap-x-20"
            aria-hidden="true"
          >
            {LOGO_ASSETS.map((logo, index) => (
              <div
                key={`logo-3-${index}`}
                className="flex h-10 w-auto items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-auto max-h-[28px] object-contain opacity-90 transition-opacity hover:opacity-100 md:max-h-[32px]"
                  style={{ width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind handles the infinite scroll via globals.css or inline-style approach */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>

      {/* Corner radius treatment for the overall wrapper section above it or this one if it's integrated */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#FBFAF0] rounded-b-[48px] -translate-y-[1px] invisible md:visible" />
    </section>
  );
}