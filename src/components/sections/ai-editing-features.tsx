import React from 'react';
import Image from 'next/image';
import { Mic } from 'lucide-react';

const AIEditingFeatures = () => {
  return (
    <div className="bg-[#FBFAF0] w-full py-20 lg:py-40">
      <div className="container mx-auto px-5 lg:px-20 max-w-[1280px]">
        {/* AI Auto Edits Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-40">
          <div className="relative rounded-[32px] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] neumorphic-card">
            <div className="absolute inset-0 bg-neutral-900">
              <Image 
                src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/685d6b412e69fd9e06bad058_ai-auto-edit-p-800.jpg"
                alt="Woman in dramatic lighting"
                fill
                className="object-cover opacity-60"
              />
              {/* Overlay UI elements */}
              <div className="absolute top-10 left-10 right-10 z-10">
                <div className="inline-flex items-center bg-[#FF9F43] text-black px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Removed filler
                </div>
                <div className="text-white font-medium text-lg lg:text-xl leading-relaxed">
                  <span className="text-[#FF9F43] line-through decoration-2">uh yeah </span>
                  so I think we should probably reach out to uh Jenny from legal I think she said something about the, the NDA being like not rea
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 right-10 bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="text-white/90 text-lg mb-8 min-h-[60px]">
                  Let&apos;s reach out to Jenny from Legal—she may have mentioned the NDA is<span className="animate-pulse ml-0.5 border-r-2 border-[#FF9F43]"></span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex gap-4 text-white/40">
                    <span className="font-serif italic font-bold">B</span>
                    <span className="font-serif italic">I</span>
                    <span className="scale-x-[-1]">⟳</span>
                    <span>⚲</span>
                    <span>Ξ</span>
                    <span>&lt;/&gt;</span>
                  </div>
                  <div className="w-10 h-10 bg-[#FF9F43] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[480px]">
            <div className="flex gap-1 mb-4">
              <div className="w-1.5 h-3 bg-[#FF9F43] rounded-full rotate-[15deg]"></div>
              <div className="w-1.5 h-3 bg-[#FF9F43] rounded-full -rotate-[15deg] mt-1"></div>
            </div>
            <h2 className="text-[40px] lg:text-[56px] leading-[1.1] mb-6">AI Auto Edits</h2>
            <p className="text-[#666666] text-lg lg:text-xl leading-relaxed mb-10">
              Speak naturally and Flow transcribes and edits your voice, instantly. Rambled thoughts become clear, perfectly formatted text, without the filler words or typos.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-white border border-black/10 px-6 py-3 rounded-full font-semibold hover:bg-neutral-50 transition-colors shadow-sm">
                <Mic size={18} />
                Try Flow
              </button>
              <button className="bg-[#E4D8FF] border border-black/10 px-6 py-3 rounded-full font-semibold hover:bg-[#d8c8ff] transition-colors shadow-sm">
                Download for free
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          
          {/* Card 1: Personal Dictionary */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[32px] leading-tight mb-4">Personal dictionary</h3>
            <p className="text-[#666666] text-base mb-10 max-w-[340px]">
              Flow automatically learns your unique words and adds them to your personal dictionary.
            </p>
            <div className="bg-[#121212] w-full rounded-[40px] aspect-[4/5] p-10 flex flex-col items-start relative overflow-hidden">
              <div className="flex justify-between items-center w-full mb-12">
                <span className="text-white text-xl font-semibold">Your Dictionary</span>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                   <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68328a69e88b12bfc3d28d97_plus-48.svg" width={16} height={16} alt="plus" className="invert" />
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 items-end">
                {['Robyn', 'Viktor', 'SaaS', 'Caltrain', 'Mackey', 'Nguyen', 'Leona'].map((word, i) => (
                  <div key={word} className={`text-white border border-brand-green bg-[#004D40] px-6 py-2 rounded-full text-lg shadow-sm`} style={{ width: `${100 - (i * 8)}%`, opacity: 1 - (i * 0.1) }}>
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Snippet Library */}
          <div className="flex flex-col items-center text-center md:mt-32">
            <h3 className="text-[32px] leading-tight mb-4">Snippet library</h3>
            <p className="text-[#666666] text-base mb-10 max-w-[340px]">
              Create voice shortcuts for the things your team says over and over. From scheduling links to FAQs, just speak a cue and get the full formatted text.
            </p>
            <div className="bg-[#121212] w-full rounded-[40px] aspect-[4/5] p-10 flex flex-col items-start relative overflow-hidden">
              <div className="flex justify-between items-center w-full mb-12">
                <span className="text-white text-xl font-semibold">Your Snippets</span>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                   <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/68328a69e88b12bfc3d28d97_plus-48.svg" width={16} height={16} alt="plus" className="invert" />
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 items-end">
                <div className="bg-[#FF9F43] text-black px-6 py-2 rounded-full font-bold mb-4">Calendar</div>
                <div className="absolute left-10 mt-16 scale-x-[-1]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF9F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 18 18m0-18L3 21"/></svg>
                </div>
                {['Hours', 'Support intro', 'FAQ', 'Careers link', 'Elevator pitch', 'Address'].map((word, i) => (
                  <div key={word} className="text-white border border-white/20 px-6 py-2 rounded-full text-lg shadow-sm" style={{ width: `${90 - (i * 5)}%`, opacity: 0.9 - (i * 0.1) }}>
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Different Tones */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[32px] leading-tight mb-4">Different tones for each app</h3>
            <p className="text-[#666666] text-base mb-10 max-w-[340px]">
              Flow automatically adjusts tone based on the app you’re using. Sound like you—not a robot.
            </p>
            <div className="bg-[#121212] w-full rounded-[40px] aspect-square flex flex-col items-center justify-center p-10 relative overflow-hidden">
              <div className="border border-white/20 rounded-full px-5 py-2 flex items-center gap-2 mb-16">
                 <div className="flex gap-0.5">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-0.5 h-4 bg-white rounded-full"></div>)}
                 </div>
                 <span className="text-white font-bold">hello</span>
              </div>
              
              <div className="relative w-full h-40">
                <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" viewBox="0 0 400 200" fill="none">
                  <path d="M200 0 C 200 80, 80 80, 80 160" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M200 0 C 200 80, 200 80, 200 160" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M200 0 C 200 80, 320 80, 320 160" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                <div className="absolute bottom-0 left-[20%] -translate-x-1/2 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3c28c86d11e74922ca_gmail.svg" alt="Gmail" className="w-8 h-8" />
                  </div>
                  <span className="text-[#FF9F43] font-serif italic text-lg">Hello.</span>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3e0c036d0e9beeb93e_slack.svg" alt="Slack" className="w-8 h-8" />
                  </div>
                  <span className="text-white font-bold text-lg">Hello</span>
                </div>

                <div className="absolute bottom-0 right-[20%] translate-x-1/2 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <img src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6832db3e29f4f10766927da8_imessage.svg" alt="iMessage" className="w-8 h-8" />
                  </div>
                  <span className="text-white font-light text-lg">hello</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: 100+ Languages */}
          <div className="flex flex-col items-center text-center md:mt-32">
            <h3 className="text-[32px] leading-tight mb-4">100+ languages</h3>
            <p className="text-[#666666] text-base mb-10 max-w-[340px]">
              Flow automatically detects and transcribes in your language, letting you move between them—just like you do.
            </p>
            <div className="bg-[#121212] w-full rounded-[40px] aspect-square flex flex-col items-center justify-center p-10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Circular Flag Ring Animation Simulation */}
                <div className="relative w-[320px] h-[320px] rounded-full border border-white/5 flex items-center justify-center">
                   <div className="text-white font-semibold flex flex-col items-center gap-1">
                     <span className="text-sm opacity-60">•••</span>
                     100+ Languages
                     <span className="text-sm opacity-60">•••</span>
                   </div>
                   
                   {/* Flags placed roughly in circular pattern as seen in design */}
                   {[
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb413b53fba468132de_KR.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb456f91cd04058d84a_RS.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb4536e8668593a2e7c_BR.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb5181180da39463558_CA.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb40db361309852badf_ID.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb4a84e60fc8a13a0e4_TR.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb40c57c4f420485923_MX.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb456f91cd04058d844_ES.svg',
                    'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4ebb456f91cd04058d833_AU.svg'
                   ].map((url, i) => {
                     const angle = (i * 40) * (Math.PI / 180);
                     const x = 140 * Math.cos(angle);
                     const y = 140 * Math.sin(angle);
                     return (
                       <div key={i} className="absolute w-8 h-6 rounded-sm overflow-hidden border border-white/20" 
                            style={{ transform: `translate(${x}px, ${y}px) rotate(${i*40 + 90}deg)` }}>
                         <img src={url} alt="flag" className="w-full h-full object-cover" />
                       </div>
                     )
                   })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIEditingFeatures;