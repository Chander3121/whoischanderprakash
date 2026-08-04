"use client";

import { motion } from "framer-motion";
import { CircleAlert, CheckCircle2 } from "lucide-react";

import { ProjectChallenge } from "@/types/project";

export default function ChallengeCard({
  title,
  problem,
  solution,
}: ProjectChallenge) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: .25 }}
      className="
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
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="mt-8 space-y-8">

        <div className="flex gap-4">

          <div className="rounded-xl bg-red-50 p-3">
            <CircleAlert
              size={20}
              className="text-red-500"
            />
          </div>

          <div>
            <h4 className="font-semibold">
              Problem
            </h4>

            <p className="mt-2 leading-7 text-slate-600">
              {problem}
            </p>
          </div>

        </div>

        <div className="flex gap-4">

          <div className="rounded-xl bg-green-50 p-3">
            <CheckCircle2
              size={20}
              className="text-green-600"
            />
          </div>

          <div>
            <h4 className="font-semibold">
              Solution
            </h4>

            <p className="mt-2 leading-7 text-slate-600">
              {solution}
            </p>
          </div>

        </div>

      </div>

    </motion.article>
  );
}
