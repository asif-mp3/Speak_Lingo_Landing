"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe, Search, BookOpen, Layers, Users, Zap, MessageSquare, Monitor, Apple } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () =>
<div className="flex items-center h-12 w-auto">
      <img src="/2.webp" alt="SpeakLingo" className="h-full w-auto object-contain" />
    </div>;


const MegaMenu = ({ title, items, active, setActive, index }: any) => {
  const isHovered = active === index;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}>

      <button
        className={`flex items-center gap-1.5 py-6 text-[15px] font-bold transition-colors ${isHovered ? 'text-[#F9A825]' : 'text-[#475569] hover:text-[#0f172a]'}`}>

        {title}
        <ChevronDown size={14} className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isHovered &&
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] pt-2 pointer-events-auto">

            <div className="bg-white rounded-[28px] border border-[#e2e8f0] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden p-6 grid grid-cols-2 gap-4">
              {items.map((item: any, i: number) =>
            <a
              key={i}
              href={item.href}
              className="flex items-start gap-4 p-4 rounded-[20px] hover:bg-[#FFFAE7]/50 transition-colors group">

                  <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0 shadow-sm ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className="text-[#6B5439]" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0f172a] mb-1">{item.name}</h4>
                    <p className="text-[13px] text-[#64748b] leading-tight font-medium">{item.description}</p>
                  </div>
                </a>
            )}
                  <div className="col-span-2 mt-2 pt-4 border-t border-[#f1f5f9] flex justify-between items-center px-2">
                    <span className="text-[12px] font-black text-[#94a3b8] uppercase tracking-widest">Syping for Desktop & Web</span>
                    <a href="#" className="text-[13px] font-bold text-[#F9A825] flex items-center gap-1 hover:underline">
                      View all features <ChevronDown size={12} className="-rotate-90" />
                    </a>
                  </div>
              </div>
            </motion.div>
        }
        </AnimatePresence>
      </div>);

};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [showDownloads, setShowDownloads] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureItems = [
  { name: 'Syping Mode', description: 'Voice to screen in real time with zero lag.', icon: Zap, color: 'bg-[#FFFAE7]', href: '#' },
  { name: 'Tasking Mode', description: 'Command reality with simple voice instructions.', icon: Layers, color: 'bg-[#FFFAE7]', href: '#' },
  { name: 'Prompt Mode', description: 'Speak casually, get perfect AI prompts.', icon: MessageSquare, color: 'bg-[#FFFAE7]', href: '#' },
  { name: 'Pure Offline', description: 'Total privacy with on-device processing.', icon: Globe, color: 'bg-[#FFFAE7]', href: '#' }];


  const resourceItems = [
  { name: 'Manifesto', description: 'Why we are killing the keyboard.', icon: BookOpen, color: 'bg-[#FFFAE7]', href: '#' },
  { name: 'Community', description: 'Join the generation of unfiltered thinkers.', icon: Users, color: 'bg-[#FFFAE7]', href: '#' }];


  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <header className="container mx-auto px-6 max-w-[1140px]">
        <nav className={`bg-white/80 backdrop-blur-md border border-[#e2e8f0] rounded-[24px] flex items-center justify-between px-6 h-[72px] transition-all duration-300 ${scrolled ? 'shadow-[0_15px_40px_rgba(0,0,0,0.06)]' : ''}`}>
          <div className="flex items-center gap-10">
            <a href="/"><Logo /></a>

            <div className="hidden lg:flex items-center gap-1">
              <MegaMenu
                title="Features"
                items={featureItems}
                active={activeMenu}
                setActive={setActiveMenu}
                index={0} />

              <MegaMenu
                title="Resources"
                items={resourceItems}
                active={activeMenu}
                setActive={setActiveMenu}
                index={1} />

              <a href="#pricing" className="px-5 py-6 text-[15px] font-bold text-[#475569] hover:text-[#0f172a] transition-colors">Pricing</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-5 border-r border-[#e2e8f0] pr-6 mr-1">
               <button className="text-[#475569] hover:text-[#0f172a] transition-colors flex items-center gap-2">
                 <Globe size={18} />
                 <span className="text-[14px] font-bold">EN</span>
               </button>
               <button className="text-[#475569] hover:text-[#0f172a] transition-colors">
                 <Search size={18} />
               </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="text-[15px] font-bold text-[#0f172a] hover:text-[#F9A825] px-4 transition-colors">Log in</button>
              
              <div className="relative">
                <button
                  onMouseEnter={() => setShowDownloads(true)}
                  onMouseLeave={() => setShowDownloads(false)}
                  className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-7 py-3 rounded-[18px] text-[15px] font-bold transition-all shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_5px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[4px] border border-black flex items-center gap-2">

                  Download <ChevronDown size={14} className={`transition-transform ${showDownloads ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showDownloads &&
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    onMouseEnter={() => setShowDownloads(true)}
                    onMouseLeave={() => setShowDownloads(false)}
                    className="absolute top-full right-0 mt-2 w-56 pt-2">

                      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-2">
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#FFFAE7] transition-colors group">
                          <div className="w-8 h-8 bg-[#0f172a] rounded-lg flex items-center justify-center text-white">
                            <Monitor size={16} />
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-bold text-[#0f172a]">For Windows</p>
                            <p className="text-[10px] text-slate-400 font-medium">v1.2.0 • .exe</p>
                          </div>
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#FFFAE7] transition-colors group mt-1">
                          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-[#0f172a]">
                            <Apple size={16} />
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-bold text-[#0f172a]">For macOS</p>
                            <p className="text-[10px] text-slate-400 font-medium">v1.2.0 • .dmg</p>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            </div>
          </div>

          <button className="lg:hidden p-2 text-[#0f172a]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden fixed inset-0 bg-[#FFFAE7] z-[90] pt-28 px-6 overflow-y-auto">

            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <p className="text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.2em]">Product</p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#0f172a]">Features</h3>
                  <div className="grid grid-cols-1 gap-4 pl-4">
                    {featureItems.map((item, i) =>
                  <a key={i} href={item.href} className="flex items-center gap-3 text-lg font-bold text-[#475569]">
                        <item.icon size={20} className="text-[#F9A825]" /> {item.name}
                      </a>
                  )}
                  </div>
                </div>
                <a href="#pricing" className="block text-2xl font-bold text-[#0f172a] pt-4">Pricing</a>
              </div>
              
              <div className="w-full h-px bg-[#e2e8f0] my-4" />
              
                <div className="space-y-4">
                  <button className="w-full bg-[#0f172a] text-white py-4 rounded-2xl text-lg font-bold shadow-[0_4px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[4px] transition-all border border-black">Download for Windows</button>
                  <button className="w-full bg-white border-2 border-[#0f172a] text-[#0f172a] py-4 rounded-2xl text-lg font-bold shadow-[0_4px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[4px] transition-all">Download for Mac</button>
                </div>

            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}