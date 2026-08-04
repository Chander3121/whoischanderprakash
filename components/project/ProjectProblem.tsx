import { Project } from "@/types/project";
import SectionHeading from "./SectionHeading";

interface Props {
  project: Project;
}

export default function ProjectProblem({
  project,
}: Props) {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">

      <SectionHeading
        subtitle="Challenge"
        title="The Problem"
      />

      <div
        className="
          rounded-[32px]
          border
          border-red-100
          bg-red-50
          p-10
        "
      >
        <p className="text-lg leading-9 text-slate-700">
          {project.problem}
        </p>

      </div>

    </section>
  );
}
