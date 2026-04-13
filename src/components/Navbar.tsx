"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useBranding } from "./BrandingContext";
import Cookie from "./Cookie";

const Navbar = () => {
  const { activeTitle } = useBranding();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9999] w-full bg-[#F7F9FC] dark:bg-[#06080E] dark:border-white/5 transition-all duration-300">
      <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-12 py-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-4 cursor-pointer group">
            <div className="flex items-center gap-1">
              <span className="font-black text-[22px] tracking-tighter text-[#0B0F1A] dark:text-white uppercase transition-all">
                COIN<span className="text-blue-600">99</span>
              </span>
            </div>
            <span className="text-gray-300 dark:text-gray-600 font-light text-[24px]">|</span>
            <span className="font-black text-[18px] md:text-[20px] tracking-tighter text-[#0B0F1A] dark:text-white uppercase whitespace-nowrap min-w-[80px] md:min-w-[100px]">
              {activeTitle}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10 ml-8">
            <div className="flex items-center gap-1.5 cursor-pointer group">
              <span className="text-[14px] font-semibold text-[#0B0F1A] dark:text-white uppercase group-hover:text-blue-600 transition-colors">
                Resources
              </span>
              <ChevronDown size={14} className="text-gray-400 dark:text-white/50 group-hover:text-blue-600 transition-colors" />
            </div>
            <Link href="#" className="text-[14px] font-semibold text-[#0B0F1A] dark:text-white uppercase hover:text-blue-600 transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center bg-gray-50/50 dark:bg-[#000411] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 w-[380px] justify-between group focus-within:border-blue-500 transition-all">
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
            <img src="/globe.svg" alt="Globe" className="w-[18px] h-[18px] dark:invert cursor-pointer hover:opacity-70 transition-opacity" />
            <img src="/file.svg" alt="Bag" className="w-[18px] h-[18px] dark:invert cursor-pointer hover:opacity-70 transition-opacity" />
            <button className="border border-gray-300 dark:border-white/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-lg text-[13px] font-bold whitespace-nowrap hover:bg-blue-50 dark:hover:bg-white/5 transition-all shadow-sm">
              Sign Up
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <Menu
              size={24}
              className="text-black dark:text-white cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(true)}
            />
            {menuOpen && (
              <div className="fixed inset-0 bg-[#F7F9FC] dark:bg-[#06080E] z-[10000] flex flex-col animate-in fade-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                  <div className="flex items-center gap-1">
                    <span className="font-black text-[24px] tracking-tighter text-black dark:text-white uppercase">
                      COIN<span className="text-blue-600">99</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-black dark:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <div className="flex flex-col">
                    {[
                      { name: "Products", dropdown: true },
                      { name: "Trade", dropdown: true },
                      { name: "Resources", dropdown: true },
                      { name: "About", dropdown: false },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between py-5 border-b border-transparent hover:border-white/5 cursor-pointer group">
                        <span className="text-[17px] font-medium text-black dark:text-white/90 group-hover:text-white transition-colors">{item.name}</span>
                        {item.dropdown && <ChevronDown size={18} className="text-black dark:text-white/40 group-hover:text-white transition-colors" />}
                      </div>
                    ))}

                    <div className="h-[1px] w-full bg-white/10 my-4" />

                    {[
                      { name: "English", dropdown: true },
                      { name: "USD", dropdown: true },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between py-5 cursor-pointer group">
                        <span className="text-[17px] font-medium text-black dark:text-white/90 group-hover:text-white transition-colors">{item.name}</span>
                        {item.dropdown && <ChevronDown size={18} className="text-black dark:text-white/40 group-hover:text-white transition-colors" />}
                      </div>
                    ))}

                    <div className="h-[1px] w-full bg-white/10 my-4" />

                    <div className="py-5 cursor-pointer group">
                      <span className="text-[17px] font-medium text-white/90 group-hover:text-white transition-colors">Download the app</span>
                    </div>

                    <div className="h-[1px] w-full bg-white/10 my-4" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
