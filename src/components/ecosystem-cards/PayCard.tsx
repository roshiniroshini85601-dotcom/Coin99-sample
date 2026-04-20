"use client";
import React from "react";
import { ArrowDownLeft } from "lucide-react";

export default function PayCard() {
  return (
    <div className="w-[340px] bg-white dark:bg-[#0B0F1A] rounded-[24px] p-8 shadow-2xl border border-gray-100 dark:border-white/5 transition-all cursor-default">
      <div className="relative w-full aspect-[275/155] mb-6 overflow-hidden rounded-[15px] shadow-lg">
        <img 
          src="/platinum.svg" 
          alt="Platinum Card" 
          className="w-full h-full object-cover" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/275x155/2323FF/white?text=Platinum+Card";
          }}
        />
      </div>

      <div>
        <div className="text-gray-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-tight mb-1">
          Your Balance
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-black dark:text-white text-[28px] font-bold tabular-nums">
            $23,00,000
          </span>
          <button className="bg-gray-50 dark:bg-white/5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-100 dark:border-white/5">
            <span className="text-black dark:text-white text-[18px]">⇄</span>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-tight">
            Transaction Today
          </div>
          {[
            { date: "24 Mar, 11:46 AM", amount: "+$12,000" },
            { date: "22 Mar, 3:24 PM", amount: "+$4,000" },
          ].map((tx, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-white/5 rounded-[14px] py-3 px-4 flex items-center justify-between border border-gray-100 dark:border-white/5 transition-all hover:bg-gray-100 dark:hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                  <ArrowDownLeft
                    size={18}
                    className="text-green-500"
                  />
                </div>

                <div>
                  <div className="text-[12px] font-bold text-black dark:text-white">Deposit</div>
                  <div className="text-[10px] text-gray-500 dark:text-slate-400">{tx.date}</div>
                </div>
              </div>
              <span className="text-green-500 text-[12px] font-black">
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
