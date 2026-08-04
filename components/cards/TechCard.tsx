"use client";

import { motion } from "framer-motion";

import { icons } from "@/lib/icons";

interface Props {
  icon: IconName;
  title: string;
  level: string;
  description: string;

  primary: string[];
  secondary: string[];
}

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
        rounded-[36px]
        border
        border-slate-200
        bg-white
        p-8
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
        <div className="inline-flex rounded-2xl bg-blue-50 p-3">
          {Icon && (
            <Icon
              size={24}
              className="text-blue-600"
            />
          )}
        </div>

        {/* Title */}
        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h3>

          <span
            className="
              rounded-full
              bg-blue-50
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
            "
          >
            {level}
          </span>
        </div>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        {/* Primary */}

        <div className="mt-8 border-t border-slate-100 pt-8">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Primary Skills
          </p>

          <div className="flex flex-wrap gap-3">

            {primary.map((skill, index) => (

              <span
                key={`${skill}-${index}`}
                className="
                  rounded-full
                  bg-blue-600
                  px-4
                  py-2
                  text-sm
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

        <div className="mt-8">

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
                  px-4
                  py-2
                  text-sm
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