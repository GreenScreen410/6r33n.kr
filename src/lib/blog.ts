export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  category?: string;
};

const FEED_URL = "https://blog.6r33n.kr/feed.xml";

function unwrap(value: string | undefined) {
  if (!value) return undefined;
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(
      /&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi,
      (entity, key: string) => {
        const named: Record<string, string> = {
          amp: "&",
          lt: "<",
          gt: ">",
          quot: '"',
          apos: "'",
        };
        if (!key.startsWith("#")) return named[key.toLowerCase()] ?? entity;
        const code = key.toLowerCase().startsWith("#x")
          ? parseInt(key.slice(2), 16)
          : parseInt(key.slice(1), 10);
        return code > 0 &&
          code <= 0x10ffff &&
          !(code >= 0xd800 && code <= 0xdfff)
          ? String.fromCodePoint(code)
          : entity;
      },
    )
    .trim();
}

function parseRss(xml: string): BlogPost[] {
  const posts: BlogPost[] = [];
  const items = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);
  for (const match of items) {
    const block = match[1];
    const title = unwrap(block.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
    const link = unwrap(block.match(/<link>([\s\S]*?)<\/link>/)?.[1]);
    const pubDate = unwrap(block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]);
    const category = unwrap(
      block.match(/<category>([\s\S]*?)<\/category>/)?.[1],
    );
    if (title && link && pubDate)
      posts.push({ title, link, pubDate, category });
  }
  return posts;
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRss(xml).slice(0, limit);
  } catch {
    return [];
  }
}

export function formatPubDate(pubDate: string): string {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return pubDate;
  return `${d.getFullYear()} · ${String(d.getMonth() + 1).padStart(2, "0")} · ${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}
