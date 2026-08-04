import {
  CircleAlert,
  Lightbulb,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectProblemSolution({
  project,
}: Props) {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-6">

      <SectionHeading
        subtitle="Case Study"
        title="From Problem to Solution"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        {/* Problem */}

        <div
          className="
            rounded-[36px]
            border
            border-red-100
            bg-gradient-to-br
            from-red-50
            to-white
            p-10
          "
        >
          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-red-100 p-3">
              <CircleAlert
                size={24}
                className="text-red-600"
              />
            </div>

            <h3 className="text-2xl font-bold">
              The Problem
            </h3>

          </div>

          <p className="mt-8 leading-8 text-slate-600">
            {project.problem}
          </p>

        </div>

        {/* Solution */}

        <div
          className="
            rounded-[36px]
            border
            border-blue-100
            bg-gradient-to-br
            from-blue-50
            to-white
            p-10
          "
        >
          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-blue-100 p-3">
              <Lightbulb
                size={24}
                className="text-blue-600"
              />
            </div>

            <h3 className="text-2xl font-bold">
              The Solution
            </h3>

          </div>

          <p className="mt-8 leading-8 text-slate-600">
            {project.solution}
          </p>

        </div>

      </div>

    </section>
  );
}
