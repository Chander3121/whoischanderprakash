import SectionHeading from "./SectionHeading";
import LearningCard from "./LearningCard";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectLearnings({
  project,
}: Props) {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <SectionHeading
        subtitle="Reflection"
        title="Key Engineering Takeaways"
      />

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
        The most valuable lessons learned while designing
        and building this application.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {project.learnings.map((learning, index) => (

          <LearningCard
            key={`${learning.title}-${index}`}
            {...learning}
          />

        ))}

      </div>

    </section>
  );
}
