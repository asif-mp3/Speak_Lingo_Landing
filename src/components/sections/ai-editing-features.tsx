"use client";

import React from 'react';
import Image from 'next/image';
import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const AIEditingFeatures = () => {
  return (
    <div className="bg-[#FBFAF0] w-full py-32 md:py-56">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1440px]">
        {/* AI Auto Edits Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center mb-64">
          <div className="relative rounded-[64px] overflow-hidden h-[550px] md:h-[800px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[1.5px] border-black">
            <Image 
              src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/685d6b412e69fd9e06bad058_ai-auto-edit-p-800.jpg"
              alt="Contextual image"
              fill
              className="object-cover"
            />
            
            {/* Overlay UI elements - Interactive floating labels */}
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                viewport={{ once: true }}
                className="self-start bg-[#FF9F43] text-black px-8 py-3 rounded-full text-[17px] font-bold border-[1.5px] border-black shadow-[0_4px_0_rgb(0,0,0)] mb-6"
              >
                Removed filler
              </motion.div>
              
              <div className="mt-6 flex flex-col gap-4">
                 <div className="text-white font-bold text-3xl md:text-4xl leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    <span className="text-[#FF9F43] line-through decoration-black decoration-[4px] mr-2">uh yeah </span>
                    so I think we should probably reach out to...
                 </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="self-end mt-16 bg-[#FF9F43] text-black px-8 py-3 rounded-full text-[17px] font-bold border-[1.5px] border-black shadow-[0_4px_0_rgb(0,0,0)] relative"
              >
                Added to Dictionary
                {/* Handdrawn circle around Davee simulation */}
                <div className="absolute top-[130%] right-[-10px] w-[140px] h-[70px] border-[4px] border-[#FF9F43] rounded-[50%] rotate-[-8deg] opacity-80"></div>
                <div className="absolute top-[160%] right-12 text-white font-serif text-4xl italic font-black drop-shadow-lg">Davee</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="self-start mt-24 bg-[#FF9F43] text-black px-8 py-3 rounded-full text-[17px] font-bold border-[1.5px] border-black shadow-[0_4px_0_rgb(0,0,0)]"
              >
                Fixed spelling
              </motion.div>

              {/* Bottom White Transcription UI */}
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto bg-[#FBFAF0] border-[1.5px] border-black rounded-[40px] p-10 shadow-2xl pointer-events-auto"
              >
                <p className="text-black text-[20px] md:text-[26px] font-bold leading-[1.2] mb-10 tracking-tight">
                  Let&apos;s reach out to Jenny from Legal—she may have mentioned the NDA isn't finalized yet, or possibly already sent it. Let's also CC Davee. Finally, make sure the Q2 Goals slide is updated before Friday's review. The link should be in Slack.
                </p>
                <div className="flex items-center justify-between border-t-[1.5px] border-black/10 pt-8">
                  <div className="flex gap-6 text-black/20 text-2xl font-black">
                    <span className="hover:text-black transition-colors cursor-pointer">B</span>
                    <span className="italic hover:text-black transition-colors cursor-pointer">I</span>
                    <span className="line-through decoration-3 hover:text-black transition-colors cursor-pointer">S</span>
                    <span className="hover:text-black transition-colors cursor-pointer">⚲</span>
                    <span className="hover:text-black transition-colors cursor-pointer">Ξ</span>
                    <span className="hover:text-black transition-colors cursor-pointer">&lt;/&gt;</span>
                  </div>
                  <button className="w-16 h-16 bg-[#FF9F43] border-[1.5px] border-black rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-[0_4px_0_rgb(0,0,0)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-[600px]">
            <div className="relative inline-block mb-12">
               {/* Sun doodle decoration */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute -left-16 -top-16 w-32 h-32 opacity-30"
               >
                  <svg viewBox="0 0 100 100" fill="none" stroke="#FF9F43" strokeWidth="5">
                    <circle cx="50" cy="50" r="18" />
                    {[...Array(12)].map((_, i) => (
                      <line 
                        key={i} 
                        x1="50" y1="20" x2="50" y2="2" 
                        transform={`rotate(${i * 30} 50 50)`} 
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
               </motion.div>
               <h2 className="text-[72px] md:text-[110px] font-serif leading-[0.85] text-black tracking-[-0.04em]">
                  AI Auto<br />Edits
               </h2>
            </div>
            
            <p className="text-black/30 text-[22px] md:text-[28px] font-bold leading-[1.2] mb-16 tracking-tight">
              Speak naturally and Flow transcribes and edits your voice, instantly. Rambled thoughts become clear, perfectly formatted text.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="flex items-center gap-3 bg-[#FBFAF0] border-[1.5px] border-black px-10 py-5 rounded-[22px] font-bold text-[18px] hover:scale-[0.98] transition-all shadow-[0_4px_0_rgb(0,0,0)]">
                <Mic size={22} className="fill-black" />
                Try Flow
              </button>
              <button className="bg-[#E4D8FF] border-[1.5px] border-black px-10 py-5 rounded-[22px] font-bold text-[18px] hover:scale-[0.98] transition-all shadow-[0_4px_0_rgb(0,0,0)] flex items-center gap-3">
                <div className="w-5 h-5">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
                </div>
                Download for Windows
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-40">
          {/* Tone Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-[48px] md:text-[56px] font-serif leading-tight mb-8 tracking-tight">Different tones<br />for each app</h3>
            <p className="text-black/30 text-[20px] font-bold leading-[1.3] mb-16 max-w-[420px] tracking-tight">
              Flow automatically adjusts tone based on the app you’re using. Sound like you—not a robot.
            </p>
            <div className="bg-[#121212] w-full rounded-[64px] aspect-square flex flex-col items-center justify-center p-16 relative overflow-hidden border-[1.5px] border-black shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
                 <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <path d="M200 100 C 200 180, 80 200, 80 300" stroke="white" strokeWidth="2.5" strokeDasharray="10 10" />
                    <path d="M200 100 L 200 300" stroke="white" strokeWidth="2.5" strokeDasharray="10 10" />
                    <path d="M200 100 C 200 180, 320 200, 320 300" stroke="white" strokeWidth="2.5" strokeDasharray="10 10" />
                 </svg>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-20 w-full">
                 <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-10 py-4 flex items-center gap-4">
                    <div className="flex gap-1.5 h-6 items-center">
                      {[1,1.5,1,2,1.2].map((h, i) => (
                        <motion.div 
                          key={i} 
                          animate={{ height: [h*8, h*16, h*8] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i*0.1 }}
                          className="w-1 bg-[#E4D8FF] rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-white font-black text-2xl uppercase tracking-widest">hello</span>
                 </div>

                 <div className="flex justify-between w-full max-w-[480px]">
                    <div className="flex flex-col items-center gap-5">
                      <div className="w-20 h-20 bg-white rounded-[24px] p-4 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform"><img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3c28c86d11e74922ca_gmail.svg" alt="" /></div>
                      <span className="text-[#FF9F43] font-serif italic text-3xl font-black">Hello.</span>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                      <div className="w-20 h-20 bg-white rounded-[24px] p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform"><img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3e0c036d0e9beeb93e_slack.svg" alt="" /></div>
                      <span className="text-white font-bold text-3xl tracking-tight">Hello</span>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                      <div className="w-20 h-20 bg-white rounded-[24px] p-4 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform"><img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3e29f4f10766927da8_imessage.svg" alt="" /></div>
                      <span className="text-white font-light text-3xl lowercase tracking-tighter opacity-80">hello</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center md:mt-40"
          >
            <h3 className="text-[48px] md:text-[56px] font-serif leading-tight mb-8 tracking-tight">100+ languages</h3>
            <p className="text-black/30 text-[20px] font-bold leading-[1.3] mb-16 max-w-[420px] tracking-tight">
              Flow automatically detects and transcribes in your language, letting you move between them—just like you do.
            </p>
            <div className="bg-[#121212] w-full rounded-[64px] aspect-square flex flex-col items-center justify-center relative overflow-hidden border-[1.5px] border-black shadow-2xl">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative w-[85%] h-[85%] flex items-center justify-center"
              >
                 {/* Decorative Ring */}
                 <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                 <div className="absolute inset-10 border border-white/5 rounded-full opacity-50"></div>
                 
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
                    const radius = 160;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    return (
                      <motion.div 
                        key={i} 
                        className="absolute w-16 h-10 rounded-md shadow-2xl overflow-hidden border border-white/20"
                        style={{ transform: `translate(${x}px, ${y}px) rotate(${i * 45 + 90}deg)` }}
                      >
                        <img src={url} alt="" className="w-full h-full object-cover" />
                      </motion.div>
                    )
                 })}
              </motion.div>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-white font-black text-5xl tracking-tighter drop-shadow-2xl">100+</span>
                 <span className="text-white/20 font-black text-[13px] tracking-[0.25em] uppercase mt-2">Languages</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIEditingFeatures;