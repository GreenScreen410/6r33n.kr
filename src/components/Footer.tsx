"use client";

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t hairline border-t-[var(--line)] flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between label">
      <span>
        All rights reserved {new Date().getFullYear()} © GreenScreen410
      </span>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:opacity-60 transition-opacity cursor-pointer"
      >
        Top ↑
      </button>
    </footer>
  );
}
