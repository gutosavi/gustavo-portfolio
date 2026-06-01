import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { CgSun } from 'react-icons/cg';
import { MdDarkMode } from 'react-icons/md';

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useDarkMode();

  React.useEffect(() => {});

  return (
    <button
      className="cursor-pointer"
      aria-label="toggle theme"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <CgSun className="text-primary-900 dark:text-primary-50" size={15} />
      ) : (
        <MdDarkMode
          className="text-primary-900 dark:text-primary-50"
          size={15}
        />
      )}
    </button>
  );
};

export default ThemeToggleButton;
