"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isLight = theme === "light";
    const isDark = theme === "dark";

    return (
        <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-1 bg-[#F0F2F5] dark:bg-[#0B1121] p-1.5 rounded-[14px] border border-slate-200 dark:border-white/5 transition-all duration-300 shadow-xl">
            
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-[10px] transition-all duration-300 ${
                    isLight 
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-100" 
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
            >
                <Sun size={16} strokeWidth={2.5} />
            </button>

            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-[10px] transition-all duration-300 ${
                    isDark 
                    ? "bg-[#1C2230] text-blue-400 shadow-inner" 
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
            >
                <Moon size={16} strokeWidth={2.5} />
            </button>
        </div>
    );
};
