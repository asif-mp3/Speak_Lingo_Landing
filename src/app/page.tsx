import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import SpeakLingoShowcase from "@/components/sections/app-integration-showcase";
import TrustedByLogos from "@/components/sections/trusted-by-logos";
import SpeedComparison from "@/components/sections/speed-comparison";
import AIEditingFeatures from "@/components/sections/ai-editing-features";
import CTAFinal from "@/components/sections/cta-final";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFFAE7]">
      <Navigation />
      <main>
        <Hero />
        <SpeakLingoShowcase />
        <TrustedByLogos />
        <SpeedComparison />
        <AIEditingFeatures />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
