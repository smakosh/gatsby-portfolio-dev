import { useState, useEffect } from 'react';
import useMedia from 'hooks/useMedia';

export default () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      setTheme(localTheme);
    } else if (prefersDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [prefersDarkMode]);

  return [theme, toggleTheme];
};
