"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/agents", label: "Agent 货架" },
  { href: "/how-it-works", label: "派遣流程" },
  { href: "/pricing", label: "定价" },
  { href: "/agent-hub", label: "Agent Hub" },
  { href: "/dashboard", label: "控制台" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-force-gold to-force-gold-dark flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-deep-space" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              xAgentForce
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-force-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg bg-force-gold/20 text-force-gold hover:bg-force-gold/30 transition-colors text-sm font-medium"
            >
              立即聘用
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-white/5"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-400 hover:text-force-gold"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/dashboard"
                  className="text-force-gold font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  立即聘用
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
