import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check local storage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Cycle: Light -> Grey -> Dark -> Light
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'grey';
      if (prev === 'grey') return 'dark';
      return 'light';
    });
  };

  // Whenever theme changes, update the HTML attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);