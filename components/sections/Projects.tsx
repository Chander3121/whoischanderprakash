import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Featured Work
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Projects I've built over the last 3+ years.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A selection of backend systems and full-stack applications
            focused on scalability, performance, and real-world business
            problems.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}

        </div>

      </div>
    </section>
  );
}
