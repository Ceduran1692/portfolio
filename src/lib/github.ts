export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  homepage: string | null;
  archived: boolean;
  fork: boolean;
  created_at: string;
  updated_at: string;
}

export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

const GITHUB_API_URL = 'https://api.github.com';
const REVALIDATE_INTERVAL = 3600;

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const url = `${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=9&type=public`;

  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_INTERVAL },
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'PortfolioWebsite',
    },
  });

  if (!response.ok) {
    const message = `GitHub API error: ${response.status} ${response.statusText}`;
    throw new Error(message);
  }

  const repos: GitHubRepo[] = await response.json();
  return repos;
}

export function filterActiveRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return repos.filter((repo) => !repo.fork && !repo.archived);
}

export function sortReposByStars(repos: GitHubRepo[]): GitHubRepo[] {
  return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
}