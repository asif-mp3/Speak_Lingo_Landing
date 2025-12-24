import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

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
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${scrolled ? 'glass-nav border-b border-border' : 'bg-transparent'}`}>
      {/* Banner */}
      {!scrolled && (
        <div className="bg-[#004D40] text-white py-[10px] text-center text-sm font-medium px-4">
          <div className="container mx-auto flex justify-center items-center gap-2">
            <span>Wispr raises $81M to build the Voice OS.</span>
            <a href="/new-funding" className="underline inline-flex items-center group">
              Read Article 
              <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      )}

      <header className="h-[80px] flex items-center">
        <div className="container mx-auto px-5 lg:px-20 flex justify-between items-center relative">
          
          {/* Logo */}
          <a href="/" className="flex-shrink-0 relative z-10">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/683215c6f233131a07d8bafc_navbar_logo-1.svg" 
              alt="Flow Logo" 
              className="h-8 lg:h-9"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {Object.entries(dropdownData).map(([key, data]) => (
              <div 
                key={key} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-black hover:bg-black/5 rounded-full transition-colors">
                  {data.label}
                  <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/6832181fdb427a83a4270c9a_dropdown_arrow-2.svg" alt="" className={`w-2.5 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-border min-w-[320px] max-w-[640px] flex overflow-hidden">
                    <div className="flex gap-8">
                      {data.sections.map((section, idx) => (
                        <div key={idx} className="min-w-[240px]">
                          <div className="text-[11px] font-bold tracking-wider text-muted-foreground mb-4">{section.heading}</div>
                          <div className="space-y-1">
                            {section.links.map((link, lIdx) => (
                              <a 
                                key={lIdx} 
                                href={link.href}
                                className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F1F0E5] transition-colors"
                              >
                                <img src={link.icon} alt="" className="w-5 h-5 mt-0.5 opacity-70 group-hover:opacity-100" />
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[15px] font-semibold text-black">{link.title}</span>
                                    {link.badge && (
                                      <span className="text-[9px] font-bold bg-[#E4D8FF] text-[#121212] px-1.5 py-0.5 rounded-sm">
                                        {link.badge}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[13px] text-muted-foreground leading-tight mt-0.5">{link.desc}</div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <a href="/business" className="px-4 py-2 text-[15px] font-medium text-black hover:bg-black/5 rounded-full transition-colors">Business</a>
            <a href="/pricing" className="px-4 py-2 text-[15px] font-medium text-black hover:bg-black/5 rounded-full transition-colors">Pricing</a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:block relative z-10">
            <a 
              href="https://wisprflow.onelink.me/PguH/lw5h199m" 
              className="bg-[#E4D8FF] hover:bg-[#d8c8ff] text-[#121212] px-6 py-3 rounded-full text-base font-semibold border border-black shadow-sm transition-transform active:scale-95"
            >
              Download for free
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-black relative z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Interface */}
      <div className={`lg:hidden fixed inset-0 bg-[#FBFAF0] z-50 transition-transform duration-500 overflow-y-auto ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <div className="text-2xl font-serif">Product</div>
              <div className="grid grid-cols-1 gap-2 pl-4">
                {dropdownData.product.sections[0].links.map((link, idx) => (
                  <a key={idx} href={link.href} className="text-lg font-medium text-muted-foreground py-2 flex items-center gap-3">
                    <img src={link.icon} alt="" className="w-5 h-5" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-border w-full"></div>

            <div className="space-y-4">
              <div className="text-2xl font-serif">Individuals</div>
              <div className="grid grid-cols-1 gap-2 pl-4">
                {dropdownData.individuals.sections[0].links.map((link, idx) => (
                  <a key={idx} href={link.href} className="text-lg font-medium text-muted-foreground py-2 flex items-center gap-3">
                    <img src={link.icon} alt="" className="w-5 h-5" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-border w-full"></div>

            <a href="/business" className="text-2xl font-serif">Business</a>
            <a href="/pricing" className="text-2xl font-serif">Pricing</a>
            <a href="/about" className="text-2xl font-serif">About</a>

            <div className="pt-8">
              <a 
                href="https://wisprflow.onelink.me/PguH/lw5h199m" 
                className="block w-full text-center bg-[#E4D8FF] text-[#121212] py-4 rounded-full text-lg font-semibold border border-black"
              >
                Download for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;