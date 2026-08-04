"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Calendar,
  BriefcaseBusiness,
  Users,
  BadgeCheck,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

const stats = [
  {
    key: "role",
    icon: BriefcaseBusiness,
    label: "Role",
  },
  {
    key: "duration",
    icon: Calendar,
    label: "Duration",
  },
  {
    key: "teamSize",
    icon: Users,
    label: "Team",
  },
  {
    key: "status",
    icon: BadgeCheck,
    label: "Status",
  },
] as const;

export default function ProjectHero({
  project,
}: Props) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-blue-100/40
          blur-[150px]
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Back */}

        <Link
          href="/#projects"
          className="
            inline-flex
            items-center
            gap-2
            text-slate-500
            transition
            hover:text-blue-600
          "
        >
          <ArrowLeft size={18} />

          Back to Projects
        </Link>

        {/* Header */}

        <div className="mt-12">

          <div className="flex flex-wrap items-center gap-4">

            <span
              className="
                rounded-full
                bg-blue-50
                px-5
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

            <span className="text-slate-400">
              {project.year}
            </span>

          </div>

          <h1
            className="
              mt-8
              text-6xl
              font-bold
              tracking-[-0.05em]
              text-slate-900
              lg:text-7xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-6
              text-2xl
              text-slate-600
            "
          >
            {project.tagline}
          </p>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            {project.description}
          </p>

        </div>

        {/* Tech */}

        <div className="mt-12 flex flex-wrap gap-3">

          {project.technologies.map((tech, index) => (

            <span
              key={`${tech}-${index}`}
              className="
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                py-2
                text-sm
                font-medium
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Screenshot */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            shadow-[0_35px_80px_rgba(15,23,42,.10)]
          "
        >

          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="w-full object-cover"
            priority
          />

        </div>

        {/* Stats */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                "
              >

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-blue-50 p-3">

                    <Icon
                      size={20}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      {item.label}
                    </p>

                    <h3 className="font-semibold text-slate-900">
                      {project[item.key]}
                    </h3>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
