import Projects from './Projects';
import { fetchGitHubRepos, filterActiveRepos } from '@/lib/github';
import { socialLinks } from '@/lib/env';

function getGitHubUsername(): string {
  const githubLink = socialLinks.find((link) => link.platform === 'github');
  if (!githubLink) return 'Ceduran1692';
  
  const match = githubLink.url.match(/github\.com\/(.+?)(?:\/|$)/);
  return match ? match[1] : 'Ceduran1692';
}

async function getGitHubRepos() {
  try {
    const username = getGitHubUsername();
    const repos = await fetchGitHubRepos(username);
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