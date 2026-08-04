"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

import { ProjectLearning } from "@/types/project";

export default function LearningCard({
  title,
  description,
}: ProjectLearning) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: .25,
      }}
      className="
        group
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(59,130,246,.12)]
      "
    >
      <div className="inline-flex rounded-2xl bg-yellow-50 p-3">

        <Lightbulb
          size={22}
          className="text-yellow-600"
        />

      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </motion.article>
  );
}
