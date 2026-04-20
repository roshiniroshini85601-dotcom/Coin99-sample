"use client";
import React from "react";
import { ChevronDown, Landmark } from "lucide-react";

export default function ExchangeCard() {
  return (
    <div className="w-[369px] bg-white dark:bg-[#0B0F1A] rounded-[24px] p-8 shadow-2xl border border-gray-100 dark:border-white/5 transition-all cursor-default relative">
      <div className="text-[16px] font-semibold flex items-center justify-center gap-1.5 text-black dark:text-white mb-8">
        <span>
          COIN<span className="text-blue-600">99</span>
        </span>
        <span className="opacity-20 mx-1">|</span>
        <span className="uppercase tracking-widest text-[14px]">Swap</span>
      </div>
      
      <div>
        <div className="text-[10px] font-bold text-gray-500 dark:text-slate-400 mb-2 uppercase tracking-tight">
          Pay
        </div>
        <div className="rounded-[12px] py-3 px-4 bg-gray-50 dark:bg-white/5 flex items-center justify-between mb-5 border border-gray-100 dark:border-white/5">
          <span className="text-[18px] text-black dark:text-white font-bold">
            1100
          </span>
          <div className="rounded-[8px] py-1 px-3 bg-white dark:bg-white/10 flex items-center gap-2 border border-gray-100 dark:border-white/5 shadow-sm">
            <span className="text-[14px]">🇮🇳</span>
            <span className="text-[13px] text-black dark:text-white font-bold">
              INR
            </span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>

        <div className="text-[10px] font-bold text-gray-500 dark:text-slate-400 mb-2 uppercase tracking-tight">
          You get
        </div>
        <div className="rounded-[12px] py-3 px-4 bg-gray-50 dark:bg-white/5 flex items-center justify-between mb-2 border border-gray-100 dark:border-white/5">
          <span className="text-[18px] text-black dark:text-white font-bold">
            10.94
          </span>
          <div className="rounded-[8px] py-1 px-3 bg-white dark:bg-white/10 flex items-center gap-2 border border-gray-100 dark:border-white/5 shadow-sm">
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
               <span className="text-[8px] text-white font-bold">₮</span>
            </div>
            <span className="text-[13px] text-black dark:text-white font-bold">
              USDT
            </span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium mb-8">
          <span>1 USDT = ₹99.9</span>
          <span>Network Fee ₹1</span>
        </div>

        <div className="font-bold text-[10px] text-gray-500 dark:text-slate-400 mb-2 uppercase tracking-tight">
          Pay using
        </div>
        <div className="rounded-[12px] p-2 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 mb-8">
          <div className="bg-white dark:bg-white/10 rounded-[8px] p-3 flex items-center gap-3 border border-gray-100 dark:border-white/5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center">
               <Landmark size={16} className="text-blue-600" />
            </div>
            <div>
              <div className="font-bold text-[12px] text-black dark:text-white leading-tight">IMPS</div>
              <div className="text-[10px] text-gray-500 dark:text-slate-400">Pay via bank transfer</div>
            </div>
          </div>
          <div className="mt-3 px-1 flex items-center justify-between">
            <span className="text-gray-500 dark:text-slate-400 text-[10px]">Total includes fees</span>
            <button className="text-blue-600 text-[10px] font-bold hover:underline">Show details</button>
          </div>
        </div>

        <button className="bg-blue-600 text-white rounded-[12px] py-4 w-full text-[14px] font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 active:scale-[0.98] transition-all">
          Proceed
        </button>
        <div className="text-gray-400 text-[10px] text-center mt-4">
          Registered with FIU-IND in India
        </div>
      </div>
    </div>
  );
}
