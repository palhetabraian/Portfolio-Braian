import { PreviewComponents } from '@/pages/PreviewComponents';
import { Header } from './components/Header/Header';

export default function App() {
  if (window.location.pathname === '/components') {
    return <PreviewComponents />;
  }

  return (
    <main className="min-h-screen bg-bg text-text">
      <Header />

      <section
        className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-32"
        id="inicio"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
          01 / Apresentação
        </p>

        <p className="mb-6 text-sm text-text">$ Desenvolvedor Full Stack</p>

        <h1 className="text-5xl font-bold tracking-[-2px] md:text-7xl">
          Braian Nickolas
        </h1>

        <p className="mt-8 max-w-3xl text-base font-bold leading-relaxed text-text md:text-lg">
          Sou desenvolvedor Full Stack e transformo ideias em produtos digitais
          claros, eficientes e bem construídos. Uno visão de produto, atenção à
          experiência e domínio técnico para criar soluções que resolvem
          problemas reais.
        </p>
      </section>

      <section
        className="mx-auto min-h-screen w-full max-w-5xl px-6 py-24"
        id="projetos"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
          02 / Projetos
        </p>

        <h2 className="text-4xl font-bold tracking-[-1px] md:text-5xl">
          Projetos
        </h2>
      </section>
    </main>
  );
}
