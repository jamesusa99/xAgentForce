import Link from 'next/link'
import { Cpu, Layers, Zap, ArrowRight } from 'lucide-react'
import { Footer } from '@/components/Footer'

const features = [
  {
    icon: Layers,
    title: 'AgentForceHub.ai 架构',
    desc: '基于底层技术架构，支持企业级定制与私有化部署。',
  },
  {
    icon: Cpu,
    title: '多 Agent 协作',
    desc: 'Agent 之间可协同工作，形成完整的数字团队工作流。',
  },
  {
    icon: Zap,
    title: '即插即用',
    desc: '无需复杂配置，API / Webhook / Slack 一键接入。',
  },
]

export const metadata = {
  title: 'Agent Hub 实验室 | xAgentForce',
  description: '展示底层技术架构，吸引高端企业级客户。',
}

export default function HubPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Agent Hub 实验室
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            展示像 AgentForceHub.ai 这样的底层技术架构，为高端企业级客户提供深度集成能力。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-8 hover:border-force-gold/30 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-force-gold mb-4" />
              <h2 className="font-display font-semibold text-xl mb-2">
                {feature.title}
              </h2>
              <p className="text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-12 lg:p-16 text-center">
          <h2 className="font-display font-bold text-2xl mb-4">
            企业级技术方案
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            需要私有化部署、定制化 Agent 训练或深度集成？我们的技术团队可为您提供专属方案。
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors"
          >
            联系销售
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
