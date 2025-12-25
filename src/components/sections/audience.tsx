"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Zap, ArrowRight } from 'lucide-react';

export default function Audience() {
  return (
    <section className="py-24 bg-[#FFFAE7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="bg-white rounded-[60px] p-12 md:p-20 border border-[#6B5439]/10 relative overflow-hidden shadow-2xl shadow-amber-500/5 !w-[79.9%] !h-full">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl -ml-48 -mb-48" />

          <div className="relative z-10 max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B5439]/5 rounded-full mb-8">

              <Star size={16} className="text-[#EAB308] fill-[#EAB308]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#6B5439]">The Uncommon Ones</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-8 tracking-tight leading-tight">

              For the Common Mind with <br />
              <span className="text-[#EAB308]">Uncommon Thoughts.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-[#475569] font-medium mb-16 leading-relaxed">

              SpeakLingo isn’t made for status — it’s made for substance. For those who feel ordinary on the outside, but think in ways the world hasn’t caught up to yet.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
              {[
              { icon: Zap, text: "The dreamers who can’t type fast enough for their ideas." },
              { icon: Heart, text: "The creators whose words spark movement." },
              { icon: Star, text: "The thinkers who see what others scroll past." }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="space-y-4">

                  <div className="w-10 h-10 bg-[#FFFAE7] rounded-xl flex items-center justify-center">
                    <item.icon size={20} className="text-[#6B5439]" />
                  </div>
                  <p className="text-lg font-bold text-[#0f172a] leading-snug">{item.text}</p>
                </motion.div>
              )}
            </div>

              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-8">

                <p className="text-lg font-bold text-[#475569]/60 italic">
                  You don’t need permission to think differently — just a way to let your voice keep up.
                </p>
                
                <p className="text-2xl font-black text-[#6B5439] uppercase tracking-widest">
                  Made for You. Built for What’s Next.
                </p>
              </motion.div>
            </div>

        </div>
      </div>
    </section>);

}