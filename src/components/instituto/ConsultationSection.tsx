import { Button } from "@/components/ui/button";

const ConsultationSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-qegold p-8 md:p-10 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-4">
              Agende uma consulta
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Estamos prontos para te ajudar. Entre em contato conosco para marcar sua consulta e
              conheça o Instituto QE+ pessoalmente.
            </p>
            <Button 
              asChild
              className="bg-white hover:bg-gray-100 text-qegold font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=5581982929292" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
