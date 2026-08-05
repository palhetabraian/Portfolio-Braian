import type { GithubProject } from '@/types/github';

const cacheKey = 'braian-dev-github-projects';
const cacheDurationInMilliseconds = 1000 * 60 * 60 * 6;

type GithubProjectsCache = {
  projects: GithubProject[];
  createdAt: number;
};

export function getCachedGithubProjects() {
  const cachedValue = localStorage.getItem(cacheKey);

  if (!cachedValue) {
    return null;
  }

  try {
    const parsedCache = JSON.parse(cachedValue) as GithubProjectsCache;
    const cacheAge = Date.now() - parsedCache.createdAt;
    const isCacheExpired = cacheAge > cacheDurationInMilliseconds;

    if (isCacheExpired) {
      localStorage.removeItem(cacheKey);

      return null;
    }

    return parsedCache.projects;
  } catch {
    localStorage.removeItem(cacheKey);

    return null;
  }
}

export function setCachedGithubProjects(projects: GithubProject[]) {
  const cache: GithubProjectsCache = {
    projects,
    createdAt: Date.now(),
  };

  localStorage.setItem(cacheKey, JSON.stringify(cache));
}
