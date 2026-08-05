import { useTranslation } from 'react-i18next';

import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { featuredProjects } from '@/data/portfolio';

export function FeaturedProjects() {
  const { t } = useTranslation();

  return (
    <section
      className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:py-24"
      id="projetos"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
        {t('featured.section')}
      </p>

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-[-1px] sm:text-4xl md:text-5xl">
            {t('featured.title')}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {t('featured.description')}
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            description={project.description}
            demoUrl={project.demoUrl}
            key={project.title}
            repositoryUrl={project.repositoryUrl}
            technologies={project.technologies}
            thumbnailLabel={project.thumbnailLabel}
            thumbnailUrl={project.thumbnailUrl}
            title={project.title}
          />
        ))}
      </div>
    </section>
  );
}
