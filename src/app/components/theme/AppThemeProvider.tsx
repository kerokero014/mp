'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle('dark', mode === 'dark');
  root.style.colorScheme = mode;
}

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  const storedMode = localStorage.getItem('theme-mode');
  if (storedMode === 'light' || storedMode === 'dark') return storedMode;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const initialMode = getInitialMode();
    setMode(initialMode);
    applyTheme(initialMode);
  }, []);

  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#00bcd4',
          },
          secondary: {
            main: '#ff4081',
          },
        },
        typography: {
          fontFamily: 'Poppins, sans-serif',
        },
      }),
    [mode]
  );

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }
  return context;
}
