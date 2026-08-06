export interface GithubProfile {
  login: string;
  name: string;
  avatar: string;
  bio: string;
  location: string | null;
  website: string | null;
  profileUrl: string;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  createdAt: string;
  updatedAt: string;
}

export interface GithubStats {
  totalStars: number;
  totalForks: number;
  publicRepos: number;
  followers: number;
}

export interface GithubApiRepository {
  stargazers_count: number;
  forks_count: number;
}
export interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

export interface GithubApiFeaturedRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}
