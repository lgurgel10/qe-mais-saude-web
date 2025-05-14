
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update page title
    document.title = "Página Não Encontrada | Instituto QE+";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-qebeige-light py-20">
        <div className="text-center px-4">
          <div className="text-9xl font-bold text-qegold mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-6">
            Página Não Encontrada
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            A página que você está procurando pode ter sido removida ou ainda não foi criada.
          </p>
          <Button asChild className="bg-qegold hover:bg-qegold-dark text-white h-12 px-8 rounded-md">
            <Link to="/">Voltar para Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
