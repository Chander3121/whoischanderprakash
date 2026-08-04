import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { Project } from "@/types/project";

interface Props {
  previous?: Project;
  next?: Project;
}

export default function ProjectNavigation({
  previous,
  next,
}: Props) {
  return (
    <section className="mx-auto mt-40 max-w-7xl px-6">

      <div className="border-t border-slate-200 pt-16">

        <h2 className="text-center text-4xl font-bold tracking-tight">
          Continue Exploring
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-600">
          Discover more projects showcasing backend
          engineering, scalable architecture and
          real-world problem solving.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Previous */}

          {previous ? (

            <Link
              href={`/projects/${previous.slug}`}
              className="
                group
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:border-blue-200
                hover:shadow-[0_25px_60px_rgba(59,130,246,.12)]
              "
            >

              <div className="flex items-center gap-2 text-slate-500">

                <ArrowLeft size={18} />

                Previous Project

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {previous.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {previous.shortDescription}
              </p>

            </Link>

          ) : (
            <div />
          )}

          {/* Next */}

          {next ? (

            <Link
              href={`/projects/${next.slug}`}
              className="
                group
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                text-right
                transition-all
                duration-300
                hover:border-blue-200
                hover:shadow-[0_25px_60px_rgba(59,130,246,.12)]
              "
            >

              <div className="flex items-center justify-end gap-2 text-slate-500">

                Next Project

                <ArrowRight size={18} />

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {next.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {next.shortDescription}
              </p>

            </Link>

          ) : (
            <div />
          )}

        </div>

      </div>

    </section>
  );
}
