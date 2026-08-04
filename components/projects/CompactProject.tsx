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
          shadow-sm
          transition-all
          duration-500
          hover:border-blue-200
          hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]
        "
      >

        {/* Image */}

        <div className="relative aspect-[16/10] overflow-hidden">

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
              from-black/55
              via-black/10
              to-transparent
            "
          />

        </div>

        {/* Content */}

        <div className="p-7">

          <div className="flex items-start justify-between gap-4">

            <div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {project.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {project.tagline}
              </p>

            </div>

            <ArrowUpRight
              className="
                mt-1
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-blue-600
              "
            />

          </div>

          {/* Tech */}

          <div className="mt-6 flex flex-wrap gap-2">

            {project.technologies
              .slice(0, 3)
              .map((tech, index) => (

                <span
                  key={`${tech}-${index}`}
                  className="
                    rounded-full
                    bg-slate-100
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-slate-700
                  "
                >
                  {tech}
                </span>

              ))}

          </div>

        </div>

      </motion.article>

    </Link>
  );
}
