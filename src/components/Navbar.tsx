"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBranding } from "./BrandingContext";
import Cookie from "./Cookie";

const Navbar = () => {
  const { activeTitle } = useBranding();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9999] w-full bg-[#F7F9FC] dark:bg-[#06080E] dark:border-white/5 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 md:px-6 lg:px-12 py-2 md:py-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-2 md:gap-4 cursor-pointer group">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[20px] md:text-[28px] tracking-tighter text-[#0B0F1A] dark:text-white uppercase transition-all">
                COIN<span className="text-blue-600">99</span>
              </span>
            </div>
            <span className="text-gray-300 dark:text-gray-600 font-light text-[18px] md:text-[24px]">|</span>
            <div className="overflow-hidden h-[24px] md:h-[35px] flex items-center min-w-[70px] md:min-w-[120px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTitle}
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 15, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-semibold text-[18px] md:text-[28px] text-[#0B0F1A] dark:text-white uppercase whitespace-nowrap"
                >
                  {activeTitle}
                </motion.span>
              </AnimatePresence>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10 ml-8">
            <div className="flex items-center ml-20 gap-1.5 cursor-pointer group">
              <span className="text-[16px] font-semibold text-[#0B0F1A] dark:text-white uppercase group-hover:text-blue-600 transition-colors">
                Resources
              </span>
              <ChevronDown size={16} className="text-gray-400 dark:text-white/50 group-hover:text-blue-600 transition-colors" />
            </div>
            <Link href="#" className="text-[16px] font-semibold text-[#0B0F1A] dark:text-white uppercase hover:text-blue-600 transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center bg-gray-50/50 dark:bg-[#000411] border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 w-[380px] justify-between group focus-within:border-blue-500 transition-all">
            <div className="flex items-center gap-2.5 flex-1">
              <Search size={14} className="text-gray-400 dark:text-gray-500" />
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
            <img src="/globe.svg" alt="Globe" className="w-[24px] h-[24px] dark:white cursor-pointer hover:opacity-70 transition-opacity" />
            <img src="/file.svg" alt="Bag" className="w-[24px] h-[24px] dark:white cursor-pointer hover:opacity-70 transition-opacity" />
            <button className="border border-black dark:border-white/20 text-blue-600 dark:text-blue-400 px-4 py-2.5 rounded-full text-[14px] font-bold whitespace-nowrap ">
              Sign Up
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <Menu
              size={24}
              className="text-black dark:text-white cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(true)}
            />
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-0 bg-[#F7F9FC] dark:bg-[#06080E] z-[10000] flex flex-col"
                >
                  <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-white/5">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-[24px] tracking-tighter text-black dark:text-white uppercase transition-all">
                        COIN<span className="text-blue-600">99</span>
                      </span>
                    </div>
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="flex flex-col">
                      {[
                        { name: "Products", dropdown: true, },
                        { name: "Trade", dropdown: true },
                        { name: "Resources", dropdown: true },
                        { name: "About", dropdown: false },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between py-5 cursor-pointer group">
                          <span className="text-[19px] font-medium text-[#1A1A1A] dark:text-white/90 group-hover:text-blue-600 transition-colors">{item.name}</span>
                          {item.dropdown && <ChevronDown size={20} className="text-gray-400 dark:text-white/40 group-hover:text-blue-600 transition-colors" />}
                        </div>
                      ))}

                      <div className="h-[1px] w-full bg-gray-200 dark:bg-white/10 my-2" />

                      {[
                        { name: "English", dropdown: true },
                        { name: "USD", dropdown: true },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between py-5 cursor-pointer group">
                          <span className="text-[19px] font-medium text-[#1A1A1A] dark:text-white/90 group-hover:text-blue-600 transition-colors">{item.name}</span>
                          {item.dropdown && <ChevronDown size={20} className="text-gray-400 dark:text-white/40 group-hover:text-blue-600 transition-colors" />}
                        </div>
                      ))}

                      <div className="h-[1px] w-full bg-gray-200 dark:bg-white/10 my-2" />

                      <div className="py-8 cursor-pointer group">
                        <span className="text-[19px] font-medium text-[#1A1A1A] dark:text-white/90 group-hover:text-blue-600 transition-colors">Download the app</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
