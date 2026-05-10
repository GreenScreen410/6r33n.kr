"use client";

import { motion } from "motion/react";
import { Pop } from "./Pop";
import { WordsReveal } from "./WordsReveal";

type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  blurb: string;
  gradient: string;
  url: string;
};

const current: Project[] = [
  {
    index: "01",
    name: "GreenBot",
    category: "Discord bot · TypeScript",
    year: "2021 — present",
    blurb:
      "A long-running Discord bot built around the idea of information for all — small commands and tools that have grown alongside the communities using them.",
    gradient:
      "linear-gradient(135deg, #06140a 0%, #1a4d05 45%, #4c7d00 75%, #b8ef5f 100%)",
    url: "https://github.com/GreenScreen410/GreenBot-Discord",
  },
  {
    index: "02",
    name: "blog.6r33n.kr",
    category: "Personal blog · Next.js",
    year: "2025 — present",
    blurb:
      "A quiet writing space for notes, learnings and small experiments — built end-to-end and kept open in the same repo.",
    gradient:
      "linear-gradient(135deg, #0a1f0d 0%, #2d8c2d 50%, #daf28a 100%)",
    url: "https://github.com/GreenScreen410/blog.6r33n.kr",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      className="group block rounded-3xl overflow-hidden border hairline border-[var(--line)] bg-[var(--card)]"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: project.gradient }}
      >
        <motion.div
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{ background: project.gradient }}
        />
        <span className="absolute top-5 left-5 label !text-white/70">
          {project.index}
        </span>
        <span className="absolute top-5 right-5 label !text-white/70">
          {project.year}
        </span>
      </div>
      <div className="p-6 md:p-8 flex items-end justify-between gap-6">
        <div>
          <h3 className="display text-2xl md:text-4xl">{project.name}</h3>
          <p className="mt-3 text-[var(--muted)] max-w-md text-sm md:text-base">
            {project.blurb}
          </p>
        </div>
        <span className="label shrink-0 group-hover:translate-x-1 transition-transform">
          {project.category} ↗
        </span>
      </div>
    </motion.a>
  );
}

function Section({ title, items }: { title: string; items: Project[] }) {
  return (
    <div>
      <WordsReveal
        as="h2"
        text={title}
        className="display text-4xl md:text-6xl mb-10 md:mb-14"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((p, i) => (
          <Pop key={p.index} delay={i * 0.12}>
            <ProjectCard project={p} />
          </Pop>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <Section title="Selected Work" items={current} />
    </section>
  );
}
