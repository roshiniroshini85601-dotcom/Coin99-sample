import HeroCard from "@/components/HeroCard";
import Grid99 from "@/components/Grid99";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 pt-6 pb-4 px-4 bg-white overflow-hidden">
      <Grid99 className="absolute top-[40%] -left-[30px] md:left-[8%] scale-75 md:scale-100" />
      <Grid99 className="absolute bottom-[20%] -right-[30px] md:right-[5%] scale-75 md:scale-100" />

      <div className="relative z-10 max-w-xl text-center space-y-3">
        <h1 className="text-xl md:text-4xl font-bold text-black leading-snug uppercase">
          Build, Launch, Trade <br />
          All In One Crypto Universe
        </h1>

        <p className="text-gray-400 text-[15px] md:text-[15px] max-w-md mx-auto">
          Coin99 brings together token creation, launchpads, trading,<br/> payments, and blockchain infrastructure into a single powerful <br/>ecosystem.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[460px] mx-auto">

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[85%] h-full bg-[#F3F6FF] border border-blue-200 rounded-[18px] opacity-70"></div>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[92%] h-full bg-[#0B1121] border border-slate-800 rounded-[18px]"></div>

        <HeroCard />

      </div>

    </section>
  );
};

export default Hero;