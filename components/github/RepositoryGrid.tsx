import RepositoryCard from "./RepositoryCard";

import { GithubRepository } from "@/types/github";

interface Props {
  repositories: GithubRepository[];
}

export default function RepositoryGrid({
  repositories,
}: Props) {
  return (
    <div className="mt-12 lg:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
        />
      ))}
    </div>
  );
}
