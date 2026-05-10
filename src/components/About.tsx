import { FadeIn } from "./FadeIn";
import { WordsReveal } from "./WordsReveal";

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-40">
      <WordsReveal
        as="h2"
        text="Designing and building digital things, with care."
        className="display text-4xl md:text-7xl max-w-5xl leading-[1.05]"
      />
      <FadeIn delay={0.4}>
        <p className="mt-10 max-w-2xl text-[var(--muted)] text-base md:text-lg leading-relaxed">
          I&rsquo;m Mingyu Jung{" "}
          <span className="opacity-60">
            (also known as GreenScreen410, pauljjang410)
          </span>
          , a developer who occasionally designs. I build the things I want to
          see exist — mostly as open-source projects, so the work stays in the
          open.
        </p>
      </FadeIn>
    </section>
  );
}
