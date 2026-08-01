import { PrimaryStack } from '@/components/PrimaryStack/PrimaryStack';
import { SocialLinks } from '@/components/SocialLinks/SocialLinks';
import { TechTag } from '@/components/TechTag/TechTag';
import { socialLinks, stackItems } from '@/data/portfolio';

export function PreviewComponents() {
  return (
    <main className="theme-dark min-h-screen bg-bg px-6 py-16 font-mono text-text transition-colors duration-200 ease-portfolio">
      <section className="mx-auto grid max-w-5xl gap-10">
        <header>
          <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
            Preview de componentes
          </p>

          <h1 className="text-5xl font-bold tracking-[-2px] md:text-7xl">
            Components
          </h1>

          <p className="mt-8 max-w-3xl text-sm leading-7 md:text-base">
            Esta página é temporária. Ela serve para visualizar, um abaixo do
            outro, os componentes criados durante o desenvolvimento do
            portfólio.
          </p>
        </header>

        <section
          className="grid gap-6 border-t border-border pt-8"
          aria-labelledby="social-links-title"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
              Componente
            </p>

            <h2
              className="text-2xl font-bold tracking-[-1px]"
              id="social-links-title"
            >
              Links sociais
            </h2>
          </div>

          <SocialLinks links={socialLinks} />
        </section>
      </section>
      <section className="border-t border-border pt-8">
        <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
          Componente
        </p>

        <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
          Stack principal
        </h2>

        <PrimaryStack items={stackItems} />
      </section>

      <section className="border-t border-border pt-8">
        <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted">
          Componente
        </p>

        <h2 className="mb-6 text-2xl font-bold tracking-[-1px]">
          Tags de tecnologia
        </h2>

        <div className="flex flex-wrap gap-3">
          {stackItems.map((item) => (
            <TechTag key={item} label={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
