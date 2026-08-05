import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const navigationItems = [
  {
    label: 'Início',
    href: '#inicio',
    sectionId: 'inicio',
  },
  {
    label: 'Projetos',
    href: '#projetos',
    sectionId: 'projetos',
  },
  {
    label: 'Repositórios',
    href: '#repositorios',
    sectionId: 'repositorios',
  },
];

export function Header() {
  const activeSection = useActiveSection(
    navigationItems.map((item) => item.sectionId),
  );

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-2xl -translate-x-1/2 sm:top-6 sm:w-[calc(100%-2rem)]">
      <nav
        aria-label="Navegação principal"
        className="flex min-h-14 items-center justify-center gap-3 rounded-full border border-border bg-surface/90 px-3 text-[10px] font-bold uppercase text-text shadow-sm backdrop-blur sm:gap-4 sm:px-4 sm:text-[11px] md:justify-between md:px-5"
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

        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                className="inline-flex shrink-0 items-center gap-1.5 no-underline transition hover:text-muted sm:gap-2"
                href={item.href}
                key={item.sectionId}
              >
                <span
                  aria-hidden="true"
                  className={`size-1 rounded-full bg-text transition duration-200 ease-portfolio ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {item.label}
              </a>
            );
          })}
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

        <span className="h-5 w-px shrink-0 bg-border" aria-hidden="true" />

        <ThemeToggle />
      </nav>
    </header>
  );
}
