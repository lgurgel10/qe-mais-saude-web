
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LocationsSection() {
  const locations = [
    {
      name: "Boa Viagem",
      address: "Av. Conselheiro Aguiar, 2333, Sala 306, Boa Viagem, Recife/PE",
      phone: "(81) 3040-7471",
      image: "/placeholder-boa-viagem.jpg"
    },
    {
      name: "Piedade",
      address: "Av. Bernardo Vieira de Melo, 4870, Piedade, Jaboatão dos Guararapes/PE",
      phone: "(81) 3040-7471",
      image: "/placeholder-piedade.jpg"
    },
    {
      name: "Casa Forte",
      address: "Rua Dr. João Santos Filho, 255, Casa Forte, Recife/PE",
      phone: "(81) 3040-7471",
      image: "/placeholder-casa-forte.jpg"
    },
    {
      name: "Ribeirão",
      address: "Av. Getúlio Vargas, 57, Centro, Ribeirão/PE",
      phone: "(81) 3040-7471",
      image: "/placeholder-ribeirao.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-qebeige-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Nossas <span className="text-qegold">Unidades</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Com 4 unidades estrategicamente localizadas, o Instituto QE+ oferece 
            a melhor estrutura do estado para um tratamento de ponta em saúde mental.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={location.image} 
                  alt={`Unidade ${location.name}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-playfair text-qegold mb-2">{location.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                <p className="text-gray-800 font-medium mb-4">{location.phone}</p>
                
                <Button asChild variant="outline" className="w-full border-qegold text-qegold hover:bg-qegold/10">
                  <Link to="/estrutura">Ver Detalhes</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
