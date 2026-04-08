import { ArrowUpRight } from "lucide-react";

const HeroCard = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-[20px] shadow-xl p-2 relative transition-all overflow-hidden w-full">
            
            <div className="relative w-full aspect-[1.8/1] rounded-[16px] overflow-hidden bg-gradient-to-br from-[#4C40F2] via-[#3B5BFF] to-[#1E2BFF] flex items-center justify-center">

                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none">
                        <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="1" />
                        <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" />
                        <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1" />
                        <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1" />
                        <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="1" />
                        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
                        <circle cx="200" cy="200" r="200" stroke="white" strokeWidth="1" />
                        <circle cx="200" cy="200" r="220" stroke="white" strokeWidth="1" />
                    </svg>
                </div>

                <span className="text-white text-5xl md:text-6xl font-bold tracking-tight transform scale-y-[1.15]">
                    C99
                </span>
            </div>

            <div className="px-3 py-4 flex justify-between items-start bg-white">
                <div className="text-left w-full">
                    <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-tight">
                        Coin99 Token
                    </h3>
                    <p className="text-gray-400 text-[10px] sm:text-[11px] mt-1 font-medium leading-tight">
                        Create and manage your own digital assets effortlessly
                    </p>
                </div>

                <div className="text-slate-900 hover:text-blue-600 cursor-pointer transition-colors pt-0.5">
                    <ArrowUpRight size={22} strokeWidth={1.5} />
                </div>
            </div>
            
        </div>
    );
};

export default HeroCard;
