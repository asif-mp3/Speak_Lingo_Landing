"use client";

import React, { useState } from "react";

const personas = [
  {
    id: "accessibility",
    label: "Accessibility",
    title: "Flow for Accessibility",
    description:
      "Your voice deserves a shortcut. Flow supports anyone who feels slowed down by a keyboard by turning speech into structured, polished text—quietly, reliably, naturally.",
    illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/20a26365-26c5-4232-b0ed-08ff9b332ab6-wisprflow-ai/assets/svgs/683b9b328bdb48594a3514e5_Flow_20New-57.svg",
  },
  {
    id: "creators",
    label: "Creators",
    title: "Flow for Creators",
    description:
      "Ideas hit fast, but execution is slow. Breeze through unread DMs, comment replies, and draft content with your voice. Create more, type less.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/686f99457ec3bf09c623568a_ni-pen-field.svg",
  },
  {
    id: "support",
    label: "Customer Support",
    title: "Flow for Customer Support",
    description:
      "Speak naturally to resolve tickets faster. Skip the script. Flow helps reps speak naturally while still sending perfect replies—across tickets, chats, and DMs.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68e68fbef65fbd90a7324195_chat-v5.svg",
  },
  {
    id: "developers",
    label: "Developers",
    title: "Flow for Developers",
    description:
      "Dictate in natural language and let Flow translate—perfect for Cursor, VS Code, or wherever you build. From commit messages to refactors, stay in the zone with Flow.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713161422abeaaa67d75d8_ni-laptop-code.svg",
  },
  {
    id: "lawyers",
    label: "Lawyers",
    title: "Flow for Lawyers",
    description:
      "Legal precision demands perfect transcription. Flow delivers smart dictation for contracts, case notes, and client records. HIPAA-ready on all plans.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68717522e003b4bc0da2c155_briefcase-doc.svg",
  },
  {
    id: "leaders",
    label: "Leaders",
    title: "Flow for Leaders",
    description:
      "Who doesn't want faster teams and happier people? Flow delivers instant productivity your team will actually use. SOC2 Type II compliant for moving fast without breaking.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6871316099ef4cdaa2d5a491_ni-users.svg",
  },
  {
    id: "sales",
    label: "Sales",
    title: "Flow for Sales",
    description:
      "Slow follow ups mean lost deals. With Flow, you can follow up instantly after meetings, personalize outreach, and punch up your pitch—without typing a word.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/691af3525da3571faf5e3c14_sales-icon.svg",
  },
  {
    id: "students",
    label: "Students",
    title: "Flow for Students",
    description:
      "Blank pages and looming deadlines? Flow's got you. Capture class notes, draft cover letters, and break through writer's block with minimal effort.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/6871316091dba51361abccce_ni-pen-line.svg",
  },
  {
    id: "teams",
    label: "Teams",
    title: "Flow for Teams",
    description:
      "Fewer meetings, faster alignment, and a voice for everyone when it matters most. Teams also get centralized admin controls and special pricing.",
    illustration: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/68713161e23892103720a247_ni-email.svg",
  },
];

export default function UserPersonaSelector() {
  const [activePersona, setActivePersona] = useState(personas[0]);

  return (
    <section className="py-20 md:py-40 bg-brand-cream flex justify-center items-center">
      <div className="container px-5 md:px-20 max-w-[1280px] w-full">
        <div className="bg-brand-dark rounded-[48px] p-8 md:p-24 text-white overflow-hidden flex flex-col lg:flex-row gap-16 lg:gap-32 items-center min-h-[700px]">
          {/* Left Column: Title and Navigation */}
          <div className="flex-1 w-full max-w-[480px]">
            <h2 className="text-white text-[48px] md:text-[56px] leading-[1.1] font-serif mb-12">
              Flow is made <br />
              <span className="text-[#E4D8FF]">for you</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-12">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(persona)}
                  className={`px-5 py-2.5 rounded-full border text-[14px] font-sans font-medium transition-all duration-300 ${
                    activePersona.id === persona.id
                      ? "bg-[#E4D8FF] text-[#121212] border-[#E4D8FF]"
                      : "bg-transparent text-white border-white/20 hover:border-white/50"
                  }`}
                >
                  {persona.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Content Card */}
          <div className="flex-1 w-full flex flex-col items-start lg:h-full lg:justify-center">
            {/* Illustration */}
            <div className="mb-10 min-h-[160px] flex items-end">
              <img
                src={activePersona.illustration}
                alt={activePersona.label}
                className="w-auto h-32 md:h-40 object-contain animate-in fade-in slide-in-from-bottom-4 duration-500"
              />
            </div>

            {/* Content Area */}
            <div key={activePersona.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-[32px] font-serif mb-4">
                {activePersona.title.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="text-[#E4D8FF]">
                  {activePersona.title.split(" ").slice(2).join(" ")}
                </span>
              </h3>
              <p className="text-[18px] text-white/70 leading-[1.6] font-sans mb-10 max-w-[440px]">
                {activePersona.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="/learn-more"
                  className="px-8 py-3 rounded-[12px] border border-white font-sans font-semibold text-[16px] hover:bg-white/10 transition-colors"
                >
                  Learn more
                </a>
                <a
                  href="https://wisprflow.onelink.me/PguH/lw5h199m"
                  className="px-8 py-3 rounded-[12px] bg-[#E4D8FF] text-brand-dark font-sans font-semibold text-[16px] hover:brightness-105 transition-all"
                >
                  Download for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-serif {
          font-family: "Newsreader", serif;
        }
        .font-sans {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </section>
  );
}