
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface NavDropdownProps {
  label: string;
  items: string[];
  baseUrl: string;
  isMobile?: boolean;
}

export default function NavDropdown({ label, items, baseUrl, isMobile = false }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div>
        <button 
          className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800 hover:text-qegold border-b border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="ml-4 mt-2 space-y-2">
            {items.map((item, index) => (
              <Link 
                key={index}
                to={`${baseUrl}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-2 text-base text-gray-700 hover:text-qegold"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button 
        className="flex items-center px-3 py-2 text-gray-800 hover:text-qegold font-medium transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      <div 
        className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 transform transition-all duration-200 origin-top-left z-50
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 invisible'}
        `}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {items.map((item, index) => (
          <Link 
            key={index}
            to={`${baseUrl}/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-qegold hover:text-white transition-colors duration-150"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
