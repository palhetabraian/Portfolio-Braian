import { useEffect, useState } from 'react';

import { githubProjectsFallback } from '@/data/githubProjectsFallback';
import { getGithubProjects } from '@/services/github';
import type { GithubProject } from '@/types/github';
import {
  getCachedGithubProjects,
  setCachedGithubProjects,
} from '@/utils/githubProjectsCache';

type GithubProjectsState = {
  projects: GithubProject[];
  isLoading: boolean;
  error: string | null;
  isUsingFallback: boolean;
};

export function useGithubProjects() {
  const [state, setState] = useState<GithubProjectsState>({
    projects: [],
    isLoading: true,
    error: null,
    isUsingFallback: false,
  });

  useEffect(() => {
    let shouldUpdateState = true;

    async function loadGithubProjects() {
      const cachedProjects = getCachedGithubProjects();

      if (cachedProjects) {
        setState({
          projects: cachedProjects,
          isLoading: false,
          error: null,
          isUsingFallback: false,
        });

        return;
      }

      try {
        const projects = await getGithubProjects();

        if (!shouldUpdateState) {
          return;
        }

        setCachedGithubProjects(projects);

        setState({
          projects,
          isLoading: false,
          error: null,
          isUsingFallback: false,
        });
      } catch {
        if (!shouldUpdateState) {
          return;
        }

        setState({
          projects: githubProjectsFallback,
          isLoading: false,
          error: null,
          isUsingFallback: true,
        });
      }
    }

    loadGithubProjects();

    return () => {
      shouldUpdateState = false;
    };
  }, []);

  return state;
}
