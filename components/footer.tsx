"use client"

/**
 * Footer component - Site footer with copyright and links
 * Features:
 * - Bitcoin branding
 * - Copyright notice
 * - Quick links
 * - Minimalist design
 */

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold tracking-tight mb-3"
            >
              ERIK<span className="text-orange-500">₿</span>
            </motion.div>
            <p className="text-sm text-foreground/60">
              AI-generated art meets Bitcoin. Exclusive digital masterpieces for the decentralized future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#home" className="hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-500 transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-3">Payment</h3>
            <p className="text-sm text-foreground/60 mb-3">
              We exclusively accept Bitcoin for all transactions. Secure, decentralized, and future-proof.
            </p>
            <div className="flex items-center gap-2 text-orange-500">
              <span className="text-2xl">₿</span>
              <span className="text-sm font-medium">Bitcoin Only</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-foreground/10 text-center text-sm text-foreground/50">
          <p>© {currentYear} Erik. All rights reserved. Powered by Bitcoin.</p>
        </div>
      </div>
    </footer>
  )
}

