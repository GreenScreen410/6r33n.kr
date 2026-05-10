"use client";

import { motion } from "motion/react";

type WordsRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
  duration?: number;
  delay?: number;
};

export function WordsReveal({
  text,
  className,
  as: Tag = "h2",
  stagger = 0.06,
  duration = 0.8,
  delay = 0,
}: WordsRevealProps) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: "0.6em" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * stagger,
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
