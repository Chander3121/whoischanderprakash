"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function FeaturedProject({
  project,
}: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>

      <motion.article
        whileHover={{
          y: -10,
          scale: 1.01,
        }}
        transition={{
          duration: .35,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-500
          hover:border-blue-200
          hover:shadow-[0_40px_100px_rgba(15,23,42,.12)]
        "
      >

        {/* Image */}

        <div className="relative aspect-[16/8] overflow-hidden">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
            "
          />

          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-[radial-gradient(circle_at_center,rgba(59,130,246,.25),transparent_70%)]
            "
          />

          {/* Category */}

          <div className="absolute left-8 top-8">

            <span
              className="
                rounded-full
                border
                border-white/30
                bg-black/20
                px-5
                py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
                shadow-lg
                backdrop-blur-md
              "
            >
              {project.category}
            </span>

          </div>

          {/* Year */}

          <div className="absolute right-8 top-8">

            <span
              className="
                rounded-full
                border
                border-white/30
                bg-black/20
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                backdrop-blur-md
              "
            >
              {project.year}
            </span>

          </div>

        </div>

        {/* Content */}

        <div className="p-6 sm:p-8 lg:p-10">

          <div className="flex items-center justify-between gap-6">

            <div>

              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.04em] text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 text-xl text-slate-600">
                {project.tagline}
              </p>

            </div>

          </div>

          {/* Tech */}

          <div className="mt-10 flex flex-wrap gap-3">

            {project.technologies.map((tech, index) => (

              <span
                key={`${tech}-${index}`}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-gradient-to-r
                  from-slate-50
                  to-white
                  px-4
                  py-2
                  text-sm
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

        </div>

      </motion.article>

    </Link>
  );
}
