import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { profile } from '@/data/portfolio';

export function Header() {
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2">
      <nav
        aria-label="Navegação principal"
        className="flex min-h-14 items-center justify-center gap-4 rounded-full border border-border bg-surface/90 px-4 text-[11px] font-bold uppercase text-text shadow-sm backdrop-blur md:justify-between md:px-5"
      >
        <a
          className="hidden normal-case tracking-normal no-underline md:inline-flex"
          href="#inicio"
        >
          {profile.brand}
        </a>

        <span
          className="hidden h-5 w-px bg-border md:block"
          aria-hidden="true"
        />

        <div className="flex items-center gap-5">
          <a
            className="no-underline transition hover:text-muted"
            href="#inicio"
          >
            • Início
          </a>

          <a
            className="no-underline transition hover:text-muted"
            href="#projetos"
          >
            Projetos
          </a>
        </div>

        <span
          className="hidden h-5 w-px bg-border md:block"
          aria-hidden="true"
        />

        <div className="hidden items-center gap-2 md:flex">
          <span className="text-text">PT</span>
          <span className="text-muted" aria-hidden="true">
            /
          </span>
          <span className="text-muted">EN</span>
        </div>

        <span className="h-5 w-px bg-border" aria-hidden="true" />

        <ThemeToggle />
      </nav>
    </header>
  );
}
