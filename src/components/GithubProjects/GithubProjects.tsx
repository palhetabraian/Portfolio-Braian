import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { GithubProjectRow } from '@/components/GithubProjectRow/GithubProjectRow';
import { useGithubProjects } from '@/hooks/useGithubProjects';

export function GithubProjects() {
  const { projects, isLoading, error } = useGithubProjects();
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableContent = [
        project.name,
        project.description,
        ...project.technologies,
      ]
        .join(' ')
        .toLowerCase();

      return searchableContent.includes(normalizedSearch);
    });
  }, [projects, search]);

  return (
    <section
      className="mx-auto min-h-screen w-full max-w-5xl px-6 py-24"
      id="projetos"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
        03 / Projetos
      </p>

      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-[-1px] md:text-5xl">
            Projetos do GitHub
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Repositórios públicos carregados diretamente do GitHub, com
            descrição priorizada pelo README.md e tecnologias combinadas
            automaticamente.
          </p>
        </div>

        <label className="relative block w-full md:max-w-sm">
          <span className="sr-only">Buscar projetos</span>

          <FiSearch
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />

          <input
            className="min-h-12 w-full rounded-full border border-border bg-surface px-11 text-[11px] font-bold text-text outline-none transition duration-200 ease-portfolio placeholder:text-muted focus:border-border-strong"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Buscar por nome, tecnologia ou descrição..."
            type="search"
            value={search}
          />
        </label>
      </div>

      {isLoading ? (
        <p className="text-sm text-muted">Carregando projetos do GitHub...</p>
      ) : null}

      {error ? <p className="text-sm text-muted">{error}</p> : null}

      {!isLoading && !error && projects.length === 0 ? (
        <p className="text-sm text-muted">
          Nenhum projeto encontrado no momento.
        </p>
      ) : null}

      {!isLoading &&
      !error &&
      projects.length > 0 &&
      filteredProjects.length === 0 ? (
        <p className="text-sm text-muted">
          Nenhum projeto encontrado para essa busca.
        </p>
      ) : null}

      {!isLoading && !error && filteredProjects.length > 0 ? (
        <div className="grid gap-5">
          {filteredProjects.map((project) => (
            <GithubProjectRow key={project.id} project={project} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
