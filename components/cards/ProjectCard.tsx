"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
      group
      overflow-hidden
      rounded-[32px]
      border
      border-slate-200
      bg-white
      shadow-sm
      transition-all
      duration-300
      hover:border-blue-200
      hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden bg-slate-100">

        <Image
          src={image}
          alt={title}
          fill
          className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />

      </div>

      {/* Content */}

      <div className="space-y-6 p-8">

        <div>

          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>

        </div>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="
              rounded-full
              bg-slate-100
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between pt-2">

          <span
            className="
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-blue-600
            "
          >
            Case Study
          </span>

          <ArrowUpRight
            className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            "
          />

        </div>

      </div>
    </motion.article>
  );
}
