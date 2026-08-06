import RepositoryGrid from "./RepositoryGrid";

import { getFeaturedRepositories } from "@/lib/github";

export default async function FeaturedRepositories() {
  const repositories = await getFeaturedRepositories();

  return (
    <RepositoryGrid repositories={repositories} />
  );
}
