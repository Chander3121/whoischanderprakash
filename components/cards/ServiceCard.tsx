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
      rounded-[28px]
      lg:rounded-[30px]
      border
      border-slate-200
      bg-white
      p-6
      lg:p-8
      shadow-sm
      transition-all
      duration-300
      hover:border-blue-200
      hover:shadow-xl
      "
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="
      		text-xl
      		font-bold
      		leading-tight
      		tracking-tight
      		text-slate-900

      		sm:text-2xl
      		"
        >
          {title}
        </h3>

        <ArrowUpRight
          className="
          transition-transform
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          "
          size={20}
        />
      </div>

      <p className="
        mt-4

        text-sm
        leading-7
        text-slate-600

        sm:mt-5
        sm:text-base
        sm:leading-8
        "
      >
        {description}
      </p>
    </motion.article>
  );
}
