"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <header className="container mx-auto px-4 max-w-[1200px]">
        <nav className={`bg-white/80 backdrop-blur-md border border-[#e2e8f0] rounded-[24px] flex items-center justify-between px-6 h-16 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <a href="/"><Logo /></a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-[15px] font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">Features</a>
            <a href="#methodology" className="text-[15px] font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">Methodology</a>
            <a href="#pricing" className="text-[15px] font-semibold text-[#475569] hover:text-[#0f172a] transition-colors">Pricing</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[15px] font-bold text-[#6B5439] hover:text-[#5A4530] px-4">Log in</button>
            <button className="bg-[#6B5439] hover:bg-[#5A4530] text-white px-6 py-2.5 rounded-full text-[15px] font-bold transition-all shadow-md active:scale-95">
              Start Learning
            </button>
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
            className="lg:hidden fixed inset-0 bg-[#FFFAE7] z-[90] pt-28 px-6"
          >
            <div className="flex flex-col gap-6 items-center">
              <a href="#features" className="text-2xl font-bold text-[#2D3748]">Features</a>
              <a href="#methodology" className="text-2xl font-bold text-[#2D3748]">Methodology</a>
              <a href="#pricing" className="text-2xl font-bold text-[#2D3748]">Pricing</a>
              <div className="w-full h-px bg-[#e2e8f0] my-4" />
              <button className="text-xl font-bold text-[#6B5439]">Log in</button>
              <button className="w-full bg-[#6B5439] text-white py-4 rounded-2xl text-xl font-bold">Start Learning</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;