// Hook responsável pelo tema claro e escuro.

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeTransitionOrigin = {
  x: number;
  y: number;
};

const storageKey = 'braian-dev-theme';
const themeBackgroundColors: Record<Theme, string> = {
  light: '#fcf7f7',
  dark: '#181818',
};

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  return prefersDarkMode ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.remove('theme-light', 'theme-dark');
  root.classList.add(`theme-${theme}`);

  localStorage.setItem(storageKey, theme);
}

function getNextTheme(theme: Theme) {
  return theme === 'dark' ? 'light' : 'dark';
}

function animateThemeTransition(theme: Theme, origin: ThemeTransitionOrigin) {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    return Promise.resolve();
  }

  const maxX = Math.max(origin.x, window.innerWidth - origin.x);
  const maxY = Math.max(origin.y, window.innerHeight - origin.y);
  const diameter = Math.hypot(maxX, maxY) * 2;
  const overlay = document.createElement('div');

  overlay.style.position = 'fixed';
  overlay.style.left = `${origin.x}px`;
  overlay.style.top = `${origin.y}px`;
  overlay.style.zIndex = '9999';
  overlay.style.width = `${diameter}px`;
  overlay.style.height = `${diameter}px`;
  overlay.style.borderRadius = '9999px';
  overlay.style.background = themeBackgroundColors[theme];
  overlay.style.pointerEvents = 'none';
  overlay.style.transform = 'translate(-50%, -50%) scale(0)';
  overlay.style.transition =
    'transform 700ms cubic-bezier(.2, 0, 0, 1), opacity 220ms ease';

  document.body.appendChild(overlay);

  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      overlay.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    window.setTimeout(() => {
      resolve();

      overlay.style.opacity = '0';

      window.setTimeout(() => {
        overlay.remove();
      }, 220);
    }, 700);
  });
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  async function toggleTheme(origin?: ThemeTransitionOrigin) {
    const nextTheme = getNextTheme(theme);

    if (origin) {
      await animateThemeTransition(nextTheme, origin);
    }

    setTheme(nextTheme);
  }

  return {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark',
  };
}
