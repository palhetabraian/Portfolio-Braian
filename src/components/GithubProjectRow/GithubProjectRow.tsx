import { FiExternalLink, FiGitBranch, FiStar } from 'react-icons/fi';

import { TechTag } from '@/components/TechTag/TechTag';
import type { GithubProject } from '@/types/github';

type GithubProjectRowProps = {
  project: GithubProject;
};

export function GithubProjectRow({ project }: GithubProjectRowProps) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-5 transition duration-200 ease-portfolio hover:border-border-strong hover:bg-hover">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold tracking-[-0.5px] text-text">
            <a
              className="inline-flex items-center gap-2 no-underline"
              href={project.repositoryUrl}
              rel="noreferrer"
              target="_blank"
            >
              {project.name}

              <FiExternalLink
                aria-hidden="true"
                className="opacity-0 transition duration-200 group-hover:opacity-100"
              />
            </a>
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechTag key={technology} label={technology} />
            ))}
          </div>

          <a
            className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-[11px] font-bold uppercase text-text no-underline transition duration-200 ease-portfolio hover:border-border-strong hover:bg-active"
            href={project.repositoryUrl}
            rel="noreferrer"
            target="_blank"
          >
            Repositório
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>

        <div className="flex gap-4 text-xs font-bold text-text md:min-w-16 md:flex-col md:items-end md:gap-2">
          <span className="inline-flex items-center gap-1">
            <FiStar aria-hidden="true" />
            {project.stars}
          </span>

          <span className="inline-flex items-center gap-1">
            <FiGitBranch aria-hidden="true" />
            {project.forks}
          </span>
        </div>
      </div>
    </article>
  );
}