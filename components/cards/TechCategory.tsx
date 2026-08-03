"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  technologies: string[];
}

export default function TechCategory({
  title,
  technologies,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
      rounded-[30px]
      border
      border-slate-200
      bg-white
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
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
            transition-all
            duration-300
            hover:border-blue-500
            hover:bg-blue-50
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
