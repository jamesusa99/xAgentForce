import { HeroSection } from "@/components/HeroSection";
import { AgentMarketplace } from "@/components/AgentMarketplace";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustSection } from "@/components/TrustSection";
import { AgentFeedback } from "@/components/AgentFeedback";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AgentMarketplace />
      <HowItWorks />
      <TrustSection />
      <AgentFeedback />
      <PricingSection />
      <CTASection />
    </>
  );
}
