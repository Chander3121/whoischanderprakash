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
  },
  {
    label: "Experience",
    id: "experience",
    icon: Briefcase,
  },
  {
    label: "Services",
    id: "services",
    icon: Handshake,
  },
  {
    label: "Tech Stack",
    id: "tech-stack",
    icon: Cpu,
  },
  {
    label: "Contact",
    id: "contact",
    icon: Mail,
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
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  bg-slate-100

                  transition-all

                  group-hover:bg-blue-100
                "
              >
                <Icon
                  size={20}
                  className="
                    text-slate-600

                    transition-all

                    group-hover:text-blue-600
                  "
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
