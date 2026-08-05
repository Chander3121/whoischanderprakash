import { Metadata } from "next";

import { projects } from "@/data/projects";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",

  description:
    "Explore production-ready backend systems, marketplaces, APIs and full-stack applications built by Chander Kumar.",
};

export default function ProjectsPage() {
  const projectList = Object.values(projects);

  return (
    <main className="pb-32">

      <ProjectsHero
        totalProjects={projectList.length}
      />
      <div className="p-8">
        <ProjectsGrid
          projects={projectList}
          showSectionTitles
        />
      </div>

    </main>
  );
}
