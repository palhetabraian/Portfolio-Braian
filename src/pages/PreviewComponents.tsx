import { useTranslation } from 'react-i18next';

import { FeaturedProjects } from '@/components/FeaturedProjects/FeaturedProjects';
import { GithubProjectRow } from '@/components/GithubProjectRow/GithubProjectRow';
import { GithubProjects } from '@/components/GithubProjects/GithubProjects';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { PrimaryStack } from '@/components/PrimaryStack/PrimaryStack';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { SocialLinks } from '@/components/SocialLinks/SocialLinks';
import { TechTag } from '@/components/TechTag/TechTag';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { socialLinks, stackItems } from '@/data/portfolio';

const githubProjectPreview = {
  id: 1,
  name: 'braian.dev',
  repositoryUrl: 'https://github.com/palhetabraian',
  description: '',
  technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  stars: 12,
  forks: 3,
  updatedAt: '2026-08-05T00:00:00Z',
};

export function PreviewComponents() {
  const { t } = useTranslation();
  const previewProjectDescription = t('preview.projectDescription');

  return (
    <main className="min-h-screen bg-bg px-6 py-16 font-mono text-text transition-colors duration-200 ease-portfolio">
      <div className="mx-auto grid w-full max-w-5xl gap-12">
        <header>
          <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.eyebrow')}
          </p>

          <h1 className="text-5xl font-bold tracking-[-2px] md:text-7xl">
            {t('preview.title')}
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 md:text-base">
            {t('preview.description')}
          </p>
        </header>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.socialLinks')}
          </h2>

          <SocialLinks links={socialLinks} />
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.stack')}
          </h2>

          <PrimaryStack items={stackItems} />
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.techTags')}
          </h2>

          <div className="flex flex-wrap gap-3">
            {stackItems.map((item) => (
              <TechTag key={item} label={item} />
            ))}
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.projectCard')}
          </h2>

          <ProjectCard
            title="braian.dev"
            description={previewProjectDescription}
            technologies={['React', 'TypeScript', 'Vite', 'Tailwind CSS']}
            repositoryUrl="https://github.com/palhetabraian"
            demoUrl="https://braian.dev"
          />
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.themeToggle')}
          </h2>

          <ThemeToggle />
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.header')}
          </h2>

          <div className="relative min-h-32 overflow-hidden rounded-2xl border border-border bg-bg">
            <Header />
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.hero')}
          </h2>

          <div className="overflow-hidden rounded-2xl border border-border bg-bg">
            <Hero />
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.featuredProjects')}
          </h2>

          <div className="overflow-hidden rounded-2xl border border-border bg-bg">
            <FeaturedProjects />
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.githubProjectRow')}
          </h2>

          <GithubProjectRow
            project={{
              ...githubProjectPreview,
              description: previewProjectDescription,
            }}
          />
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
            {t('preview.component')}
          </p>

          <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
            {t('preview.githubProjects')}
          </h2>

          <div className="overflow-hidden rounded-2xl border border-border bg-bg">
            <GithubProjects />
          </div>
        </section>
      </div>
    </main>
  );
}
