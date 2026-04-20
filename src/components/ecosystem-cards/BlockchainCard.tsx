"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function BlockchainCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: "1",
    hours: "59",
    minutes: "1",
    seconds: "59",
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[369px] bg-white dark:bg-[#0B0F1A] rounded-[24px] p-8 shadow-2xl border border-gray-100 dark:border-white/5 transition-all cursor-default">
      <div className="flex items-center justify-between mb-8">
        <div className="text-sm font-bold text-black dark:text-white">
          Get ready for something
          <span className="text-blue-600 ml-1">BIG!</span>
        </div>
        <button className="hover:opacity-60 transition-opacity">
          <X size={16} className="text-black dark:text-white" />
        </button>
      </div>

      <div>
        <div className="bg-gray-50 dark:bg-white/5 rounded-[12px] p-4 flex items-center justify-between mb-8 border border-gray-100 dark:border-white/5">
          {[
            { v: timeLeft.days, l: "Days" },
            { v: timeLeft.hours, l: "Hours" },
            { v: timeLeft.minutes, l: "Minutes" },
            { v: timeLeft.seconds, l: "Seconds" },
          ].map(({ v, l }) => (
            <div
              key={l}
              className="border-r last:border-r-0 border-gray-200 dark:border-white/10 flex-1 flex flex-col items-center lg:px-2"
            >
              <p className="font-bold text-2xl text-blue-600 tabular-nums">
                {v}
              </p>
              <p className="font-medium text-[10px] text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                {l}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 flex items-center justify-center flex-col px-4">
          <div className="text-black dark:text-white text-[14px] font-bold mb-2">
            The countdown has begun!
          </div>
          <div className="text-gray-500 dark:text-slate-400 text-[11px] leading-relaxed max-w-[285px]">
            We’re launching something exciting you won’t want to miss. Get ready for the next evolution of Coin99.
          </div>
        </div>

        <button className="bg-blue-600 text-white rounded-[10px] py-3 px-3 w-full text-center text-[13px] font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
          Proceed
        </button>
      </div>
    </div>
  );
}
