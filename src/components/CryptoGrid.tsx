"use client";
import React from "react";
import { motion } from "framer-motion";

const cryptoData = [
  { name: "Solana", symbol: "SOL", price: "$4,85,320", change: "2.45%", icon: "/sol.png" },
  { name: "Tether", symbol: "USDT", price: "$1.00", change: "0.01%", icon: "/tet.png" },
  { name: "Bitcoin", symbol: "BTC", price: "$4,85,320", change: "2.45%", icon: "/bit.png" },
  { name: "BNB", symbol: "BNB", price: "$4,85,320", change: "2.45%", icon: "/bnb.png" },
  { name: "Ethereum", symbol: "ETH", price: "$4,85,320", change: "2.45%", icon: "/eth.png" },
  { name: "Csmos", symbol: "ATOM", price: "$4,85,320", change: "2.45%", icon: "/cs.png" },
];

const CoinCard = ({ coin }: any) => (
  <motion.div
    className="flex-shrink-0 w-[236px] min-h-[116px] bg-[#DDE3ED] dark:bg-[#1C2230]/40 rounded-[12px] pt-[14px] pb-[14px] px-[13px] border border-[#9AA6B2] dark:border-[#2F3747] shadow-[0_0_12px_rgba(0,0,0,0.14)] flex flex-col justify-between transition-all duration-300 mx-1.5 overflow-hidden cursor-pointer"
  >
    <div className="flex items-center gap-3">
      <div className="w-[32px] h-[32px] overflow-hidden flex-shrink-0">
        <img src={coin.icon} alt={coin.name} className="w-full h-full object-contain" />
      </div>
      <div className="flex items-baseline gap-2 overflow-hidden">
        <h3 className="font-semibold text-[#0B0F1A] dark:text-white text-[20px] leading-[28px] tracking-tight whitespace-nowrap">{coin.name}</h3>
        <span className="text-[12px] text-gray-500 dark:text-gray-400 font-medium uppercase">{coin.symbol}</span>
      </div>
    </div>

    <div className="flex items-center justify-between border-t border-white dark:border-[#1C2230] pt-3">
      <p className="text-[#2323FF] font-semibold text-[16px] leading-[24px]">{coin.price}</p>
      <div className="flex items-center gap-1 bg-[#E7F9F3] dark:bg-[#06221A] px-2.5 py-1 rounded-md text-[#095037] dark:text-[#6FE7B8] text-[11px] font-medium border border-green-200/50 dark:border-none">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L9 13L13 17L20 7M20 7H14M20 7V13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>+{coin.change}</span>
      </div>
    </div>
  </motion.div>
);

export function CryptoGrid() {
  const items = [...cryptoData, ...cryptoData, ...cryptoData];

  return (
    <div className="w-full relative overflow-hidden py-10 flex flex-col gap-6 ">

      {/* Row 1 */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max anim-marquee hover-pause">
          {items.map((coin, index) => (
            <CoinCard key={`r1-${index}`} coin={coin} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max anim-marquee-reverse hover-pause ml-[-200px]">
          {items.map((coin, index) => (
            <CoinCard key={`r2-${index}`} coin={coin} />
          ))}
        </div>
      </div>

    </div>
  );
}