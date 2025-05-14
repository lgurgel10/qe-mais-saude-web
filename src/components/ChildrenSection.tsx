
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ChildrenSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Desenvolvimento Infantil <span className="text-qegold">Especializado</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Oferecemos suporte excepcional para crianças com necessidades especiais, 
            ajudando-as a desenvolver suas habilidades sociais em um ambiente acolhedor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-2xl font-bold font-playfair text-gray-800">
              Um ambiente seguro para crescer e se desenvolver
            </h3>
            
            <p className="text-gray-600">
              Nossa estrutura é comparável a um ambiente escolar, permitindo que as crianças 
              se relacionem de maneira igualitária, sempre acompanhadas por uma equipe de apoio 
              treinada para auxiliá-las a sair de suas zonas de conforto e experimentar novas atividades.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-qegold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m5 12 5 5L20 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Equipe multidisciplinar especializada</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-qegold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m5 12 5 5L20 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Ambiente seguro e estimulante</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-qegold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m5 12 5 5L20 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Foco no desenvolvimento de habilidades sociais</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-qegold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m5 12 5 5L20 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Abordagem personalizada para cada criança</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button asChild className="bg-qegold hover:bg-qegold-dark text-white h-12 px-8 rounded-md">
                <Link to="/tratamentos/autismo">Saiba Mais</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img 
                  src="/placeholder-child1.jpg" 
                  alt="Criança em terapia" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-[3/4] rounded-xl overflow-hidden mt-8">
                <img 
                  src="/placeholder-child2.jpg" 
                  alt="Atividades em grupo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-[3/4] rounded-xl overflow-hidden col-span-2 mt-4">
                <img 
                  src="/placeholder-child3.jpg" 
                  alt="Área recreativa do Instituto QE+" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
