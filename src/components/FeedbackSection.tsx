'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    agent: '电商运营专家 Ella',
    quote: '这个电商 Agent 帮我提升了 30% 的转化率，ROI 非常清晰。',
    author: '某跨境电商创始人',
    rating: 5,
  },
  {
    agent: '法务合规审计 Sofia',
    quote: '合同审核效率提升 10 倍，再也不用熬夜看条款了。',
    author: '某 SaaS 法务负责人',
    rating: 5,
  },
  {
    agent: '私域流量分析师 Marcus',
    quote: '社群运营和用户分层做得太到位，留存率明显改善。',
    author: '某消费品牌增长负责人',
    rating: 5,
  },
]

export function FeedbackSection() {
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
            Agent 履职评价
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            来自真实雇主的反馈，每一个 Agent 都经得起考验
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.agent}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 lg:p-8 flex flex-col"
            >
              <Quote className="w-10 h-10 text-force-gold/50 mb-4" />
              <p className="text-white/90 mb-4 flex-1 leading-relaxed">
                「{item.quote}」
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-force-gold text-force-gold"
                  />
                ))}
              </div>
              <div>
                <span className="text-force-gold text-sm font-medium">
                  {item.agent}
                </span>
                <p className="text-sm text-white/50">{item.author}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
