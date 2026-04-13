"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const cryptoData = [
  { name: "Solana", symbol: "SOL", price: "₹4,85,320", change: "+2.45%", icon: "/sol.png" },
  { name: "Tether", symbol: "USDT", price: "₹4,85,320", change: "+2.45%", icon: "/tet.png" },
  { name: "Bitcoin", symbol: "BTC", price: "₹4,85,320", change: "+2.45%", icon: "/bit.png" },
  { name: "BNB", symbol: "BNB", price: "₹4,85,320", change: "+2.45%", icon: "/bnb.png" },
  { name: "Ethereum", symbol: "ETH", price: "₹4,85,320", change: "+2.45%", icon: "/eth.png" },
  { name: "Cosmos", symbol: "ATOM", price: "₹4,85,320", change: "+2.45%", icon: "/cs.png" },
];
const CoinCard = ({ coin }: any) => (
  <div className="flex-shrink-0 w-[236px] min-h-[106px] bg-[#DDE3ED] dark:bg-[#1C2230]/40 rounded-[12px] pt-[14px] pb-[14px] px-[13px] border border-[#9AA6B2] dark:border-[#2F3747] flex flex-col gap-[12px] hover:shadow-md dark:shadow-[0_0_12px_rgba(0,0,0,0.14)] transition-all duration-300 mx-1.5 overflow-hidden">

    <div className="flex items-center gap-3">
      <div className="w-[32px] h-[32px] bg-white/10 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-white/5">
        <img src={coin.icon} alt={coin.name} className="w-full h-full object-contain" />
      </div>
      <div className="flex items-baseline gap-2 overflow-hidden">
        <h3 className="font-bold text-[#0B0F1A] dark:text-white text-[18px] md:text-[20px] tracking-tight whitespace-nowrap">{coin.name}</h3>
        <span className="text-[12px] text-gray-500 dark:text-gray-400 font-bold uppercase">{coin.symbol}</span>
      </div>
    </div>

    <div className="flex items-center justify-between border-t border-gray-400/20 dark:border-[#1C223066] pt-3">
      <p className="text-[#0052FF] dark:text-[#528EFF] font-black text-[16px] md:text-[18px]">{coin.price}</p>
      <div className="flex items-center gap-1 bg-white/50 dark:bg-[#06221A] px-2.5 py-1 rounded-md text-green-600 dark:text-[#28C76F] text-[11px] font-black border border-green-200/50 dark:border-none">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m19 12-7-7-7 7" /><path d="M12 19V5" /></svg>
        <span>{coin.change}</span>
      </div>
    </div>
  </div>
);

export function CryptoGrid() {
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);

  const items = [...cryptoData, ...cryptoData, ...cryptoData];

  return (
    <div className="w-full relative overflow-hidden py-10">

      <div onMouseEnter={() => setRow1Paused(true)} onMouseLeave={() => setRow1Paused(false)} className="mb-6">
        <motion.div
          className="flex"
          animate={row1Paused ? {} : { x: ["0%", "-33.33%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {items.map((coin, index) => <CoinCard key={index} coin={coin} />)}
        </motion.div>
      </div>

      <div onMouseEnter={() => setRow2Paused(true)} onMouseLeave={() => setRow2Paused(false)}>
        <motion.div
          className="flex"
          animate={row2Paused ? {} : { x: ["-33.33%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...items].reverse().map((coin, index) => <CoinCard key={index} coin={coin} />)}
        </motion.div>
      </div>

    </div>
  );
}