"use client";
import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header")!;
    const hero = document.getElementById("liquid-hero")!;
    const nav = document.getElementById("site-nav")!;
    const menu = document.getElementById("menu-toggle")!;
    const sections = ["about", "work", "notes", "contact"].map(
      (id) => document.getElementById(id)!,
    );
    const links = [...nav.querySelectorAll("a")];
    let motionEnabled = true;
    try {
      motionEnabled = localStorage.getItem("verdant-motion") !== "off";
    } catch {}
    const root = document.documentElement;
    root.classList.toggle("motion-enabled", motionEnabled);
    root.classList.toggle("motion-ready", motionEnabled);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );
    const reveals = document.querySelectorAll(
      ".about .eyebrow,.about h1,.about-copy,.profile,.section-title,.project,.writing-row,.contact>div",
    );
    reveals.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    document.querySelectorAll(".project").forEach((el) => {
      el.classList.add("stagger");
      [...el.children].forEach((child, i) =>
        (child as HTMLElement).style.setProperty(
          "--enter-delay",
          i * 75 + "ms",
        ),
      );
    });
    const close = () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    };
    const toggle = () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      nav.classList.toggle("open", open);
      menu.setAttribute("aria-expanded", String(open));
    };
    const click = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(".site-header a") || !target.closest(".site-header"))
        close();
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        close();
        menu.focus();
      }
    };
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = (innerWidth <= 740 ? menu : nav).getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();
      const onHero = heroRect.bottom > rect.top + rect.height * 0.5;
      header.classList.toggle("on-hero", onHero);
      header.classList.toggle("scrolled", !onHero);
      const current = [...sections]
        .reverse()
        .find((s) => s.getBoundingClientRect().top < innerHeight * 0.36);
      links.forEach((a) => {
        if (current && a.hash === "#" + current.id)
          a.setAttribute("aria-current", "location");
        else a.removeAttribute("aria-current");
      });
      const p = motionEnabled
        ? Math.max(0, Math.min(1, -heroRect.top / hero.offsetHeight))
        : 0;
      hero.style.setProperty("--scroll-scale", String(1 - p * 0.16));
      hero.style.setProperty(
        "--scroll-opacity",
        String(Math.max(0, 1 - p * 1.65)),
      );
      hero.style.setProperty("--scroll-drift", p * 70 + "px");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = () => {
      if (innerWidth > 740) close();
      schedule();
    };
    const button = document.createElement("button");
    button.type = "button";
    button.className = "motion-toggle";
    const sync = () => {
      button.textContent =
        "Scroll animation: " + (motionEnabled ? "On" : "Off");
      button.setAttribute("aria-pressed", String(motionEnabled));
    };
    const toggleMotion = () => {
      motionEnabled = !motionEnabled;
      root.classList.toggle("motion-enabled", motionEnabled);
      root.classList.toggle("motion-ready", motionEnabled);
      try {
        localStorage.setItem("verdant-motion", motionEnabled ? "on" : "off");
      } catch {}
      sync();
      update();
    };
    sync();
    document.querySelector(".footer-links")!.append(button);
    button.addEventListener("click", toggleMotion);
    menu.addEventListener("click", toggle);
    document.addEventListener("click", click);
    document.addEventListener("keydown", key);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    update();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      menu.removeEventListener("click", toggle);
      document.removeEventListener("click", click);
      document.removeEventListener("keydown", key);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      button.remove();
      root.classList.remove("motion-enabled", "motion-ready");
      reveals.forEach((el) => el.classList.remove("reveal", "in-view"));
    };
  }, []);
  return null;
}
