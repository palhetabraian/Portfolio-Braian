import { useTranslation } from 'react-i18next';

import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const navigationItems = [
  {
    labelKey: 'header.home',
    href: '#inicio',
    sectionId: 'inicio',
  },
  {
    labelKey: 'header.projects',
    href: '#projetos',
    sectionId: 'projetos',
  },
  {
    labelKey: 'header.repositories',
    href: '#repositorios',
    sectionId: 'repositorios',
  },
];

export function Header() {
  const { i18n, t } = useTranslation();
  const activeSection = useActiveSection(
    navigationItems.map((item) => item.sectionId),
  );
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  function changeLanguage(language: 'pt-BR' | 'en-US') {
    i18n.changeLanguage(language);
  }

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-2xl -translate-x-1/2 sm:top-6 sm:w-[calc(100%-2rem)]">
      <nav
        aria-label={t('header.navigationLabel')}
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
                aria-current={isActive ? 'page' : undefined}
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

                {t(item.labelKey)}
              </a>
            );
          })}
        </div>

        <span
          className="hidden h-5 w-px bg-border md:block"
          aria-hidden="true"
        />

        <div className="hidden items-center gap-2 md:flex">
          <button
            aria-label={t('header.language.pt')}
            aria-pressed={currentLanguage === 'pt-BR'}
            className={`border-0 bg-transparent p-0 font-bold uppercase transition hover:text-text ${
              currentLanguage === 'pt-BR' ? 'text-text' : 'text-muted'
            }`}
            onClick={() => {
              changeLanguage('pt-BR');
            }}
            type="button"
          >
            PT
          </button>

          <span className="text-muted" aria-hidden="true">
            /
          </span>

          <button
            aria-label={t('header.language.en')}
            aria-pressed={currentLanguage === 'en-US'}
            className={`border-0 bg-transparent p-0 font-bold uppercase transition hover:text-text ${
              currentLanguage === 'en-US' ? 'text-text' : 'text-muted'
            }`}
            onClick={() => {
              changeLanguage('en-US');
            }}
            type="button"
          >
            EN
          </button>
        </div>

        <span className="h-5 w-px shrink-0 bg-border" aria-hidden="true" />

        <ThemeToggle />
      </nav>
    </header>
  );
}
