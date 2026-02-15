import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/agents", label: "Agent 货架" },
    { href: "/pricing", label: "定价" },
    { href: "/agent-hub", label: "Agent Hub" },
  ],
  company: [
    { href: "/about", label: "关于我们" },
    { href: "/partners", label: "合作伙伴" },
    { href: "/contact", label: "联系我们" },
  ],
  legal: [
    { href: "/privacy", label: "隐私政策" },
    { href: "/terms", label: "服务条款" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-deep-space-400/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-force-gold to-force-gold-dark flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-deep-space" />
              </div>
              <span className="font-display font-bold text-lg">xAgentForce</span>
            </Link>
            <p className="mt-4 text-sm text-slate-500 max-w-xs">
              数字劳务派遣平台 · 雇佣你的全能数字员工，按需订阅，即插即用。
            </p>
          </div>
          <div>
            <h4 className="font-medium text-slate-300 mb-4">产品</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-force-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-300 mb-4">公司</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-force-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-300 mb-4">法律</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-force-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">© 2025 xAgentForce. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>与 UESTC 研究合作</span>
            <span>·</span>
            <span>IEEE 会员</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
