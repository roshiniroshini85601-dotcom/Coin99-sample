"use client";
import Link from "next/link";
import { Search, Globe, ChevronDown, Menu } from "lucide-react";
import { useBranding } from "./BrandingContext";

const Navbar = () => {
  const { activeTitle } = useBranding();
  return (
    <nav className="sticky top-0 z-[9999] w-full bg-[#F7F9FC]  dark:bg-[#06080E] dark:border-white/5 transition-all duration-300 ">
      <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-12 py-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-4 cursor-pointer group">
            <div className="flex items-center gap-1">
              <span className="font-black text-[22px] tracking-tighter text-[#0B0F1A] dark:text-white uppercase transition-all">
                COIN<span className="text-blue-600">99</span>
              </span>
            </div>
            <span className="text-gray-300 dark:text-gray-600 font-light text-[24px]">|</span>
            <span className="font-black text-[20px] tracking-tighter text-[#0B0F1A] dark:text-white uppercase whitespace-nowrap min-w-[100px]">
              {activeTitle}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-12 cursor-pointer group">
              <span className="text-[16px] font-semibold text-[#0B0F1A] dark:text-white uppercase group-hover:text-blue-600 transition-colors">
                Resources
              </span>
              <ChevronDown size={14} className="text-gray-400 dark:text-white/50 group-hover:text-blue-600 transition-colors" />
            </div>
            <Link href="#" className="text-[16px] font-semibold text-[#0B0F1A] dark:text-white uppercase hover:text-blue-600 transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center bg-gray-50/50 dark:bg-[#000411] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 w-[420px] justify-between group focus-within:border-blue-500 transition-all">
            <div className="flex items-center gap-2.5 flex-1">
              <Search size={16} className="text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-[14px] text-gray-600 dark:text-gray-400 placeholder:text-gray-400 w-full font-medium"
              />
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-gray-400 dark:text-gray-500 text-[12px] font-bold bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded">/</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <img src="/globe.svg" alt="Globe" className="w-[20px] h-[20px] dark:invert" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <img src="/file.svg" alt="Bag" className="w-[20px] h-[20px] " />
            </Link>
            <button className="border border-gray-300 dark:border-white/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-lg text-[14px] font-bold whitespace-nowrap hover:bg-blue-50 dark:hover:bg-white/5 transition-all shadow-sm">
              Sign Up
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <Menu size={24} className="text-black dark:text-white cursor-pointer hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
