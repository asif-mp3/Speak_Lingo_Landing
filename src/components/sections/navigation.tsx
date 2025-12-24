"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownData = {
    product: {
      label: 'Product',
      sections: [
        {
          heading: 'GET STARTED',
          links: [
            { title: 'Features', desc: 'Do more with your voice', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/69372964162376d54a70d1fe_ft-icon.svg', href: '/features' },
            { title: 'Use cases', desc: 'See how Flow fits into your day', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6871316154c9c063830781ef_ni-grid-plus.svg', href: '/use-cases' },
            { title: 'Workflows', desc: 'Build faster with voice-first processes', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713160d632c852a4f6efee_ni-video.svg', href: '/workflows' },
          ]
        }
      ]
    },
    individuals: {
      label: 'Individuals',
      sections: [
        {
          heading: 'FLOW FOR',
          links: [
            { title: 'Leaders', desc: 'Unblock teams, build faster with voice', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6871316099ef4cdaa2d5a491_ni-users.svg', href: '/leaders' },
            { title: 'Developers', desc: 'Speak more context, get better results', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713161422abeaaa67d75d8_ni-laptop-code.svg', href: '/developers', badge: 'NEW' },
          ]
        }
      ]
    }
  };

  return (
    <>
      {/* Banner */}
      <motion.div 
        animate={{ y: scrolled ? -40 : 0 }}
        className="fixed top-0 left-0 right-0 z-[110] bg-[#004D40] text-[#FBFAF0] h-10 flex items-center justify-center text-[13px] font-bold px-4 overflow-hidden border-b border-black/5"
      >
        <div className="flex items-center gap-2">
          <span>Wispr raises $81M to build the Voice OS.</span>
          <a href="/new-funding" className="flex items-center gap-1 hover:opacity-80 transition-opacity underline">
            Read Article
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
        </div>
      </motion.div>

      <div className={`fixed left-0 right-0 z-[100] px-4 md:px-8 transition-all duration-500 ease-[0.22,1,0.36,1] ${scrolled ? 'top-6' : 'top-16'}`}>
        <header className="container mx-auto max-w-[1100px]">
          <div className={`bg-[#FBFAF0]/90 backdrop-blur-xl border border-black/10 rounded-[28px] md:rounded-[36px] flex items-center justify-between px-6 md:px-10 h-16 md:h-[76px] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ${scrolled ? 'scale-[0.98]' : 'scale-100'}`}>
            
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/683215c6f233131a07d8bafc_navbar_logo-1.svg" 
                alt="Flow Logo" 
                className="h-8 md:h-9"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {Object.entries(dropdownData).map(([key, data]) => (
                <div 
                  key={key} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-5 py-2.5 text-[15px] font-bold text-black/60 hover:text-black transition-colors rounded-full">
                    {data.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-white rounded-[32px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/5 min-w-[340px] flex flex-col gap-6">
                          {data.sections.map((section, idx) => (
                            <div key={idx}>
                              <div className="text-[11px] font-bold tracking-widest text-black/30 mb-4 px-3 uppercase">{section.heading}</div>
                              <div className="space-y-1">
                                {section.links.map((link: any, lIdx) => (
                                  <a 
                                    key={lIdx} 
                                    href={link.href}
                                    className="group flex items-start gap-4 p-4 rounded-[20px] hover:bg-[#FBFAF0] transition-colors"
                                  >
                                    <img src={link.icon} alt="" className="w-5 h-5 mt-1 opacity-60 group-hover:opacity-100" />
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[15px] font-bold text-black">{link.title}</span>
                                        {link.badge && (
                                          <span className="text-[9px] font-bold bg-[#E4D8FF] text-black px-1.5 py-0.5 rounded-sm">
                                            {link.badge}
                                          </span>
                                        )}
                                      </div>
                                      <div className="text-[13px] text-black/50 leading-snug mt-1 font-medium">{link.desc}</div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a href="/business" className="px-5 py-2.5 text-[15px] font-bold text-black/60 hover:text-black transition-colors">Business</a>
              <a href="/pricing" className="px-5 py-2.5 text-[15px] font-bold text-black/60 hover:text-black transition-colors">Pricing</a>
            </nav>

            {/* Right Action */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="/research" 
                className="text-[15px] font-bold text-black/60 hover:text-black px-6 py-2.5"
              >
                Research
              </a>
              <a 
                href="https://wisprflow.onelink.me/PguH/lw5h199m" 
                className="bg-[#E4D8FF] hover:bg-[#D4C4FF] text-black px-7 py-3.5 rounded-[20px] text-[15px] font-bold border-[1.5px] border-black shadow-[0_3px_0_rgb(0,0,0)] hover:shadow-[0_4px_0_rgb(0,0,0)] active:shadow-none active:translate-y-[3px] flex items-center gap-2.5 transition-all"
              >
                <div className="w-4 h-4">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
                </div>
                Download for Windows
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-black/5 text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden fixed inset-0 bg-[#FBFAF0] z-[90] pt-40 px-8 overflow-y-auto"
          >
            <div className="container mx-auto flex flex-col gap-10 pb-20">
              <div className="space-y-6">
                <div className="text-[11px] font-bold tracking-widest text-black/30 uppercase">Product</div>
                <div className="flex flex-col gap-4">
                  {dropdownData.product.sections[0].links.map((link: any, idx) => (
                    <a key={idx} href={link.href} className="text-3xl font-serif py-1 flex items-center gap-5">
                      <img src={link.icon} alt="" className="w-7 h-7" />
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-[1.5px] bg-black/5 w-full"></div>

              <div className="flex flex-col gap-8">
                <a href="/business" className="text-3xl font-serif">Business</a>
                <a href="/pricing" className="text-3xl font-serif">Pricing</a>
                <a href="/about" className="text-3xl font-serif">About</a>
              </div>

              <div className="pt-10">
                <a 
                  href="https://wisprflow.onelink.me/PguH/lw5h199m" 
                  className="block w-full text-center bg-[#E4D8FF] text-black py-5 rounded-[24px] text-lg font-bold border-[1.5px] border-black shadow-[0_4px_0_rgb(0,0,0)]"
                >
                  Download for Windows
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;