export type GithubRepositoryResponse = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  languages_url: string;
  updated_at: string;
  default_branch: string;
};

export type GithubLanguagesResponse = Record<string, number>;

export type GithubProject = {
  id: number;
  name: string;
  repositoryUrl: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  updatedAt: string;
};
