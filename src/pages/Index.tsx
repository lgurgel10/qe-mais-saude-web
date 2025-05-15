
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitySection from "@/components/FacilitySection";
import ChildrenSection from "@/components/ChildrenSection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "Instituto QE+ | Saúde Mental e Desenvolvimento Humano";
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
        <ChildrenSection />
        <LocationsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
