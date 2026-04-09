import React from "react";

const FIU = () => {
  return (
    <section className="relative w-full py-8 md:py-32 px-4 md:px-6 bg-[#4F5B6E] dark:bg-[#06080E] overflow-hidden transition-colors duration-500">

      <div className="absolute inset-0 z-0">
        <img
          src="/bgwave.png"
          alt="background wave"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-[42px] font-bold uppercase tracking-wide mb-4 drop-shadow-md text-white">
          FIU COMPLIANCE IN BANGALORE
        </h1>

        <p className="text-gray-200 text-[13px] md:text-[14px] leading-relaxed max-w-2xl mb-8 font-medium">
          Expert FIU compliance services to keep your business secure, transparent, and<br className="hidden md:block" /> fully aligned with regulatory standards.
        </p>

        <button className="bg-white text-blue-700 font-bold text-[14px] px-8 py-2.5 rounded-[10px] shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          Sign Up
        </button>
      </div>

    </section>
  );
};

export default FIU;
