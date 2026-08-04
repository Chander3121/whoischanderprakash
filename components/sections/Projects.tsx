import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projectList = Object.values(projects);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-36"
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-blue-100/40
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Featured Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-[-0.04em] text-slate-900 lg:text-6xl">
            Engineering products
            that solve real problems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From scalable backend systems to production-ready SaaS applications, these projects showcase how I approach architecture, performance and user experience.
          </p>

        </div>

        <ProjectsGrid projects={projectList} />

        <div className="mt-16 flex justify-center">

          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-7
              py-3
              font-medium
              transition-all
              duration-300
              hover:border-blue-200
              hover:bg-blue-50
            "
          >
            View All Projects

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
    </section>
  );
}
