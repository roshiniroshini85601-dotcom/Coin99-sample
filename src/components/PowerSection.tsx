import React from "react";
import Grid99 from "@/components/Grid99";
import { CryptoGrid } from "@/components/CryptoGrid";
import Cookie from "@/components/Cookie";

const PowerSection = () => {
  return (
    <section className="relative py-8 md:py-24 px-4 md:px-6 bg-[#EEF1F6] dark:bg-[#000A24] overflow-hidden transition-colors duration-500">

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-end justify-between mb-6 md:mb-32 text-center lg:text-left">

          <div className="relative w-full flex flex-col items-start line-height-[100%] text-left">
            <h1 className="font-bold text-[33px] leading-[1.05] lg:text-[74px] lg:leading-[100%] md:text-[46px] md:font-bold md:leading-[70px] text-black dark:text-white uppercase max-w-7xl tracking-normal">
              POWER YOUR <br className="md:hidden" /> IDEAS WITH AN <br />
              <span className="dark:text-[#8DAEFF] text-[#0037B4]">ALL-IN-ONE</span> <br className="md:hidden" /> CRYPTO <br className="md:hidden" />
              <span className="inline-flex items-start">
                PLATFORM
                <span className="dark:text-[#8DAEFF] text-[#0037B4] text-[20px] lg:text-[28px] font-[700] ml-2 lg:ml-1 -mt-1 lg:-mt-2 leading-none">
                  99
                </span>
              </span>
            </h1>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden w-[64px] h-[46px] mt-4 ml-[100px] opacity-40 dark:opacity-20 shrink-0 transform scale-[0.36] origin-left -ml-2">
            <Grid99 />
          </div>

          <div className="hidden md:block mt-10 lg:mt-0 opacity-40 dark:opacity-20 shrink-0 transform md:scale-[0.6] lg:scale-[1.3] md:absolute md:-right-4 md:top-4 transition-transform">
            <Grid99 className="lg:w-[200px] lg:mt-[100px] lg:mr-[150px]" />
          </div>
        </div>

        <div className="text-center space-y-6 mb-12">
          <h2 className="text-[26px] md:text-5xl font-extrabold tracking-tight text-black dark:text-white flex items-center justify-center gap-1 uppercase">
            TOP COIN<span className="text-blue-600">99</span> PICKS
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-[12.5px] md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Trade, invest, and manage cryptocurrency with institutional-grade security and
            compliance. Access 200+ digital assets on India's most trusted platform.
          </p>

          <button className="bg-[#2323FF] text-white font-semibold w-[135px] h-[40px] rounded-[10px] transition-all duration-300 active:scale-95 text-[18px] leading-[24px] flex items-center justify-center mx-auto">
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