
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import { NAV_ITEMS } from "./NavItems";

export default function DesktopMenu() {
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
  );
}
