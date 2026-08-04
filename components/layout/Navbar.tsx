"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "services",
    label: "Engineering",
    href: "#services",
  },
  {
    id: "tech-stack",
    label: "Tech Stack",
    href: "#tech-stack",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("projects");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-6">
      <motion.nav
        animate={{
          height: scrolled ? 56 : 64,
        }}
        transition={{
          duration: 0.25,
        }}
        className={`
          flex
          w-full
          max-w-5xl
          items-center
          justify-between
          rounded-full
          border
          border-slate-200/80
          px-7
          backdrop-blur-2xl
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-white/90 shadow-[0_10px_40px_rgba(15,23,42,0.10)]"
              : "bg-white/70 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
          }
        `}
      >
        {/* Logo */}

        <Link
          href="/"
          className="
          text-2xl
          font-bold
          tracking-tight
          text-slate-900
          transition
          hover:text-blue-600
          "
        >
          CP<span className="text-blue-600">.</span>
        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-2 lg:flex">
                    {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();

                const element = document.getElementById(link.id);

                if (!element) return;

                window.scrollTo({
                  top: element.offsetTop - 110,
                  behavior: "smooth",
                });

                setActive(link.id);
              }}
              className="
                relative
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
              "
            >
              {/* Active Pill */}

              <AnimatePresence>

                {active === link.id && (
                  <motion.span
                    layoutId="navbar-pill"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-blue-50
                      border
                      border-blue-100
                    "
                  />
                )}

              </AnimatePresence>

              <span
                className={`
                  relative
                  z-10
                  transition-colors
                  duration-300
                  ${
                    active === link.id
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }
                `}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Resume */}

        <Link
          href="/CHANDER_PRAKASH_ROR_GOLANG_RESUME_2026-05-27.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-sm
            font-semibold
            text-slate-900
            transition-all
            duration-300
            hover:bg-slate-100
            hover:text-blue-600
          "
        >
          Resume

          <motion.span
            whileHover={{
              x: 2,
              y: -2,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <ArrowUpRight 
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </motion.span>
        </Link>
      </motion.nav>
    </header>
  );
}
