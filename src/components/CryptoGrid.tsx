"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const cryptoData = [
  { name: "Solana", symbol: "SOL", price: "₹4,85,320", change: "+2.45%", icon: "/sol.png" },
  { name: "Tether", symbol: "USDT", price: "₹4,85,320", change: "+2.45%", icon: "/tet.png" },
  { name: "Bitcoin", symbol: "BTC", price: "₹4,85,320", change: "+2.45%", icon: "/bit.png" },
  { name: "BNB", symbol: "BNB", price: "₹4,85,320", change: "+2.45%", icon: "/bnb.png" },
  { name: "Ethereum", symbol: "ETH", price: "₹4,85,320", change: "+2.45%", icon: "/eth.png" },
  { name: "Cosmos", symbol: "ATOM", price: "₹4,85,320", change: "+2.45%", icon: "/cos.png" },
];
const CoinCard = ({ coin }: any) => (
  <div className="flex-shrink-0 w-[240px] bg-[white] dark:bg-[#1C223099] rounded-2xl p-5 border border-white/10 text-white shadow-sm hover:shadow-md transition-all duration-300 mx-2">

    <div className="flex items-center gap-3 mb-4">
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
        <img src={coin.icon} alt={coin.name} className="w-full h-full object-contain" />
      </div>

      <div className="flex items-baseline gap-1.5">
        <h3 className="font-bold text-slate-900 text-sm whitespace-nowrap dark:text-white">{coin.name}</h3>
        <span className="text-[10px] text-gray-500 font-medium uppercase">{coin.symbol}</span>
      </div>
    </div>

    <div className="flex items-center justify-between border-t border-black/10 pt-4 mt-1">
      <p className="text-blue-600 font-bold text-[16px]">{coin.price}</p>
      <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full text-green-600 text-[11px] font-bold">
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