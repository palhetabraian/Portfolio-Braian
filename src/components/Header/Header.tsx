import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { profile } from '@/data/portfolio';

export function Header() {
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2">
      <nav
        aria-label="Navegação principal"
        className="flex min-h-14 items-center justify-between gap-4 rounded-full border border-border bg-surface/90 px-5 text-[11px] font-bold uppercase text-text shadow-sm backdrop-blur"
      >
        <a href="#inicio" className="normal-case tracking-normal no-underline">
          {profile.brand}
        </a>

        <span className="h-5 w-px bg-border" aria-hidden="true" />

        <div className="flex items-center gap-5">
          <a
            href="#inicio"
            className="no-underline transition hover:text-muted"
          >
            Início
          </a>
          <a
            href="#projetos"
            className="no-underline transition hover:text-muted"
          >
            Projetos
          </a>
        </div>

        <span className="h-5 w-px bg-border" aria-hidden="true" />

        <div className="flex items-center gap-2">
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
