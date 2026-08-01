import { FiExternalLink } from 'react-icons/fi';

import { TechTag } from '../TechTag/TechTag';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  repositoryUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article>
      <div>
        <h3>
          <a
            className="inline-flex items-center gap-2 no-underline"
            href={repositoryUrl}
            rel="noreferrer"
            target="_blank"
          >
            {title}
            <FiExternalLink
              aria-hidden={true}
              className="opacity-0 transition duration-200 group-hover:opacity-100"
            />
          </a>
        </h3>
      </div>

      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted">
        {description}
      </p>

      <div>
        {technologies.map((technology) => (
          <TechTag key={technology} label={technology} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-[11px] font-bold uppercase text-text no-underline transition duration-200 ease-portfolio hover:border-border-strong hover:bg-active"
          href={repositoryUrl}
          rel="noreferrer"
          target="_blank"
        >
          Repositório
          <FiExternalLink aria-hidden="true" />
        </a>

        {demoUrl ? (
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-[11px] font-bold uppercase text-text no-underline transition duration-200 ease-portfolio hover:border-border-strong hover:bg-active"
            href={demoUrl}
            rel="noreferrer"
            target="_blank"
          >
            Demonstração
            <FiExternalLink aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
