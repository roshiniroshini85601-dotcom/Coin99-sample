import React from "react";
import Grid99 from "@/components/Grid99";
import { CryptoGrid } from "@/components/CryptoGrid";

const PowerSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-[#EEF1F6] dark:bg-[#000616] overflow-hidden transition-colors duration-500">

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-end justify-between mb-20 md:mb-32 text-center lg:text-left">

          <div className="relative">
            <h1 className="text-3xl text-start font-bold md:text-6xl font-black leading-[1.1] text-black dark:text-white uppercase max-w-3xl tracking-normal">
              POWER YOUR IDEAS WITH AN <br />
              <span className="text-blue-600">ALL-IN-ONE</span> CRYPTO <br />
              PLATFORM <span className="text-blue-600 inline-flex items-start ml-1"><sup className="text-sm md:text-xl">99</sup></span>
            </h1>
          </div>

          <div className="mt-10 lg:mt-0 opacity-40 dark:opacity-20 shrink-0 transform scale-90 md:scale-150 transition-transform">
            <Grid99 className="" />
          </div>
        </div>

        <div className="text-center space-y-6 mb-12">
          <h2 className="text-[26px] md:text-5xl font-extrabold tracking-tight text-black dark:text-white flex items-center justify-center gap-1 uppercase">
            TOP COIN<span className="text-blue-600">99</span> PICKS
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-[14px] md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Trade, invest, and manage cryptocurrency with institutional-grade security and
            compliance. Access 200+ digital assets on India's most trusted platform.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 md:px-10 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 active:scale-95 uppercase text-[13px] md:text-sm">
            Explore Now
          </button>
        </div>
      </div>

      <CryptoGrid />
    </section>
  );
};

export default PowerSection;