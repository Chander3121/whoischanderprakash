import { Project } from "@/types/project";
import SectionHeading from "./SectionHeading";

interface Props {
  project: Project;
}

export default function ProjectTechStack({
  project,
}: Props) {
  const sections = [
    {
      title: "Backend",
      data: project.techStack.backend,
    },
    {
      title: "Frontend",
      data: project.techStack.frontend,
    },
    {
      title: "Database",
      data: project.techStack.database,
    },
    {
      title: "Infrastructure",
      data: project.techStack.infrastructure,
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">

      <SectionHeading
        subtitle="Engineering"
        title="Technology Stack"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {sections.map((section) => (
          <div
            key={section.title}
            className="
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
            "
          >
            <h3 className="text-xl font-bold">
              {section.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">

              {section.data.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    bg-slate-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
