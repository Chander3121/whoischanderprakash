"use client";

import { motion } from "framer-motion";

import ProjectShowcaseCard from "./ProjectShowcaseCard";
import CompactProject from "./CompactProject";
import ProjectsSectionTitle from "./ProjectsSectionTitle";

import { Project } from "@/types/project";

interface Props {
  projects: Project[];
  showSectionTitles?: boolean;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectsGrid({
  projects,
  showSectionTitles = false,
}: Props) {
  const featured = projects.find(
    (project) => project.layout === "featured"
  );

  const compact = projects.filter(
    (project) => project.layout === "compact"
  );

  console.log("featured: ", featured)
  console.log("compact: ", compact)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-20 space-y-8"
    >
      {featured && (
        <>
          {showSectionTitles && (
            <ProjectsSectionTitle
              title="Case Study"
              subtitle="A deep dive into one of my favorite engineering projects."
            />
          )}

          <motion.div variants={item}>
            <ProjectShowcaseCard
              project={featured}
            />
          </motion.div>
        </>
      )}

      {compact.length > 0 && (
        <>
          {showSectionTitles && (
            <ProjectsSectionTitle
              title="More Projects"
              subtitle="Production-ready applications built across different domains."
            />
          )}
          <div className="grid gap-8 md:grid-cols-2">
            {compact.map((project) => (
              <motion.div
                key={project.slug}
                variants={item}
              >
                <CompactProject project={project} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
