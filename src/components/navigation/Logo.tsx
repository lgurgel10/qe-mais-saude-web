
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/14637407-75fb-4473-818c-bc455a63bd6b.png" 
        alt="Instituto QE+" 
        className="h-12 md:h-14 w-auto" 
      />
    </Link>
  );
}
