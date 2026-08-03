"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface TimelineItemProps {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  role,
  company,
  description,
  achievements,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[140px_40px_1fr]"
    >
      {/* Year */}

      <div className="flex items-start">
        <span className="text-lg font-semibold tracking-wide text-blue-600">
          {year}
        </span>
      </div>

      {/* Timeline */}

      <div className="relative hidden md:flex justify-center">
        <span className="z-10 h-4 w-4 rounded-full bg-blue-600 ring-8 ring-blue-100" />

        {!isLast && (
          <span className="absolute top-4 h-full w-px bg-slate-200" />
        )}
      </div>

      {/* Card */}

      <div
        className="
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        "
      >
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
          {company}
        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          {role}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          {description}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-blue-600"
              />

              <span className="text-slate-700">
                {achievement}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
