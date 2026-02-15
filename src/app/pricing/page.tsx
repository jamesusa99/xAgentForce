import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { Footer } from '@/components/Footer'

const plans = [
  {
    name: '初级营销 Agent',
    price: 99,
    desc: '适合起步阶段，基础营销与内容支持',
    features: [
      '单一 Agent 订阅',
      'Web 控制台访问',
      '基础 API 调用',
      '邮件支持',
    ],
  },
  {
    name: '高级专家 Agent',
    price: 499,
    desc: '适合成长型企业，专业级垂直领域支持',
    features: [
      '最多 3 个 Agent',
      'API + Slack 集成',
      '优先客服支持',
      '定制化工作流',
    ],
    popular: true,
  },
  {
    name: '企业定制',
    price: null,
    desc: '适合大型企业，专属数字团队',
    features: [
      '无限 Agent 数量',
      '私有化部署选项',
      '专属客户成功经理',
      'SLA 保障',
    ],
  },
]

export const metadata = {
  title: '定价 | xAgentForce',
  description: '按岗位订阅，灵活扩展。从 $99/月 起雇佣你的数字员工。',
}

export default function PricingPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            定价
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            采取「按岗位订阅」模式，根据业务需求随时增减你的数字团队规模。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass rounded-2xl p-8 flex flex-col ${
                plan.popular ? 'border-2 border-force-gold/50' : ''
              }`}
            >
              {plan.popular && (
                <span className="self-start px-3 py-1 rounded-full text-xs font-medium bg-force-gold/20 text-force-gold mb-4">
                  推荐
                </span>
              )}
              <h2 className="font-display font-bold text-xl mb-2">{plan.name}</h2>
              <p className="text-white/60 text-sm mb-6">{plan.desc}</p>
              <div className="mb-6">
                {plan.price ? (
                  <>
                    <span className="font-display font-bold text-4xl text-force-gold">
                      ${plan.price}
                    </span>
                    <span className="text-white/60">/月</span>
                  </>
                ) : (
                  <span className="font-display font-bold text-2xl text-force-gold">
                    联系询价
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-force-gold flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.price ? '/agents' : '#'}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-force-gold text-deep-space hover:bg-force-gold/90'
                    : 'glass hover:border-force-gold/30'
                }`}
              >
                <Zap className="w-4 h-4" />
                {plan.price ? '开始雇佣' : '联系我们'}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
