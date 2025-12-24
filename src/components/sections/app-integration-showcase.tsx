"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AppIntegrationShowcase = () => {
  const appIcons = [
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4b68f74a0e980f7692_slack.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4befb786c673138b32_figma.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4b6b63ca0e46a75f1b_gmail.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4b4667d6050e82c87b_zoom.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4b066cf305edf66b59_notion.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4b1236594d45465f12_chatgpt.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4bc36259c673456f12_gmail_2.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4be23569c673456f12_imessage.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4ba23589c673456f12_github.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4b123569c123456f12_arc.svg",
    "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68321d4b123569c123456f13_linear.svg"
  ];

  return (
    <section className="px-5 py-20 bg-[#FBFAF0]">
      <div className="mx-auto max-w-[1280px]">
        {/* Main Black Container */}
        <div 
          className="relative bg-[#121212] rounded-[48px] overflow-hidden min-h-[700px] flex flex-col justify-start pt-24 px-6 md:px-16 lg:px-24"
        >
          {/* Header Section */}
          <div className="z-10 text-white max-w-[700px]">
            {/* Device Compatibility Pills */}
            <div className="flex gap-2 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <div className="w-4 h-4 bg-[url('https://cdn.prod.website-files.com/6838259bd246e848c14f0840/683829796f346a9a6f931363_apple.png')] bg-contain bg-no-repeat bg-center invert"></div>
                <span className="text-[13px] font-bold">iOS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <div className="w-4 h-4 bg-[url('https://cdn.prod.website-files.com/6838259bd246e848c14f0840/683829796f346a9a6f931363_apple.png')] bg-contain bg-no-repeat bg-center invert"></div>
                <span className="text-[13px] font-bold">Mac</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <div className="w-4 h-4 bg-[url('https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/686d4881d944a4b80f7d047e_windows.svg')] bg-contain bg-no-repeat bg-center"></div>
                <span className="text-[13px] font-bold">Windows</span>
              </div>
            </div>

            <h2 className="text-white text-[56px] md:text-[80px] font-serif leading-[1] mb-8 tracking-[-0.04em]">
              Write faster in all your<br />apps, on any device
            </h2>
            <p className="text-white/40 text-[18px] md:text-[22px] max-w-[480px] leading-[1.3] mb-12 font-bold tracking-tight">
              Seamless speech-to-text in every application on your iPhone or computer.
            </p>
            
            <button className="bg-[#FBFAF0] text-black px-8 py-4 rounded-[18px] border-[1.5px] border-black font-bold text-[16px] hover:scale-[0.98] transition-transform">
              Watch in action
            </button>
          </div>

          {/* Curved App Icon Path Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] left-0 flex items-center gap-12 w-[4000px]"
              >
                {[...appIcons, ...appIcons, ...appIcons, ...appIcons].map((src, i) => {
                  // Simulate a curve by calculating Y offset based on X
                  const angle = (i * 0.2);
                  const yOffset = Math.sin(angle) * 100;
                  const rotation = Math.cos(angle) * 20;

                  return (
                    <div 
                      key={i} 
                      className="shrink-0"
                      style={{ 
                        transform: `translateY(${yOffset}px) rotate(${rotation}deg)` 
                      }}
                    >
                      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[24px] bg-[#1a1a1a] p-4 flex items-center justify-center border border-white/10 shadow-2xl">
                        <img src={src} alt="" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* iPhone Mockup Bottom Right */}
          <div className="absolute bottom-[-60px] right-6 md:right-16 lg:right-24 z-10 w-[280px] md:w-[380px]">
            <div className="relative bg-[#0d0d0d] rounded-t-[56px] border-[10px] border-[#1a1a1a] border-b-0 h-[480px] md:h-[620px] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* iOS Status Bar */}
              <div className="h-10 w-full flex justify-between items-center px-8 pt-4">
                <span className="text-white text-xs font-bold">9:41</span>
                <div className="flex gap-1.5">
                   <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                   <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-6 md:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-green">
                    <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68d27d1a8a10f417b5644527_flow-wc-v2-7.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white text-lg font-bold">mom ❤️</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="self-end bg-white/10 text-white/90 p-4 rounded-[24px] rounded-br-none max-w-[85%] text-[15px] leading-tight">
                    actually wait do we have oat milk?
                  </div>
                  <div className="self-start bg-white/5 text-white/40 p-4 rounded-[24px] rounded-bl-none max-w-[85%] text-[15px] leading-tight">
                    checking... nope, last carton's like half full
                  </div>
                  <div className="self-start bg-white/5 text-white/40 p-4 rounded-[24px] rounded-bl-none max-w-[85%] text-[15px] leading-tight">
                    ok then grab one more if it's the barista kind 🙏
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Area */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0d0d0d] p-6 pb-12 flex flex-col items-center gap-8">
                 <div className="w-full h-[60px] bg-white/5 rounded-[20px] px-6 flex items-center">
                    <span className="text-white/20 font-medium">Message...</span>
                 </div>
                 
                 <div className="flex items-center justify-between w-full px-4">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60">✕</div>
                    
                    {/* Pulsing Waveform */}
                    <div className="flex items-center gap-1.5 h-12">
                      {[1, 2, 3, 4, 3, 5, 2, 4, 2].map((h, i) => (
                        <motion.div 
                          key={i} 
                          animate={{ height: [h * 4, h * 10, h * 4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                          className="w-[3px] bg-white rounded-full"
                        />
                      ))}
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                    </div>
                 </div>

                 {/* Home Indicator */}
                 <div className="w-32 h-1 bg-white/20 rounded-full mt-4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand/Social Proof Strip Below Case */}
        <div className="mt-[-2px] bg-[#004D40] rounded-b-[48px] py-16 px-6 flex flex-col items-center overflow-hidden">
          <p className="text-[#FBFAF0]/60 text-[16px] font-bold mb-14 tracking-widest text-center uppercase">
            Used by professionals everywhere to speed up their thoughts
          </p>
          
          <div className="w-full max-w-[1200px] relative">
            {/* Binoculars Character on the Left */}
            <div className="absolute left-[-20px] top-[-60px] w-[200px] h-[200px] hidden xl:block">
               <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68a520cc330f89d53fdfc9cc_flow-v2-4.svg" alt="" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/689f1210efd813db213a4714_mercury-lumon-32.svg" alt="Mercury" className="h-8 opacity-80 invert brightness-0" />
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/689f1376ce57025556d25a77_groupon-lumon-v3-33.svg" alt="Groupon" className="h-8 opacity-80 invert brightness-0" />
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68cd489e5cc5b3b63d17259a_vercel-logo1-35.svg" alt="Vercel" className="h-8 opacity-80 invert brightness-0" />
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68cd48f7ceada1605ba5f9bb_OpenAI-logo-36.svg" alt="OpenAI" className="h-8 opacity-80 invert brightness-0" />
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68d282cf6db9e65365e93c86_replit-lumen-v2-37.svg" alt="Replit" className="h-8 opacity-80 invert brightness-0" />
              <span className="text-[#FBFAF0] font-bold text-2xl opacity-80">warp</span>
              <span className="text-[#FBFAF0] font-bold text-2xl opacity-80">substack</span>
              <span className="text-[#FBFAF0] font-bold text-2xl opacity-80">amazon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegrationShowcase;