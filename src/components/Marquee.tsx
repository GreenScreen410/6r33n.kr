const tags = [
  "BRAND IDENTITY",
  "INTERFACE DESIGN",
  "WEB ENGINEERING",
  "ART DIRECTION",
  "MOTION",
  "RESEARCH",
];

export function Marquee() {
  return (
    <section className="border-y hairline border-y-[var(--line)] py-6 overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            className="display text-4xl md:text-5xl text-[var(--foreground)]"
          >
            {tag} <span className="text-[var(--accent)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
