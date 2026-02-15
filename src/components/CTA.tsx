'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="glass-strong rounded-3xl p-12 lg:p-16 border border-force-gold/20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            准备好雇佣你的数字团队了吗？
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            从 $99/月 起，即可获得专业级 Agent 支持。无需复杂的工具调试，即刻上岗。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agents"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors"
            >
              浏览 Agent 市场
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass hover:border-force-gold/30 transition-colors"
            >
              查看定价
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
