"use client";

import React from 'react';

const Footer = () => {
  const Logo = () => (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 bg-[#FFD54F] rounded-[10px] flex items-center justify-center overflow-hidden border border-[#E6A700]">
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFD54F] rotate-45 border-r border-b border-[#E6A700]"></div>
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

  return (
    <footer className="bg-white border-t border-[#e2e8f0] pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-5 text-[#64748b] font-medium leading-relaxed max-w-[220px] text-sm">
              Reimagining language learning through immersive interface design.
            </p>
          </div>
          
          <div>
            <h5 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6">Product</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Features</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Methodology</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Interface Design</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6">Resources</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Community</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6">Company</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">About</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#0f172a] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[#e2e8f0] gap-6">
          <p className="text-[#94a3b8] text-[12px] font-black uppercase tracking-widest">
            © 2024 SpeakLingo Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <div className="w-4 h-4 bg-[#e2e8f0] rounded-sm"></div>
            <div className="w-4 h-4 bg-[#e2e8f0] rounded-sm"></div>
            <div className="w-4 h-4 bg-[#e2e8f0] rounded-sm"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;