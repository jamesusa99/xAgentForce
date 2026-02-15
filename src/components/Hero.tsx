'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const searchPlaceholders = [
  '正在寻找：电商运营专家...',
  '正在寻找：法务合规审计...',
  '正在寻找：私域流量分析师...',
  '正在寻找：多语言 SEO 专员...',
  '正在寻找：创意内容策划...',
  '正在寻找：财务数据分析师...',
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % searchPlaceholders.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-force-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-force-gold/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6">
          xAgentForce：雇佣你的
          <br />
          <span className="bg-gradient-to-r from-force-gold to-electric-blue bg-clip-text text-transparent">
            全能数字员工
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          告别复杂的工具调试。在我们的「数字人才库」中筛选垂直领域 Agent，即插即用，按需订阅。
        </p>

        {/* Dynamic Agent Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-2 flex items-center gap-3 shadow-2xl shadow-black/20">
            <div className="flex-shrink-0 p-2 rounded-xl bg-force-gold/20">
              <Search className="w-5 h-5 text-force-gold" />
            </div>
            <div className="flex-1 min-h-[48px] flex items-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 text-white/60 text-base sm:text-lg"
                >
                  {searchPlaceholders[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <Link
              href="/agents"
              className="flex-shrink-0 px-6 py-3 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors flex items-center gap-2"
            >
              搜索 Agent
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-sm text-white/50"
        >
          已认证 120+ 垂直领域 Agent · BingoAI 技术背书
        </motion.p>
      </motion.div>
    </section>
  )
}
