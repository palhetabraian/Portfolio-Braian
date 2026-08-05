import type { MouseEvent } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  function handleThemeToggle(event: MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();

    toggleTheme({
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
    });
  }

  return (
    <button
      aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      aria-pressed={isDarkMode}
      className="grid size-11 place-items-center rounded-full bg-transparent text-text transition-all duration-300 ease-portfolio hover:scale-105 hover:bg-hover focus-visible:bg-hover active:scale-95 active:bg-active"
      onClick={handleThemeToggle}
      type="button"
    >
      {isDarkMode ? (
        <FiSun aria-hidden="true" className="size-[18px]" />
      ) : (
        <FiMoon aria-hidden="true" className="size-[18px]" />
      )}
    </button>
  );
}
