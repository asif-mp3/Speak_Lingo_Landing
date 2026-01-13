import Navigation from "@/components/sections/navigation";
import HeroEdu from "@/components/sections/education/hero-edu";
import ThreePillarsSection from "@/components/sections/education/three-pillars-section";
import PainSection from "@/components/sections/education/pain-section";
import DemoSection from "@/components/sections/education/demo-section";
import TestimonialsSection from "@/components/sections/education/testimonials-section";
import FinalCtaSection from "@/components/sections/education/final-cta-section";
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpeakLingo for Students - Speak Your Thoughts, Get Perfect Text",
  description: "Voice-to-text that corrects your grammar, builds your English skills, and saves hours of typing. For students and educational institutions.",
  keywords: ["grammar correction", "speaking practice", "English learning", "ESL", "voice to text", "students", "productivity", "education"],
};

export default function EducationPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFAE7]">
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero - Split layout with voice demo */}
        <HeroEdu />

        {/* Three Pillars - Tabbed feature showcase */}
        <ThreePillarsSection />

        {/* Pain Section - Before/After comparison */}
        <PainSection />

        {/* Demo Section - Step-by-step interactive */}
        <DemoSection />

        {/* Testimonials - Students + Institutions */}
        <TestimonialsSection />

        {/* Final CTA - Dual CTAs with achievement card */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
