"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MapPin } from "lucide-react";

const icons = {
  mail: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  location: MapPin,
} as const;

type IconType = keyof typeof icons;

interface Props {
  icon: IconType;
  title: string;
  value: string;
  href: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
}: Props) {
  const Icon = icons[icon];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : "_blank"}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="
          flex
          group
          items-start
          gap-3
          sm:gap-4
          rounded-[24px]
          lg:rounded-[28px]
          border
          border-slate-200
          bg-white
          p-5
          sm:p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-xl
        "
      >
        <div className="
          rounded-xl
          bg-blue-50
          p-2.5

          text-blue-600

          transition-all
          duration-300

          group-hover:scale-110
          group-hover:bg-blue-600
          group-hover:text-white

          sm:rounded-2xl
          sm:p-3
        ">
          <Icon size={20} />
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-slate-500 sm:text-sm">
            {title}
          </p>

          <p className="mt-1 break-all text-sm sm:text-base font-medium text-slate-900">
            {value}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
