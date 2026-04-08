import { CryptoGrid } from "@/components/CryptoGrid";
import Grid99 from "@/components/Grid99";

const PowerSection = () => {
  return (
    <section className="relative py-24 px-4 bg-[#F7F9FC] overflow-hidden">
      
      <Grid99 className="absolute left-[30%] top-[10%] opacity-[0.07] scale-[2.5] pointer-events-none" />
      <Grid99 className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.12] scale-[1.8] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-left mb-32">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black uppercase max-w-2xl">
            POWER YOUR IDEAS WITH AN <br />
            <span className="text-blue-600">ALL-IN-ONE</span> CRYPTO <br />
            PLATFORM <span className="text-blue-600 inline-flex items-start ml-1"><sup className="text-sm md:text-lg">99</sup></span>
          </h1>
        </div>
        
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black flex items-center justify-center gap-1 uppercase">
            TOP COIN<span className="text-blue-600">99</span> PICKS
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
            Trade, invest, and manage cryptocurrency with institutional-grade security and 
            compliance. Access 200+ digital assets on India's most trusted platform.
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 active:scale-95 uppercase text-sm">
            Explore Now
          </button>
        </div>
      </div>

      <CryptoGrid />

    </section>
  );
};

export default PowerSection;