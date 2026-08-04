import SectionHeading from "./SectionHeading";
import ChallengeCard from "./ChallengeCard";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectChallenges({
  project,
}: Props) {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <SectionHeading
        subtitle="Engineering"
        title="Technical Challenges"
      />

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
        Some of the real engineering problems encountered
        during development and how they were solved.
      </p>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        {project.challenges.map((challenge, index) => (

          <ChallengeCard
            key={`${challenge.title}-${index}`}
            {...challenge}
          />

        ))}

      </div>

    </section>
  );
}
