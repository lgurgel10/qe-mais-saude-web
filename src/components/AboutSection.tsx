import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutSection() {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* TDAH Card */}
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative w-full min-h-[300px]">
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/c6271fd6-16cc-412f-8baf-72f25de71dec.png" 
                  alt="TDAH - Tratamento para déficit de atenção e hiperatividade" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/50 via-qegold/80 to-qegold/95"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
                <div className="flex-grow"></div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-2">TDAH</h3>
                  <div className="w-16 h-0.5 bg-white mx-auto mb-3"></div>
                  <p className="text-base text-white text-center mb-4 min-h-[80px]">
                    É uma doença crônica onde o indivíduo possui uma dificuldade de atenção, hiperatividade e impulsividade. 
                    Os sintomas geralmente são identificados na infância e permanece até a vida adulta, porém mais adaptado.
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
              </div>
            </div>
          </Card>

          {/* Ansiedade Card */}
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative w-full min-h-[300px]">
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png" 
                  alt="Ansiedade - Tratamento para transtornos de ansiedade" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/50 via-qegold/80 to-qegold/95"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
                <div className="flex-grow"></div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-2">Ansiedade</h3>
                  <div className="w-16 h-0.5 bg-white mx-auto mb-3"></div>
                  <p className="text-base text-white text-center mb-4 min-h-[80px]">
                    A ansiedade pode ser provocada por qualquer motivo, pois depende da importância que o indivíduo 
                    dá a uma determinada situação e pode surgir em adultos ou crianças.
                  </p>
                  <div className="text-center">
                    <Button 
                      asChild 
                      variant="outline" 
                      size={isMobile ? "sm" : "default"}
                      className="bg-white text-qegold hover:bg-qebeige hover:text-qegold-dark border-white font-medium transition-all duration-300 mt-6"
                    >
                      <Link to="/tratamentos/ansiedade">SAIBA MAIS</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Neurofeedback Card */}
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="relative w-full min-h-[300px]">
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/fb6e7c8f-4db4-484a-be07-e3e3c60645ea.png" 
                  alt="Neurofeedback - Tratamentos avançados para o cérebro" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/50 via-qegold/80 to-qegold/95"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
                <div className="flex-grow"></div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-2">Neuromodulação</h3>
                  <div className="w-16 h-0.5 bg-white mx-auto mb-3"></div>
                  <p className="text-base text-white text-center mb-4 min-h-[80px]">
                    A neuromodulação é um tratamento que visa otimizar o funcionamento cerebral por meio de técnicas autorregulatórias, seguras e não invasivas.
                  </p>
                  <div className="text-center">
                    <Button 
                      asChild 
                      variant="outline" 
                      size={isMobile ? "sm" : "default"}
                      className="bg-white text-qegold hover:bg-qebeige hover:text-qegold-dark border-white font-medium transition-all duration-300 mt-12"
                    >
                      <Link to="/tratamentos/neuromodulacao">SAIBA MAIS</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
