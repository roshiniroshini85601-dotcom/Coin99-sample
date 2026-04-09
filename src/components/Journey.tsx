"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Journey = () => {
    const [Flip, setFlip] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setFlip((prev) => (prev + 1) % 2);
        }, 3000);
        return () => clearInterval(timer);
    }, []);
    return (
        <section className="relative bg-[#F4F7FB] dark:bg-[#06080E] py-6 md:py-16 overflow-hidden w-full flex flex-col items-center transition-colors duration-500">

            <div
                className="absolute inset-0 opacity-[0.2] dark:opacity-[0.35] pointer-events-none bg-center bg-cover bg-no-repeat scale-90 transition-opacity duration-500"
                style={{ backgroundImage: "url('/waves.png')" }}
            >
            </div>

            <div className="relative z-10 w-full flex justify-center items-center  py-4 md:py-8 max-w-7xl mx-auto min-h-[200px] md:min-h-[420px]">
                <div className=" relative w-[130px] md:w-[200px] lg:w-[380px] h-auto flex justify-center items-center opacity-[0.95]">
                    <Image
                        src="/99.png"
                        alt="99 Brand"
                        width={380}
                        height={250}
                        className="w-full h-auto object-contain dark:brightness-5000"
                        priority
                    />
                </div>

                <div className="absolute top-[5%] md:top-[20%] left-[2%] md:left-[8%] w-[100px] md:w-[200px] transform hover:scale-105 transition-transform duration-500 z-20">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={Flip ? "silver" : "gold"}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className='w-full h-auto drop-shadow-md'
                        >
                            <Image
                                src={Flip ? "/Silver 1.png" : "/Gold 1.png"}
                                alt="Silver Wallet Card"
                                width={250}
                                height={125}
                                className="w-full h-auto drop-shadow-md"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute top-[70%] mb-[150px]  md:top-[55%] right-[2%] md:right-[8%] w-[100px] md:w-[200px] transform hover:scale-105 transition-transform duration-500 z-20">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={Flip ? "gold" : "silver"}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className='w-full h-auto drop-shadow-md'
                        >
                            <Image
                                src={Flip ? "/Gold 1.png" : "/Silver 1.png"}
                                alt="Gold Wallet Card"
                                width={250}
                                height={125}
                                className="w-full h-auto drop-shadow-md"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="relative z-30 flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-2 w-full justify-center px-6">
                <div className="text-center md:text-left">
                    <h2 className="text-[18px] md:text-[32px] max-w-[300px] md:max-w-4xl font-bold text-black dark:text-white tracking-wide uppercase leading-[1.1]">
                        START YOUR INDIAN CRYPTO JOURNEY
                    </h2>
                </div>

                <button className="bg-white dark:bg-slate-800/10 border-[1px] border-black dark:border-white/20 text-blue-600 dark:text-blue-400 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-white/5 transition-all duration-300 shadow-sm active:scale-95 text-md">
                    Sign Up
                </button>
            </div>

        </section>
    );
};

export default Journey;
