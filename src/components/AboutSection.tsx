
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Brain, HeartPulse, BrainCircuit } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Tratamentos <span className="text-qegold">Essenciais</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600">
            Oferecemos tratamentos especializados e humanizados para promover o bem-estar, 
            o equilíbrio emocional e o desenvolvimento de cada paciente. Conheça os principais 
            métodos utilizados por nossa equipe multidisciplinar para ajudar pessoas com TDAH, 
            autismo, TOC e outros transtornos do neurodesenvolvimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* TDAH Card */}
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative">
              <AspectRatio ratio={isMobile ? 16/10 : 4/3} className="bg-muted">
                <img 
                  src="/lovable-uploads/c6271fd6-16cc-412f-8baf-72f25de71dec.png" 
                  alt="TDAH - Tratamento para déficit de atenção e hiperatividade" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/30 via-qegold/60 to-qegold/90 z-10"></div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6">
                  <div className="text-center mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-playfair text-white mb-2">TDAH</h3>
                    <div className="w-16 h-0.5 bg-white mx-auto mb-3 sm:mb-4"></div>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
                    É uma condição neurológica onde o indivíduo possui dificuldade de atenção, 
                    hiperatividade e impulsividade. Os sintomas geralmente são identificados na 
                    infância e permanecem até a vida adulta.
                  </p>
                  <div className="text-center">
                    <Button 
                      asChild 
                      variant="outline" 
                      size={isMobile ? "sm" : "default"}
                      className="bg-white text-qegold hover:bg-qebeige hover:text-qegold-dark border-white font-medium transition-all duration-300"
                    >
                      <Link to="/tratamentos/tdah">SAIBA MAIS</Link>
                    </Button>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </Card>

          {/* Ansiedade Card */}
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative">
              <AspectRatio ratio={isMobile ? 16/10 : 4/3} className="bg-muted">
                <img 
                  src="/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png" 
                  alt="Ansiedade - Tratamento para transtornos de ansiedade" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/30 via-qegold/60 to-qegold/90 z-10"></div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6">
                  <div className="text-center mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-playfair text-white mb-2">Ansiedade</h3>
                    <div className="w-16 h-0.5 bg-white mx-auto mb-3 sm:mb-4"></div>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
                    A ansiedade pode ser provocada por qualquer motivo, mas depende da importância que o indivíduo 
                    dá a uma determinada situação e pode surgir em adultos ou crianças.
                  </p>
                  <div className="text-center">
                    <Button 
                      asChild 
                      variant="outline" 
                      size={isMobile ? "sm" : "default"}
                      className="bg-white text-qegold hover:bg-qebeige hover:text-qegold-dark border-white font-medium transition-all duration-300"
                    >
                      <Link to="/tratamentos/ansiedade">SAIBA MAIS</Link>
                    </Button>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </Card>

          {/* Neuromodulação Card */}
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="relative">
              <AspectRatio ratio={isMobile ? 16/10 : 4/3} className="bg-muted">
                <img 
                  src="/lovable-uploads/fb6e7c8f-4db4-484a-be07-e3e3c60645ea.png" 
                  alt="Neuromodulação - Tratamentos avançados para o cérebro" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/30 via-qegold/60 to-qegold/90 z-10"></div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6">
                  <div className="text-center mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-playfair text-white mb-2">Neuromodulação</h3>
                    <div className="w-16 h-0.5 bg-white mx-auto mb-3 sm:mb-4"></div>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
                    Técnicas avançadas de estimulação cerebral não-invasiva para 
                    otimização da função neurológica e tratamento de diversos transtornos.
                  </p>
                  <div className="text-center">
                    <Button 
                      asChild 
                      variant="outline" 
                      size={isMobile ? "sm" : "default"}
                      className="bg-white text-qegold hover:bg-qebeige hover:text-qegold-dark border-white font-medium transition-all duration-300"
                    >
                      <Link to="/tratamentos/neuromodulacao">SAIBA MAIS</Link>
                    </Button>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button 
            asChild 
            className="bg-qegold hover:bg-qegold-dark text-white h-10 sm:h-12 px-6 sm:px-8 rounded-md"
            size={isMobile ? "sm" : "default"}
          >
            <Link to="/tratamentos">Conheça Todos os Tratamentos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
