import { getGithubStats } from "@/lib/github";

import GithubStatsGrid from "./GithubStatsGrid";

export default async function GithubStats() {
  const stats = await getGithubStats();

  return (
    <GithubStatsGrid stats={stats} />
  );
}
