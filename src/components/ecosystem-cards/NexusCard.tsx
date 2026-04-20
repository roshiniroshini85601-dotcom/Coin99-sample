"use client";
import React from "react";

export default function NexusCard() {
  return (
    <div className="w-[360px] bg-white dark:bg-[#0B0F1A] rounded-[24px] p-6 shadow-2xl border border-gray-100 dark:border-white/5 transition-all relative cursor-default">
        <div className="absolute top-6 right-6 px-3 py-1 bg-[#FF424D]/10 dark:bg-[#FF424D]/20 rounded-full flex items-center gap-1.5 border border-[#FF424D]/20">
            <span className="w-2 h-2 rounded-full bg-[#FF424D] animate-pulse"></span>
            <span className="text-[11px] font-bold text-[#FF424D] uppercase tracking-wider">LIVE</span>
        </div>

        <div className="mb-6">
            <div className="w-14 h-14 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center p-1 overflow-hidden">
                <img src="/nexus.svg" alt="Nexus" className="w-full h-full object-contain" />
            </div>
        </div>

        <h3 className="text-[22px] font-bold text-black dark:text-white mb-1">Nexus</h3>
        <p className="text-gray-500 dark:text-slate-400 text-[13px] leading-[1.4] mb-8 font-medium">
            Nexus is a existing Web3 game which immerse players<br /> in a inspired view
        </p>

        <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] font-bold text-black dark:text-white">Socials</span>
            <div className="w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100 dark:border-white/10">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-black dark:text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </div>
        </div>

        <div className="grid grid-cols-[1.5fr_1fr] rounded-[14px] overflow-hidden mb-8 border border-gray-100 dark:border-white/5 h-[84px] shadow-sm">
            <div className="bg-blue-50 dark:bg-[#00174D] p-3 flex flex-col justify-between">
                <div className="flex items-center">
                    <span className="text-[11px] text-blue-600 dark:text-blue-400 font-bold uppercase">Raised</span>
                </div>
                <span className="text-[18px] font-bold text-black dark:text-white tracking-tight">27,00,000</span>
            </div>
            <div className="bg-gray-50 dark:bg-white/[0.03] p-3 flex items-center justify-end">
                <span className="text-[11px] text-gray-400 dark:text-white/40 font-bold">Total Space</span>
            </div>
        </div>

        <div className="flex items-end justify-between">
            <div>
                <span className="text-[11px] text-gray-400 dark:text-white/40 font-bold block mb-1">Until Finish</span>
                <span className="text-[18px] font-bold text-black dark:text-white tracking-tight tabular-nums">1D : 23H : 59M</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[13px] px-6 py-3 rounded-[12px] shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                Participate
            </button>
        </div>
    </div>
  );
}
