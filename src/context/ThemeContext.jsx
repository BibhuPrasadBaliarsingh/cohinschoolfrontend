import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { storage } from '../utils/storage';

export const ThemeContext = createContext(null);

const THEME_KEY = 'theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = storage.getItem(THEME_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    storage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDark: theme === 'dark'
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
