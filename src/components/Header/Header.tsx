import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FiFolder, FiGitBranch, FiHome, FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const navigationItems = [
  {
    labelKey: 'header.home',
    shortLabelKey: 'header.home',
    href: '#inicio',
    sectionId: 'inicio',
    Icon: FiHome,
  },
  {
    labelKey: 'header.projects',
    shortLabelKey: 'header.projects',
    href: '#projetos',
    sectionId: 'projetos',
    Icon: FiFolder,
  },
  {
    labelKey: 'header.repositories',
    shortLabelKey: 'header.repositoriesShort',
    href: '#repositorios',
    sectionId: 'repositorios',
    Icon: FiGitBranch,
  },
] satisfies Array<{
  labelKey: string;
  shortLabelKey: string;
  href: string;
  sectionId: string;
  Icon: IconType;
}>;

export function Header() {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(
    navigationItems.map((item) => item.sectionId),
  );
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  useEffect(() => {
    function closeMobileMenuOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', closeMobileMenuOnEscape);
    }

    return () => {
      window.removeEventListener('keydown', closeMobileMenuOnEscape);
    };
  }, [isMobileMenuOpen]);

  function changeLanguage(language: 'pt-BR' | 'en-US') {
    i18n.changeLanguage(language);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function renderLanguageButton(language: 'pt-BR' | 'en-US', label: string) {
    const isActiveLanguage = currentLanguage === language;

    return (
      <button
        aria-label={t(`header.language.${language === 'pt-BR' ? 'pt' : 'en'}`)}
        aria-pressed={isActiveLanguage}
        className={`border-0 bg-transparent p-0 font-bold uppercase transition hover:text-text ${
          isActiveLanguage ? 'text-text' : 'text-muted'
        }`}
        onClick={() => {
          changeLanguage(language);
        }}
        type="button"
      >
        {label}
      </button>
    );
  }

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 sm:top-6">
      <nav
        aria-label={t('header.navigationLabel')}
        className="hidden min-h-14 items-center justify-center gap-2 rounded-full border border-border bg-surface/90 px-2 text-[9px] font-bold uppercase text-text shadow-sm backdrop-blur sm:gap-4 sm:px-4 sm:text-[11px] md:flex md:justify-between md:px-5"
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

        <div className="flex min-w-0 items-center gap-2 sm:gap-5">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                aria-current={isActive ? 'page' : undefined}
                className="inline-flex shrink-0 items-center gap-1 no-underline transition hover:text-muted sm:gap-2"
                href={item.href}
                key={item.sectionId}
              >
                <span
                  aria-hidden="true"
                  className={`size-1 rounded-full bg-text transition duration-200 ease-portfolio ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <span className="sm:hidden">{t(item.shortLabelKey)}</span>
                <span className="hidden sm:inline">{t(item.labelKey)}</span>
              </a>
            );
          })}
        </div>

        <span
          className="hidden h-5 w-px bg-border md:block"
          aria-hidden="true"
        />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {renderLanguageButton('pt-BR', 'PT')}

          <span className="text-muted" aria-hidden="true">
            /
          </span>

          {renderLanguageButton('en-US', 'EN')}
        </div>

        <span className="h-5 w-px shrink-0 bg-border" aria-hidden="true" />

        <ThemeToggle />
      </nav>

      <nav
        aria-label={t('header.navigationLabel')}
        className="overflow-hidden rounded-2xl border border-border bg-surface/95 text-text shadow-sm backdrop-blur md:hidden"
      >
        <div className="flex min-h-16 items-center justify-between px-5">
          <a
            className="text-sm font-bold normal-case tracking-normal no-underline"
            href="#inicio"
            onClick={closeMobileMenu}
          >
            {profile.brand}
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={
              isMobileMenuOpen
                ? t('header.closeMenu')
                : t('header.openMenu')
            }
            className="grid size-11 place-items-center rounded-full border-0 bg-transparent text-2xl text-text transition duration-200 ease-portfolio hover:bg-hover active:bg-active"
            onClick={() => {
              setIsMobileMenuOpen((currentState) => !currentState);
            }}
            type="button"
          >
            {isMobileMenuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div
            className="border-t border-border px-5 py-6"
            id="mobile-navigation"
          >
            <div className="grid gap-5">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.sectionId;
                const Icon = item.Icon;

                return (
                  <a
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex min-h-11 items-center gap-4 text-sm font-bold no-underline transition hover:text-text ${
                      isActive ? 'text-text' : 'text-muted'
                    }`}
                    href={item.href}
                    key={item.sectionId}
                    onClick={closeMobileMenu}
                  >
                    <Icon aria-hidden="true" className="size-5 shrink-0" />
                    {t(item.labelKey)}
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <div className="flex items-center gap-2 text-[11px]">
                {renderLanguageButton('pt-BR', 'PT')}

                <span className="text-muted" aria-hidden="true">
                  /
                </span>

                {renderLanguageButton('en-US', 'EN')}
              </div>

              <ThemeToggle />
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
