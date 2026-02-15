"use client";

import { motion } from "framer-motion";
import { Users, Clock, DollarSign, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12,000+",
    label: "已派遣 Agent 数量",
  },
  {
    icon: Clock,
    value: "2.4M",
    label: "累计工作小时",
  },
  {
    icon: DollarSign,
    value: "35%",
    label: "平均为客户降低的成本",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "服务可用性",
  },
];

const partners = [
  { name: "UESTC", desc: "电子科技大学研究合作" },
  { name: "IEEE", desc: "IEEE 会员" },
  { name: "BingoAI", desc: "Agent 认证体系" },
];

export function TrustSection() {
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
            信任背书
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            数据驱动，权威合作，持续为客户创造价值
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center glass-hover"
            >
              <stat.icon className="w-8 h-8 text-force-gold mx-auto mb-3" />
              <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border border-white/5"
        >
          <h3 className="font-display font-semibold text-lg text-slate-300 mb-6 text-center">
            合作伙伴与认证
          </h3>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {partners.map((p) => (
              <div key={p.name} className="text-center">
                <div className="font-display font-bold text-force-gold">{p.name}</div>
                <div className="text-sm text-slate-500 mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
