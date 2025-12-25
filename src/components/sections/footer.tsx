"use client";

import React from 'react';
import { Smile } from 'lucide-react';

const Footer = () => {
  const Logo = () => (
    <div className="flex items-center">
      <img src="/2.webp" alt="SpeakLingo" className="h-10 w-auto object-contain" />
    </div>
  );

  return (
    <footer className="bg-white border-t border-[#e2e8f0] pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-6 text-[#64748b] font-medium leading-relaxed max-w-[260px] text-sm">
              The future of language is voice. Kill the keyboard and express yourself at the speed of thought with Syping.
            </p>
          </div>
          
          <div>
            <h5 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6">Product</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Features</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Methodology</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Privacy First</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Desktop App</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6">Resources</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Manifesto</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Community</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Support</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6">Legal</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#475569] text-sm font-bold hover:text-[#F9A825] transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#e2e8f0] gap-6">
          <p className="text-[#94a3b8] text-[11px] font-black uppercase tracking-[0.2em]">
            © 2025 SYPING INC. RECLAIM YOUR VOICE.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-xs font-black text-slate-400 hover:text-[#F9A825] transition-colors uppercase tracking-widest">Twitter</a>
            <a href="#" className="text-xs font-black text-slate-400 hover:text-[#F9A825] transition-colors uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="text-xs font-black text-slate-400 hover:text-[#F9A825] transition-colors uppercase tracking-widest">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
