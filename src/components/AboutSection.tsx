
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-qebeige p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src="/lovable-uploads/c6271fd6-16cc-412f-8baf-72f25de71dec.png" 
                  alt="TDAH - Tratamento para déficit de atenção e hiperatividade" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <h3 className="text-xl font-bold font-playfair text-gray-800 mb-3">TDAH</h3>
            <p className="text-gray-600 mb-4">
              Abordagem especializada para diagnóstico e tratamento do Transtorno do 
              Déficit de Atenção e Hiperatividade, promovendo foco e desenvolvimento.
            </p>
          </div>
          
          <div className="bg-qebeige p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src="/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png" 
                  alt="Ansiedade - Tratamento para transtornos de ansiedade" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <h3 className="text-xl font-bold font-playfair text-gray-800 mb-3">Ansiedade</h3>
            <p className="text-gray-600 mb-4">
              Intervenções terapêuticas personalizadas para pacientes com transtornos 
              de ansiedade, promovendo equilíbrio emocional e qualidade de vida.
            </p>
          </div>
          
          <div className="bg-qebeige p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src="/lovable-uploads/fb6e7c8f-4db4-484a-be07-e3e3c60645ea.png" 
                  alt="Neuromodulação - Tratamentos avançados para o cérebro" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <h3 className="text-xl font-bold font-playfair text-gray-800 mb-3">Neuromodulação</h3>
            <p className="text-gray-600 mb-4">
              Técnicas avançadas de estimulação cerebral não-invasiva para 
              otimização da função neurológica e tratamento de diversos transtornos.
            </p>
          </div>
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
