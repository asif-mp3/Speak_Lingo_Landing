"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Slack, 
  Mail, 
  Search, 
  Framer, 
  Mic, 
  Zap,
  Send,
  MoreHorizontal,
  Plus,
  MousePointer2,
  Activity
} from 'lucide-react';
import { 
  SiNotion, 
  SiDiscord, 
  SiGmail 
} from 'react-icons/si';

const apps = [
  { 
    id: 'slack', 
    name: 'SLACK', 
    icon: Slack, 
    color: '#4A154B',
      title: "Instant Collaboration",
      fullText: "Hey team, the production build is ready. I've verified the Syping latency and it's practically zero. Let's ship it!"
    },

  { 
    id: 'email', 
    name: 'EMAIL', 
    icon: Mail, 
    color: '#EA4335',
    title: "Email at Voice Speed",
    fullText: "Subject: Q4 Strategy Update. \n\nHi everyone, I've outlined the new vision for our voice-first platform. Please review the attached manifest."
  },
  { 
    id: 'search', 
    name: 'SEARCH', 
    icon: Search, 
    color: '#4285F4',
    title: "Search the World",
    fullText: "How does on-device neural processing improve privacy in voice-to-text applications?"
  },
  { 
    id: 'figma', 
    name: 'FIGMA', 
    icon: Framer, 
    color: '#F24E1E',
    title: "Design Feedback",
    fullText: "The padding on the hero section needs to be increased by 20px. Also, let's make the primary CTA button a bit more rounded."
  },
];

