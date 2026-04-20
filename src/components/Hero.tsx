import HeroCard from "@/components/HeroCard";
import Grid99 from "@/components/Grid99";
import Cookie from "@/components/Cookie";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[100vh] flex flex-col items-center justify-start pt-16 md:pt-32 pb-8 md:pb-20 px-4 md:px-6 bg-[#F7F9FC] dark:bg-[#06080E] overflow-hidden transition-colors duration-500">

      <div className="absolute inset-0 z-0 pointer-events-none max-w-[1440px] mx-auto w-full">
        <Grid99 className="absolute top-[40%] md:top-[35%] lg:top-[22%] -left-[5%] md:left-3 lg:left-12 scale-[0.35] md:scale-[0.7] lg:scale-100 opacity-30 dark:opacity-15" />
        <Grid99 className=" absolute top-[85%] left-[50%] md:top-[75%] lg:left-[85%] md:left-[75%] lg:top-[60%] -right-[5%] md:right-2 lg:right-12 scale-[0.35] md:scale-[0.7] lg:scale-100 opacity-30 dark:opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        <h1 className="font-bold text-[24px] md:text-[54px] lg:text-[58px] font-black text-black dark:text-white leading-[1.3] md:leading-[1.05] uppercase tracking-tighter mb-6">
          <span className="whitespace-nowrap block">Build, Launch, Trades</span>
          <span className="md:hidden">All In One <br /> Crypto Universe</span>
          <span className="hidden md:inline">All In One Crypto Universe</span>
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-[14px] md:text-[16px] lg:text-[19px] max-w-2xl mx-auto leading-relaxed px-2 md:px-4 mb-10 md:mb-16">
          Coin99 brings together token creation, launchpads, trading,<br className="hidden md:block" />
           payments,and blockchain infrastructure into a single powerful <br className="hidden md:block" />ecosystem.
        </p>

        <Cookie/>
        <div className="w-full mt-4">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;