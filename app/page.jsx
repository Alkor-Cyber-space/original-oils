import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import AboutSection from "@/components/AboutSection";
import OilsSection from "@/components/OilsSection";
import CraftSection from "@/components/CraftSection";
import { Hand } from "lucide-react";
import HandpickedSection from "@/components/HandpickedSection";
import GallerySection from "@/components/GallerySection";
import TraditionJournal from "@/components/TraditionJournal";
// import Testimonials from "@/components/Testimonials";
import Review from "@/components/Review"
import ConnectSection from "@/components/ConnectSection";
export default function HomePage() {
  return (
    <>
      <section className="bg-primary min-h-screen ">
      <Hero />
      <Statistics />
      </section>
      <AboutSection />
      <OilsSection />
      <HandpickedSection /> 
      <CraftSection />
      <GallerySection />
      <TraditionJournal />
           <Review />

      {/* <Testimonials /> */}
      <ConnectSection />
    
    </>
  );
}
