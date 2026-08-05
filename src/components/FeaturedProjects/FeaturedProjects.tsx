import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { featuredProjects } from '@/data/portfolio';

export function FeaturedProjects() {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-6 py-20 md:py-24"
      id="projetos"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
        02 / Destaques
      </p>

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-[-1px] md:text-5xl">
            Projetos em destaque
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Uma seleção manual dos principais projetos, com foco em contexto,
            tecnologias e resultado.
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
            title={project.title}
          />
        ))}
      </div>
    </section>
  );
}
