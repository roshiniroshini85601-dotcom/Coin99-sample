"use client";
import React from "react";

export default function TokenCard() {
    return (
        <div className="w-[450px] bg-white dark:bg-[#0B0F1A] rounded-[24px] p-7 shadow-2xl border border-gray-100 dark:border-white/5 transition-all flex flex-col cursor-default">
            <div className="flex justify-center mb-6">
                <span className="text-xl font-black text-black dark:text-white tracking-tighter uppercase">COIN<span className="text-blue-600">99</span></span>
            </div>

            <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-black dark:text-white">Coin99</h3>
                <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-white/10 text-[9px] font-bold rounded text-gray-500 dark:text-slate-400">C99</span>
                <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-white/10 text-[9px] font-bold rounded text-gray-500 dark:text-slate-400">#9</span>
            </div>
            <div className="text-4xl font-bold text-black dark:text-white mb-1 tracking-tight">$9.99</div>
            <div className="text-blue-600 dark:text-blue-400 text-[13px] font-bold flex items-center gap-1 mb-6">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                2.5% in 24 Hours
            </div>

            <div className="mb-4 text-[14px] font-bold text-black dark:text-white">Trading Schedule</div>

            <div className="flex gap-4 h-[160px] mb-4 relative">
                <div className="flex flex-col justify-between text-[10px] text-gray-400 font-bold py-2">
                    <span>15k</span>
                    <span>12k</span>
                    <span>9k</span>
                    <span>6k</span>
                    <span>3k</span>
                    <span>0k</span>
                </div>

                <div className="flex-1 relative">
                    <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="none">
                        <path
                            d="M0 100 L 10 100 L 20 90 L 30 100 L 40 105 L 50 105 L 60 100 L 70 108 L 80 100 L 90 95 L 100 88 L 115 95 L 130 85 L 140 65 L 150 63 L 160 55 L 170 75 L 185 70 L 200 45 L 210 45 L 220 55 L 230 45 L 245 60 L 255 40 L 270 35 L 285 35 L 290 45 L 300 35 L 300 120 L 0 120 Z"
                            fill="#F3F5F9"
                            className="dark:fill-white/5"
                        />

                        <path
                            d="M0 100 L 10 100 L 20 90 L 30 100 L 40 105 L 50 105 L 60 100 L 70 108 L 80 100 L 90 95 L 100 88 L 115 95 L 130 85 L 140 65 L 150 63 L 160 55 L 170 75 L 185 70 L 200 45 L 210 45 L 220 55 L 230 45 L 245 60 L 255 40 L 270 35 L 285 35 L 290 45 L 300 35"
                            fill="none"
                            stroke="#2323FF"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="absolute -bottom-10 left-0 right-0 flex justify-between px-2">
                        {[
                            { d: 'Mon', n: '15' },
                            { d: 'Tue', n: '16' },
                            { d: 'Wed', n: '17' },
                            { d: 'Thu', n: '18' },
                            { d: 'Fri', n: '19' },
                            { d: 'Sat', n: '20' },
                            { d: 'Sun', n: '21' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-[10px] text-gray-400 font-bold mb-1">{item.d}</span>
                                <span className="text-[13px] text-black dark:text-white font-bold">{item.n}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 mb-4 text-[14px] font-bold text-black dark:text-white">Details</div>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <p className="text-[12px] text-black/60 dark:text-white/60 font-bold mb-2">Market Cap</p>
                    <p className="text-3xl font-bold text-black dark:text-white tabular-nums mb-1">
                        $9.99<span className="text-gray-400 dark:text-white/20">B</span>
                    </p>
                    <div className="text-green-500 text-[12px] font-bold flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                        4.74%
                    </div>
                </div>
                <div>
                    <p className="text-[12px] text-black/60 dark:text-white/60 font-bold mb-2">Volume (24h)</p>
                    <p className="text-3xl font-bold text-black dark:text-white tabular-nums mb-1">
                        $9.9<span className="text-gray-400 dark:text-white/20">M</span>
                    </p>
                    <div className="text-green-500 text-[12px] font-bold flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                        15.6%
                    </div>
                </div>
            </div>
        </div>
    );
}
