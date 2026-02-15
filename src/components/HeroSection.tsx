"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const searchPlaceholders = [
  "正在寻找：电商运营专家...",
  "正在寻找：法务合规审计...",
  "正在寻找：私域流量分析师...",
  "正在寻找：多语言 SEO 专家...",
  "正在寻找：财务数据分析师...",
  "正在寻找：创意内容策划...",
];

export function HeroSection() {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-deep-space to-deep-space-400" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-force-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-deep-space to-deep-space" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
            <span className="text-white">xAgentForce：</span>
            <br />
            <span className="bg-gradient-to-r from-force-gold to-force-gold-light bg-clip-text text-transparent">
              雇佣你的全能数字员工
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          告别复杂的工具调试。在我们的「数字人才库」中筛选垂直领域 Agent，
          <span className="text-slate-300">即插即用</span>，按需订阅。
        </motion.p>

        {/* Animated search box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <Link href="/agents">
            <div className="group relative glass rounded-2xl p-2 glass-hover cursor-pointer border border-white/10 hover:border-force-gold/30 transition-all duration-300">
              <div className="flex items-center gap-3 px-4 py-4 sm:py-5">
                <Search className="w-5 h-5 text-slate-500 group-hover:text-force-gold transition-colors flex-shrink-0" />
                <span className="text-slate-400 flex-1 text-left truncate min-w-0">
                  {searchPlaceholders[currentPlaceholder]}
                </span>
                <ArrowRight className="w-5 h-5 text-force-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </div>
          </Link>
          <p className="mt-3 text-sm text-slate-600">
            点击进入 Agent 货架，浏览 200+ 垂直领域专家
          </p>
        </motion.div>
      </div>
    </section>
  );
}
