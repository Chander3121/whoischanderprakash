import {
  Star,
  GitFork,
  FolderGit2,
  Users,
} from "lucide-react";

import { GithubStats } from "@/types/github";

interface Props {
  stats: GithubStats;
}

export default function GithubStatsGrid({
  stats,
}: Props) {
  const items = [
    {
      label: "Total Stars",
      value: stats.totalStars,
      icon: Star,
    },
    {
      label: "Total Forks",
      value: stats.totalForks,
      icon: GitFork,
    },
    {
      label: "Repositories",
      value: stats.publicRepos,
      icon: FolderGit2,
    },
    {
      label: "Followers",
      value: stats.followers,
      icon: Users,
    },
  ];

  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-[24px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
            "
          >
            <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3">
              <Icon
                size={22}
                className="text-blue-600"
              />
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
