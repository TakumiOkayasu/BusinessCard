import type React from 'react';
import { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const shouldBeDark = theme === 'dark' || (!theme && systemPrefersDark);

      setIsDark(shouldBeDark);
      document.documentElement.classList.toggle('dark', shouldBeDark);
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const newIsDark = !isDark;
      setIsDark(newIsDark);
      document.documentElement.classList.toggle('dark', newIsDark);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 transition-colors duration-300 z-10"
        aria-label="テーマを切り替える"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 dark:bg-white/80 transition-colors duration-300 z-10"
      aria-label="テーマを切り替える"
    >
      <img
        src="/data/sun.svg"
        alt="ライトモード"
        className={`w-5 h-5  transition-all duration-300 brightness-0 saturate-100 invert-[42%] sepia-[11%] saturate-[574%] hue-rotate-[184deg] brightness-[93%] contrast-[92%] dark:invert-[20%] dark:sepia-[10%] dark:saturate-[266%] dark:hue-rotate-[184deg] dark:brightness-[80%] dark:contrast-[86%] ${
          isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
        }`}
      />
      <img
        src="/data/moon.svg"
        alt="ダークモード"
        className={`w-5 h-5 absolute inset-0 m-auto transition-all duration-300 brightness-0 saturate-100 invert-[42%] sepia-[11%] saturate-[574%] hue-rotate-[184deg] brightness-[93%] contrast-[92%] dark:invert-[20%] dark:sepia-[10%] dark:saturate-[266%] dark:hue-rotate-[184deg] dark:brightness-[80%] dark:contrast-[86%] ${
          isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
