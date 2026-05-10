"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { LiquidBackground } from "./LiquidBackground";
import { Wordmark } from "./Wordmark";

type ClickPhase = "idle" | "folding" | "unfolding";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  const [clickPhase, setClickPhase] = useState<ClickPhase>("idle");

  const springConfig = { stiffness: 28, damping: 22, mass: 1.6 };
  const tx = useSpring(mx, springConfig);
  const ty = useSpring(my, springConfig);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set(e.clientX - cx);
    my.set(e.clientY - cy);
  }

  function handleEnter() {
    setHovered(true);
  }

  function handleLeave() {
    setHovered(false);
    mx.set(0);
    my.set(0);
  }

  function handleClick() {
    if (clickPhase !== "idle") return;
    setClickPhase("folding");
    window.setTimeout(() => setClickPhase("unfolding"), 280);
    window.setTimeout(() => setClickPhase("idle"), 560);
  }

  const unfolded =
    clickPhase === "folding"
      ? false
      : clickPhase === "unfolding"
      ? true
      : hovered;

  return (
    <section
      id="hero"
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className="relative min-h-svh overflow-hidden cursor-pointer select-none"
    >
      <LiquidBackground />

      <div className="relative z-10 min-h-svh flex items-center justify-center">
        <motion.div
          style={{ x: tx, y: ty }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="will-change-transform"
        >
          <Wordmark
            size={340}
            className="drop-shadow-2xl"
            unfolded={unfolded}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}

function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-5.5 h-8.5 rounded-full border border-white/70 flex items-start justify-center pt-1.5">
        <motion.span
          className="w-0.5 h-2 rounded-full bg-white/80"
          animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
