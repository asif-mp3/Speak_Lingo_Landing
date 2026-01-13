"use client";

import { motion } from 'framer-motion';
import { Quote, Star, Building2, GraduationCap } from 'lucide-react';
import AnimatedBlob from './shared/animated-blob';

const studentTestimonials = [
  {
    quote: "I stopped being afraid to talk in class. Now I just speak and Syping handles the rest.",
    name: "Aditi",
    age: 18,
    location: "Mumbai",
    avatar: "A",
    color: "#3b82f6",
  },
  {
    quote: "I used to spend 3 hours on essays. Now it's 45 minutes. My grades went up too.",
    name: "Rahul",
    age: 21,
    location: "Delhi",
    avatar: "R",
    color: "#22c55e",
  },
  {
    quote: "My grammar improved without studying. I just kept speaking and it kept teaching me.",
    name: "Zara",
    age: 17,
    location: "Bangalore",
    avatar: "Z",
    color: "#F9A825",
  },
];

const institutionTestimonials = [
  {
    quote: "We deployed Syping across 500 students. Average grammar scores improved 23% in one semester.",
    name: "Dr. Sharma",
    role: "Principal",
    institution: "Delhi Public School",
    avatar: "DS",
    color: "#0f172a",
  },
  {
    quote: "Our ESL program saw 40% faster English acquisition after adopting Syping. The students love it.",
    name: "Prof. Chen",
    role: "Language Dept. Head",
    institution: "IIT Mumbai",
    avatar: "IM",
    color: "#6B5439",
  },
];

// Student testimonial card
const StudentCard = ({ testimonial, index }: { testimonial: typeof studentTestimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
    whileHover={{ y: -8 }}
    className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 relative"
  >
    {/* Quote icon */}
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
      className="absolute -top-4 -left-2 w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: testimonial.color }}
    >
      <Quote size={18} className="text-white" />
    </motion.div>

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3 + i * 0.05, type: "spring" }}
        >
          <Star size={16} className="text-[#F9A825] fill-[#F9A825]" />
        </motion.div>
      ))}
    </div>

    {/* Quote */}
    <p className="text-lg font-bold text-[#0f172a] leading-relaxed mb-6">
      &ldquo;{testimonial.quote}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg"
        style={{ backgroundColor: testimonial.color }}
      >
        {testimonial.avatar}
      </motion.div>
      <div>
        <p className="font-bold text-[#0f172a]">{testimonial.name}, {testimonial.age}</p>
        <p className="text-sm text-slate-400">{testimonial.location}</p>
      </div>
    </div>
  </motion.div>
);

// Institution testimonial card (larger)
const InstitutionCard = ({ testimonial, index }: { testimonial: typeof institutionTestimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 100 }}
    whileHover={{ y: -6 }}
    className="bg-[#0f172a] rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] p-8 relative overflow-hidden"
  >
    {/* Glow effect */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F9A825]/10 rounded-full blur-[60px]" />

    {/* Badge */}
    <div className="flex items-center gap-2 mb-6">
      <div className="w-10 h-10 bg-[#F9A825] rounded-xl flex items-center justify-center">
        <Building2 size={20} className="text-[#0f172a]" />
      </div>
      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Institution</span>
    </div>

    {/* Quote */}
    <p className="text-lg font-bold text-white leading-relaxed mb-6">
      &ldquo;{testimonial.quote}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-sm border border-white/10"
        style={{ backgroundColor: testimonial.color }}
      >
        {testimonial.avatar}
      </div>
      <div>
        <p className="font-bold text-white">{testimonial.name}</p>
        <p className="text-sm text-[#F9A825]">{testimonial.role}</p>
        <p className="text-xs text-white/50">{testimonial.institution}</p>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FFFAE7] relative overflow-hidden">
      {/* Background blobs */}
      <AnimatedBlob color="#F9A825" size={350} position={{ top: '5%', right: '10%' }} delay={0} />
      <AnimatedBlob color="#22c55e" size={250} position={{ bottom: '15%', left: '5%' }} delay={3} />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-bold text-[#0f172a] shadow-[0_10px_30px_rgba(0,0,0,0.06)] mb-6"
          >
            Trusted by All
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] leading-tight mb-4">
            Trusted by Students{" "}
            <span className="text-[#F9A825]">and Educators</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-[500px] mx-auto">
            From individual students to entire institutions — Syping transforms how people learn English.
          </p>
        </motion.div>

        {/* Student Stories Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <GraduationCap size={20} className="text-[#F9A825]" />
            </div>
            <h3 className="text-xl font-black text-[#0f172a]">Student Stories</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {studentTestimonials.map((testimonial, i) => (
              <StudentCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>

        {/* Institution Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Building2 size={20} className="text-[#0f172a]" />
            </div>
            <h3 className="text-xl font-black text-[#0f172a]">Institution Results</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {institutionTestimonials.map((testimonial, i) => (
              <InstitutionCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
            <p className="text-lg text-slate-500">
              Join <span className="font-black text-[#F9A825]">500+ schools</span> already using Syping
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
