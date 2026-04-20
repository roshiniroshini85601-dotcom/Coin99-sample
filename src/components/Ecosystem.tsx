"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import TokenCard from "./ecosystem-cards/TokenCard";
import NexusCard from "./ecosystem-cards/NexusCard";
import BusinessCard from "./ecosystem-cards/BusinessCard";
import ExchangeCard from "./ecosystem-cards/ExchangeCard";
import PayCard from "./ecosystem-cards/PayCard";
import BlockchainCard from "./ecosystem-cards/BlockchainCard";

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

    const renderCard = (idx: number) => {
        switch (idx) {
            case 0: return <TokenCard />;
            case 1: return <NexusCard />;
            case 2: return <BusinessCard />;
            case 3: return <ExchangeCard />;
            case 4: return <PayCard />;
            case 5: return <BlockchainCard />;
            default: return <TokenCard />;
        }
    };

    const getCanvasStyle = (idx: number) => {
        const positions = [
            { x: 0, y: 0, scale: 1, z: 50, opacity: 1 },
            { x: 300, y: -250, scale: 0.85, z: 40, opacity: 0.6 },
            { x: 420, y: 150, scale: 0.75, z: 30, opacity: 0.4 },
            { x: 0, y: 400, scale: 0.8, z: 20, opacity: 0.3 },
            { x: -400, y: 100, scale: 0.8, z: 20, opacity: 0.3 },
            { x: -200, y: -350, scale: 0.7, z: 10, opacity: 0.2 },
        ];

        const posIndex = (idx - activeIndex + items.length) % items.length;
        return positions[posIndex];
    };

    return (
        <section className="bg-white dark:bg-[#06080E] py-8 md:py-20 px-4 md:px-6 transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

                <div className="w-full lg:w-[540px]">
                    <h1 className="text-3xl font-semibold md:text-5xl font-black text-black dark:text-white uppercase leading-[1.1] tracking-tighter">
                        EXPLORE THE <br /> COIN<span className="text-blue-600">99</span> ECOSYSTEM
                    </h1>
                    <p className="text-gray-400 dark:text-slate-400 text-sm mt-6 mb-10 leading-relaxed font-normal max-w-sm">
                        Discover a complete suite of tools designed to help you create
                        tokens, launch projects, trade assets, accept payments,
                        and build on blockchain — all within the Coin99 ecosystem.
                    </p>

                    <div className="border-t border-gray-200 dark:border-white/10">
                        {/* Desktop Accordion List */}
                        <div className="hidden lg:block">
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
                                            <ChevronDown size={18} className="text-black dark:text-white group-hover:text-blue-600" />
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
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Mobile and Tablet Carousel View */}
                        <div className="lg:hidden py-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-[15px] font-bold tracking-tight uppercase text-black dark:text-white">
                                    {items[activeIndex].title}
                                </h2>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
                                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-white active:scale-90 transition-transform"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button
                                        onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
                                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-white active:scale-90 transition-transform"
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <p className="text-gray-400 dark:text-slate-400 text-[13px] leading-relaxed mb-8">
                                        {items[activeIndex].desc}
                                    </p>

                                    <div className="mt-8 mb-4 flex justify-center items-center scale-[0.85] sm:scale-90 md:scale-100 origin-top">
                                        <div className="relative z-10 w-full min-h-[450px] flex justify-center">
                                            {renderCard(activeIndex)}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 relative min-h-[720px] overflow-hidden bg-white dark:bg-transparent">
                    <motion.div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            {items.map((_, idx) => {
                                const style = getCanvasStyle(idx);
                                const isActive = activeIndex === idx;

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
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 30,
                                            mass: 0.5
                                        }}
                                        className="absolute cursor-pointer"
                                        onClick={() => setActiveIndex(idx)}
                                    >
                                        <motion.div
                                            animate={{
                                                scale: isActive ? 1 : 0.95,
                                                filter: isActive ? 'grayscale(0%) contrast(100%) brightness(100%)' : 'grayscale(50%) contrast(90%) brightness(90%)'
                                            }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            {renderCard(idx)}
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;