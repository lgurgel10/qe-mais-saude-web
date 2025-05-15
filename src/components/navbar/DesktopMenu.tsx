import { Link, useLocation } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import { NAV_ITEMS } from "./NavItems";

export default function DesktopMenu() {
  const location = useLocation();

  const handleScrollToEstrutura = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <div className="hidden lg:flex items-center space-x-8">
      <Link to="/" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
        Home
      </Link>
      <Link to="/instituto" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
        Instituto
      </Link>
      
      {/* Tratamentos Dropdown */}
      <NavDropdown 
        title="Tratamentos"
        items={NAV_ITEMS.treatments}
        basePath="tratamentos"
      />
      
      {/* Especialidades Dropdown */}
      <NavDropdown 
        title="Especialidades"
        items={NAV_ITEMS.specialties}
        basePath="especialidades"
      />
      
      <a href="/#estrutura" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200" onClick={handleScrollToEstrutura}>
        Nossa Estrutura
      </a>
      <Link to="/blog" className="text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
        Blog
      </Link>
      
      {/* Contato highlighted button */}
      <a 
        href="https://wa.me/5581982929292" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-qegold text-white px-5 py-2 rounded-md hover:bg-qegold-dark transition-colors duration-200 shadow-sm"
      >
        Contato
      </a>
    </div>
  );
}
