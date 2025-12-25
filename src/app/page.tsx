import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import KeyBenefits from "@/components/sections/key-benefits";
import PainPoints from "@/components/sections/pain-points";
import SypingChat from "@/components/sections/syping-chat";
import FiveModes from "@/components/sections/five-modes";
import PrivacyTrust from "@/components/sections/privacy-trust";
import Audience from "@/components/sections/audience";
import Testimonials from "@/components/sections/testimonials";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFFAE7]">
      <Navigation />
      <main>
        <Hero />
        <SpeakLingoShowcase />
        <KeyBenefits />
        <PainPoints />
        <SypingChat />
        <FiveModes />
        <PrivacyTrust />
        <Audience />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
