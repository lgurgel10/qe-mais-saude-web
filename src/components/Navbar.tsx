
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactBar from "./navigation/ContactBar";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";
import Logo from "./navigation/Logo";

const treatments = [
  "Ansiedade",
  "TDAH",
  "Autismo",
  "Depressão",
  "Transtorno Bipolaridade",
  "Borderline",
  "Esquizofrenia",
  "TOD",
  "TOC",
  "Transtornos Alimentares"
];

const specialties = [
  "Fonoaudiologia",
  "Psicanálise",
  "Psiquiatria",
  "Terapia ABA",
  "Fisioterapia",
  "Nutrição",
  "Terapia Ocupacional",
  "PECS",
  "Neuromodulação"
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top contact bar */}
      <ContactBar />
      
      {/* Main navigation */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-md py-2" 
            : "bg-qegold-light py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <DesktopNav 
              treatments={treatments} 
              specialties={specialties} 
            />
            
            {/* Contact Button */}
            <Link 
              to="/contato" 
              className="hidden lg:block bg-qegold text-white px-5 py-2 rounded hover:bg-qegold-dark transition-colors duration-200 ml-2"
            >
              Entrar em Contato
            </Link>

            {/* Mobile Navigation */}
            <MobileNav 
              treatments={treatments} 
              specialties={specialties} 
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
