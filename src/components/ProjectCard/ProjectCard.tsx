import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import { TechTag } from '@/components/TechTag/TechTag';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string;
  thumbnailUrl?: string;
  thumbnailLabel: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  repositoryUrl,
  demoUrl,
  thumbnailUrl,
  thumbnailLabel,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const visibleDescription =
    description.length > 129 ? `${description.slice(0, 129).trim()}...` : description;
  const visibleTechnologies = technologies.slice(0, 5);

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-200 ease-portfolio hover:-translate-y-1 hover:border-border-strong hover:bg-hover">
      {thumbnailUrl ? (
        <div className="border-b border-border bg-hover">
          <img
            alt={thumbnailLabel}
            className="aspect-video w-full object-cover"
            loading="lazy"
            src={thumbnailUrl}
          />
        </div>
      ) : null}

      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="min-w-0 break-words text-lg font-bold tracking-[-0.5px] text-text sm:text-xl">
            {repositoryUrl ? (
              <a
                aria-label={t('project.openRepository', { title })}
                className="inline-flex items-center gap-2 no-underline"
                href={repositoryUrl}
                rel="noreferrer"
                target="_blank"
              >
                {title}

                <FiExternalLink
                  aria-hidden="true"
                  className="opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                />
              </a>
            ) : (
              title
            )}
          </h3>
        </div>

        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted">
          {visibleDescription}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {visibleTechnologies.map((technology) => (
            <TechTag key={technology} label={technology} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {repositoryUrl ? (
            <a
              aria-label={t('project.openRepository', { title })}
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-text bg-text px-5 text-[11px] font-bold uppercase text-bg no-underline transition duration-200 ease-portfolio hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 sm:w-auto"
              href={repositoryUrl}
              rel="noreferrer"
              target="_blank"
            >
              {t('project.repository')}
              <FiExternalLink aria-hidden="true" />
            </a>
          ) : null}

          {demoUrl ? (
            <a
              aria-label={t('project.openDemo', { title })}
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full border border-border px-5 text-[11px] font-bold uppercase text-text no-underline transition duration-200 ease-portfolio hover:-translate-y-0.5 hover:border-border-strong hover:bg-active active:translate-y-0 sm:w-auto"
              href={demoUrl}
              rel="noreferrer"
              target="_blank"
            >
              {t('project.demo')}
              <FiExternalLink aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
