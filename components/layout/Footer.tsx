import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaUpwork,
  FaFolderOpen,
  FaBriefcase,
  FaCode,
  FaEnvelope,
} from "react-icons/fa6";

import { SiFreelancer, SiGmail } from "react-icons/si";

const navigation = [
  {
    label: "Projects",
    href: "#projects",
    icon: FaFolderOpen,
    color: "text-amber-500",
  },
  {
    label: "Experience",
    href: "#experience",
    icon: FaBriefcase,
    color: "text-blue-600",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
    icon: FaCode,
    color: "text-green-600",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: FaEnvelope,
    color: "text-red-500",
  },
];


const socials = [
  {
    label: "GitHub",
    href: "https://github.com/chander3121",
    icon: FaGithub,
    color: "text-black dark:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chanderprakash3121",
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
  },
  {
    label: "Email",
    href: "mailto:hireme.chanderprakash@gmail.com",
    icon: SiGmail,
    color: "text-red-500",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01e97f825ef3368606?mp_source=share",
    icon: FaUpwork,
    color: "text-[#14A800]",
  },
  {
    label: "Freelancer",
    href: "https://www.freelancer.in/u/Chander1998?sb=t",
    icon: SiFreelancer,
    color: "text-[#29B2FE]",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-3 lg:gap-16">
          {/* Brand */}

          <div>
            <h2 className="font-[var(--font-space)] text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Chander Prakash.
            </h2>

            <p className="mt-5 mx-auto max-w-sm text-sm leading-7 md:mx-0 sm:text-base sm:leading-8 text-slate-600">
              Backend Engineer focused on building reliable APIs,
              scalable backend systems and modern web applications.
            </p>
            <div
              className="
                mt-6

                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-emerald-200

                bg-emerald-50

                px-4
                py-2

                text-sm
                font-medium

                text-emerald-700
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

              Available for opportunities
            </div>
          </div>


          {/* Navigation */}

          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-blue-600 hover:translate-x-1"
                    >
                      <Icon className={`${item.color} text-xl`} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Connect
            </h3>

            <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-blue-600 hover:translate-x-1"
                    >
                      <Icon className={`${item.color} text-2xl`} />

                      <span>{item.label}</span>

                      <ArrowUpRight size={16} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:text-sm md:mt-20 md:justify-between md:text-left md:flex-row">
          <p>
            © {new Date().getFullYear()} Chander Prakash. All rights reserved.
          </p>

          <p>
            Crafted with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
