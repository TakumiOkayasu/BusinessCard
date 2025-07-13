import type React from "react";
import { useEffect, useState } from "react";


const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 初期テーマの設定
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 z-10"
        aria-label="テーマを切り替える"
      >
        <img
          src="/sun.svg" // publicフォルダから
          alt="ライトモード"
          className={`w-5 h-5 transition-all duration-300 ${
            isDark ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
          onError={(e) => {
            console.error("Sun icon not found");
            e.currentTarget.style.display = "none";
          }}
        />
        <img
          src="/moon.svg" // publicフォルダから
          alt="ダークモード"
          className={`w-5 h-5 absolute inset-0 m-auto transition-all duration-300 ${
            isDark ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
          onError={(e) => {
            console.error("Moon icon not found");
            e.currentTarget.style.display = "none";
          }}
        />
      </button>
    );
};

export default ThemeToggle;
