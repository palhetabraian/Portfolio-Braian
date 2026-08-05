import { FeaturedProjects } from '@/components/FeaturedProjects/FeaturedProjects';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { PreviewComponents } from '@/pages/PreviewComponents';

export default function App() {
  if (window.location.pathname === '/components') {
    return <PreviewComponents />;
  }

  return (
    <main className="min-h-screen bg-bg text-text">
      <Header />

      <Hero />

      <FeaturedProjects />

      <section
        className="mx-auto min-h-screen w-full max-w-5xl px-6 py-24"
        id="projetos"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
          03 / Projetos
        </p>

        <h2 className="text-4xl font-bold tracking-[-1px] md:text-5xl">
          Projetos
        </h2>
      </section>
    </main>
  );
}
