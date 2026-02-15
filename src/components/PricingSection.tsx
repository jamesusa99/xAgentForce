"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "初级营销 Agent",
    price: 99,
    period: "月",
    features: ["基础文案生成", "社交媒体运营", "数据报表"],
    cta: "开始试用",
    popular: false,
  },
  {
    name: "高级专家 Agent",
    price: 499,
    period: "月",
    features: ["全链路营销策略", "AI 辅助决策", "多平台整合", "专属客户经理", "优先支持"],
    cta: "立即聘用",
    popular: true,
  },
  {
    name: "企业定制",
    price: null,
    period: "按需定价",
    features: ["定制化 Agent 训练", "私有化部署", "SLA 保障", "7x24 专属支持"],
    cta: "联系我们",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            定价
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            按岗位订阅 · 灵活扩展，无隐藏费用
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-8 glass-hover ${
                plan.popular ? "ring-2 ring-force-gold/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-force-gold/20 text-force-gold text-sm font-medium">
                  最受欢迎
                </div>
              )}
              <h3 className="font-display font-bold text-lg text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                {plan.price !== null ? (
                  <>
                    <span className="text-3xl font-bold text-white">${plan.price}</span>
                    <span className="text-slate-500">/{plan.period}</span>
                  </>
                ) : (
                  <span className="text-xl text-slate-400">{plan.period}</span>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-400 text-sm">
                    <Check className="w-4 h-4 text-force-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.popular ? "/dashboard" : "/pricing"}
                className={`mt-8 block w-full py-3 rounded-lg text-center font-medium transition-colors ${
                  plan.popular
                    ? "bg-force-gold text-deep-space hover:bg-force-gold-light"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
