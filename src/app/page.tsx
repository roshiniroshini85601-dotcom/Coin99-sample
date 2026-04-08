import Hero from "@/components/Hero";
import PowerSection from "@/components/PowerSection";
import Ecosystem from "@/components/Ecosystem";
import FIU from "@/components/FIU";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PowerSection />
      <Ecosystem />
      <FIU />
      <Journey />
      <Footer />
    </main>
  );
}
