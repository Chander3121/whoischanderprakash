import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/chander3121",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chanderprakash3121",
  },
  {
    label: "Email",
    href: "mailto:hireme.chanderprakash@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Brand */}

          <div>
            <h2 className="font-[var(--font-space)] text-3xl font-bold tracking-tight text-slate-900">
              Chander Prakash.
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-slate-600">
              Backend Engineer focused on building reliable APIs,
              scalable backend systems and modern web applications.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Connect
            </h3>

            <ul className="mt-6 space-y-4">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-blue-600"
                  >
                    {item.label}

                    <ArrowUpRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Chander Prakash. All rights reserved.
          </p>

          <p>
            Built with Next.js • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
