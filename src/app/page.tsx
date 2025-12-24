import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import AppIntegrationShowcase from "@/components/sections/app-integration-showcase";
import TrustedByLogos from "@/components/sections/trusted-by-logos";
import SpeedComparison from "@/components/sections/speed-comparison";
import UserPersonaSelector from "@/components/sections/user-persona-selector";
import AIEditingFeatures from "@/components/sections/ai-editing-features";
import DeviceSync from "@/components/sections/device-sync";
import Testimonials from "@/components/sections/testimonials";
import CTAFinal from "@/components/sections/cta-final";
import AIComparisonCard from "@/components/sections/ai-comparison-card";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FBFAF0]">
      <Navigation />
      <main>
        <Hero />
        <AppIntegrationShowcase />
        <TrustedByLogos />
        <SpeedComparison />
        <UserPersonaSelector />
        <AIEditingFeatures />
        <DeviceSync />
        <Testimonials />
        <CTAFinal />
        <AIComparisonCard />
      </main>
      <Footer />
    </div>
  );
}
