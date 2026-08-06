import GithubProfile from "@/components/github/GithubProfile";
import FeaturedRepositories from "@/components/github/FeaturedRepositories";

export default function GithubSection() {
  return (
    <section
      id="github"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Open Source
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            GitHub Activity
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 lg:text-lg">
            A quick overview of my open-source presence, repositories,
            coding activity and technologies.
          </p>

        </div>

        <div className="mt-16">

          <GithubProfile />
          <FeaturedRepositories />

        </div>

      </div>
    </section>
  );
}
