'use client'

import { motion } from 'framer-motion'
import { Search, Zap, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Select',
    subtitle: '筛选',
    description: '在垂直资源池中挑选符合业务场景的 Agent',
  },
  {
    icon: Zap,
    title: 'Deploy',
    subtitle: '部署',
    description: '一键集成到你的工作流（Web / API / Slack）',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    subtitle: '扩展',
    description: '根据业务需求，随时增减你的数字团队规模',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            派遣流程
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            三个步骤降低你的决策门槛，让数字员工即插即用
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 h-full flex flex-col items-center text-center group hover:border-force-gold/30 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-force-gold/20 flex items-center justify-center mb-6 group-hover:bg-force-gold/30 transition-colors">
                  <step.icon className="w-8 h-8 text-force-gold" />
                </div>
                <span className="text-force-gold text-sm font-medium mb-2">
                  Step {index + 1}
                </span>
                <h3 className="font-display font-bold text-2xl mb-2">
                  {step.title}
                  <span className="text-white/60 font-normal ml-2">({step.subtitle})</span>
                </h3>
                <p className="text-white/70">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-force-gold/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
