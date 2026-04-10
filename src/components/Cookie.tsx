'use client';
import { useState } from "react";

export function Cookie() {
  const [show, setShow] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  if (isAccepted) return null;

  return (
    <div className="absolute right-[-300px] bottom-[140px] z-50">

      {show && (
        <div className="absolute bottom-[-10px] right-full mr-4 w-[350px] md:w-[600px] dark:bg-[#06080E] bg-white border border-white/20 rounded-xl p-6 flex items-center justify-between shadow-2xl text-white">
          <div className="flex items-center gap-4">
            <img src="/cookie.svg" className="w-8 h-8 opacity-50" />
            <p className="text-sm text-[#6B7385]">
              We use third-party cookies to provide you the best user experience and for performance analytics.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAccepted(true)}
              className="bg-[#2323FF] text-white px-5 py-2 rounded-lg font-bold text-sm whitespace-nowrap"
            >
              Accept
            </button>

            <button
              onClick={() => setShow(false)}
              className="w-8 h-8 flex-shrink-0 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/10 text-black dark:text-white "
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <img
        className="w-[60px] h-[60px] cursor-pointer"
        src="/cookie.svg"
        alt="cookie"
        onClick={() => setShow(!show)}
      />
    </div>
  );
}

export default Cookie;
