import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { useGithubProjects } from '@/hooks/useGithubProjects';

export function GithubProjects() {
  const { projects, isLoading, error } = useGithubProjects();

  return (
    <section
      className="mx-auto min-h-screen w-full max-w-5xl px-6 py-24"
      id="projetos"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
        03 / Projetos
      </p>

      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-[-1px] md:text-5xl">
          Projetos do GitHub
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Repositórios públicos carregados diretamente do GitHub, com descrição
          priorizada pelo README.md e tecnologias combinadas automaticamente.
        </p>
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

      {!isLoading && !error && projects.length > 0 ? (
        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard
              description={project.description}
              key={project.id}
              repositoryUrl={project.repositoryUrl}
              technologies={project.technologies}
              title={project.name}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
