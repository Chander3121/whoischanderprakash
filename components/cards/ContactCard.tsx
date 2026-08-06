"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MapPin } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const icons = {
  mail: {
    icon: SiGmail,
    color: "text-red-500",
    bg: "bg-red-50",
    hoverBg: "group-hover:bg-red-500",
  },
  github: {
    icon: FaGithub,
    color: "text-slate-900 dark:text-white",
    bg: "bg-slate-100",
    hoverBg: "group-hover:bg-slate-900",
  },
  linkedin: {
    icon: FaLinkedin,
    color: "text-[#0A66C2]",
    bg: "bg-[#E8F3FF]",
    hoverBg: "group-hover:bg-[#0A66C2]",
  },
  location: {
    icon: MapPin,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    hoverBg: "group-hover:bg-emerald-600",
  },
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
  const { icon: Icon, color, bg, hoverBg } = icons[icon];

  const handleClick = () => {
    switch (icon) {
      case "github":
        trackEvent("github_click", {
          source: "contact_section",
        });
        break;

      case "linkedin":
        trackEvent("linkedin_click", {
          source: "contact_section",
        });
        break;

      case "mail":
        trackEvent("email_click", {
          source: "contact_section",
        });
        break;

      case "location":
        trackEvent("location_click", {
          source: "contact_section",
        });
        break;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="
          group
          flex
          items-start
          gap-3
          rounded-[24px]
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-xl
          sm:gap-4
          sm:p-6
          lg:rounded-[28px]
        "
      >
        <div
          className={`
            rounded-xl
            p-2.5
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-white
            sm:rounded-2xl
            sm:p-3
            ${bg}
            ${color}
            ${hoverBg}
          `}
        >
          <Icon size={20} />
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-slate-500 sm:text-sm">
            {title}
          </p>

          <p className="mt-1 break-all text-sm font-medium text-slate-900 sm:text-base">
            {value}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
