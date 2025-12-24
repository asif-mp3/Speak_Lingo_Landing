"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Globe, Search, BookOpen, Layers, Users, Zap, MessageSquare, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-8 h-8 bg-[#FFD54F] rounded-[10px] flex items-center justify-center overflow-hidden border border-[#E6A700]">
      {/* Speech bubble tail */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFD54F] rotate-45 border-r border-b border-[#E6A700]"></div>
      {/* Face */}
      <div className="flex flex-col items-center gap-0.5 relative z-10">
        <div className="flex gap-1.5">
          <div className="w-1 h-1 bg-[#2D3748] rounded-full"></div>
          <div className="w-1 h-1 bg-[#2D3748] rounded-full"></div>
        </div>
        <div className="w-3 h-1.5 border-b-2 border-[#2D3748] rounded-full"></div>
      </div>
    </div>
    <div className="text-xl font-bold flex tracking-tight">
      <span className="text-[#2D3748]">Speak</span>
      <span className="text-[#EAB308]">Lingo</span>
    </div>
  </div>
);

const MegaMenu = ({ title, items, active, setActive, index }: any) => {
  const isHovered = active === index;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
    >
      <button 
        className={`flex items-center gap-1.5 py-6 text-[15px] font-bold transition-colors ${isHovered ? 'text-[#EAB308]' : 'text-[#475569] hover:text-[#0f172a]'}`}
      >
        {title}
        <ChevronDown size={14} className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] pt-2 pointer-events-auto"
          >
            <div className="bg-white rounded-[28px] border border-[#e2e8f0] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden p-6 grid grid-cols-2 gap-4">
              {items.map((item: any, i: number) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-[20px] hover:bg-[#FFFAE7]/50 transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0 shadow-sm ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className="text-[#6B5439]" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0f172a] mb-1">{item.name}</h4>
                    <p className="text-[13px] text-[#64748b] leading-tight font-medium">{item.description}</p>
                  </div>
                </a>
              ))}
              <div className="col-span-2 mt-2 pt-4 border-t border-[#f1f5f9] flex justify-between items-center px-2">
                <span className="text-[12px] font-black text-[#94a3b8] uppercase tracking-widest">SpeakLingo for Web & Mobile</span>
                <a href="#" className="text-[13px] font-bold text-[#EAB308] flex items-center gap-1 hover:underline">
                  View all features <ChevronDown size={12} className="-rotate-90" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureItems = [
    { name: 'Voice AI Coach', description: 'Real-time feedback on pronunciation and grammar.', icon: MessageSquare, color: 'bg-[#FFFAE7]', href: '#' },
    { name: 'Immersive Scenarios', description: 'Practice in restaurant, travel, and work settings.', icon: PlayCircle, color: 'bg-[#FFFAE7]', href: '#' },
    { name: 'Visual Learning', description: 'Dynamic interface that adapts to your progress.', icon: Zap, color: 'bg-[#FFFAE7]', href: '#' },
    { name: 'Progress Tracker', description: 'Detailed insights into your fluency growth.', icon: Layers, color: 'bg-[#FFFAE7]', href: '#' },
  ];

  const resourceItems = [
    { name: 'Language Blog', description: 'Tips and tricks from polyglots and linguists.', icon: BookOpen, color: 'bg-[#FFFAE7]', href: '#' },
    { name: 'Global Community', description: 'Connect with 500k+ learners worldwide.', icon: Users, color: 'bg-[#FFFAE7]', href: '#' },
  ];

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
                index={0} 
              />
              <MegaMenu 
                title="Resources" 
                items={resourceItems} 
                active={activeMenu} 
                setActive={setActiveMenu} 
                index={1} 
              />
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
              <button className="text-[15px] font-bold text-[#6B5439] hover:text-[#5A4530] px-4">Log in</button>
              <button className="bg-[#6B5439] hover:bg-[#5A4530] text-white px-7 py-3 rounded-[16px] text-[15px] font-bold transition-all shadow-[0_4px_0_rgb(60,45,30)] hover:shadow-[0_5px_0_rgb(60,45,30)] active:shadow-none active:translate-y-[4px]">
                Try Free
              </button>
            </div>
          </div>

          <button className="lg:hidden p-2 text-[#2D3748]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 bg-[#FFFAE7] z-[90] pt-28 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <p className="text-[11px] font-black text-[#94a3b8] uppercase tracking-[0.2em]">Product</p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#2D3748]">Features</h3>
                  <div className="grid grid-cols-1 gap-4 pl-4">
                    {featureItems.map((item, i) => (
                      <a key={i} href={item.href} className="flex items-center gap-3 text-lg font-bold text-[#475569]">
                        <item.icon size={20} className="text-[#EAB308]" /> {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <h3 className="text-2xl font-bold text-[#2D3748]">Resources</h3>
                  <div className="grid grid-cols-1 gap-4 pl-4">
                    {resourceItems.map((item, i) => (
                      <a key={i} href={item.href} className="flex items-center gap-3 text-lg font-bold text-[#475569]">
                        <item.icon size={20} className="text-[#EAB308]" /> {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="#pricing" className="block text-2xl font-bold text-[#2D3748] pt-4">Pricing</a>
              </div>
              
              <div className="w-full h-px bg-[#e2e8f0] my-4" />
              
              <div className="space-y-4">
                <button className="w-full bg-white border-2 border-[#6B5439]/10 text-[#2D3748] py-4 rounded-2xl text-lg font-bold">Log in</button>
                <button className="w-full bg-[#6B5439] text-white py-4 rounded-2xl text-lg font-bold shadow-[0_4px_0_rgb(60,45,30)]">Try Free</button>
              </div>

              <div className="flex items-center justify-center gap-8 pt-8 pb-12">
                 <button className="flex items-center gap-2 text-[#475569] font-bold">
                   <Globe size={20} /> EN
                 </button>
                 <button className="text-[#475569]">
                   <Search size={20} />
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;