import HeroCard from "@/components/HeroCard";
import Grid99 from "@/components/Grid99";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 pt-10 pb-16 px-6 bg-white dark:bg-[#000616] overflow-hidden transition-colors duration-500">


      <div className="relative z-10 max-w-5xl text-center space-y-5">
        <h1 className="font-bold text-[22px]  md:text-5xl font-black text-black dark:text-white leading-[1.1] uppercase tracking-normal ">
          Build, Launch, Trade <br className="hidden md:block" />
          All In One Crypto Universe
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-[14px] md:text-[15px] max-w-md mx-auto leading-relaxed px-4">
          Coin99 brings together token creation, launchpads, trading, payments, and blockchain infrastructure into a single powerful ecosystem.
        </p>

      </div>
      <Grid99 className="absolute top-[30%]  -left-[10%] md:left-[8%] scale-[0.6] md:scale-100 opacity-30 dark:opacity-15 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[320px] md:max-w-[460px] mx-auto mt-4">

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[85%] h-full bg-[#F3F6FF] dark:bg-slate-800/10 border border-blue-200 dark:border-white/5 rounded-[18px] opacity-70"></div>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[92%] h-full bg-[#0B1121] dark:bg-[#000411] border border-slate-800 dark:border-white/10 rounded-[18px]"></div>

        <div className="scale-[0.9] md:scale-100 transition-transform duration-500">
          <HeroCard />
        </div>


      </div>

    </section>
  );
};

export default Hero;