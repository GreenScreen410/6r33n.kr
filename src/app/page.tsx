import Image from "next/image";
import { Hero } from "@/components/Hero";
import { PageEffects } from "@/components/PageEffects";
import { getLatestPosts, formatPubDate } from "@/lib/blog";

export default async function Home() {
  const posts = await getLatestPosts(3);
  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#liquid-hero" aria-label="6R33N home">
            <Image
              src="/web-app-manifest-192x192.png"
              alt=""
              width="36"
              height="36"
            />
          </a>
          <button
            className="menu-toggle"
            type="button"
            id="menu-toggle"
            aria-expanded="false"
            aria-controls="site-nav"
          >
            Menu
          </button>
          <nav className="nav" id="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Interests</a>
            <a href="#notes">Writing</a>
          </nav>
          <a className="btn btn-primary header-contact" href="#contact">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
      <main>
        <div id="liquid-hero">
          <div id="liquid-root">
            <Hero />
          </div>
          <a className="hero-scroll" href="#about" aria-label="Scroll to About">
            <span className="sr-only">Scroll to About</span>
          </a>
        </div>
        <section
          className="about wrap"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-layout">
            <div>
              <p className="eyebrow">About</p>
              <h1 id="about-title">
                Designing and building
                <br /> digital things, with care.
              </h1>
              <p className="about-copy">
                I’m <strong>Mingyu Jung</strong>{" "}
                <span className="aliases">
                  (also known as GreenScreen410, pauljjang410)
                </span>
                , a developer who occasionally designs. I build the things I
                want to see exist — mostly as open-source projects, so the work
                stays in the open.
              </p>
            </div>
            <aside className="profile" aria-label="Profile">
              <Image
                src="/web-app-manifest-192x192.png"
                alt=""
                width="52"
                height="52"
              />
              <h2>Mingyu Jung</h2>
              <p className="handle">GreenScreen410</p>
              <div className="profile-links">
                <a
                  className="link"
                  href="https://github.com/GreenScreen410"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a className="link" href="mailto:me@6r33n.kr">
                  Email <span aria-hidden="true">↗</span>
                </a>
              </div>
            </aside>
          </div>
        </section>
        <section
          className="section wrap interests"
          id="work"
          aria-labelledby="work-title"
        >
          <header className="section-title">
            <div>
              <p className="eyebrow">Interests</p>
              <h2 id="work-title">What I do</h2>
            </div>
          </header>
          <div className="projects">
            <article className="project">
              <div className="project-top">
                <span className="project-type">Development</span>
              </div>
              <h3>Build.</h3>
              <p>
                I build the things I want to see exist, from small tools to the
                websites I use myself. Most of that work lives in the open.
              </p>
              <div className="project-bottom">
                <a
                  className="link"
                  href="https://github.com/GreenScreen410"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
            <article className="project">
              <div className="project-top">
                <span className="project-type">Design</span>
              </div>
              <h3>Refine.</h3>
              <p>
                I occasionally design, too. I care about how things look and
                feel: clear typography, thoughtful spacing, and small
                interactions that make a page feel alive.
              </p>
            </article>
            <article className="project">
              <div className="project-top">
                <span className="project-type">Writing</span>
              </div>
              <h3>Share.</h3>
              <p>
                I write about what I learn, make, and experience. A place for
                personal notes and stories, with room for whatever comes next.
              </p>
              <div className="project-bottom">
                <a
                  className="link"
                  href="https://blog.6r33n.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the blog <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>
        <section
          className="section wrap"
          id="notes"
          aria-labelledby="notes-title"
        >
          <header className="section-title">
            <div>
              <p className="eyebrow">Writing</p>
              <h2 id="notes-title">Latest from the blog</h2>
            </div>
            <a
              className="link"
              href="https://blog.6r33n.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              All posts{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </header>
          <ul className="writing-list">
            {posts.map((post) => (
              <li key={post.link}>
                <a
                  className="writing-row"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <time dateTime={post.pubDate}>
                    {formatPubDate(post.pubDate).replaceAll(" · ", ".")}
                  </time>
                  <h3>{post.title}</h3>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
            {posts.length === 0 && (
              <li>
                <a className="link" href="https://blog.6r33n.kr">
                  Read the blog ↗
                </a>
              </li>
            )}
          </ul>
        </section>
        <section
          className="contact wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Get in touch.</h2>
            <a className="contact-email" href="mailto:me@6r33n.kr">
              me@6r33n.kr
            </a>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:me@6r33n.kr">
              Send an email{" "}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/GreenScreen410"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>
            <span className="footer-brand">6R33N</span>©{" "}
            <span>{new Date().getFullYear()}</span> GreenScreen410. All rights
            reserved.
          </p>
          <div className="footer-links">
            <a
              href="https://blog.6r33n.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog ↗
            </a>
            <a
              href="https://github.com/GreenScreen410"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a href="#liquid-hero">Top ↑</a>
          </div>
        </div>
      </footer>
      <PageEffects />
    </>
  );
}
