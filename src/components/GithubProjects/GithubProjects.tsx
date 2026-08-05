import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import { GithubProjectRow } from '@/components/GithubProjectRow/GithubProjectRow';
import { useGithubProjects } from '@/hooks/useGithubProjects';

export function GithubProjects() {
  const { projects, isLoading, error, isUsingFallback } = useGithubProjects();
  const [search, setSearch] = useState('');
  const { t } = useTranslation();

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
      aria-busy={isLoading}
      className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:py-24"
      id="repositorios"
    >
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-[-1px] sm:text-4xl md:text-5xl">
            {t('github.title')}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {t('github.description')}
          </p>
        </div>

        <label className="relative block w-full md:max-w-sm">
          <span className="sr-only">{t('github.searchLabel')}</span>

          <FiSearch
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />

          <input
            className="min-h-12 w-full rounded-full border border-border bg-surface px-11 text-[11px] font-bold text-text outline-none transition duration-200 ease-portfolio placeholder:text-muted focus:border-border-strong"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder={t('github.searchPlaceholder')}
            type="search"
            value={search}
          />
        </label>
      </div>

      <div aria-live="polite" role="status">
        {isLoading ? (
          <p className="text-sm text-muted">{t('github.loading')}</p>
        ) : null}
      </div>

      {isUsingFallback ? (
        <p
          aria-live="polite"
          className="mb-6 rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted"
        >
          {t('github.fallback')}
        </p>
      ) : null}

      {error ? <p className="text-sm text-muted">{error}</p> : null}

      {!isLoading && !error && projects.length === 0 ? (
        <p className="text-sm text-muted">
          {t('github.empty')}
        </p>
      ) : null}

      {!isLoading &&
      !error &&
      projects.length > 0 &&
      filteredProjects.length === 0 ? (
        <p className="text-sm text-muted">
          {t('github.emptySearch')}
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
