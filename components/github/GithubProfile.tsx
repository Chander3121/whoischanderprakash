import GithubProfileCard from "./GithubProfileCard";

import { getGithubProfile } from "@/lib/github";

export default async function GithubProfile() {
  const profile = await getGithubProfile();

  return (
    <GithubProfileCard profile={profile} />
  );
}
