import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import NavDropdown from "./NavDropdown";
import { NAV_ITEMS } from "./NavItems";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  const handleScrollToEstrutura = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose && onClose();
    if (window.location.pathname === "/") {
      const el = document.getElementById("estrutura");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#estrutura";
    }
  };

  return (
    <div 
      className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ top: '60px' }}
    >
      <div className="px-4 py-6 space-y-4 h-full overflow-y-auto">
        <Link 
          to="/" 
          className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
          onClick={onClose}
        >
          Home
        </Link>
        <Link 
          to="/instituto" 
          className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
          onClick={onClose}
        >
          Instituto
        </Link>
        
        {/* Mobile Tratamentos */}
        <NavDropdown 
          title="Tratamentos"
          items={NAV_ITEMS.treatments}
          basePath="tratamentos"
          isMobile
        />
        
        {/* Mobile Especialidades */}
        <NavDropdown 
          title="Especialidades"
          items={NAV_ITEMS.specialties}
          basePath="especialidades"
          isMobile
        />
        
        <a 
          href="/#estrutura" 
          className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
          onClick={handleScrollToEstrutura}
        >
          Nossa Estrutura
        </a>
        <Link 
          to="/blog" 
          className="block py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
          onClick={onClose}
        >
          Blog
        </Link>
        <a 
          href="https://wa.me/5581982929292"
          target="_blank"
          rel="noopener noreferrer"
          className="block py-3 text-center font-medium bg-qegold text-white rounded-md hover:bg-qegold-dark transition-colors duration-200"
        >
          Contato
        </a>
      </div>
    </div>
  );
}
