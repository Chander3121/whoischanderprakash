import {
  GithubProfile,
  GithubRepository,
  GithubStats,
  GithubApiRepository,
  GithubApiFeaturedRepository,
} from "@/types/github";

const GITHUB_API = "https://api.github.com";

const USERNAME = process.env.GITHUB_USERNAME!;
const TOKEN = process.env.GITHUB_TOKEN!;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
};

if (TOKEN) {
  headers.Authorization = `Bearer ${TOKEN}`;
}

const fetchOptions = {
  headers,
  next: {
    revalidate: 3600,
  },
} as const;

export async function getGithubProfile(): Promise<GithubProfile> {
  const response = await fetch(
    `${GITHUB_API}/users/${USERNAME}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile.");
  }

  const profile = await response.json();

  return {
    login: profile.login,
    name: profile.name,
    avatar: profile.avatar_url,
    bio: profile.bio,
    location: profile.location,
    website: profile.blog,
    profileUrl: profile.html_url,
    followers: profile.followers,
    following: profile.following,
    publicRepos: profile.public_repos,
    publicGists: profile.public_gists,
    createdAt: profile.created_at,
    updatedAt: profile.updated_at,
  };
}

export async function getGithubStats(): Promise<GithubStats> {
  const [repositoriesResponse, profile] = await Promise.all([
    fetch(
      `${GITHUB_API}/users/${USERNAME}/repos?per_page=100`,
      fetchOptions
    ),
    getGithubProfile(),
  ]);

  if (!repositoriesResponse.ok) {
    throw new Error("Failed to fetch GitHub repositories.");
  }

  const repositories: GithubApiRepository[] =
  await repositoriesResponse.json();

  const totalStars = repositories.reduce(
    (sum, repository) => sum + repository.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (sum, repository) => sum + repository.forks_count,
    0
  );

  return {
    totalStars,
    totalForks,
    publicRepos: profile.publicRepos,
    followers: profile.followers,
  };
}

export async function getFeaturedRepositories(): Promise<GithubRepository[]> {
  const response = await fetch(
    `${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=3`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories.");
  }

  const repositories: GithubApiFeaturedRepository[] =
  await response.json();

  return repositories.map((repository: any) => ({
    id: repository.id,
    name: repository.name,
    description: repository.description,
    htmlUrl: repository.html_url,
    homepage: repository.homepage,
    language: repository.language,
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    updatedAt: repository.updated_at,
  }));
}