const AppMockup = ({ app, text }: { app: any, text: string }) => {
  switch (app.id) {
    case 'slack':
      return (
        <div className="w-full h-full bg-[#3F0E40] rounded-2xl overflow-hidden flex flex-col font-sans">
          <div className="h-10 border-b border-white/10 flex items-center px-4 justify-between">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <span className="text-[10px] font-bold text-white/40 tracking-widest">#ENGINEERING</span>
          </div>
          <div className="flex-1 p-4 space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded bg-amber-400 shrink-0" />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-white">Alex</span>
                  <span className="text-[9px] text-white/40">10:42 AM</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  {text}
                  <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-3 bg-white ml-0.5" />
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#4A154B] border-t border-white/10">
            <div className="bg-white/10 rounded-lg h-8 flex items-center px-3 justify-between">
              <Plus size={14} className="text-white/40" />
              <Send size={14} className="text-[#FFD54F]" />
            </div>
          </div>
        </div>
      );
    case 'email':
      return (
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-200 shadow-inner">
          <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
            <div className="flex gap-4 items-center">
              <MoreHorizontal size={14} className="text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Message</span>
            </div>
            <div className="w-12 h-5 bg-[#EA4335] rounded-full flex items-center justify-center text-[9px] font-bold text-white uppercase">Send</div>
          </div>
          <div className="flex-1 p-6 space-y-4 font-sans">
              <div className="border-b border-slate-100 pb-2">
                <span className="text-[10px] font-bold text-slate-400">To:</span>
                  <span className="text-xs ml-2 text-slate-600">leadership@syping.ai</span>

              </div>

            <div className="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
              {text}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-3 bg-[#EA4335] ml-0.5" />
            </div>
          </div>
        </div>
      );
    case 'search':
      return (
        <div className="w-full h-full bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center gap-6">
          <div className="text-2xl font-black tracking-tighter flex gap-1">
             <span className="text-[#4285F4]">G</span>
             <span className="text-[#EA4335]">o</span>
             <span className="text-[#F9BC05]">o</span>
             <span className="text-[#4285F4]">g</span>
             <span className="text-[#34A853]">l</span>
             <span className="text-[#EA4335]">e</span>
          </div>
          <div className="w-full bg-white rounded-full h-12 border border-slate-200 shadow-sm flex items-center px-5 gap-3">
            <Search size={18} className="text-slate-400" />
            <p className="text-sm text-slate-700 truncate flex-1">
              {text}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-4 bg-[#4285F4] ml-0.5" />
            </p>
          </div>
          <div className="flex gap-2">
             <div className="h-4 w-20 bg-slate-200 rounded-full" />
             <div className="h-4 w-20 bg-slate-200 rounded-full" />
          </div>
        </div>
      );
    case 'figma':
      return (
        <div className="w-full h-full bg-[#1e1e1e] rounded-2xl overflow-hidden flex flex-col">
          <div className="h-10 bg-[#2c2c2c] border-b border-white/5 flex items-center px-4 justify-between">
              <div className="flex items-center gap-2">
                <Framer size={14} className="text-[#F24E1E]" />
                <span className="text-[10px] font-bold text-white/60">Syping_V2_Main</span>
              </div>

            <div className="flex -space-x-2">
               {[...Array(3)].map((_, i) => <div key={i} className={`w-5 h-5 rounded-full border border-[#1e1e1e] ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-green-400' : 'bg-pink-400'}`} />)}
            </div>
          </div>
          <div className="flex-1 relative p-8">
            <div className="absolute top-1/4 left-1/4 bg-white/5 border border-white/10 w-1/2 h-1/2 rounded-lg backdrop-blur" />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-2xl max-w-[200px]"
            >
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-4 h-4 rounded bg-[#F24E1E] flex items-center justify-center text-[8px] text-white font-bold">A</div>
                 <span className="text-[10px] font-bold text-slate-800">Comment</span>
               </div>
               <p className="text-[11px] text-slate-600 leading-tight">
                 {text}
                 <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-3 bg-[#F24E1E] ml-0.5" />
               </p>
            </motion.div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function Audience() {
  const [activeApp, setActiveApp] = useState(apps[0]);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(activeApp.fullText.slice(0, i));
      i++;
      if (i > activeApp.fullText.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [activeApp]);

  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
            Universal Flow. <br />
            <span className="text-[#F9A825]">Every App. Everywhere.</span>
          </h2>
            <p className="text-xl text-slate-600 font-medium max-w-[700px] mx-auto">
              Syping doesn't just work in one place. It works in <span className="text-[#0f172a] font-bold italic underline decoration-[#FFD54F] decoration-4">your</span> places.
            </p>

        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 flex-wrap">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                setActiveApp(app);
                setDisplayText("");
              }}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className={`
                relative w-16 h-16 md:w-20 md:h-20 rounded-[24px] flex items-center justify-center transition-all duration-300
                ${activeApp.id === app.id 
                  ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-2 ring-[#FFD54F] scale-110' 
                  : 'bg-white/40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105'}
              `}>
                <app.icon 
                  size={32} 
                  className={activeApp.id === app.id ? 'text-[#0f172a]' : 'text-slate-400'} 
                  strokeWidth={1.5}
                />
              </div>
              <span className={`
                text-[10px] md:text-xs font-black tracking-[0.2em] transition-colors
                ${activeApp.id === app.id ? 'text-[#0f172a]' : 'text-slate-400'}
              `}>
                {app.name}
              </span>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div
          key={activeApp.id}
          className="grid lg:grid-cols-12 gap-12 bg-white rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden p-8 md:p-12 items-center"
        >
            <div className="lg:col-span-6 space-y-8">
               
               <h3 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight">

               {activeApp.title}
             </h3>

             <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
               Type with your voice in any text field. No plugins. No complex setups. Just click, speak, and watch.
             </p>

             <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</span>
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-bold text-[#0f172a]">Native Bridge Connected</span>
                   </div>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <div className="flex flex-col">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Privacy</span>
                   <div className="flex items-center gap-2">
                      <Zap size={14} className="text-[#F9A825]" />
                      <span className="text-sm font-bold text-[#0f172a]">100% Offline AI</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-6 relative group">
             <div className="aspect-[4/3] bg-slate-50 rounded-[32px] p-4 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-10">
                   <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>
                
                <AppMockup app={activeApp} text={displayText} />

                {/* Listening Pill - Contextual within graphic */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                   <motion.div 
                     animate={{ y: [0, -4, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="bg-[#0f172a] text-white px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl border border-white/10"
                   >
                     <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [4, 12, 4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1 bg-[#FFD54F] rounded-full"
                          />
                        ))}
                     </div>
                     <span className="text-[10px] font-black tracking-widest uppercase">Listening</span>
                   </motion.div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FFD54F]/20 rounded-full blur-3xl -z-10" />
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0f172a]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Compatible With</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale contrast-150">
              <div className="flex items-center gap-2">
                 <SiNotion className="w-5 h-5" />
                 <span className="text-xl font-black">Notion</span>
              </div>
              <div className="flex items-center gap-2">
                 <SiDiscord className="w-5 h-5" />
                 <span className="text-xl font-black">Discord</span>
              </div>
              <div className="flex items-center gap-2">
                 <Activity className="w-5 h-5" />
                 <span className="text-xl font-black">Linear</span>
              </div>
              <div className="flex items-center gap-2">
                 <MousePointer2 className="w-5 h-5" />
                 <span className="text-xl font-black">Cursor</span>
              </div>
              <div className="flex items-center gap-2">
                 <SiGmail className="w-5 h-5" />
                 <span className="text-xl font-black">Gmail</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
