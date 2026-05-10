"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#notes", label: "Writing" },
];

function MarkGlyph({ colored }: { colored: boolean }) {
  return (
    <div className="relative w-8 h-8">
      <motion.svg
        viewBox="0 0 766 766"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: colored ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <path
          d="M62.7956 103.796C62.7956 81.1519 81.1519 62.7956 103.796 62.7956H661.796C684.439 62.7956 702.796 81.1519 702.796 103.796V661.796C702.796 684.439 684.439 702.796 661.796 702.796H103.796C81.1519 702.796 62.7956 684.439 62.7956 661.796V103.796Z"
          fill="white"
          fillOpacity="0.55"
        />
        <path
          d="M145.863 30.3986C151.723 8.52649 174.205 -4.4534 196.077 1.40722L735.193 145.863C757.065 151.723 770.045 174.205 764.184 196.077L619.728 735.193C613.868 757.065 591.386 770.045 569.514 764.184L30.3986 619.728C8.52649 613.868 -4.4534 591.386 1.40722 569.514L145.863 30.3986Z"
          fill="white"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 766 766"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: colored ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient
            id="nav-mark-back"
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
            id="nav-mark-front"
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
        <path
          d="M62.7956 103.796C62.7956 81.1519 81.1519 62.7956 103.796 62.7956H661.796C684.439 62.7956 702.796 81.1519 702.796 103.796V661.796C702.796 684.439 684.439 702.796 661.796 702.796H103.796C81.1519 702.796 62.7956 684.439 62.7956 661.796V103.796Z"
          fill="url(#nav-mark-back)"
        />
        <path
          d="M145.863 30.3986C151.723 8.52649 174.205 -4.4534 196.077 1.40722L735.193 145.863C757.065 151.723 770.045 174.205 764.184 196.077L619.728 735.193C613.868 757.065 591.386 770.045 569.514 764.184L30.3986 619.728C8.52649 613.868 -4.4534 591.386 1.40722 569.514L145.863 30.3986Z"
          fill="url(#nav-mark-front)"
        />
      </motion.svg>
    </div>
  );
}

export function Nav() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const update = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const pillBg = pastHero ? "bg-black/55" : "bg-white/12";
  const pillBorder = pastHero ? "border-white/10" : "border-white/25";
  const pillShadow = pastHero
    ? "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
    : "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_1px_8px_-2px_rgba(0,0,0,0.15)]";

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" aria-label="Home" className="block">
          <MarkGlyph colored={pastHero} />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-1 px-6 py-2.5 rounded-full backdrop-blur-xl backdrop-saturate-150 border text-white text-sm transition-colors ${pillBg} ${pillBorder} ${pillShadow}`}
        >
          {links.map((link, i) => (
            <li key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="px-3 py-1 transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
              {i < links.length - 1 && (
                <span className="opacity-40 select-none" aria-hidden>
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`px-5 py-2.5 rounded-full backdrop-blur-xl backdrop-saturate-150 border text-white text-sm hover:bg-white hover:text-black transition-colors ${pillBg} ${pillBorder} ${pillShadow}`}
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
