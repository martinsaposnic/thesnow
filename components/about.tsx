"use client"

/**
 * About component - Information about Erik and the art collection
 * Features:
 * - Personal story and background
 * - Process explanation
 * - Value proposition
 * - Animated entrance
 */

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About the Collection</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Hi, I'm <span className="font-bold text-foreground">Erik</span>, a Bitcoin designer
              and digital artist passionate about merging cutting-edge AI technology with the
              decentralized future of currency.
            </p>

            <p>
              Each piece in this collection is crafted using <span className="font-semibold">Midjourney</span>,
              one of the world's most advanced AI art generation tools. Every artwork is unique,
              meticulously curated, and represents hundreds of iterations to achieve the perfect
              aesthetic balance.
            </p>

            <p>
              By accepting <span className="text-orange-500 font-semibold">Bitcoin</span> as payment,
              I'm not just selling art—I'm embracing the future of digital ownership and
              decentralized commerce. No intermediaries, no banks, just pure peer-to-peer value exchange.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 border border-foreground/10"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-sm text-foreground/60">AI-Generated</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 border border-foreground/10"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">4K+</div>
                <div className="text-sm text-foreground/60">Resolution</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-6 border border-foreground/10"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">₿</div>
                <div className="text-sm text-foreground/60">Bitcoin Only</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

