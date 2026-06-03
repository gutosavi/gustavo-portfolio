import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Classic } from './ClassicThemeToggle';

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <Classic
      className="cursor-pointer text-primary-900 dark:text-primary-50 text-2xl"
      aria-label="toggle theme"
      onClick={() => setIsDark(!isDark)}
    ></Classic>
  );
};

export default ThemeToggleButton;
