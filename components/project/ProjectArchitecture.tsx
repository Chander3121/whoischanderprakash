import SectionHeading from "./SectionHeading";
import ArchitectureNode from "./ArchitectureNode";
import ArchitectureHighlights from "./ArchitectureHighlights";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectArchitecture({
  project,
}: Props) {
  return (
    <>
      <section className="mx-auto mt-36 max-w-7xl px-6">

        <SectionHeading
          subtitle="Engineering"
          title="System Architecture"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
          High-level architecture showing how each layer
          communicates to build a scalable backend system.
        </p>

        <div className="mt-24 flex flex-col items-center">

          <ArchitectureNode
            title={project.architecture.frontend}
            subtitle="Frontend"
          />

          {/* Line */}

          <div className="flex h-14 items-center">
            <div className="h-14 w-px bg-gradient-to-b from-blue-400 to-slate-200" />
          </div>

          <ArchitectureNode
            title={project.architecture.api}
            subtitle="Gateway"
          />

          <div className="flex h-14 items-center">
            <div className="h-14 w-px bg-gradient-to-b from-blue-400 to-slate-200" />
          </div>

          <ArchitectureNode
            title={project.architecture.backend}
            subtitle="Business Logic"
          />

          {/* Horizontal Connector */}

          <div className="relative mt-14 w-full max-w-5xl">

            <div className="absolute left-0 right-0 top-0 h-px bg-slate-300" />

            <div className="grid gap-6 pt-10 md:grid-cols-4">

              {project.architecture.services.map((service) => (

                <ArchitectureNode
                  key={service.title}
                  title={service.title}
                  subtitle={service.subtitle}
                />

              ))}

            </div>

          </div>

        </div>

        <ArchitectureHighlights
          highlights={project.architecture.highlights}
        />

      </section>

      <div className="mx-auto mt-16 max-w-4xl rounded-[28px] border border-blue-100 bg-blue-50/50 p-8">

        <h3 className="text-xl font-bold">
          Engineering Decisions
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          {project.architecture.decisions}
        </p>

      </div>
    </>
  );
}
