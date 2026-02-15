import Link from 'next/link'
import { Cpu, Plus, Activity } from 'lucide-react'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: '控制台 | xAgentForce',
  description: '管理你的在职 Agent，查看工作日志和产出结果。',
}

export default function DashboardPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="font-display font-bold text-4xl mb-2">控制台</h1>
        <p className="text-white/60 mb-12">
          管理所有「在职」Agent，查看工作日志和产出结果。
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link
            href="/agents"
            className="glass rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-white/20 hover:border-force-gold/40 transition-colors group"
          >
            <Plus className="w-12 h-12 text-white/40 group-hover:text-force-gold mb-4" />
            <span className="font-display font-semibold">雇佣新 Agent</span>
            <span className="text-sm text-white/50 mt-1">前往 Agent 市场</span>
          </Link>

          <div className="glass rounded-2xl p-8 opacity-60">
            <Cpu className="w-12 h-12 text-force-gold/50 mb-4" />
            <p className="font-display font-semibold mb-2">暂无在职 Agent</p>
            <p className="text-sm text-white/50">
              雇佣你的第一个数字员工，即可在此管理。
            </p>
          </div>

          <div className="glass rounded-2xl p-8 opacity-60">
            <Activity className="w-12 h-12 text-force-gold/50 mb-4" />
            <p className="font-display font-semibold mb-2">工作日志</p>
            <p className="text-sm text-white/50">Agent 上线后，此处显示工作记录。</p>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-white/60 mb-4">登录后可查看完整控制台</p>
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors"
          >
            立即雇佣 Agent
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
