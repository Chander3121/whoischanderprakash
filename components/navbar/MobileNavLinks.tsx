"use client";

import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  ChevronRight,
  Cpu,
  Mail,
  Handshake,
  Briefcase,
} from "lucide-react";

interface Props {
  onClick: (id: string) => void;
}

const links = [
  {
    label: "Projects",
    id: "projects",
    icon: BriefcaseBusiness,
    bg: "bg-amber-100",
    hoverBg: "group-hover:bg-amber-200",
    color: "text-amber-600",
    hoverColor: "group-hover:text-amber-700",
  },
  {
    label: "Experience",
    id: "experience",
    icon: Briefcase,
    bg: "bg-sky-100",
    hoverBg: "group-hover:bg-sky-200",
    color: "text-sky-600",
    hoverColor: "group-hover:text-sky-700",
  },
  {
    label: "Services",
    id: "services",
    icon: Handshake,
    bg: "bg-emerald-100",
    hoverBg: "group-hover:bg-emerald-200",
    color: "text-emerald-600",
    hoverColor: "group-hover:text-emerald-700",
  },
  {
    label: "Tech Stack",
    id: "tech-stack",
    icon: Cpu,
    bg: "bg-violet-100",
    hoverBg: "group-hover:bg-violet-200",
    color: "text-violet-600",
    hoverColor: "group-hover:text-violet-700",
  },
  {
    label: "Contact",
    id: "contact",
    icon: Mail,
    bg: "bg-rose-100",
    hoverBg: "group-hover:bg-rose-200",
    color: "text-rose-600",
    hoverColor: "group-hover:text-rose-700",
  },
];

export default function MobileNavLinks({
  onClick,
}: Props) {
  return (
    <>
      {links.map((link, index) => {
        const Icon = link.icon;

        return (
          <motion.button
            key={link.id}
            onClick={() => onClick(link.id)}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.02,
              x: 4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group

              flex
              items-center
              justify-between

              rounded-2xl

              px-4
              py-4

              transition-all
              duration-300

              hover:bg-blue-50
            "
          >
            <div className="flex items-center gap-4">

              <div
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  transition-all
                  ${link.bg}
                  ${link.hoverBg}
                `}
              >
                <Icon
                  size={20}
                  className={`
                    transition-all
                    ${link.color}
                    ${link.hoverColor}
                  `}
                />
              </div>

              <span
                className="
                  text-lg
                  font-semibold
                  text-slate-800

                  transition-all

                  group-hover:text-blue-600
                "
              >
                {link.label}
              </span>

            </div>

            <ChevronRight
              size={20}
              className="
                translate-x-2
                opacity-0

                transition-all
                duration-300

                group-hover:translate-x-0
                group-hover:opacity-100
                group-hover:text-blue-600
              "
            />

          </motion.button>
        );
      })}
    </>
  );
}
