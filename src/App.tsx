export default function App() {
  return (
    <main className="theme-dark min-h-screen bg-bg px-6 py-16 font-mono text-text transition-colors duration-200 ease-portfolio">
      <section className="mx-auto grid min-h-[70vh] max-w-5xl place-content-center">
        <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
          02 / Design tokens
        </p>

        <h1 className="text-5xl font-bold tracking-[-2px] md:text-7xl">
          Braian Nickolas
        </h1>

        <p className="mt-8 max-w-3xl text-sm leading-7 md:text-base">
          Tokens visuais configurados. Agora o projeto já tem base para tema,
          cores, fonte, foco e responsividade.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="rounded-full border border-border px-4 py-2 text-xs uppercase text-text">
            bg
          </span>
          <span className="rounded-full border border-border px-4 py-2 text-xs uppercase text-muted">
            muted
          </span>
          <span className="rounded-full border border-border-strong px-4 py-2 text-xs uppercase text-text">
            border
          </span>
        </div>
      </section>
    </main>
  );
}
