import React from 'react';
import Image from 'next/image';

const DeviceSync = () => {
  return (
    <section className="bg-[#FBFAF0] py-[100px] md:py-[160px] overflow-hidden">
      <div className="container mx-auto px-5 lg:px-20 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Device Icons / Platform Badges */}
            <div className="flex items-center gap-3 mb-8 bg-white/50 backdrop-blur-sm border border-black/10 rounded-full px-5 py-2">
              <div className="flex items-center gap-2">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/683292faea21a80a4ec2ab80_apple_symbol-dark-50.svg" 
                  alt="iOS" 
                  className="w-4 h-4"
                />
                <span className="text-[12px] font-semibold font-sans tracking-tight">iOS</span>
              </div>
              <div className="w-[1px] h-3 bg-black/10" />
              <div className="flex items-center gap-2">
                <img 
                  src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/683215c6f233131a07d8bafc_navbar_logo.svg" 
                  alt="Mac" 
                  className="w-3.5 h-3.5 object-contain"
                />
                <span className="text-[12px] font-semibold font-sans tracking-tight">Mac</span>
              </div>
              <div className="w-[1px] h-3 bg-black/10" />
              <div className="flex items-center gap-2">
                <img 
                  src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/686d4881d944a4b80f7d047e_windows.svg" 
                  alt="Windows" 
                  className="w-3.5 h-3.5"
                />
                <span className="text-[12px] font-semibold font-sans tracking-tight">Windows</span>
              </div>
            </div>

            <h2 className="text-[40px] md:text-[56px] leading-[1.1] mb-6 font-serif text-black max-w-[400px]">
              On-the-go or at your desk
            </h2>
            
            <p className="text-[#666666] text-[18px] md:text-[20px] leading-[1.6] mb-10 max-w-[440px] font-sans">
              With apps for Desktop and iPhone, flow freely from wherever you are. Your personal dictionary and notes sync seamlessly between all devices.
            </p>

            <a 
              href="https://wisprflow.onelink.me/PguH/lw5h199m"
              className="bg-[#E4D8FF] hover:bg-[#D4C4FF] text-black font-semibold px-8 py-4 rounded-full border border-black text-[16px] transition-transform active:scale-[0.98] shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
            >
              Download for free
            </a>
          </div>

          {/* Right Visual Column (Layered Apps) */}
          <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end order-1 lg:order-2 h-[450px] md:h-[600px]">
            {/* Desktop App Background/Container Mockup */}
            <div className="absolute right-0 top-0 w-full max-w-[580px] h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-black/5 bg-[#121212]">
              <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-[180px] bg-[#1a1a1a] p-6 hidden md:block border-r border-white/5">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-6 h-6 rounded-full bg-[#FF9F43]/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF9F43]" />
                    </div>
                    <span className="text-[11px] text-white/40 font-semibold tracking-wider">WORKSPACE</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="w-4 h-4 bg-white/10 rounded" />
                      <span className="text-[13px]">Home</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40">
                      <div className="w-4 h-4 bg-white/5 rounded" />
                      <span className="text-[13px]">Search</span>
                    </div>
                  </div>
                </div>
                {/* Main View */}
                <div className="flex-1 p-8 md:p-12">
                  <h3 className="text-white text-[28px] md:text-[36px] font-serif mb-6 flex items-center gap-3">
                    <span className="text-[#FF9F43]">💡</span> Crazy product ideas
                  </h3>
                  <div className="space-y-6">
                    <div className="h-4 bg-white/10 rounded w-[80%]" />
                    <div className="h-4 bg-white/10 rounded w-[60%]" />
                    <div className="h-4 bg-white/10 rounded w-[70%]" />
                    <div className="mt-12 flex justify-end">
                      <div className="border border-white/40 rounded-full px-4 py-2 flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-0.5 h-3 bg-white/60 animate-pulse" />
                          <div className="w-0.5 h-5 bg-white animate-pulse" />
                          <div className="w-0.5 h-4 bg-white/60 animate-pulse" />
                        </div>
                        <span className="text-white text-[14px]">hello</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Foreground Mockup */}
            <div className="absolute left-[5%] md:left-[10%] bottom-0 w-[240px] md:w-[280px] h-[480px] md:h-[540px] rounded-[48px] border-[8px] border-[#1a1a1a] shadow-2xl bg-[#121212] flex flex-col overflow-hidden z-10 transition-transform duration-500 hover:translate-y-[-10px]">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-[20px]" />
              
              <div className="p-8 pt-12 flex-1">
                <h4 className="text-white text-[20px] font-serif mb-4 flex items-center gap-2">
                  <span className="text-[#FF9F43]">💡</span> Crazy product ideas
                </h4>
                <div className="space-y-4">
                  <div className="h-2.5 bg-white/10 rounded w-full" />
                  <div className="h-2.5 bg-white/10 rounded w-[90%]" />
                  <div className="h-2.5 bg-white/10 rounded w-[95%]" />
                  <div className="h-2.5 bg-white/10 rounded w-[70%]" />
                </div>
              </div>

              {/* Mobile Dictation UI */}
              <div className="p-6 bg-[#1a1a1a]/80 backdrop-blur-md border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-white text-[16px]">✕</span>
                  </div>
                  <div className="flex items-center gap-1.5 h-12">
                    {[1, 2, 3, 4, 3, 5, 2].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-1 bg-white rounded-full animate-wave" 
                        style={{ 
                          height: `${h * 8}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black text-[12px]">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(1); opacity: 0.6; }
          50% { transform: scaleY(1.5); opacity: 1; }
        }
        .animate-wave {
          animation: wave 1.2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default DeviceSync;