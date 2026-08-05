"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function CompactProject({
  project,
}: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        whileHover={{
          y: -6,
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
          shadow-sm
          transition-all
          duration-500
          hover:border-blue-200
          hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]
        "
      >
        <div
          className="
            grid
            gap-6
            p-6

            lg:grid-cols-[170px_1fr]
            lg:items-center
          "
        >
          {/* Image */}

          <div
            className="
              relative
              aspect-[4/3]
              overflow-hidden
              rounded-3xl
            "
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/25
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* Content */}

          <div>
            {/* Category */}

            <span
              className="
                inline-flex
                rounded-full
                bg-blue-50
                px-3
                py-1

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]

                text-blue-600
              "
            >
              {project.category}
            </span>

            {/* Title */}

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-slate-900
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  {project.tagline}
                </p>
              </div>

            </div>

            {/* Tech */}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="
                    rounded-full

                    border
                    border-slate-200

                    bg-slate-50

                    px-3
                    py-1.5

                    text-xs
                    font-medium
                    text-slate-700

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

            {/* CTA */}

            <div
              className="
                mt-6

                inline-flex
                items-center
                gap-2

                text-sm
                font-semibold
                text-blue-600
              "
            >
              View Project

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
