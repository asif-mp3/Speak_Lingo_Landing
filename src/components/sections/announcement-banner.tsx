"use client";

import React from 'react';
import Image from 'next/image';

/**
 * AnnouncementBanner component
 * 
 * Clones the top-of-page announcement bar with the dark green background (#004c3f)
 * and the scrolling text "Wispr raises $81M to build the Voice OS" 
 * including the "Read Article" link with an arrow icon.
 */
const AnnouncementBanner = () => {
  const bannerText = "Wispr raises $81M to build the Voice OS.";
  const articleLink = "https://wisprflow.ai/new-funding";
  const arrowIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/6832f4c0f564096436858bdb_arrow-ne-52.svg";

  return (
    <div className="banner v2 relative overflow-hidden flex items-center justify-between" 
         style={{ 
           backgroundColor: '#004c3f', 
           height: '40px',
           paddingLeft: '20px',
           paddingRight: '20px',
           zIndex: 1001
         }}>
      
      {/* Hidden for tablet/mobile but visible in desktop layout if needed by specific viewports */}
      <div className="text-wrap-balance hide-tablet hidden md:block text-white font-sans text-[14px] leading-[1] whitespace-nowrap overflow-hidden">
        {bannerText}
      </div>

      {/* Main scrolling/centered content link */}
      <a 
        href={articleLink} 
        className="banner_all-wrap w-inline-block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full max-w-[calc(100%-200px)]"
        style={{ textDecoration: 'none' }}
      >
        <div className="banner_mega-wrapper flex items-center overflow-hidden">
          <div className="banner_text text-white font-sans text-[14px] font-medium leading-[1] whitespace-nowrap">
            {bannerText}
          </div>
        </div>
        
        {/* These wrappers match the original HTML structure for marquee-like behavior or redundancy */}
        <div className="banner_mega-wrapper hide hidden">
          <div className="banner_text">{bannerText}</div>
        </div>
      </a>

      {/* Right-aligned action link */}
      <a 
        href={articleLink} 
        className="banner_text-link w-inline-block flex items-center gap-[6px] shrink-0"
        style={{ textDecoration: 'none' }}
      >
        <div className="text-white font-sans text-[14px] font-semibold leading-[1]">
          Read Article
        </div>
        <div className="banner_link-arrow flex items-center justify-center w-[12px] h-[12px]">
          <img 
            src={arrowIcon} 
            alt="Link arrow" 
            className="w-full h-full object-contain invert brightness-0"
            style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)' }}
          />
        </div>
      </a>

      <style jsx>{`
        .banner {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        @media (max-width: 767px) {
          .banner {
            justify-content: center;
            padding: 0 10px;
          }
          .banner_all-wrap {
            position: relative;
            transform: none;
            left: auto;
            top: auto;
            width: auto;
            max-width: none;
          }
          .banner_text-link {
            display: none;
          }
          .banner_text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;