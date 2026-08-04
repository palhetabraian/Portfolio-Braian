import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="grid size-11 place-items-center rounded-full border border-border bg-surface text-text transition duration-200 ease-portfolio hover:border-border-strong hover:bg-hover active:bg-active"
      onClick={toggleTheme}
      type="button"
    >
      {isDarkMode ? (
        <FiSun aria-hidden="true" />
      ) : (
        <FiMoon aria-hidden="true" />
      )}
    </button>
  );
}
