"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-semibold text-sm tracking-wide uppercase mb-4"
          >
            Senior UX Designer & CX Strategist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Carolina
            <br />
            Jofre Pfeil
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
          >
            I design experiences that bridge business strategy and human
            insight. 15+ years shaping end-to-end digital products for global
            brands &mdash; from CX strategy through high-fidelity UI to
            production delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-lg hover:bg-neutral-800 transition-colors"
            >
              See my work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium text-sm rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
