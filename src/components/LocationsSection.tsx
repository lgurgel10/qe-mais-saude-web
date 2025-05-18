import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";

const WHATSAPP_LINK = "https://wa.me/5581982929292";
const WHATSAPP_DISPLAY = "+55 81 98292-9292";

const WORK_HOURS = {
  "Boa Viagem": "Segunda à sexta: 8:00 às 20:00 / Sábado: 8:00 às 17:00",
  "Piedade": "Segunda à sexta: 8:00 às 18:00",
  "Casa Forte": "Segunda à sexta: 8:00 às 20:00"
};

export default function LocationsSection() {
  const carouselsRef = useRef([]);
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [modalCarouselIndex, setModalCarouselIndex] = useState(0);
  const locations = [
    {
      name: "Boa Viagem",
      address: "Av Conselheiro Aguiar, 3600 – Boa Viagem",
      phone: WHATSAPP_DISPLAY,
      images: [
        "/images/bv1.png",
        "/images/bv2.jpg",
        "/images/bv3.jpg",
        "/images/bv4.jpg",
        "/images/bv5.jpg",
        "/images/bv6.jpg",
        "/images/bv7.jpg",
        "/images/bv8.jpg",
        "/images/bv9.jpg",
        "/images/bv10.jpg"
      ],
      maps: "https://www.google.com/maps?q=Av.+Conselheiro+Aguiar,+3600,+Recife,+PE"
    },
    {
      name: "Piedade",
      address: "Rua Frei Pio Moreira, 43 - Sala 09 - Piedade",
      phone: WHATSAPP_DISPLAY,
      images: [
        "/images/p1.png",
        "/images/p2.jpg",
        "/images/p3.jpg",
        "/images/p4.jpg",
        "/images/p5.jpg",
        "/images/p6.jpg"
      ],
      maps: "https://www.google.com/maps?q=Rua+Frei+Pio+Moreira,+43,+Jaboatão+dos+Guararapes,+PE"
    },
    {
      name: "Casa Forte",
      address: "Av. Dezessete de Agosto, 741 - Casa Forte",
      phone: WHATSAPP_DISPLAY,
      images: [
        "/images/cf1.png",
        "/images/cf2.png",
        "/images/cf3.png",
        "/images/cf4.png",
        "/images/cf5.png",
        "/images/cf6.png",
        "/images/cf7.png"
      ],
      maps: "https://www.google.com/maps?q=Av.+Dezessete+de+Agosto,+741,+Recife,+PE"
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
    <section id="estrutura" className="py-16 md:py-24 bg-qebeige-light">
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
                <p className="text-gray-800 font-medium mb-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-qegold font-bold hover:underline">
                    {location.phone}
                  </a>
                </p>
                <Dialog open={openModal === index} onOpenChange={open => {
                  setOpenModal(open ? index : null);
                  setModalCarouselIndex(0);
                }}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-qegold text-qegold hover:bg-qegold/10">
                      Ver Detalhes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold font-playfair text-qegold mb-2">{location.name}</DialogTitle>
                      <DialogDescription>
                        <div className="mb-4">
                          <span className="block text-gray-700 font-semibold">Endereço:</span>
                          <span className="block text-gray-800">{location.address}</span>
                        </div>
                        <div className="mb-4 flex items-center gap-2">
                          <span className="text-gray-700 font-semibold">Telefone:</span>
                          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-qegold font-bold hover:underline">{location.phone}</a>
                        </div>
                        <div className="mb-4 flex items-center gap-2">
                          <span className="text-gray-700 font-semibold">Horário:</span>
                          <span className="text-gray-800">{WORK_HOURS[location.name]}</span>
                        </div>
                        <div className="mb-6">
                          <div className="w-full flex justify-center">
                            <div className="w-full max-w-2xl relative">
                              <ModalCarousel images={location.images} />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <span className="block text-gray-700 font-semibold mb-2">Localização:</span>
                          <div className="w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden mb-2 flex items-center justify-center bg-gray-100">
                            <iframe
                              title={`Mapa da unidade ${location.name}`}
                              src={location.maps + '&output=embed'}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen={true}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                          <a
                            href={location.maps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 px-4 py-2 bg-qegold text-white rounded hover:bg-qegold-dark transition-colors font-medium"
                          >
                            Ver rota no Google Maps
                          </a>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function ModalCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-100 overflow-hidden rounded-lg">
      {/* Carrossel */}
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full flex items-center justify-center h-full"
            >
              <img
                src={img}
                alt={`Imagem ${i + 1}`}
                className="w-full h-full object-cover z-10 pointer-events-none"
                style={{ position: 'relative' }} // z-10, mas relative, controlada
              />
            </div>
          ))}
        </div>
      </div>

      {/* Setas de navegação */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-black bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-60 transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              emblaApi?.scrollPrev();
            }}
            aria-label="Anterior"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-black bg-opacity-40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-60 transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              emblaApi?.scrollNext();
            }}
            aria-label="Próximo"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

