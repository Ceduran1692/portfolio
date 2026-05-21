import Projects from './Projects';
import { fetchGitHubRepos, filterActiveRepos } from '@/lib/github';

async function getGitHubRepos() {
  try {
    const repos = await fetchGitHubRepos('Ceduran1692');
    return filterActiveRepos(repos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export default async function ProjectsSection() {
  const repositories = await getGitHubRepos();
  return <Projects repositories={repositories} />;
}