
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstitutoBanner from "@/components/instituto/InstitutoBanner";
import HistorySection from "@/components/instituto/HistorySection";
import PrinciplesSection from "@/components/instituto/PrinciplesSection";
import ConsultationSection from "@/components/instituto/ConsultationSection";

const Instituto = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "QE+ Instituto | Saúde Mental e Desenvolvimento Humano";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <InstitutoBanner />
        <HistorySection />
        <PrinciplesSection />
        <ConsultationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Instituto;
