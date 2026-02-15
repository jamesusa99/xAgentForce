import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Star, Check } from 'lucide-react'
import { agents } from '@/data/agents'
import { Footer } from '@/components/Footer'
import { AddToWorkspaceButton } from '@/components/AddToWorkspaceButton'

export async function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id)
  if (!agent) return { title: 'Agent Not Found' }
  return {
    title: `${agent.name} - ${agent.title} | xAgentForce`,
    description: agent.skills.join(' · '),
  }
}

export default function AgentProfilePage({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id)
  if (!agent) notFound()

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-white/70 hover:text-force-gold mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回 Agent 市场
        </Link>

        <div className="glass rounded-3xl p-8 lg:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-force-gold/20 to-electric-blue/20 flex items-center justify-center text-5xl">
                {agent.avatar}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-display font-bold text-3xl mb-2">{agent.name}</h1>
              <p className="text-force-gold text-lg mb-4">{agent.title}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-force-gold/20 text-force-gold border border-force-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-force-gold text-force-gold" />
                  <span className="font-semibold">{agent.rating}</span>
                </div>
                <span className="text-white/50">({agent.reviews} 雇主评价)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg mb-4">核心技能</h2>
            <ul className="space-y-3">
              {agent.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-force-gold flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg mb-4">集成方式</h2>
            <ul className="space-y-3 text-white/80">
              <li>• Web 控制台</li>
              <li>• REST API</li>
              <li>• Slack 集成</li>
              <li>• Zapier 工作流</li>
            </ul>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 mb-8">
          <h2 className="font-display font-semibold text-lg mb-4">训练背景</h2>
          <p className="text-white/70 leading-relaxed">
            基于 BingoAI 技术架构训练，经过垂直领域数据微调，已处理超过 10,000+
            真实业务案例。支持中英双语，可定制化扩展。
          </p>
        </div>

        <div className="glass rounded-2xl p-8 border-2 border-force-gold/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display font-bold text-3xl text-force-gold mb-1">
                ${agent.price}/月
              </div>
              <p className="text-white/60">按岗位订阅 · 随时取消</p>
            </div>
            <AddToWorkspaceButton agent={agent} variant="profile" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
