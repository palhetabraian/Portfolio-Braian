// hook responsavel pelo tema escuro e claro

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const storageKey = 'braian-dev-theme';

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  const prefersDarkMode = window.matchMedia(
    'prefers-color-scheme:dark'
  ).matches;

  return prefersDarkMode ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.classList.toggle('dark', theme === 'dark');

  localStorage.setItem(storageKey, theme);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  return {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark',
  };
}
