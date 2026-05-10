"use client";

import { motion } from "motion/react";

type WordmarkProps = {
  size?: number;
  className?: string;
  unfolded?: boolean;
};

const BACK_PATH =
  "M62.7956 103.796C62.7956 81.1519 81.1519 62.7956 103.796 62.7956H661.796C684.439 62.7956 702.796 81.1519 702.796 103.796V661.796C702.796 684.439 684.439 702.796 661.796 702.796H103.796C81.1519 702.796 62.7956 684.439 62.7956 661.796V103.796Z";

const FRONT_PATH =
  "M145.863 30.3986C151.723 8.52649 174.205 -4.4534 196.077 1.40722L735.193 145.863C757.065 151.723 770.045 174.205 764.184 196.077L619.728 735.193C613.868 757.065 591.386 770.045 569.514 764.184L30.3986 619.728C8.52649 613.868 -4.4534 591.386 1.40722 569.514L145.863 30.3986Z";

const ROTATION_TRANSITION = {
  type: "spring" as const,
  stiffness: 380,
  damping: 16,
  mass: 0.9,
};

const FADE_TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Wordmark({
  size = 280,
  className,
  unfolded = false,
}: WordmarkProps) {
  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-label="6R33N personal mark"
      role="img"
    >
      <motion.svg
        viewBox="0 0 766 766"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: unfolded ? 0 : 1 }}
        transition={FADE_TRANSITION}
      >
        <path d={BACK_PATH} fill="white" fillOpacity="0.55" />
        <motion.path
          d={FRONT_PATH}
          fill="white"
          initial={{ rotate: -15 }}
          animate={{ rotate: unfolded ? 0 : -15 }}
          transition={ROTATION_TRANSITION}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 766 766"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: unfolded ? 1 : 0 }}
        transition={FADE_TRANSITION}
      >
        <defs>
          <linearGradient
            id="hero-mark-back"
            x1="382.796"
            y1="62.7956"
            x2="382.796"
            y2="702.796"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#63C963" />
            <stop offset="1" stopColor="#027E02" />
          </linearGradient>
          <linearGradient
            id="hero-mark-front"
            x1="169.232"
            y1="6.41064"
            x2="584.649"
            y2="775.351"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8EF5F" />
            <stop offset="1" stopColor="#4C7D00" />
          </linearGradient>
        </defs>
        <path d={BACK_PATH} fill="url(#hero-mark-back)" />
        <motion.path
          d={FRONT_PATH}
          fill="url(#hero-mark-front)"
          initial={{ rotate: -15 }}
          animate={{ rotate: unfolded ? 0 : -15 }}
          transition={ROTATION_TRANSITION}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </motion.svg>
    </div>
  );
}
