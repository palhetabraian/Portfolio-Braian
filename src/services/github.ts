import type {
  GithubLanguagesResponse,
  GithubProject,
  GithubRepositoryResponse,
} from '@/types/github';
import {
  getReadmeSummary,
  normalizeTechnologies,
} from '@/utils/githubProjects';

const githubUsername = 'palhetabraian';
const githubApiBaseUrl = 'https://api.github.com';
const repositoriesLimit = 12;

async function fetchGithubJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  if (!response.ok) {
    throw new Error('Não foi possível buscar os dados do GitHub.');
  }

  return response.json() as Promise<T>;
}

async function getGithubRepositories() {
  const repositories = await fetchGithubJson<GithubRepositoryResponse[]>(
    `${githubApiBaseUrl}/users/${githubUsername}/repos?per_page=100&sort=updated`
  );

  return repositories
    .filter((repository) => {
      return !repository.fork && !repository.archived;
    })
    .slice(0, repositoriesLimit);
}

async function getGithubRepositoryLanguages(languagesUrl: string) {
  return fetchGithubJson<GithubLanguagesResponse>(languagesUrl);
}

async function getGithubRepositoryReadme(
  repositoryName: string,
  defaultBranch: string
) {
  const readmeUrl = `https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/${defaultBranch}/README.md`;

  const response = await fetch(readmeUrl);

  if (!response.ok) {
    return null;
  }

  return response.text();
}

export async function getGithubProjects(): Promise<GithubProject[]> {
  const repositories = await getGithubRepositories();

  const projects = await Promise.all(
    repositories.map(async (repository) => {
      const [languages, readme] = await Promise.all([
        getGithubRepositoryLanguages(repository.languages_url).catch(() => {
          return {};
        }),
        getGithubRepositoryReadme(
          repository.name,
          repository.default_branch
        ).catch(() => {
          return null;
        }),
      ]);

      const readmeSummary = getReadmeSummary(readme);

      return {
        id: repository.id,
        name: repository.name,
        repositoryUrl: repository.html_url,
        description:
          readmeSummary ??
          repository.description ??
          'Descrição indisponível no momento.',
        technologies: normalizeTechnologies(
          languages,
          repository.topics,
          readme
        ),
        stars: repository.stargazers_count,
        forks: repository.forks_count,
        updatedAt: repository.updated_at,
      };
    })
  );

  return projects;
}
