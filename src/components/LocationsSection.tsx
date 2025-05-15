import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React, { useRef } from "react";

export default function LocationsSection() {
  const carouselsRef = useRef([]);
  const locations = [
    {
      name: "Boa Viagem",
      address: "Av. Conselheiro Aguiar, 2333, Sala 306, Boa Viagem, Recife/PE",
      phone: "(81) 3040-7471",
      images: [
        "/images/bv1.jpg",
        "/images/bv2.jpg",
        "/images/bv3.jpg",
        "/images/bv4.jpg",
        "/images/bv5.jpg",
        "/images/bv6.jpg",
        "/images/bv7.jpg",
        "/images/bv8.jpg",
        "/images/bv9.jpg",
        "/images/bv10.jpg"
      ]
    },
    {
      name: "Piedade",
      address: "Av. Bernardo Vieira de Melo, 4870, Piedade, Jaboatão dos Guararapes/PE",
      phone: "(81) 3040-7471",
      images: [
        "/images/p1.png",
        "/images/p2.jpg",
        "/images/p3.jpg",
        "/images/p4.jpg",
        "/images/p5.jpg",
        "/images/p6.jpg"
      ]
    },
    {
      name: "Casa Forte",
      address: "Rua Dr. João Santos Filho, 255, Casa Forte, Recife/PE",
      phone: "(81) 3040-7471",
      images: [
        "/images/cf1.png",
        "/images/cf2.png",
        "/images/cf3.png",
        "/images/cf4.png",
        "/images/cf5.png",
        "/images/cf6.png",
        "/images/cf7.png"
      ]
    }
  ];

  // Função para controlar o carrossel de cada unidade
  const handlePrev = idx => {
    if (carouselsRef.current[idx] && carouselsRef.current[idx].scrollPrev) {
      carouselsRef.current[idx].scrollPrev();
    }
  };
  const handleNext = idx => {
    if (carouselsRef.current[idx] && carouselsRef.current[idx].scrollNext) {
      carouselsRef.current[idx].scrollNext();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-qebeige-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Nossa <span className="text-qegold">Estrutura</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Com 4 unidades estrategicamente localizadas, o Instituto QE+ oferece 
            a melhor estrutura do estado para um tratamento de ponta em saúde mental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center flex-shrink-0">
                <Carousel
                  className="w-full h-full"
                  setApi={api => { carouselsRef.current[index] = api; }}
                  opts={{ loop: true }}
                >
                  <CarouselContent>
                    {location.images.map((img, i) => (
                      <CarouselItem key={i} className="w-full h-full aspect-[4/3] flex items-center justify-center">
                        <img 
                          src={img} 
                          alt={`Foto da unidade ${location.name}`} 
                          className="w-full h-full object-cover rounded-none bg-gray-100 aspect-[4/3]" 
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Chevron SVG arrows, mais visíveis */}
                  <button
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-20 text-white opacity-60 hover:opacity-100 text-3xl p-0 m-0 bg-transparent border-none outline-none cursor-pointer transition-all duration-200"
                    onClick={() => handlePrev(index)}
                    aria-label="Anterior"
                    type="button"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button
                    className="absolute right-1 top-1/2 -translate-y-1/2 z-20 text-white opacity-60 hover:opacity-100 text-3xl p-0 m-0 bg-transparent border-none outline-none cursor-pointer transition-all duration-200"
                    onClick={() => handleNext(index)}
                    aria-label="Próximo"
                    type="button"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </Carousel>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end">
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
