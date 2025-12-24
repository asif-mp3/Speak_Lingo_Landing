"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGO_ASSETS = [
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/689f1210efd813db213a4714_mercury-lumon-32.svg",
    alt: "Mercury Logo",
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/689f1376ce57025556d25a77_groupon-lumon-v3-33.svg",
    alt: "Groupon Logo",
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68cd489e5cc5b3b63d17259a_vercel-logo1-35.svg",
    alt: "Vercel Logo",
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68cd48f7ceada1605ba5f9bb_OpenAI-logo-36.svg",
    alt: "OpenAI Logo",
  },
  {
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68d282cf6db9e65365e93c86_replit-lumen-v2-37.svg",
    alt: "Replit Logo",
  },
];

export default function TrustedByLogos() {
  return (
    <section className="relative w-full overflow-hidden bg-[#004D40] rounded-b-[48px] py-16 px-6 flex flex-col items-center">
      {/* Character with Binoculars on the Left */}
      <div className="absolute left-[20px] top-[-80px] w-[220px] h-[220px] hidden xl:block z-20">
         <img 
           src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68a520cc330f89d53fdfc9cc_flow-v2-4.svg" 
           alt="" 
           className="w-full h-full object-contain" 
         />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px]">
        {/* Caption */}
        <div className="mb-14 flex justify-center">
          <p className="font-sans text-[16px] font-bold tracking-widest text-[#FBFAF0]/60 uppercase text-center">
            Used by professionals everywhere to speed up their thoughts
          </p>
        </div>

        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
          {LOGO_ASSETS.map((logo, index) => (
            <img 
              key={index}
              src={logo.url} 
              alt={logo.alt} 
              className="h-8 opacity-80 invert brightness-0" 
            />
          ))}
          <span className="text-[#FBFAF0] font-bold text-2xl opacity-80 tracking-tight">warp</span>
          <span className="text-[#FBFAF0] font-bold text-2xl opacity-80 tracking-tight">substack</span>
          <span className="text-[#FBFAF0] font-bold text-2xl opacity-80 tracking-tight">amazon</span>
          <span className="text-[#FBFAF0] font-bold text-2xl opacity-80 tracking-tight">perplexity</span>
          <span className="text-[#FBFAF0] font-bold text-2xl opacity-80 tracking-tight uppercase">superhuman</span>
        </div>
      </div>

      {/* Top Transition Mask */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#121212] rounded-b-[48px] -translate-y-[1px]" />
    </section>
  );
}