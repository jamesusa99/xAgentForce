'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'

const footerLinks = {
  产品: [
    { href: '/agents', label: 'Agent 市场' },
    { href: '/pricing', label: '定价' },
    { href: '/hub', label: 'Agent Hub' },
  ],
  资源: [
    { href: '/dashboard', label: '控制台' },
    { href: '/agents', label: 'Agent 档案' },
    { href: '#', label: '帮助中心' },
  ],
  公司: [
    { href: '#', label: '关于我们' },
    { href: '#', label: '联系我们' },
    { href: '#', label: '隐私政策' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-force-gold" />
              <span className="font-display font-bold text-xl">
                xAgent<span className="text-force-gold">Force</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60">
              雇佣你的全能数字员工。即插即用，按需订阅。
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-force-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} xAgentForce. 数字劳务派遣平台.
          </p>
          <p className="text-xs text-white/40">
            UESTC 研究合作 · IEEE 会员 · BingoAI 认证
          </p>
        </div>
      </div>
    </footer>
  )
}
