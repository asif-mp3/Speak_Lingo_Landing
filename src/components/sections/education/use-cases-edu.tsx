"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Mail,
  Search,
  Presentation,
  Zap,
  Send,
  MoreHorizontal,
  Plus,
  BookOpen,
  GraduationCap,
  Laptop,
  PenTool,
  FileSpreadsheet
} from 'lucide-react';

const apps = [
  {
    id: 'docs',
    name: 'GOOGLE DOCS',
    icon: FileText,
    color: '#4285F4',
    title: "Essay Writing",
    fullText: "The Industrial Revolution fundamentally transformed society by introducing mechanized manufacturing, which led to urbanization and significant changes in social structure. Grammar AI suggests: 'manufacturing processes' for clarity."
  },
  {
    id: 'email',
    name: 'EMAIL',
    icon: Mail,
    color: '#EA4335',
    title: "Professional Communication",
    fullText: "Dear Professor Johnson, I am writing to request an extension for the research paper due on Friday. I have been experiencing technical difficulties with my data analysis. Grammar: Perfect."
  },
  {
    id: 'research',
    name: 'RESEARCH',
    icon: Search,
    color: '#34A853',
    title: "Academic Research",
    fullText: "What are the primary factors contributing to climate change and their impact on global ecosystems?"
  },
  {
    id: 'presentation',
    name: 'SLIDES',
    icon: Presentation,
    color: '#F9BC05',
    title: "Presentation Practice",
    fullText: "Good morning everyone. Today I'll be presenting my research on renewable energy solutions. Let me start by outlining the three main areas we'll cover..."
  }
];

