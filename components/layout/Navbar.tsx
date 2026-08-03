"use client";

import Link from "next/link";

const links = [
  "Projects",
  "Experience",
  "Writing",
  "Tech Stack",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="flex items-center gap-8 rounded-full border border-slate-200 bg-white/80 px-8 py-3 shadow-lg backdrop-blur-xl">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight"
        >
          CP
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-slate-600 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="rounded-full bg-black px-5 py-2 text-white text-sm transition hover:scale-105">
          Resume
        </button>
      </nav>
    </header>
  );
}
