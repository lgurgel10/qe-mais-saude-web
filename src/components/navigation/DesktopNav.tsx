
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

interface DesktopNavProps {
  treatments: string[];
  specialties: string[];
}

export default function DesktopNav({ treatments, specialties }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center space-x-1">
      <Link to="/" className="px-3 py-2 text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
        Home
      </Link>
      <Link to="/instituto" className="px-3 py-2 text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
        Instituto
      </Link>
      
      <NavDropdown 
        label="Tratamentos" 
        items={treatments} 
        baseUrl="/tratamentos" 
      />
      
      <NavDropdown 
        label="Especialidades" 
        items={specialties} 
        baseUrl="/especialidades" 
      />
      
      <Link to="/estrutura" className="px-3 py-2 text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
        Nossa Estrutura
      </Link>
      <Link to="/blog" className="px-3 py-2 text-gray-800 hover:text-qegold font-medium transition-colors duration-200">
        Blog
      </Link>
    </div>
  );
}
