"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 rounded-full shadow-xl border border-slate-200/50 dark:border-slate-800 transition-all duration-300">
            
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all ${
                    theme === "light" 
                    ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-500/30" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
            >
                <Sun size={18} />
            </button>

            <div className="w-4 h-[1px] bg-slate-200 dark:bg-slate-700" />

            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all ${
                    theme === "dark" 
                    ? "bg-slate-800 text-yellow-400 scale-110 shadow-lg shadow-black/20" 
                    : "text-slate-400 hover:text-slate-800"
                }`}
            >
                <Moon size={18} />
            </button>
        </div>
    );
};
