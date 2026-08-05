"use client";

import { motion } from "framer-motion";

import {
  icons,
  type IconName,
} from "@/lib/icons";

interface Props {
  icon: IconName;
  title: string;
  level: string;
  description: string;

  primary: string[];
  secondary: string[];
}

const levelStyles = {
  Advanced: "bg-blue-50 text-blue-600",
  Intermediate: "bg-emerald-50 text-emerald-600",
  Learning: "bg-orange-50 text-orange-600",
};

export default function TechCard({
  icon,
  title,
  level,
  description,
  primary,
  secondary
}: Props) {
  const Icon = icons[icon];

  console.log("icon =", icon);
  console.log("Icon =", Icon);

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        lg:rounded-[36px]
        border
        border-slate-200
        bg-white
        p-6
        lg:p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -right-12
          -top-12
          h-40
          w-40
          rounded-full
          bg-blue-100/60
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative">
        {/* Icon */}
        <div className="inline-flex rounded-2xl bg-blue-50 p-2.5 lg:p-3">
          {Icon && (
            <Icon
              size={20}
              className="h-5 w-5 text-blue-600 lg:h-6 lg:w-6"
            />
          )}
        </div>

        {/* Title */}
        <div className="mt-5 flex items-start justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h3>

          <span
            className={`
              rounded-full
              bg-blue-50
              px-2.5
              sm:px-3
              py-1
              text-[10px]
              sm:text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
              ${levelStyles[level]}
            `}
          >
            {level}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>

        {/* Primary */}

        <div className="mt-6 lg:mt-8 border-t border-slate-100 pt-6 lg:pt-8">

          <p className="mb-3 lg:mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Primary Skills
          </p>

          <div className="flex flex-wrap gap-3">

            {primary.map((skill, index) => (

              <span
                key={`${skill}-${index}`}
                className="
                  rounded-full
                  bg-blue-600
                  px-3
                  sm:px-4
                  py-1.5
                  sm:py-2
                  text-xs
                  sm:text-sm
                  font-medium
                  text-white
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

        {/* Secondary */}

        <div className="mt-6 lg:mt-8">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Also Worked With
          </p>

          <div className="flex flex-wrap gap-3">

            {secondary.map((skill, index) => (

              <span
                key={`${skill}-${index}`}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-3
                  sm:px-4
                  py-1.5
                  sm:py-2
                  text-xs
                  sm:text-sm
                  font-medium
                  text-slate-700
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>
      </div>
    </motion.div>
  );
}