const AppMockup = ({ app, text }: { app: typeof apps[0]; text: string }) => {
  switch (app.id) {
    case 'docs':
      return (
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-200 shadow-inner">
          <div className="h-10 bg-[#f8f9fa] border-b border-slate-100 flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-[#4285F4]" />
              <span className="text-[10px] font-bold text-slate-600">Research Essay.docx</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[9px] text-slate-400">Auto-saving</span>
            </div>
          </div>
          <div className="flex-1 p-6 font-sans">
            <div className="text-xs text-slate-800 leading-relaxed">
              {text}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-3 bg-[#4285F4] ml-0.5" />
            </div>
          </div>
          <div className="p-2 bg-green-50 border-t border-green-100 flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px]">✓</span>
            </div>
            <span className="text-[10px] font-bold text-green-700">Grammar: Excellent | Vocabulary: Advanced</span>
          </div>
        </div>
      );

    case 'email':
      return (
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-200 shadow-inner">
          <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
            <div className="flex gap-4 items-center">
              <MoreHorizontal size={14} className="text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Message</span>
            </div>
            <div className="w-12 h-5 bg-[#EA4335] rounded-full flex items-center justify-center text-[9px] font-bold text-white uppercase">Send</div>
          </div>
          <div className="flex-1 p-6 space-y-4 font-sans">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-[10px] font-bold text-slate-400">To:</span>
              <span className="text-xs ml-2 text-slate-600">professor.johnson@university.edu</span>
            </div>
            <div className="border-b border-slate-100 pb-2">
              <span className="text-[10px] font-bold text-slate-400">Subject:</span>
              <span className="text-xs ml-2 text-slate-600">Extension Request - Research Paper</span>
            </div>
            <div className="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
              {text}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-3 bg-[#EA4335] ml-0.5" />
            </div>
          </div>
        </div>
      );

    case 'research':
      return (
        <div className="w-full h-full bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center gap-6">
          <div className="text-2xl font-black tracking-tighter flex gap-1">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#F9BC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
            <span className="text-slate-400 ml-2">Scholar</span>
          </div>
          <div className="w-full bg-white rounded-full h-12 border border-slate-200 shadow-sm flex items-center px-5 gap-3">
            <Search size={18} className="text-slate-400" />
            <p className="text-sm text-slate-700 truncate flex-1">
              {text}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-4 bg-[#4285F4] ml-0.5" />
            </p>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500">Peer-reviewed</div>
            <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500">2020-2024</div>
          </div>
        </div>
      );

    case 'presentation':
      return (
        <div className="w-full h-full bg-[#0f172a] rounded-2xl overflow-hidden flex flex-col">
          <div className="h-10 bg-[#1e293b] border-b border-white/5 flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <Presentation size={14} className="text-[#F9BC05]" />
              <span className="text-[10px] font-bold text-white/60">Presentation Mode</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] text-white/40">Recording</span>
            </div>
          </div>
          <div className="flex-1 p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-[#F9BC05]/20 rounded-full flex items-center justify-center mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-10 h-10 bg-[#F9BC05] rounded-full flex items-center justify-center"
              >
                <GraduationCap size={20} className="text-[#0f172a]" />
              </motion.div>
            </div>
            <p className="text-sm text-white/80 text-center leading-relaxed max-w-[200px]">
              {text}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-3 bg-[#F9BC05] ml-0.5" />
            </p>
          </div>
          <div className="p-3 bg-[#1e293b] flex justify-center gap-4">
            <div className="text-[10px] text-white/40">Pace: <span className="text-green-400 font-bold">Good</span></div>
            <div className="text-[10px] text-white/40">Clarity: <span className="text-green-400 font-bold">98%</span></div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default function UseCasesEdu() {
  const [activeApp, setActiveApp] = useState(apps[0]);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(activeApp.fullText.slice(0, i));
      i++;
      if (i > activeApp.fullText.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [activeApp]);

  return (
    <section className="py-24 bg-white overflow-hidden w-full min-h-screen">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9A825]/10 rounded-full border border-[#F9A825]/20 mb-6">
            <Laptop size={14} className="text-[#F9A825]" />
            <span className="text-xs font-black uppercase tracking-wider text-[#6B5439]">Works Everywhere</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
            Your Apps. <br />
            <span className="text-[#F9A825]">Your Academic Life.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-[700px] mx-auto">
            SpeakLingo integrates seamlessly with the tools you already use for studying and learning.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 flex-wrap">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                setActiveApp(app);
                setDisplayText("");
              }}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className={`
                relative w-16 h-16 md:w-20 md:h-20 rounded-[24px] flex items-center justify-center transition-all duration-300
                ${activeApp.id === app.id ?
                  'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-2 ring-[#FFD54F] scale-110' :
                  'bg-white/40 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105'}
              `}>
                <app.icon
                  size={32}
                  className={activeApp.id === app.id ? 'text-[#0f172a]' : 'text-slate-400'}
                  strokeWidth={1.5}
                />
              </div>
              <span className={`
                text-[10px] md:text-xs font-black tracking-[0.2em] transition-colors
                ${activeApp.id === app.id ? 'text-[#0f172a]' : 'text-slate-400'}
              `}>
                {app.name}
              </span>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div
          key={activeApp.id}
          className="grid lg:grid-cols-12 gap-12 bg-white rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden p-8 md:p-12 items-center"
        >
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-3xl md:text-5xl font-black text-[#0f172a] leading-tight">
              {activeApp.title}
            </h3>

            <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
              Speak naturally while SpeakLingo handles grammar, punctuation, and style. Perfect for academic work.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-[#0f172a]">Grammar AI Active</span>
                </div>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Mode</span>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[#F9A825]" />
                  <span className="text-sm font-bold text-[#0f172a]">Academic Writing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative group">
            <div className="aspect-[4/3] bg-slate-50 rounded-[32px] p-4 flex items-center justify-center border border-slate-100 overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              <AppMockup app={activeApp} text={displayText} />
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FFD54F]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0f172a]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Also Works With</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale contrast-150">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-xl font-black">Notion</span>
            </div>
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5" />
              <span className="text-xl font-black">Excel</span>
            </div>
            <div className="flex items-center gap-2">
              <PenTool className="w-5 h-5" />
              <span className="text-xl font-black">Word</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-5 h-5" />
              <span className="text-xl font-black">Canvas</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-xl font-black">Blackboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
