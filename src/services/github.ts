import type {
  GithubLanguagesResponse,
  GithubRepositoryResponse,
} from '@/types/github';

const githubUsername = 'palhetabraian';
const githubApiBaseUrl = 'https://api.github.com';

async function fetchGithubJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  if (!response.ok) {
    throw new Error('Não foi possível buscar os dados do Github');
  }

  return response.json() as Promise<T>;
}

export async function getGithubRepositories() {
  const repositories = await fetchGithubJson<GithubRepositoryResponse[]>(
    `${githubApiBaseUrl}/users/${githubUsername}/repos?per_page=100&sort=updated`
  );

  return repositories.filter((repository) => {
    return !repository.fork && !repository.archived;
  });
}

export async function getGithubRepositoryLanguages(languagesUrl: string) {
  return fetchGithubJson<GithubLanguagesResponse>(languagesUrl);
}

export async function getGithubRepositoryReadme(
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
