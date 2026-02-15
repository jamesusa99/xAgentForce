"use client";

import { motion } from "framer-motion";
import { Search, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Select",
    subtitle: "筛选",
    description: "在垂直资源池中挑选符合业务场景的 Agent",
    color: "force-gold",
  },
  {
    icon: Zap,
    title: "Deploy",
    subtitle: "部署",
    description: "一键集成到你的工作流（Web / API / Slack）",
    color: "electric-blue",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    subtitle: "扩展",
    description: "根据业务需求，随时增减你的数字团队规模",
    color: "force-gold",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-deep-space-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            派遣流程
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            三步降低决策门槛，快速组建你的数字团队
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 h-full glass-hover text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                    step.color === "force-gold"
                      ? "bg-force-gold/20 text-force-gold"
                      : "bg-electric-blue/20 text-electric-blue"
                  }`}
                >
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="mt-4">
                  <span className="text-slate-500 text-sm">{step.subtitle}</span>
                  <h3 className="font-display font-bold text-xl text-white mt-1">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-slate-400 text-sm">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
