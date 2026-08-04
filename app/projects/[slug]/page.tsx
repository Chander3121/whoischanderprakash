import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectStats from "@/components/project/ProjectStats";
import ProjectProblemSolution from "@/components/project/ProjectProblemSolution";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectArchitecture from "@/components/project/ProjectArchitecture";
import ProjectLearnings from "@/components/project/ProjectLearnings";
import ProjectNavigation from "@/components/project/ProjectNavigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  // Convert Record -> Array
  const projectList = Object.values(projects);

  // Current Project Index
  const currentIndex = projectList.findIndex(
    (p) => p.slug === slug
  );

  // Previous Project
  const previous =
    currentIndex > 0
      ? projectList[currentIndex - 1]
      : undefined;

  // Next Project
  const next =
    currentIndex < projectList.length - 1
      ? projectList[currentIndex + 1]
      : undefined;

  return (
    <main className="pb-40">

      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectStats />

      <ProjectProblemSolution project={project} />

      <ProjectArchitecture project={project} />

      <ProjectFeatures project={project} />

      <ProjectTechStack project={project} />

      <ProjectGallery project={project} />

      <ProjectChallenges project={project} />

      <ProjectLearnings project={project} />

      <ProjectNavigation
        previous={previous}
        next={next}
      />

    </main>
  );
}
