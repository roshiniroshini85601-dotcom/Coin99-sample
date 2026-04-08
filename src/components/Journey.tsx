import React from 'react';
import Image from 'next/image';

const Journey = () => {
    return (
        <section className="relative bg-[#F4F7FB] py-10 md:py-16 overflow-hidden w-full flex flex-col items-center">

            <div
                className="absolute inset-0 opacity-[0.2] pointer-events-none bg-center bg-cover bg-no-repeat scale-90"
                style={{ backgroundImage: "url('/waves.png')" }}
            >
            </div>

            <div className="relative z-10 w-full flex justify-center items-center py-4 md:py-8 max-w-7xl mx-auto min-h-[250px] md:min-h-[420px]">
                <div className="relative w-[400px] md:w-[480px] h-auto flex justify-center items-center opacity-[0.95]">
                    <Image 
                        src="/99.png" 
                        alt="99 Brand" 
                        width={480} 
                        height={300} 
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                <div className="absolute top-[15%] md:top-[20%] left-[2%] md:left-[8%] w-[120px] md:w-[200px] transform hover:scale-105 transition-transform duration-500 z-20">
                    <Image 
                        src="/Silver 1.png" 
                        alt="Silver Wallet Card" 
                        width={200} 
                        height={125} 
                        className="w-full h-auto drop-shadow-md"
                    />
                </div>

                <div className="absolute top-[40%] md:top-[55%] right-[2%] md:right-[8%] w-[120px] md:w-[200px] transform hover:scale-105 transition-transform duration-500 z-20">
                    <Image 
                        src="/Gold 1.png" 
                        alt="Gold Wallet Card" 
                        width={200} 
                        height={125} 
                        className="w-full h-auto drop-shadow-md"
                    />
                </div>
            </div>

            <div className="relative z-30 flex flex-col md:flex-row items-center gap-6 mt-2 w-full justify-center px-10">
                <div className=" px-6 py-3 rounded-[4px] ">
                    <h2 className="text-xl md:text-[32px] font-bold text-black tracking-wide uppercase leading-none">
                        START YOUR INDIAN CRYPTO JOURNEY
                    </h2>
                </div>
                
                <button className="bg-white border-[1px] border-black text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-sm active:scale-95 text-md">
                    Sign Up
                </button>
            </div>

        </section>
    );
};

export default Journey;
