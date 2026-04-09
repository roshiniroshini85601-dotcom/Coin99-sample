import Link from "next/link";
import { Search, Globe, Wallet, ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-3.5 bg-white dark:bg-[#000616] border-b border-gray-100 dark:border-white/5 transition-colors duration-500">

      <div className="flex-1 flex items-center">
        <div className="flex items-center gap-1.5 cursor-pointer">
          <span className="font-bold text-[20px] md:text-[22px] tracking-tighter text-black dark:text-white uppercase">Coin</span>
          <span className="font-bold text-[20px] md:text-[22px] tracking-tighter text-[#4338CA] uppercase">99</span>
          <span className="text-black dark:text-white font-medium mx-1 md:mx-1.5 text-[18px] md:text-[22px]">|</span>
          <span className="font-bold text-[20px] md:text-[22px] tracking-tighter text-black dark:text-white uppercase transition-colors">Token</span>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="text-[15px] font-bold text-gray-900 dark:text-white uppercase tracking-widest group-hover:text-blue-600 transition-colors">Resources</span>
          <ChevronDown size={14} className="text-black dark:text-white stroke-[4px]" />
        </div>
        <Link href="#" className="text-[15px] font-bold text-gray-900 dark:text-white uppercase tracking-widest hover:text-blue-600 transition-colors">
          About
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-end gap-5">

        {/* Desktop Search Bar (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center bg-[#F9FAFB] dark:bg-[#000411] border border-[#E5E7EB] dark:border-white/10 rounded-xl px-4 py-2 w-[320px] justify-between group focus-within:border-blue-500 transition-all shadow-sm">
          <div className="flex items-center gap-2.5">
            <Search size={16} className="text-gray-400 dark:text-slate-500 stroke-[2.5px]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-[13px] text-gray-600 dark:text-gray-300 placeholder:text-gray-400 w-full font-medium"
            />
          </div>
          <span className="text-gray-300 dark:text-slate-600 text-[10px] bg-gray-100 dark:bg-slate-800 px-1.5 rounded-sm">/</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
          <Globe size={22} className="text-gray-500 dark:text-slate-400 stroke-[2.5px] hover:text-blue-600 cursor-pointer" />
          <Wallet size={22} className="text-gray-500 dark:text-slate-400 stroke-[2.5px] hover:text-blue-600 cursor-pointer" />
          <button className="border-[1.5px] border-[#101E35] dark:border-white/20 text-[#0052FF] dark:text-blue-400 px-3 py-1.5 rounded-[10px] text-[14px] font-bold whitespace-nowrap hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm">
            Sign Up
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <Menu size={22} className="text-blue-600 dark:text-white cursor-pointer hover:text-blue-600 transition-colors" />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
