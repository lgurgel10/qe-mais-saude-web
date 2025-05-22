
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitySection from "@/components/FacilitySection";
import LocationsSection from "@/components/LocationsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import Footer from "@/components/Footer";
import PersistentContactBar from "@/components/PersistentContactBar";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "Instituto QE+ | Saúde Mental e Desenvolvimento Humano";

    // Scroll suave para a seção 'estrutura' se o hash estiver presente
    if (window.location.hash === "#estrutura") {
      setTimeout(() => {
        const el = document.getElementById("estrutura");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FacilitySection />
        <SpecialtiesSection />
        <LocationsSection />
      </main>
      
      <PersistentContactBar />
      <Footer />
    </div>
  );
};

export default Index;
