import Hero from "@/components/Hero";
import PowerSection from "@/components/PowerSection";
import Ecosystem from "@/components/Ecosystem";
import FIU from "@/components/FIU";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] dark:bg-[#06080E]">
      <Hero />
      <PowerSection />
      <Ecosystem />
      <FIU />
      <Journey />
      <Footer />
    </main>
  );
}
