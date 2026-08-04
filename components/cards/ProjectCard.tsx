"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>

      <motion.article
        whileHover={{ y: -10 }}
        transition={{ duration: .3 }}
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
          hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]
        "
      >

        {/* Image */}

        <div className="relative aspect-[16/10] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/35
              via-transparent
              to-transparent
            "
          />

          {/* Badges */}

          <div className="absolute left-6 top-6">

            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/15
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.20em]
                text-white
                backdrop-blur-xl
              "
            >
              Marketplace
            </span>

          </div>

          <div className="absolute right-6 top-6">

            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/15
                px-4
                py-2
                text-xs
                font-semibold
                text-white
                backdrop-blur-xl
              "
            >
              2026
            </span>

          </div>

        </div>

        {/* Content */}

        <div className="p-8">

          <h3 className="text-3xl font-bold tracking-tight text-slate-900">

            {title}

          </h3>

          <p className="mt-4 leading-8 text-slate-600">

            {description}

          </p>

          {/* Tech */}

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
                  group-hover:border-blue-200
                  group-hover:bg-blue-50
                "
              >
                {tech}
              </span>

            ))}

          </div>

          {/* Footer */}

          <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.20em]
                text-blue-600
              "
            >
              Read Case Study
            </span>

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-slate-100
                transition-all
                duration-300
                group-hover:bg-blue-600
              "
            >

              <ArrowUpRight
                size={20}
                className="
                  text-slate-700
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              />

            </div>

          </div>

        </div>

      </motion.article>

    </Link>
  );
}
