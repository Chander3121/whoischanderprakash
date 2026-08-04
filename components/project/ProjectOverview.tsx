import { CheckCircle2, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectOverview({
  project,
}: Props) {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">

      <SectionHeading
        subtitle="Overview"
        title="Project Summary"
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p className="text-lg leading-8 text-slate-600">
            {project.overview}
          </p>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-8">

            <div className="flex items-center gap-3">

              <Target
                size={22}
                className="text-blue-600"
              />

              <h3 className="text-xl font-bold">
                Project Goals
              </h3>

            </div>

            <div className="mt-6 space-y-4">

              {project.goals.map((goal, index) => (

                <div
                  key={`${goal}-${index}`}
                  className="flex gap-4"
                >

                  <CheckCircle2
                    size={20}
                    className="mt-1 text-blue-600"
                  />

                  <p className="leading-7 text-slate-600">
                    {goal}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

          <h3 className="text-xl font-bold">
            Key Outcomes
          </h3>

          <div className="mt-8 space-y-5">

            {project.outcomes.map((item, index) => (

              <div
                key={`${item}-${index}`}
                className="flex gap-4"
              >

                <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />

                <p className="leading-7 text-slate-600">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
