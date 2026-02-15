import { Hero } from '@/components/Hero'
import { AgentMarketplace } from '@/components/AgentMarketplace'
import { HowItWorks } from '@/components/HowItWorks'
import { TrustSection } from '@/components/TrustSection'
import { FeedbackSection } from '@/components/FeedbackSection'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'

export default function HomePage() {
  return (
    <main className="pt-16">
      <Hero />
      <AgentMarketplace />
      <HowItWorks />
      <TrustSection />
      <FeedbackSection />
      <CTA />
      <Footer />
    </main>
  )
}
