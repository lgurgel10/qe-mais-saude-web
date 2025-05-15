
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, HeartPulse, BrainCircuit } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Tratamentos <span className="text-qegold">Essenciais</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Oferecemos tratamentos especializados e humanizados para promover o bem-estar, 
            o equilíbrio emocional e o desenvolvimento de cada paciente. Conheça os principais 
            métodos utilizados por nossa equipe multidisciplinar para ajudar pessoas com TDAH, 
            autismo, TOC e outros transtornos do neurodesenvolvimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* TDAH Card */}
          <Card className="overflow-hidden border-none shadow-md group">
            <div className="relative h-64">
              <AspectRatio ratio={16/10} className="bg-muted">
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/40 to-qegold/90 z-10"></div>
                <img 
                  src="/lovable-uploads/c6271fd6-16cc-412f-8baf-72f25de71dec.png" 
                  alt="TDAH - Tratamento para déficit de atenção e hiperatividade" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-playfair">TDAH</h3>
                    <Brain className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      É uma condição neurológica onde o indivíduo possui dificuldade de atenção, 
                      hiperatividade e impulsividade. Os sintomas geralmente são identificados na 
                      infância e permanecem até a vida adulta.
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
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
          <Card className="overflow-hidden border-none shadow-md group">
            <div className="relative h-64">
              <AspectRatio ratio={16/10} className="bg-muted">
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/40 to-qegold/90 z-10"></div>
                <img 
                  src="/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png" 
                  alt="Ansiedade - Tratamento para transtornos de ansiedade" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-playfair">Ansiedade</h3>
                    <HeartPulse className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      A ansiedade pode ser provocada por qualquer motivo, mas depende da importância que o indivíduo 
                      dá a uma determinada situação e pode surgir em adultos ou crianças.
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
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
          <Card className="overflow-hidden border-none shadow-md group">
            <div className="relative h-64">
              <AspectRatio ratio={16/10} className="bg-muted">
                <div className="absolute inset-0 bg-gradient-to-b from-qegold/40 to-qegold/90 z-10"></div>
                <img 
                  src="/lovable-uploads/fb6e7c8f-4db4-484a-be07-e3e3c60645ea.png" 
                  alt="Neuromodulação - Tratamentos avançados para o cérebro" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-playfair">Neuromodulação</h3>
                    <BrainCircuit className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      Técnicas avançadas de estimulação cerebral não-invasiva para 
                      otimização da função neurológica e tratamento de diversos transtornos.
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
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
        
        <div className="text-center mt-12">
          <Button asChild className="bg-qegold hover:bg-qegold-dark text-white h-12 px-8 rounded-md">
            <Link to="/tratamentos">Conheça Todos os Tratamentos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
