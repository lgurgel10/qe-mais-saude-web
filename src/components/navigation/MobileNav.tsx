
import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import NavDropdown from "./NavDropdown";

interface MobileNavProps {
  treatments: string[];
  specialties: string[];
}

export default function MobileNav({ treatments, specialties }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="lg:hidden text-gray-800 hover:text-qegold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '122px' }}  /* Adjusted for top contact bar */
      >
        <div className="px-4 py-6 space-y-4 h-full overflow-y-auto">
          <Link 
            to="/" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/instituto" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Instituto
          </Link>
          
          {/* Mobile Tratamentos */}
          <NavDropdown 
            label="Tratamentos" 
            items={treatments} 
            baseUrl="/tratamentos"
            isMobile 
          />
          
          {/* Mobile Especialidades */}
          <NavDropdown 
            label="Especialidades" 
            items={specialties} 
            baseUrl="/especialidades"
            isMobile 
          />
          
          <Link 
            to="/estrutura" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Nossa Estrutura
          </Link>
          <Link 
            to="/blog" 
            className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/contato" 
            className="block py-3 text-center font-medium bg-qegold text-white rounded hover:bg-qegold-dark transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Entrar em Contato
          </Link>
        </div>
      </div>
    </>
  );
}
