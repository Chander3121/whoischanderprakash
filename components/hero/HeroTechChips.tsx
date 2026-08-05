"use client";

import { motion } from "framer-motion";

const technologies = [
  "Ruby on Rails",
  "Golang",
  "PostgreSQL",
  "Docker",
  "Redis",
  "GraphQL",
];

export default function HeroTechChips() {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        justify-center
        gap-3

        lg:justify-start
      "
    >
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            rounded-full
            border
            border-white/70
            bg-white/70

            px-4
            py-2

            text-sm
            font-medium
            text-slate-700

            backdrop-blur-xl
            shadow-sm

            transition-all
            duration-300

            hover:border-blue-200
            hover:bg-white
            hover:shadow-lg
          "
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
