"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function ArchitectureNode({
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: .25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-gradient-to-br
		from-white
		to-slate-50
        px-8
        py-6
        shadow-[0_20px_50px_rgba(15,23,42,.08)]
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(59,130,246,.12)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,.15),transparent_70%)]
        "
      />

      <div className="relative">

        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>

      </div>

    </motion.div>
  );
}
