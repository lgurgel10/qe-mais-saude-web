
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import specialtyData from "@/data/specialtyData";

const SpecialtyPageTemplate = () => {
  const { type } = useParams<{ type: string }>();
  
  // Improved handling of the type parameter
  const normalizeType = (input: string | undefined): string => {
    if (!input) return '';
    
    // Convert accented characters to non-accented
    const withoutAccents = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Convert to lowercase and replace spaces with hyphens
    return withoutAccents.toLowerCase().replace(/\s+/g, '-');
  };
  
  const normalizedType = normalizeType(type);
  console.log("Specialty page - URL param:", type, "Normalized to:", normalizedType);
  const specialty = specialtyData[normalizedType];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    if (specialty) {
      document.title = `${specialty.title} | Instituto QE+`;
    } else {
      document.title = "Especialidade | Instituto QE+";
    }
  }, [specialty]);

  if (!specialty) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Especialidade não encontrada</h1>
            <p className="text-gray-600 mb-6">A especialidade que você está procurando não está disponível.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Navbar />
      </header>
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-800 mb-6 text-center">
              {specialty.title}
            </h1>
            <div className="w-24 h-1 bg-qegold mx-auto mb-8"></div>
            
            <div className="mb-10">
              <img 
                src={specialty.image} 
                alt={specialty.title} 
                className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
              />
              
              <div className="prose max-w-none">
                {specialty.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm mt-10">
              <h2 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Agende uma consulta
              </h2>
              <p className="text-gray-700 mb-6">
                Estamos prontos para te atender com o que há de melhor em {specialty.title}. Entre em contato conosco para marcar sua consulta.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://api.whatsapp.com/send?phone=5581940474981" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-qegold hover:bg-qegold-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpecialtyPageTemplate;
