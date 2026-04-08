import Link from "next/link";
import { Search, Globe, Wallet, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
<nav className="flex items-center justify-between px-10 py-3 bg-white border-b border-gray-100">      
      <div className="flex-1 flex items-center">
        <div className="flex items-center gap-1.5 cursor-pointer">
          <span className="font-black text-[22px] tracking-tighter text-black uppercase">Coin</span>
          <span className="font-black text-[22px] tracking-tighter text-[#4338CA] uppercase">99</span>
          <span className="text-black font-black mx-1.5 text-[22px]">|</span>
          <span className="font-black text-[22px] tracking-tighter text-black uppercase">Token</span>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="text-[15px] font-bold text-gray-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Resources</span>
          <ChevronDown size={14} className="text-black stroke-[4px]" />
        </div>
        <Link href="#" className="text-[15px] font-bold text-gray-900 uppercase tracking-widest hover:text-blue-600 transition-colors">
          About
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-end gap-5">
        
        <div className="hidden md:flex items-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2 w-[280px] lg:w-[320px] justify-between group focus-within:border-blue-500 transition-all shadow-sm">
          <div className="flex items-center gap-2.5">
            <Search size={16} className="text-gray-400 stroke-[2.5px]" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent outline-none text-[13px] text-gray-600 placeholder:text-gray-400 w-full font-medium"
            />
          </div>
          <span className="text-gray-300 text-[10px] bg-gray-100 px-1.5 rounded-sm">/</span>
        </div>

        <div className="flex items-center gap-6 flex-shrink-0">
          <Globe size={22} className="text-gray-500 stroke-[2.5px] hover:text-blue-600 cursor-pointer" />
          <Wallet size={22} className="text-gray-500 stroke-[2.5px] hover:text-blue-600 cursor-pointer" />
          
          <button className="border-[1.5px] border-[#101E35] text-[#0052FF] px-1 py-1 rounded-[10px] text-[14px] font-bold whitespace-nowrap hover:bg-gray-50 transition-all shadow-sm">
            Sign Up
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
