import { useEffect, useState } from 'react';

import { getGithubProjects } from '@/services/github';
import type { GithubProject } from '@/types/github';

type GithubProjectsState = {
  projects: GithubProject[];
  isLoading: boolean;
  error: string | null;
};

export function useGithubProjects() {
  const [state, setState] = useState<GithubProjectsState>({
    projects: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let shouldUpdateState = true;

    async function loadGithubProjects() {
      try {
        const projects = await getGithubProjects();

        if (!shouldUpdateState) {
          return;
        }

        setState({
          projects,
          isLoading: false,
          error: null,
        });
      } catch {
        if (!shouldUpdateState) {
          return;
        }

        setState({
          projects: [],
          isLoading: false,
          error:
            'Não foi possível carregar os projetos do GitHub no momento.',
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