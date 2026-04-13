import React from "react";
import Grid99 from "@/components/Grid99";
import { CryptoGrid } from "@/components/CryptoGrid";
import Cookie from "@/components/Cookie";

const PowerSection = () => {
  return (
    <section className="relative py-8 md:py-24 px-4 md:px-6 bg-[#EEF1F6] dark:bg-[#000A24] overflow-hidden transition-colors duration-500">

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-end justify-between mb-6 md:mb-32 text-center lg:text-left">

          <div className="relative w-full flex flex-col items-start text-left">
            <h1 className="text-3xl lg:text-[70px] md:text-[46px] md:font-bold md:leading-[70px] text-black dark:text-white uppercase max-w-7xl tracking-normal">
              POWER YOUR IDEAS WITH AN <br />
              <span className="text-blue-600">ALL-IN-ONE</span> CRYPTO <br />
              PLATFORM <span className="text-blue-600 inline-flex items-start ml-1"><sup className="text-sm md:text-xl">99</sup></span>
            </h1>
          </div>

          <div className="hidden md:block mt-10 lg:mt-0 opacity-40 dark:opacity-20 shrink-0 transform md:scale-[0.6] lg:scale-[1.3] md:absolute md:-right-4 md:top-4 transition-transform">
            <Grid99 className="lg:w-[200px] lg:mt-[100px] lg:mr-[150px]" />
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

      <div className="-mx-6">
        <CryptoGrid />
      </div>
      <Cookie />
    </section>
  );
};

export default PowerSection;