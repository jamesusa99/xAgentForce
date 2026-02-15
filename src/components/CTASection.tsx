"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="glass rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-force-gold/5 to-electric-blue/5" />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
              准备好组建你的数字团队了吗？
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              立即浏览 Agent 货架，挑选符合业务场景的数字员工，即插即用，按需订阅。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/agents"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold-light transition-colors"
              >
                浏览 Agent 货架
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl glass glass-hover text-white font-medium"
              >
                查看定价
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
