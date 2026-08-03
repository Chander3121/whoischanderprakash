"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
      group
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
      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>

        <ArrowUpRight
          className="
          transition-transform
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          "
        />
      </div>

      <p className="mt-6 leading-8 text-slate-600">
        {description}
      </p>
    </motion.article>
  );
}
