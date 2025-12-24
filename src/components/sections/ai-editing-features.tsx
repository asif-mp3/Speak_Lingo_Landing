"use client";

import React from 'react';
import Image from 'next/image';
import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const AIEditingFeatures = () => {
  return (
    <div className="bg-[#FBFAF0] w-full py-24 md:py-40">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1400px]">
        {/* AI Auto Edits Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-48">
          <div className="relative rounded-[48px] overflow-hidden h-[500px] md:h-[700px] shadow-2xl border-[1.5px] border-black">
            <Image 
              src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/685d6b412e69fd9e06bad058_ai-auto-edit-p-800.jpg"
              alt="Contextual image"
              fill
              className="object-cover"
            />
            
            {/* Overlay UI elements - Interactive floating labels */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="self-start bg-[#FF9F43] text-black px-6 py-2.5 rounded-full text-base font-bold border-[1.5px] border-black shadow-lg mb-4"
              >
                Removed filler
              </motion.div>
              
              <div className="mt-4 flex flex-col gap-3">
                 <div className="text-white font-bold text-2xl leading-tight drop-shadow-md">
                    <span className="text-[#FF9F43] line-through decoration-black decoration-[3px]">uh yeah </span>
                    so I think we should probably reach out to...
                 </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="self-end mt-12 bg-[#FF9F43] text-black px-6 py-2.5 rounded-full text-base font-bold border-[1.5px] border-black shadow-lg relative"
              >
                Added to Dictionary
                {/* Handdrawn circle around Davee simulation */}
                <div className="absolute top-[120%] right-0 w-[120px] h-[60px] border-[3px] border-[#FF9F43] rounded-[50%] rotate-[-5deg]"></div>
                <div className="absolute top-[150%] right-10 text-white font-bold text-3xl italic">Davee</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="self-start mt-20 bg-[#FF9F43] text-black px-6 py-2.5 rounded-full text-base font-bold border-[1.5px] border-black shadow-lg"
              >
                Fixed spelling
              </motion.div>

              {/* Bottom White Transcription UI */}
              <div className="mt-auto bg-[#FBFAF0] border-[1.5px] border-black rounded-[32px] p-8 shadow-2xl pointer-events-auto">
                <p className="text-black text-[18px] md:text-[22px] font-bold leading-tight mb-8">
                  Let&apos;s reach out to Jenny from Legal—she may have mentioned the NDA isn't finalized yet, or possibly already sent it. Let's also CC Davee. Finally, make sure the Q2 Goals slide is updated before Friday's review. The link should be in Slack.
                </p>
                <div className="flex items-center justify-between border-t border-black/10 pt-6">
                  <div className="flex gap-5 text-black/40 text-xl font-bold">
                    <span>B</span>
                    <span className="italic">I</span>
                    <span className="line-through decoration-2">S</span>
                    <span>⚲</span>
                    <span>Ξ</span>
                    <span>&lt;/&gt;</span>
                  </div>
                  <button className="w-14 h-14 bg-[#FF9F43] border-[1.5px] border-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[560px]">
            <div className="relative inline-block mb-10">
               {/* Sun doodle decoration */}
               <div className="absolute -left-12 -top-12 w-24 h-24 opacity-40">
                  <svg viewBox="0 0 100 100" fill="none" stroke="#FF9F43" strokeWidth="4">
                    <circle cx="50" cy="50" r="15" />
                    {[...Array(8)].map((_, i) => (
                      <line 
                        key={i} 
                        x1="50" y1="20" x2="50" y2="5" 
                        transform={`rotate(${i * 45} 50 50)`} 
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
               </div>
               <h2 className="text-[64px] md:text-[96px] font-serif leading-[0.9] text-black tracking-[-0.04em]">
                  AI Auto<br />Edits
               </h2>
            </div>
            
            <p className="text-black/60 text-[20px] md:text-[24px] font-bold leading-[1.3] mb-12 tracking-tight">
              Speak naturally and Flow transcribes and edits your voice, instantly. Rambled thoughts become clear, perfectly formatted text, without the filler words or typos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#FBFAF0] border-[1.5px] border-black px-8 py-4 rounded-[18px] font-bold text-[16px] hover:scale-[0.98] transition-transform shadow-sm">
                <Mic size={20} className="fill-black" />
                Try Flow
              </button>
              <button className="bg-[#E4D8FF] border-[1.5px] border-black px-8 py-4 rounded-[18px] font-bold text-[16px] hover:scale-[0.98] transition-transform shadow-sm flex items-center gap-2">
                <div className="w-4 h-4">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
                </div>
                Download for Windows
              </button>
            </div>
          </div>
        </div>

        {/* Remaining Feature Cards (Shortened for brevity but keeping styling consistent) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {/* Tone Card */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[40px] font-serif leading-tight mb-6">Different tones<br />for each app</h3>
            <p className="text-black/40 text-[18px] font-bold leading-[1.3] mb-12 max-w-[380px]">
              Flow automatically adjusts tone based on the app you’re using. Sound like you—not a robot.
            </p>
            <div className="bg-[#121212] w-full rounded-[48px] aspect-square flex flex-col items-center justify-center p-12 relative overflow-hidden border-[1.5px] border-black shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                 <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <path d="M200 100 C 200 180, 80 200, 80 300" stroke="white" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
                    <path d="M200 100 L 200 300" stroke="white" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
                    <path d="M200 100 C 200 180, 320 200, 320 300" stroke="white" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
                 </svg>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-16">
                 <div className="bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center gap-3">
                    <div className="flex gap-1">
                      {[1,2,3,4,3].map(i => <div key={i} className="w-0.5 h-4 bg-white rounded-full"></div>)}
                    </div>
                    <span className="text-white font-bold text-xl">hello</span>
                 </div>

                 <div className="flex justify-between w-full max-w-[400px]">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-xl"><img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3c28c86d11e74922ca_gmail.svg" alt="" /></div>
                      <span className="text-[#FF9F43] font-serif italic text-2xl font-bold">Hello.</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-xl"><img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3e0c036d0e9beeb93e_slack.svg" alt="" /></div>
                      <span className="text-white font-bold text-2xl">Hello</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-xl"><img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3e29f4f10766927da8_imessage.svg" alt="" /></div>
                      <span className="text-white font-light text-2xl lowercase">hello</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="flex flex-col items-center text-center md:mt-32">
            <h3 className="text-[40px] font-serif leading-tight mb-6">100+ languages</h3>
            <p className="text-black/40 text-[18px] font-bold leading-[1.3] mb-12 max-w-[380px]">
              Flow automatically detects and transcribes in your language, letting you move between them—just like you do.
            </p>
            <div className="bg-[#121212] w-full rounded-[48px] aspect-square flex flex-col items-center justify-center relative overflow-hidden border-[1.5px] border-black shadow-2xl">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-[80%] h-[80%] flex items-center justify-center"
              >
                 {/* Decorative Ring */}
                 <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                 
                 {[
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb413b53fba468132de_KR.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb456f91cd04058d84a_RS.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb4536e8668593a2e7c_BR.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb5181180da39463558_CA.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb40db361309852badf_ID.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb4a84e60fc8a13a0e4_TR.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb40c57c4f420485923_MX.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb456f91cd04058d844_ES.svg'
                 ].map((url, i) => {
                    const angle = (i * 45) * (Math.PI / 180);
                    const radius = 140;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    return (
                      <div 
                        key={i} 
                        className="absolute w-12 h-8 rounded shadow-lg overflow-hidden border border-white/20"
                        style={{ transform: `translate(${x}px, ${y}px) rotate(${i * 45 + 90}deg)` }}
                      >
                        <img src={url} alt="" className="w-full h-full object-cover" />
                      </div>
                    )
                 })}
              </motion.div>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-white font-bold text-3xl tracking-tight">100+</span>
                 <span className="text-white/40 font-bold text-sm tracking-widest uppercase mt-1">Languages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEditingFeatures;