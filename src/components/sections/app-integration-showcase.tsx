"use client";

import React from 'react';
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
    <section className="px-5 py-24 bg-[#FBFAF0]">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Black Container */}
        <div 
          className="relative bg-[#121212] rounded-[64px] overflow-hidden min-h-[850px] flex flex-col justify-start pt-24 pb-32 px-6 md:px-16 lg:px-24 border-[1.5px] border-black shadow-2xl"
        >
          {/* Header Section */}
          <div className="z-10 text-white max-w-[750px]">
            {/* Device Compatibility Pills */}
            <div className="flex gap-2.5 mb-12">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="w-4 h-4 bg-[url('https://cdn.prod.website-files.com/6838259bd246e848c14f0840/683829796f346a9a6f931363_apple.png')] bg-contain bg-no-repeat bg-center invert opacity-80"></div>
                <span className="text-[14px] font-bold tracking-tight">iOS</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="w-4 h-4 bg-[url('https://cdn.prod.website-files.com/6838259bd246e848c14f0840/683829796f346a9a6f931363_apple.png')] bg-contain bg-no-repeat bg-center invert opacity-80"></div>
                <span className="text-[14px] font-bold tracking-tight">Mac</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="w-4 h-4 bg-[url('https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/686d4881d944a4b80f7d047e_windows.svg')] bg-contain bg-no-repeat bg-center opacity-80"></div>
                <span className="text-[14px] font-bold tracking-tight">Windows</span>
              </div>
            </div>

            <h2 className="text-white text-[64px] md:text-[96px] font-serif leading-[0.9] mb-10 tracking-[-0.04em]">
              Write faster in all your apps, on any device
            </h2>
            <p className="text-white/40 text-[20px] md:text-[26px] max-w-[540px] leading-[1.2] mb-16 font-bold tracking-tight">
              Seamless speech-to-text in every application on your iPhone or computer.
            </p>
            
            <button className="bg-[#FBFAF0] text-black px-10 py-5 rounded-[22px] border-[1.5px] border-black font-bold text-[18px] hover:scale-[0.98] transition-all shadow-[0_4px_0_rgba(255,255,255,0.1)] hover:shadow-none active:translate-y-1">
              Watch in action
            </button>
          </div>

          {/* Curved App Icon Path Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
              <motion.div 
                animate={{ x: [0, -1500] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[15%] left-0 flex items-center gap-16 w-[5000px]"
              >
                {[...appIcons, ...appIcons, ...appIcons, ...appIcons, ...appIcons].map((src, i) => {
                  const angle = (i * 0.25);
                  const yOffset = Math.sin(angle) * 120;
                  const rotation = Math.cos(angle) * 15;

                  return (
                    <div 
                      key={i} 
                      className="shrink-0"
                      style={{ 
                        transform: `translateY(${yOffset}px) rotate(${rotation}deg)` 
                      }}
                    >
                      <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-[32px] bg-[#1a1a1a] p-5 flex items-center justify-center border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                        <img src={src} alt="" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* iPhone Mockup Bottom Right */}
          <div className="absolute bottom-[-100px] right-6 md:right-16 lg:right-24 z-10 w-[300px] md:w-[420px]">
            <div className="relative bg-[#080808] rounded-[60px] border-[12px] border-[#1a1a1a] h-[550px] md:h-[720px] shadow-[0_0_120px_rgba(0,0,0,1)] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-[20px] z-50"></div>
              
              {/* iOS Status Bar */}
              <div className="h-14 w-full flex justify-between items-end px-10 pb-2">
                <span className="text-white text-[15px] font-bold">9:41</span>
                <div className="flex gap-1.5 mb-1">
                   <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                   <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-8 md:p-12 flex flex-col gap-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#004D40] shadow-lg">
                    <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68d27d1a8a10f417b5644527_flow-wc-v2-7.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xl font-bold">mom ❤️</span>
                    <span className="text-white/30 text-xs font-medium">Online</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-5">
                  <div className="self-end bg-white/10 text-white p-5 rounded-[28px] rounded-br-none max-w-[90%] text-[16px] leading-snug border border-white/5">
                    actually wait do we have oat milk?
                  </div>
                  <div className="self-start bg-white/5 text-white/40 p-5 rounded-[28px] rounded-bl-none max-w-[90%] text-[16px] leading-snug">
                    checking... nope, last carton's like half full
                  </div>
                  <div className="self-start bg-white/5 text-white/40 p-5 rounded-[28px] rounded-bl-none max-w-[90%] text-[16px] leading-snug">
                    ok then grab one more if it's the barista kind 🙏
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Area */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#080808] p-8 pb-14 flex flex-col items-center gap-10">
                 <div className="w-full h-[65px] bg-white/5 rounded-[24px] px-8 flex items-center border border-white/5">
                    <span className="text-white/20 font-bold text-lg">Message...</span>
                 </div>
                 
                 <div className="flex items-center justify-between w-full px-4">
                    <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/5 transition-colors">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                    
                    {/* Pulsing Waveform */}
                    <div className="flex items-center gap-2 h-14">
                      {[1, 2.5, 3.5, 5, 3.5, 6, 2.5, 4.5, 2.5].map((h, i) => (
                        <motion.div 
                          key={i} 
                          animate={{ height: [h * 5, h * 10, h * 5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                          className="w-[3.5px] bg-[#E4D8FF] rounded-full shadow-[0_0_15px_rgba(228,216,255,0.5)]"
                        />
                      ))}
                    </div>

                    <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shadow-xl hover:scale-110 active:scale-95 transition-all">
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                    </button>
                 </div>

                 {/* Home Indicator */}
                 <div className="w-36 h-1.5 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegrationShowcase;