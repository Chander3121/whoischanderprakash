"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

import { trackEvent } from "@/lib/analytics";

interface Props {
  project: Project;
}

export default function ProjectShowcaseCard({
  project,
}: Props) {

  const analyticEventFire = () => {

    trackEvent("project_open", {
      project: project.slug,
    });
  };

  return (
    <Link onClick={analyticEventFire} href={`/projects/${project.slug}`}>

      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: .3 }}
        className="
          group
          overflow-hidden
          rounded-[40px]
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
            gap-10
            p-8

            lg:grid-cols-[460px_1fr]
            lg:p-10
          "
        >

          {/* Image */}

          <div
            className="
              relative
              aspect-[16/10]
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

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center">

            <span
              className="
                w-fit
                rounded-full
                bg-blue-50
                px-4
                py-2

                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]

                text-blue-600
              "
            >
              {project.category}
            </span>

            <h2
              className="
                mt-6

                text-3xl
                font-bold
                tracking-tight

                text-slate-900

                lg:text-5xl
              "
            >
              {project.title}
            </h2>

            <p
              className="
                mt-4
                max-w-2xl

                text-lg
                leading-8

                text-slate-600
              "
            >
              {project.tagline}
            </p>

            {/* Tech */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >

              {project.technologies.map((tech, index) => (

                <span
                  key={`${tech}-${index}`}
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
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* CTA */}

            <div
              className="
                mt-10

                inline-flex
                w-fit
                items-center
                gap-2

                text-blue-600
                font-semibold
              "
            >

              Read Case Study

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </div>

          </div>

        </div>

      </motion.article>

    </Link>
  );
}