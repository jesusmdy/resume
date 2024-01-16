'use client';

import { FC, useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'jesusmdy-resume-theme';

const ThemeSwitch: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button className="fixed right-8 top-4 w-8 h-8 capitalize border rounded-md dark:bg-zinc-800 dark:border-zinc-700" onClick={toggleTheme}>
      {
        theme === 'light'
          ? '🌙'
          : '☀️'

      }
    </button>
  )
};

export default ThemeSwitch;