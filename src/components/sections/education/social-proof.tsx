"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "My essay grades went from B's to A's in just one semester.",
    author: "Priya M.",
    role: "University Student",
    avatar: "P"
  },
  {
    quote: "I finally feel confident speaking up in class discussions.",
    author: "Marcus T.",
    role: "ESL Student",
    avatar: "M"
  },
  {
    quote: "The interview prep feature helped me land my dream internship.",
    author: "Sofia R.",
    role: "College Senior",
    avatar: "S"
  },
];

// Animated counter component
const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function SocialProof() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1e293b] via-slate-100 to-[#FFFAE7] relative overflow-hidden">
      {/* Top transition from dark section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent" />
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F9A825]/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mb-24"
        >
          {[
            { value: 50000, suffix: "+", label: "Students Learning" },
            { value: 4.9, suffix: "", label: "App Rating", isDecimal: true },
            { value: 2, suffix: "M+", label: "Corrections Made" },
            { value: 98, suffix: "%", label: "Success Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
                {stat.isDecimal ? (
                  <span>{stat.value}</span>
                ) : (
                  <AnimatedCounter end={stat.value as number} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm font-bold text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#F9A825] rounded-2xl flex items-center justify-center rotate-12">
                <Quote size={18} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star size={16} className="text-[#F9A825] fill-[#F9A825]" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg font-bold text-[#0f172a] mb-6 leading-relaxed">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F9A825] to-[#FFD54F] flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f172a]">{t.author}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
