"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Experience } from "@/data/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        overflow-hidden
        rounded-[36px]
        border
        border-slate-200
        bg-white
        p-6
        lg:p-10
        shadow-sm
        transition-all
        duration-500
        hover:border-blue-200
        hover:shadow-[0_35px_90px_rgba(15,23,42,.10)]
      "
    >
      {/* Header */}

      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">

        <div>

          <p className="text-xs lg:text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            {experience.role}
          </p>

          <h3 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight tracking-[-0.04em] text-slate-900">
            {experience.company}
          </h3>

          <p className="mt-3 text-base lg:text-lg text-slate-600">
            {experience.location}
          </p>

        </div>

        <div className="flex flex-col items-start lg:items-end">

          <span
            className="
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-5
              py-2

              text-xs
              lg:text-sm
              font-medium
            "
          >
            {experience.employmentType}
          </span>

          <p className="mt-4 text-xs lg:text-sm text-slate-500">
            {experience.duration}
          </p>

        </div>

      </div>

      {/* Tech */}

      <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-8">

        {experience.technologies.map((tech) => (

          <span
            key={tech}
            className="
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-3
              lg:px-4
              py-1.5
              lg:py-2
              text-xs
              lg:text-sm
              font-medium
              transition-all
              duration-300
              group-hover:border-blue-200
              group-hover:bg-blue-50
            "
          >
            {tech}
          </span>

        ))}

      </div>

      {/* Achievements */}

      <div className="mt-10 rounded-[28px] bg-slate-50 p-5 lg:p-8 space-y-4">

        {experience.achievements.map((achievement) => (

          <div
            key={achievement}
            className="flex items-start gap-4"
          >

            <CheckCircle2
  				    strokeWidth={2.5}
              size={22}
              className="mt-1 shrink-0 text-blue-600"
            />

            <p className="leading-7 lg:leading-8 text-sm lg:text-base text-slate-600">
              {achievement}
            </p>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-8">

        <span
          className="
            text-xs
            lg:text-sm
            font-semibold
            uppercase
            tracking-[0.20em]
            text-blue-600
          "
        >
          Backend Engineering
        </span>

        <ArrowUpRight
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
        />

      </div>

    </motion.article>
  );
}
