"use client";

import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
import { Pop } from "./Pop";

export function CTA() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-24 md:py-40 border-t hairline border-t-[var(--line)]"
    >
      <FadeIn className="label mb-10">— Get in touch</FadeIn>

      <a
        href="mailto:me@6r33n.kr"
        className="group block"
        aria-label="Send Mingyu an email"
      >
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: 12 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[14vw] md:text-[12vw] leading-[0.9] tracking-tight"
        >
          me<span className="text-[var(--accent)]">@</span>6r33n.kr
        </motion.h2>
      </a>

      <Pop delay={0.3} className="mt-24 text-sm">
        <span className="label">Elsewhere</span>
        <p className="mt-3">
          <a
            href="https://github.com/GreenScreen410"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60"
          >
            GitHub ↗
          </a>
        </p>
      </Pop>
    </section>
  );
}
