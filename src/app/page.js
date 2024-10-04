import Ambassadors from "@/components/Ambassadors";
import Banner from "@/components/Banner";
import BuiltIn from "@/components/BuiltIn";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/layouts/Marquee";
import LimitedEdition from "@/components/LimitedEdition";
import MetaVerse from "@/components/MetaVerse";
import Potential from "@/components/Potential";
import TechPartners from "@/components/TechPartners";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="bg-black flex flex-col max-w-full overflow-x-hidden">
      <Header />
      <Banner />
      <VideoSection />
      <LimitedEdition />
      <MetaVerse />
      <BuiltIn />
      <Potential />
      <TechPartners />
      <Ambassadors />
      <Contact />
      <Footer />
    </main>
  );
}
