"use client";

import { motion } from "framer-motion";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  top: string;
  left: string;
  delay: number;
}

export default function FloatingCard({
  title,
  subtitle,
  top,
  left,
  delay,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
      }}
      style={{
        top,
        left,
      }}
      className="
        group
        absolute

        min-w-[220px]

        rounded-[24px]

        border
        border-white/70

        bg-white/70

        px-5
        py-4

        backdrop-blur-xl

        shadow-[0_20px_50px_rgba(15,23,42,0.08)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-blue-200
        hover:bg-white/90
        hover:shadow-[0_30px_80px_rgba(59,130,246,.16)]
      "
    >
      {/* Accent */}

      <div
        className="
          mb-3
          h-1.5
          w-10
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-sky-400
        "
      />

      <h3
        className="
          text-base
          font-semibold
          tracking-tight
          text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1
          text-sm
          leading-6
          text-slate-500
        "
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
