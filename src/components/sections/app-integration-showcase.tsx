import React from 'react';
import Image from 'next/image';

const AppIntegrationShowcase = () => {
  // App icons to simulate the marquee
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
    <section className="px-5 py-20 bg-brand-cream">
      <div className="mx-auto max-width-[1280px]">
        {/* Main Black Container */}
        <div 
          className="relative bg-[#121212] rounded-[48px] overflow-hidden min-h-[700px] flex flex-col justify-start pt-20 px-4 sm:px-10 lg:px-20"
          style={{ 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* Header Section */}
          <div className="z-10 text-white max-w-[600px]">
            {/* Device Compatibility Pills */}
            <div className="flex gap-2 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full border border-white/10">
                <div className="w-3.5 h-3.5 bg-[url('https://cdn.prod.website-files.com/6838259bd246e848c14f0840/683829796f346a9a6f931363_apple.png')] bg-contain bg-no-repeat bg-center invert opacity-90"></div>
                <span className="text-[12px] font-semibold tracking-wide">iOS</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full border border-white/10">
                <div className="w-3.5 h-3.5 bg-[url('https://cdn.prod.website-files.com/6838259bd246e848c14f0840/683829796f346a9a6f931363_apple.png')] bg-contain bg-no-repeat bg-center invert opacity-90"></div>
                <span className="text-[12px] font-semibold tracking-wide">Mac</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full border border-white/10">
                <div className="w-3.5 h-3.5 bg-[url('https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/686d4881d944a4b80f7d047e_windows.svg')] bg-contain bg-no-repeat bg-center opacity-90"></div>
                <span className="text-[12px] font-semibold tracking-wide">Windows</span>
              </div>
            </div>

            <h2 className="text-white text-[48px] sm:text-[56px] font-serif leading-[1.1] mb-6 tracking-tight">
              Write faster in all your<br />apps, on any device
            </h2>
            <p className="text-[#666666] text-[18px] sm:text-[20px] max-w-[420px] leading-[1.4] mb-10 font-sans">
              Seamless speech-to-text in every application on your iPhone or computer.
            </p>
            
            <button className="bg-[#FBFAF0] text-black px-6 py-3 rounded-xl border border-black font-semibold text-[16px] hover:scale-[0.98] transition-transform">
              Watch in action
            </button>
          </div>

          {/* Sinusoidal Scrolling App Icons Wrapper */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* 
              In the real site, this is a complex SVG path container for app icons.
              To simulate it with pure Tailwind/CSS:
            */}
            <div className="relative w-full h-full mt-20">
              {/* Sinusoidal path simulation - repeated icons on a wave */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes iconFlow {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(-200%); }
                }
                .app-icon-wave {
                  display: flex;
                  position: absolute;
                  bottom: 25%;
                  left: 0;
                  width: 300%;
                  animation: iconFlow 30s linear infinite;
                }
                .wave-item {
                  margin: 0 15px;
                  transition: transform 0.3s ease;
                }
                /* Stagger heights to simulate the curve */
                .wave-item:nth-child(4n+1) { transform: translateY(0px); }
                .wave-item:nth-child(4n+2) { transform: translateY(-40px); }
                .wave-item:nth-child(4n+3) { transform: translateY(-60px); }
                .wave-item:nth-child(4n+4) { transform: translateY(-30px); }
              `}} />
              
              <div className="app-icon-wave">
                {[...appIcons, ...appIcons, ...appIcons].map((src, i) => (
                  <div key={i} className="wave-item shrink-0">
                    <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-2xl bg-[#1a1a1a] p-3 flex items-center justify-center border border-white/5 shadow-2xl">
                      <img src={src} alt="App Integration" className="w-[40px] h-[40px] object-contain grayscale opacity-80" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerText='📱'; }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* iPhone Mockup Positioned at Bottom Right */}
          <div className="absolute bottom-[-20px] right-4 sm:right-10 lg:right-20 z-10 w-[240px] sm:w-[320px]">
            <div className="relative bg-[#0d0d0d] rounded-t-[40px] pt-4 px-4 h-[400px] border-x border-t border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
              {/* Internal Mockup Content */}
              <div className="flex flex-col items-center">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-2 border-2 border-brand-green">
                  <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/icons/68d27d1a8a10f417b5644527_flow-wc-v2-7.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="text-white text-[14px] font-medium mb-12">mom ❤️</div>
                
                {/* Message Bubbles */}
                <div className="self-start bg-[#1a1a1a] text-white/90 p-3 rounded-[20px] rounded-bl-none max-w-[80%] text-[13px] leading-snug mb-3">
                  hey sweetie, how's your day going?
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Brand/Social Proof Strip Below Case */}
        <div className="mt-[-2px] bg-[#004D40] rounded-b-[48px] py-12 px-5 flex flex-col items-center">
          <p className="text-white/60 text-[16px] font-medium mb-10 tracking-wide text-center uppercase">
            Used by professionals everywhere to speed up their thoughts
          </p>
          
          <div className="w-full max-w-[1200px] flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale invert brightness-0">
            {/* Logos represent the logos in the screenshot */}
            <span className="text-white font-bold text-xl">MERCURY</span>
            <span className="text-white font-bold text-xl">GROUPON</span>
            <span className="text-white font-bold text-xl">JUST</span>
            <span className="text-white font-bold text-xl flex items-center gap-1">▲ Vercel</span>
            <span className="text-white font-bold text-xl">OpenAI</span>
            <span className="text-white font-bold text-xl">replit</span>
            <span className="text-white font-bold text-xl">nuuly</span>
            <span className="text-white font-bold text-xl">warp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegrationShowcase;