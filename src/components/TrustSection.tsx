'use client'

import { motion } from 'framer-motion'
import { Users, Clock, TrendingDown, Shield } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '12,000+',
    label: '已派遣 Agent 数量',
  },
  {
    icon: Clock,
    value: '2.4M',
    label: '累计工作小时',
  },
  {
    icon: TrendingDown,
    value: '68%',
    label: '平均为客户降低的成本',
  },
]

const partners = [
  { name: 'UESTC', desc: '电子科技大学研究合作' },
  { name: 'IEEE', desc: '会员身份' },
  { name: 'BingoAI', desc: '技术认证伙伴' },
]

export function TrustSection() {
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
            信任背书
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            数据说话，权威背书，打造值得信赖的数字劳务派遣平台
          </p>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:border-force-gold/20 transition-colors"
            >
              <stat.icon className="w-10 h-10 text-force-gold mx-auto mb-4" />
              <div className="font-display font-bold text-4xl lg:text-5xl text-force-gold mb-2">
                {stat.value}
              </div>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 lg:p-12"
        >
          <div className="flex items-center gap-2 mb-8">
            <Shield className="w-5 h-5 text-force-gold" />
            <h3 className="font-display font-semibold text-lg">合作伙伴与背书</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-xl text-white mb-1">
                  {partner.name}
                </div>
                <p className="text-sm text-white/60">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
