'use client';

import { Star, GitFork, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useScrollReveal } from '@/hooks';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

interface ProjectsProps {
  repositories: Repository[];
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

function RepoCard({ repo, index }: { repo: Repository; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group p-6 glass rounded-2xl hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <GithubIcon size={20} className="text-zinc-500" />
          <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors truncate max-w-[180px]">
            {repo.name}
          </h3>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 glass rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-indigo-500/50"
          aria-label="Ver en GitHub"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p className="text-zinc-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
        {repo.description || 'Sin descripción'}
      </p>

      <div className="flex items-center gap-4 text-sm text-zinc-400">
        {repo.language && (
          <span className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: languageColors[repo.language] || '#6e7681' }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={14} className="text-yellow-500" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={14} />
          {repo.forks_count}
        </span>
      </div>

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects({ repositories }: ProjectsProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 font-medium mb-2 tracking-wider">TRABAJO RECIENTE</p>
          <h2 className="text-4xl font-bold">Proyectos en GitHub</h2>
        </div>

        {repositories.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass rounded-2xl">
            <p className="text-zinc-500">No se pudieron cargar los proyectos</p>
          </div>
        )}
      </div>
    </section>
  );
}