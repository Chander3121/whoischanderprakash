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
          items-start
          gap-4
          rounded-[28px]
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-xl
        "
      >
        <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
          <Icon size={22} />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="mt-1 break-all font-medium text-slate-900">
            {value}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
