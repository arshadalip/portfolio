import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 fixed  lg:text-3xl text-2xl lg:py-3 py-2 bottom-5 right-5 z-50 flex flex-col items-center justify-center transition-colors rounded-full focus:outline-none"
    >
      {theme === "dark" ? "🌙" : "☀️ "}
    </button>
  );
}
