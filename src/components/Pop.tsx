"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type PopProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  fromScale?: number;
};

export function Pop({
  children,
  delay = 0,
  fromScale = 0.9,
  ...rest
}: PopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: fromScale, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        mass: 0.8,
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
