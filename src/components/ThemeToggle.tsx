"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isLight = theme === "light";
  const isDark = theme === "dark";

  return (
    <div className="fixed right-[3%] top-[55%] -translate-y-[55%] flex flex-col items-center gap-1 p-[4px] rounded-[10px] bg-[#D9E4FF4D] dark:bg-[#001F6666] shadow-[0_8px_30px_rgba(0,0,0,0.06)] z-[9999] hidden xl:flex w-[38px] h-[74px]">
      <button
        onClick={() => setTheme("light")}
        className={`p-[6px] rounded-[6px] transition-all flex items-center justify-center ${
          isLight 
            ? "bg-white text-[#0B0F1A] shadow-sm" 
            : "text-[#0B0F1A]/40 hover:text-[#0B0F1A] dark:text-[#DDE3ED]/40 dark:hover:text-[#DDE3ED]"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-[20px] w-[20px]" strokeWidth={2.5} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-[6px] rounded-[6px] transition-all flex items-center justify-center ${
          isDark 
            ? "bg-[#06080E] text-[#DDE3ED] shadow-sm" 
            : "text-[#0B0F1A]/40 hover:text-[#0B0F1A] dark:text-[#DDE3ED]/40 dark:hover:text-[#DDE3ED]"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-[20px] w-[20px]" strokeWidth={2.5} />
      </button>
    </div>
  );
}
