import { AgentMarketplace } from '@/components/AgentMarketplace'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Agent 市场 | xAgentForce',
  description: '浏览我们的数字人才库，挑选符合业务场景的垂直领域 Agent。',
}

export default function AgentsPage() {
  return (
    <main className="pt-16">
      <AgentMarketplace />
      <Footer />
    </main>
  )
}
