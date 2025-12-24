"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X, Windows } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
            { title: 'Privacy & Security', desc: 'Your data, your control', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68a4e3e7e8b8d9988e10d0a2_lock%20(1).svg', href: '/privacy' },
            { title: 'Help Center', desc: 'Learn the ins and outs of Flow', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713160a3f2ece629f48a35_Icon.svg', href: 'https://docs.wisprflow.ai/' },
            { title: 'Talk to support', desc: 'Reach out to our support team', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713161e23892103720a247_ni-email.svg', href: '/support' },
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
            { title: 'Creators', desc: 'Capture content ideas anytime, anywhere', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/686f99457ec3bf09c623568a_ni-pen-field.svg', href: '/content-creators' },
            { title: 'Customer support', desc: 'Resolve tickets 4x faster', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68e68fbef65fbd90a7324195_chat-v5.svg', href: '/customer-support', badge: 'NEW' },
          ]
        },
        {
          heading: 'CASE STUDIES FOR',
          links: [
            { title: 'Gaurav the Advisor', desc: 'Fast, fluent replies for busy advisors', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713160387b6fc35e8603b0_ni-user-award.svg', href: '/case-study/gaurav-vohra' },
            { title: 'Teams at Clay', desc: '20% faster GTM execution', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/images/6942f86ec78b14492a2b3d0e_clay-png-1.png', href: '/case-study/clay', badge: 'NEW' },
          ]
        }
      ]
    },
    about: {
      label: 'About',
      sections: [
        {
          heading: 'LEARN ABOUT WISPR',
          links: [
            { title: 'Blog', desc: 'Insights, stories, and updates from the Flow team', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713160c48747e4b8f02812_ni-rss.svg', href: '/blog' },
            { title: 'Company', desc: 'Learn more about our mission and team', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713161018771f3d5b490ee_ni-info-circle.svg', href: '/about' },
            { title: 'Careers', desc: 'Join the team shaping the future of voice', icon: 'https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6871316135792cb0fbcd51d9_ni-briefcase.svg', href: '/careers' },
          ]
        }
      ]
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="fixed top-0 left-0 right-0 z-[110] bg-[#004D40] text-[#FBFAF0] h-10 flex items-center justify-center text-sm font-medium px-4 overflow-hidden">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span>Wispr raises $81M to build the Voice OS.</span>
          <a href="/new-funding" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span className="font-bold underline">Read Article</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
          </a>
        </div>
      </div>

      <div className="fixed top-14 left-0 right-0 z-[100] px-4 md:px-6 pointer-events-none">
        <header className="container mx-auto max-w-[1200px] pointer-events-auto">
          <div className="bg-[#FBFAF0] border border-black/10 rounded-2xl md:rounded-[24px] shadow-sm flex items-center justify-between px-4 md:px-8 h-16 md:h-20 transition-all duration-300">
            
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/683215c6f233131a07d8bafc_navbar_logo-1.svg" 
                alt="Flow Logo" 
                className="h-8 md:h-9"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {Object.entries(dropdownData).map(([key, data]) => (
                <div 
                  key={key} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-bold text-black/80 hover:text-black transition-colors rounded-full">
                    {data.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-white rounded-[32px] p-6 shadow-xl border border-black/5 min-w-[320px] max-w-[640px] flex gap-8">
                          {data.sections.map((section, idx) => (
                            <div key={idx} className="min-w-[240px]">
                              <div className="text-[11px] font-bold tracking-widest text-black/40 mb-4 px-3">{section.heading}</div>
                              <div className="space-y-1">
                                {section.links.map((link: any, lIdx) => (
                                  <a 
                                    key={lIdx} 
                                    href={link.href}
                                    className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#FBFAF0] transition-colors"
                                  >
                                    <img src={link.icon} alt="" className="w-5 h-5 mt-0.5 opacity-70 group-hover:opacity-100" />
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[15px] font-bold text-black">{link.title}</span>
                                        {link.badge && (
                                          <span className="text-[9px] font-bold bg-[#E4D8FF] text-[#121212] px-1.5 py-0.5 rounded-sm">
                                            {link.badge}
                                          </span>
                                        )}
                                      </div>
                                      <div className="text-[13px] text-black/60 leading-tight mt-0.5">{link.desc}</div>
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
              <a href="/business" className="px-4 py-2 text-[15px] font-bold text-black/80 hover:text-black transition-colors">Business</a>
              <a href="/pricing" className="px-4 py-2 text-[15px] font-bold text-black/80 hover:text-black transition-colors">Pricing</a>
            </nav>

            {/* Right Action */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="/research" 
                className="text-[15px] font-bold text-black/80 hover:text-black px-6 py-2.5 border border-black rounded-xl"
              >
                Research
              </a>
              <a 
                href="https://wisprflow.onelink.me/PguH/lw5h199m" 
                className="bg-[#E4D8FF] hover:bg-[#D4C4FF] text-[#121212] px-6 py-3 rounded-[18px] text-[15px] font-bold border border-black shadow-sm flex items-center gap-2 transition-transform active:scale-95"
              >
                <div className="w-4 h-4">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1V11.1H0V3.449zm0 17.102L9.75 21.9V12.9H0v7.651zM11.25 1.899L24 .001V11.1H11.25V1.899zm0 20.202V12.9H24v9.199l-12.75-1.999z"/></svg>
                </div>
                Download for Windows
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 bg-[#FBFAF0] z-[90] pt-40 px-6 overflow-y-auto"
          >
            <div className="container mx-auto flex flex-col gap-8 pb-20">
              <div className="space-y-4">
                <div className="text-[11px] font-bold tracking-widest text-black/40">PRODUCT</div>
                <div className="flex flex-col gap-2">
                  {dropdownData.product.sections[0].links.map((link: any, idx) => (
                    <a key={idx} href={link.href} className="text-2xl font-serif py-2 flex items-center gap-4">
                      <img src={link.icon} alt="" className="w-6 h-6" />
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-black/10 w-full"></div>

              <div className="space-y-4">
                <div className="text-[11px] font-bold tracking-widest text-black/40">INDIVIDUALS</div>
                <div className="flex flex-col gap-2">
                  {dropdownData.individuals.sections[0].links.map((link: any, idx) => (
                    <a key={idx} href={link.href} className="text-2xl font-serif py-2 flex items-center gap-4">
                      <img src={link.icon} alt="" className="w-6 h-6" />
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-black/10 w-full"></div>

              <div className="flex flex-col gap-6">
                <a href="/business" className="text-2xl font-serif">Business</a>
                <a href="/pricing" className="text-2xl font-serif">Pricing</a>
                <a href="/about" className="text-2xl font-serif">About</a>
              </div>

              <div className="pt-8">
                <a 
                  href="https://wisprflow.onelink.me/PguH/lw5h199m" 
                  className="block w-full text-center bg-[#E4D8FF] text-[#121212] py-4 rounded-2xl text-lg font-bold border border-black"
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