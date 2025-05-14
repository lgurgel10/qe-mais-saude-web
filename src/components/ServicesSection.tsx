
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-qebeige-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/placeholder-therapy.jpg" 
                  alt="Terapia no Instituto QE+" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-qegold/20 max-w-xs">
                <p className="text-gray-800 font-medium italic">
                  "Nosso compromisso é oferecer à sociedade serviços de excelência em saúde mental."
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
              Nossos Serviços Especializados
            </h2>
            
            <div className="w-24 h-1 bg-qegold"></div>
            
            <p className="text-gray-600">
              Oferecemos uma ampla gama de serviços para atender às diferentes necessidades de nossos pacientes, 
              desde ansiedade e depressão até transtornos mais complexos.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-qegold flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                    <path d="m8 15 2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Terapia Individual e em Grupo</h3>
                  <p className="text-gray-600">
                    Sessões personalizadas para adultos e crianças, adaptadas às necessidades específicas de cada paciente.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-qegold flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                    <path d="M12 19v-2"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Avaliação Psicológica</h3>
                  <p className="text-gray-600">
                    Diagnósticos precisos realizados por nossa equipe de especialistas, utilizando métodos modernos e eficazes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-qegold flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M22 10H2"></path>
                    <path d="M6 10v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10"></path>
                    <path d="M10 14h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Acompanhamento Psiquiátrico</h3>
                  <p className="text-gray-600">
                    Consultas regulares com psiquiatras especializados para monitoramento e ajuste de tratamentos medicamentosos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button asChild className="bg-qegold hover:bg-qegold-dark text-white h-12 px-8 rounded-md">
                <Link to="/tratamentos">Ver Todos os Tratamentos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
