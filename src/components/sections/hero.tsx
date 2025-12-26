"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SypingEquation from './syping-equation';

const DocumentMockup = ({ active }: {active: boolean;}) => {
  const [text, setText] = useState("");
  const fullText = "Typing slows thought. Syping replaces keys with voice—so your ideas flow from voice to screen in real time.";

  useEffect(() => {
    if (!active) {
      setText("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (active) setText("");
        }, 3000);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="bg-white rounded-[32px] border border-[#6B5439]/10 shadow-[0_30px_80px_rgba(0,0,0,0.06)] p-8 w-full max-w-[500px] aspect-[4/3] relative overflow-hidden">
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="space-y-4">
        <p className="text-[#0f172a] text-xl font-medium leading-relaxed tracking-tight">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-[#EAB308] ml-1 align-middle" />

        </p>
        {!active &&
        <div className="space-y-4">
            <div className="h-4 bg-slate-100 rounded-full w-3/4" />
            <div className="h-4 bg-slate-100 rounded-full w-1/2" />
            <div className="h-4 bg-slate-100 rounded-full w-2/3" />
          </div>
        }
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4 mb-2">
           <div className="px-3 py-1 bg-green-50 rounded-full border border-green-100 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-wider text-green-700">Live WPM: {active ? "142" : "0"}</span>
           </div>
           <div className="px-3 py-1 bg-amber-50 rounded-full border border-amber-100 flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">Streak: {active ? "🔥 12m" : "0m"}</span>
           </div>
        </div>
      </div>
    </div>);

};

export default function Hero() {
  const [isSyping, setIsSyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyping((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-[140px] pb-[80px] overflow-hidden bg-[#FFFAE7] !w-full !h-[905px]">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-black leading-[1.05] text-[#0f172a] mb-8 tracking-[-0.04em]">
              Kill the <br className="hidden sm:block" />
              <span className="text-[#F9A825]">Keyboard</span>.
            </h1>

            {/* Added Stop Typing. Start Syping... slogan/button */}
            <div className="flex flex-col items-center lg:items-start gap-4 mb-10">
              <p className="text-2xl md:text-3xl font-black text-[#6B5439] tracking-tight">Stop Typing.</p>
              <button className="bg-[#F9A825] hover:bg-[#FBC02D] text-[#0f172a] px-8 py-4 rounded-2xl text-xl md:text-2xl font-black transition-all shadow-[0_6px_0_#C67C00] hover:shadow-[0_8px_0_#C67C00] active:shadow-none active:translate-y-[6px] border-2 border-[#0f172a] flex items-center gap-3 group">
                Start Syping...
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#0f172a] hover:bg-[#1e293b] text-white px-7 py-3.5 rounded-[18px] text-base font-bold transition-all shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_5px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[4px] flex items-center justify-center gap-2 border border-black">
                  Download for Windows <ArrowRight size={18} />
                </button>
                <button className="w-full sm:w-auto bg-white border-2 border-[#0f172a] text-[#0f172a] px-7 py-3.5 rounded-[18px] text-base font-bold transition-all hover:bg-slate-50 flex items-center justify-center gap-2 shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_5px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[4px]">
                  Download for Mac
                </button>
              </div>
            </div>

            <div className="mt-12 space-y-2 text-center lg:text-left">
              <p className="text-xs font-bold text-[#475569]/60 uppercase tracking-widest">
                Typing was built for machines. You were built for momentum.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFD54F]/10 blur-[120px] -z-10 rounded-full" />
            <DocumentMockup active={isSyping} />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-[#e2e8f0] max-w-[180px]">

              <p className="text-xs font-bold text-[#475569] leading-tight">
                "The keyboard is the bottleneck of human potential."
              </p>
            </motion.div>
          </div>
        </div>

        <SypingEquation />
      </div>
    </section>);

}