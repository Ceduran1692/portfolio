import Projects from './Projects';
import { fetchGitHubRepos } from '@/lib/github';

async function getGitHubRepos() {
  try {
    const repos = await fetchGitHubRepos('Ceduran1692');
    return repos.filter((repo) => !repo.fork && !repo.archived);
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}

export default async function ProjectsSection() {
  const repositories = await getGitHubRepos();
  return <Projects repositories={repositories} />;
}