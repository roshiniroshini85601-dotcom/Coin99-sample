"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Ecosystem = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: "C99 TOKEN", desc: "Trade with confidence using advanced tools, real-time data, and a secure trading environment." },
        { title: "FUNDME", desc: "Launch your projects with the support of a global community and institutional investors." },
        { title: "BUSINESS", desc: "Accept payments, manage payroll, and streamline your business operations with crypto." },
        { title: "CENTRALISED EXCHANGE", desc: "Experience high-speed trading with deep liquidity and top-tier security measures." },
        { title: "PAY 99", desc: "Send and receive crypto instantly across the globe with minimal transaction fees." },
        { title: "BLOCKCHAIN 99", desc: "Build scalable decentralized applications on our high-performance blockchain infrastructure." }
    ];

    const MainCard = () => (
        <div className="bg-white dark:bg-[#1C2230]/90 dark:backdrop-blur-xl rounded-xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-white/10 p-8 w-[380px] h-[580px] flex flex-col transition-colors duration-500">
            <div className="flex justify-center mb-8">
                <span className="text-xl font-black text-black dark:text-white tracking-tighter uppercase">COIN<span className="text-blue-600">99</span></span>
            </div>
            <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Coin99</h3>
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 text-[10px] font-bold rounded text-gray-400 dark:text-slate-500">C99</span>
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-slate-800 text-[10px] font-bold rounded text-gray-400 dark:text-slate-500">#9</span>
            </div>
            <div className="text-4xl font-bold text-black dark:text-white mb-2">$9.99</div>
            <div className="text-blue-600 dark:text-blue-400 text-sm font-bold flex items-center gap-1 mb-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                2.5% in 24 Hours
            </div>

            <div className="mb-4 text-[13px] font-bold text-gray-900 dark:text-gray-300">Trading Schedule</div>
            <div className="flex-1 relative mb-10">
                <svg viewBox="0 0 300 120" className="w-full h-full text-blue-600 dark:text-blue-500">
                    <path d="M0 80 Q 30 75 60 85 T 120 70 T 180 90 T 240 50 T 300 60" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M0 80 Q 30 75 60 85 T 120 70 T 180 90 T 240 50 T 300 60 L 300 120 L 0 120 Z" fill="url(#grad)" className="opacity-10 dark:opacity-20" />
                    <defs><linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: 'currentColor' }} /><stop offset="100%" style={{ stopColor: 'transparent' }} /></linearGradient></defs>
                </svg>
            </div>

            <div className="mb-4 text-[13px] font-bold text-gray-900 dark:text-gray-300 uppercase tracking-tight">Details</div>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase mb-1">Market Cap</p>
                    <p className="text-lg font-bold text-black dark:text-white">$9.99B</p>
                    <p className="text-green-500 text-[10px] font-bold">↗ 4.74%</p>
                </div>
                <div>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase mb-1">Volume (24h)</p>
                    <p className="text-lg font-bold text-black dark:text-white">$9.9M</p>
                    <p className="text-green-500 text-[10px] font-bold">↗ 15.6%</p>
                </div>
            </div>
        </div>
    );

    const NexusInfoCard = () => (
        <div className="bg-white dark:bg-[#1C2230]/90 dark:backdrop-blur-xl rounded-xl shadow-2xl border border-gray-50 dark:border-white/10 p-7 w-[320px] h-[400px] transition-colors duration-500">
            <div className="w-12 h-12 bg-red-50 dark:bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-red-200 dark:border-red-500/20 flex items-center justify-center border-t-red-500 animate-spin" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-1">Nexus</h3>
            <p className="text-gray-400 dark:text-slate-400 text-xs leading-relaxed mb-6">
                Nexus is a existing Web3 game which immers players in a inspired view
            </p>
            <div className="mb-2 text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase">Create and manage</div>
            <div className="bg-blue-50/50 dark:bg-blue-500/5 p-4 rounded-lg mb-8">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-gray-500 dark:text-slate-400">Raised</span>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">+$500</span>
                </div>
                <div className="text-lg font-bold text-black dark:text-white">27,00,000</div>
            </div>
            <div className="text-[10px] text-gray-400 dark:text-slate-500 mb-1">Until Finish</div>
            <div className="text-sm font-bold text-black dark:text-white">2D : 2H :30M :17S</div>
        </div>
    );

    const ParticipationCard = () => (
        <div className="bg-white/90 dark:bg-[#1C2230]/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100 dark:border-white/10 w-[280px] transition-colors duration-500">
            <div className="flex gap-2 mb-6">
                <div className="px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-bold">Active</div>
                <div className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-slate-500 rounded text-[10px] font-bold">Completed</div>
            </div>
            <div className="space-y-3">
                <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-full w-full" />
                <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-full w-3/4" />
                <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-full w-1/2" />
            </div>
            <button className="w-full mt-10 py-2.5 bg-blue-100 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold rounded-lg text-xs uppercase tracking-tight transition-all active:scale-95">Participate</button>
        </div>
    );

    const BusinessCard = () => (
        <div className="bg-white dark:bg-[#1C2230]/90 dark:backdrop-blur-xl rounded-xl shadow-xl p-6 w-[300px] border border-gray-100 dark:border-white/10 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800" />
                <div className="flex-1 h-3 bg-gray-100 dark:bg-slate-800 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-blue-50 dark:bg-blue-500/5 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">APY</span>
                    <span className="text-lg font-bold text-black dark:text-white">219.6%</span>
                </div>
                <div className="h-20 bg-gray-50 dark:bg-slate-800/50 rounded-lg" />
            </div>
        </div>
    );

    const getCanvasStyle = (idx: number) => {
        const positions = [
            { x: 0, y: 0, scale: 1, z: 50, opacity: 1, blur: '0px' },
            { x: 300, y: -250, scale: 0.85, z: 40, opacity: 0.6, blur: '1px' },
            { x: 420, y: 150, scale: 0.75, z: 30, opacity: 0.4, blur: '2px' },
            { x: 0, y: 400, scale: 0.8, z: 20, opacity: 0.3, blur: '3px' },
            { x: -400, y: 100, scale: 0.8, z: 20, opacity: 0.3, blur: '3px' },
            { x: -200, y: -350, scale: 0.7, z: 10, opacity: 0.2, blur: '4px' },
        ];

        const posIndex = (idx - activeIndex + items.length) % items.length;
        return positions[posIndex];
    };
    return (
        <section className=" bg-white dark:bg-[#06080E] py-8 md:py-20 px-4 md:px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                <div className="lg:ml-[-40px] w-full lg:w-[450px]">
                    <h1 className="text-3xl font-semibold lg:w-[500px] md:text-5xl font-black text-black dark:text-white uppercase leading-[0.95] tracking-tighter">
                        EXPLORE THE <br /> COIN <span className="text-blue-600">99</span> ECOSYSTEM
                    </h1>
                    <p className="text-gray-400 dark:text-slate-400 text-sm mt-6 mb-10 leading-relaxed font-normal max-w-md">
                        Discover a complete suite of tools designed to help you create
                        tokens, launch projects, trade assets, accept payments,
                        and build on blockchain — all within the Coin99 ecosystem.
                    </p>

                    <div className="border-t border-gray-200 dark:border-white/10">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="py-5 border-b border-gray-200 dark:border-white/10 cursor-pointer group"
                                onClick={() => setActiveIndex(idx)}
                            >
                                <div className="flex items-center justify-between">
                                    <h2 className={`text-[15px] font-bold tracking-tight uppercase transition-colors ${activeIndex === idx ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'}`}>
                                        {item.title}
                                    </h2>
                                    {activeIndex === idx ? (
                                        <ChevronUp size={18} className="text-blue-600 dark:text-blue-400" />
                                    ) : (
                                        <ChevronDown size={18} className="text-gray-300 dark:text-white/20 group-hover:text-blue-600" />
                                    )}
                                </div>

                                <AnimatePresence>
                                    {activeIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 dark:text-slate-400 text-[13px] mt-4 leading-relaxed">
                                                {item.desc}
                                            </p>


                                            <div className="lg:hidden mt-8 mb-4 flex justify-center items-center scale-[0.85] sm:scale-90 md:scale-100 origin-top">
                                                <div className="relative">
                                                    <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full"></div>
                                                    <div className="relative z-10">
                                                        {idx === 0 && <MainCard />}
                                                        {idx === 1 && <NexusInfoCard />}
                                                        {idx === 2 && <ParticipationCard />}
                                                        {idx === 3 && <BusinessCard />}
                                                        {idx === 4 && <MainCard />}
                                                        {idx === 5 && <NexusInfoCard />}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="hidden lg:flex flex-1 h-[700px] relative overflow-hidden rounded-3xl bg-[#F8FAFC]/50 dark:bg-slate-900/10 transition-colors duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <AnimatePresence mode="popLayout">
                            {items.map((_, idx) => {
                                const style = getCanvasStyle(idx);

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={false}
                                        animate={{
                                            x: style.x,
                                            y: style.y,
                                            scale: style.scale,
                                            opacity: style.opacity,
                                            zIndex: style.z,
                                            filter: `blur(${style.blur})`
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 70,
                                            damping: 20,
                                            mass: 1
                                        }}
                                        className="absolute cursor-grab active:cursor-grabbing"
                                    >
                                        {idx === 0 && <MainCard />}
                                        {idx === 1 && <NexusInfoCard />}
                                        {idx === 2 && <ParticipationCard />}
                                        {idx === 3 && <BusinessCard />}
                                        {idx === 4 && <MainCard />}
                                        {idx === 5 && <NexusInfoCard />}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    <div className="absolute inset-0 pointer-events-none border-[32px] border-white/40 dark:border-[#000616]/40 blur-xl"></div>
                </div>
            </div>
        </section>
    );
};
export default Ecosystem;