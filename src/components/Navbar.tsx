
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentDropdownOpen, setTreatmentDropdownOpen] = useState(false);
  const [specialtyDropdownOpen, setSpecialtyDropdownOpen] = useState(false);
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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/14637407-75fb-4473-818c-bc455a63bd6b.png" 
              alt="Instituto QE+" 
              className="h-12 md:h-14 w-auto" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/instituto" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
              Instituto
            </Link>
            
            {/* Tratamentos Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-800 hover:text-qegold font-medium transition-colors duration-200"
                onClick={() => setTreatmentDropdownOpen(!treatmentDropdownOpen)}
                onMouseEnter={() => setTreatmentDropdownOpen(true)}
                onMouseLeave={() => setTreatmentDropdownOpen(false)}
              >
                Tratamentos
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Tratamentos Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 transform transition-all duration-200 origin-top-left z-50
                  ${treatmentDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 invisible'}
                `}
                onMouseEnter={() => setTreatmentDropdownOpen(true)}
                onMouseLeave={() => setTreatmentDropdownOpen(false)}
              >
                {treatments.map((treatment, index) => (
                  <Link 
                    key={index}
                    to={`/tratamentos/${treatment.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-qegold-light hover:text-white transition-colors duration-150"
                  >
                    {treatment}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Especialidades Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-800 hover:text-qegold font-medium transition-colors duration-200"
                onClick={() => setSpecialtyDropdownOpen(!specialtyDropdownOpen)}
                onMouseEnter={() => setSpecialtyDropdownOpen(true)}
                onMouseLeave={() => setSpecialtyDropdownOpen(false)}
              >
                Especialidades
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Especialidades Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 transform transition-all duration-200 origin-top-left z-50
                  ${specialtyDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 invisible'}
                `}
                onMouseEnter={() => setSpecialtyDropdownOpen(true)}
                onMouseLeave={() => setSpecialtyDropdownOpen(false)}
              >
                {specialties.map((specialty, index) => (
                  <Link 
                    key={index}
                    to={`/especialidades/${specialty.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-qegold-light hover:text-white transition-colors duration-150"
                  >
                    {specialty}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/estrutura" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
              Nossa Estrutura
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
              Blog
            </Link>
            
            {/* Contato highlighted button */}
            <Link 
              to="/contato" 
              className="bg-qegold text-white px-5 py-2 rounded-md hover:bg-qegold-dark transition-colors duration-200 shadow-sm"
            >
              Contato
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-800 hover:text-qegold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="px-4 py-6 space-y-4 h-full overflow-y-auto">
          <Link 
            to="/" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/instituto" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Instituto
          </Link>
          
          {/* Mobile Tratamentos */}
          <div>
            <button 
              className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
              onClick={() => setTreatmentDropdownOpen(!treatmentDropdownOpen)}
            >
              Tratamentos
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${treatmentDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {treatmentDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {treatments.map((treatment, index) => (
                  <Link 
                    key={index}
                    to={`/tratamentos/${treatment.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-base text-gray-700 hover:text-qegold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {treatment}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Mobile Especialidades */}
          <div>
            <button 
              className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
              onClick={() => setSpecialtyDropdownOpen(!specialtyDropdownOpen)}
            >
              Especialidades
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${specialtyDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {specialtyDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {specialties.map((specialty, index) => (
                  <Link 
                    key={index}
                    to={`/especialidades/${specialty.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-base text-gray-700 hover:text-qegold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {specialty}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            to="/estrutura" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nossa Estrutura
          </Link>
          <Link 
            to="/blog" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/contato" 
            className="block py-3 text-center font-medium bg-qegold text-white rounded-md hover:bg-qegold-dark transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}

