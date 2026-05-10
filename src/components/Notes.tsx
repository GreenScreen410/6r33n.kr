import { FadeIn } from "./FadeIn";
import { Pop } from "./Pop";
import { WordsReveal } from "./WordsReveal";
import { formatPubDate, getLatestPosts } from "@/lib/blog";

export async function Notes() {
  const posts = await getLatestPosts(3);

  return (
    <section id="notes" className="px-6 md:px-10 py-24 md:py-32">
      <div className="flex justify-between items-end mb-10 md:mb-14">
        <WordsReveal
          as="h2"
          text="Latest from blog"
          className="display text-4xl md:text-6xl"
        />
        <Pop delay={0.3}>
          <a
            href="https://blog.6r33n.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="label hover:opacity-60 transition-opacity"
          >
            All posts ↗
          </a>
        </Pop>
      </div>

      {posts.length === 0 ? (
        <FadeIn>
          <div className="border-y hairline border-y-[var(--line)] py-16 text-center text-[var(--muted)]">
            <p className="label mb-3">— No posts yet</p>
            <p className="text-lg md:text-xl">
              First entries are on their way.
            </p>
          </div>
        </FadeIn>
      ) : (
        <ul>
          {posts.map((post, i) => (
            <FadeIn key={post.link} delay={i * 0.08} y={32}>
              <li className="border-t hairline border-t-[var(--line)]">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 gap-4 items-baseline py-8"
                >
                  <span className="label col-span-4 md:col-span-2">
                    {formatPubDate(post.pubDate)}
                  </span>
                  <span className="label col-span-8 md:col-span-2">
                    {post.category ?? "Post"}
                  </span>
                  <h3 className="col-span-12 md:col-span-7 display text-2xl md:text-4xl tracking-tight">
                    {post.title}
                  </h3>
                  <span className="hidden md:block label col-span-1 text-right group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
              </li>
            </FadeIn>
          ))}
          <div className="border-t hairline border-t-[var(--line)]" />
        </ul>
      )}
    </section>
  );
}
