"use client";
import React from "react";
import { motion } from "framer-motion";

const cryptoData = [
  { name: "Solana", symbol: "SOL", price: "₹4,85,320", change: "+2.45%", icon: "◎" },
  { name: "Tether", symbol: "USDT", price: "₹4,85,320", change: "+2.45%", icon: "₮" },
  { name: "Bitcoin", symbol: "BTC", price: "₹4,85,320", change: "+2.45%", icon: "₿" },
  { name: "BNB", symbol: "BNB", price: "₹4,85,320", change: "+2.45%", icon: "◆" },
  { name: "Ethereum", symbol: "ETH", price: "₹4,85,320", change: "+2.45%", icon: "◈" },
  { name: "Cosmos", symbol: "ATOM", price: "₹4,85,320", change: "+2.45%", icon: "⚛" },
];

const getIconColor = (name: string) => {
  const colors: { [key: string]: string } = {
    Bitcoin: "bg-orange-500",
    Ethereum: "bg-indigo-600",
    BNB: "bg-yellow-400",
    Tether: "bg-teal-500",
    Cosmos: "bg-slate-700",
    Solana: "bg-purple-600",
  };
  return colors[name] || "bg-blue-500";
};

const CoinCard = ({ coin }: { coin: (typeof cryptoData)[0] }) => (
  <div className="flex-shrink-0 w-[240px] bg-[#EEF2F9] rounded-2xl p-5 border border-slate-200/50 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div
        className={`w-10 h-10 rounded-full ${getIconColor(
          coin.name
        )} flex items-center justify-center text-white text-xl font-bold`}
      >
        {coin.icon}
      </div>
      <div>
        <div className="flex items-center gap-1.5 ">
          <h3 className="font-bold text-slate-900 text-sm whitespace-nowrap">{coin.name}</h3>
          <span className="text-[10px] text-gray-500 font-medium uppercase">{coin.symbol}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between border-t border-slate-200/50 pt-4 mt-1">
      <p className="text-blue-600 font-bold text-[16px]">{coin.price}</p>
      <div className="flex items-center gap-1 bg-[#E1F8EF] px-2 py-0.5 rounded-full text-[#14C784] text-[11px] font-bold">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span>{coin.change}</span>
      </div>
    </div>
  </div>
);

export function CryptoGrid() {  const marqueeItems = [...cryptoData, ...cryptoData, ...cryptoData];

  return (
    <div className="w-full relative overflow-hidden py-10">
      <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#F7F9FC] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#F7F9FC] to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex gap-6 mb-6"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {marqueeItems.map((coin, index) => (
          <CoinCard key={`row1-${index}`} coin={coin} />
        ))}
      </motion.div>

      <motion.div
        className="flex gap-6 pl-12"
        animate={{ x: ["-33.33%", "0%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...marqueeItems].reverse().map((coin, index) => (
          <CoinCard key={`row2-${index}`} coin={coin} />
        ))}
      </motion.div>
    </div>
  );
}