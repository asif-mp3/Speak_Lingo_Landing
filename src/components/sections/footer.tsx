"use client";

import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Trust Center', href: '/trust-center' },
        { label: 'Become an Affiliate', href: '/affiliate' },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: "What's New", href: '/whats-new' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Flow for Students', href: '/students' },
        { label: 'Flow for Non-Profits', href: '/non-profits' },
        { label: 'Flow for Android (Waitlist)', href: '/android-waitlist' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Workflows', href: '/workflows' },
        { label: 'Vibe Coding', href: '/vibe-coding' },
        { label: 'Talk to Support', href: '/support' },
        { label: 'Talk to Sales', href: '/talk-to-sales' },
        { label: 'Help Center', href: '/help-center' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#FBFAF0] pt-16 pb-12 px-5 lg:px-20 font-sans">
      <div className="max-width-[1280px] mx-auto">
        {/* Top Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {footerLinks.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h4 className="font-serif text-[20px] leading-[1.4] text-black">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#666666] text-[14px] hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive Wordmark Section */}
        <div className="relative flex flex-col items-center justify-center py-10 overflow-hidden select-none">
          <div className="flex items-center justify-center gap-[4vw] md:gap-[40px]">
            {/* Dot Decorative Elements */}
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-[#121212]"
                />
              ))}
            </div>
            {/* The "Flow" Wordmark */}
            <h2 className="text-[25vw] md:text-[240px] font-bold tracking-[-0.04em] leading-none text-[#121212] font-sans m-0 p-0">
              Flow
            </h2>
          </div>
        </div>

        {/* Bottom Compliance & Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-black/5 gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[12px] text-[#666666]">
            <span>© Wispr Flow 2025</span>
            <a href="/terms" className="hover:text-black hover:underline underline-offset-4">Terms</a>
            <a href="/privacy" className="hover:text-black hover:underline underline-offset-4">Privacy</a>
            <a href="/data-controls" className="hover:text-black hover:underline underline-offset-4">Data Controls</a>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://youtube.com/@wisprflow" className="text-[#666666] hover:text-black transition-colors" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="https://crunchbase.com/organization/wispr" className="text-[#666666] hover:text-black transition-colors font-bold text-[14px]" aria-label="Crunchbase">
              cb
            </a>
            <a href="https://instagram.com/wisprflow" className="text-[#666666] hover:text-black transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/wisprflow" className="text-[#666666] hover:text-black transition-colors" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/company/wispr" className="text-[#666666] hover:text-black transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;