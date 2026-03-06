'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppTheme } from './AppThemeProvider';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0 0 0 0 0a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { mode, toggleTheme } = useAppTheme();
  const isDark = mode === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="relative ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/50 text-neutral-800 backdrop-blur-md transition-colors dark:border-white/20 dark:bg-white/10 dark:text-neutral-100"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mode}
          initial={{ opacity: 0, rotate: -60, scale: 0.6, y: 4 }}
          animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.6, y: -4 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute"
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
