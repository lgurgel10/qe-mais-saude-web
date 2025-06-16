import React, { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { normalizeImagePath } from "@/utils/blogUtils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function FacilitySection() {
  const isMobile = useIsMobile();
  
  // Desktop images
  const desktopImages = [
    "/images/foto 8.jpg",
    "/images/foto 6.webp",
    "/images/foto 7.webp",
    "/images/fotomusico.webp",
    "/images/foto 9.webp"
  ];
  
  // Mobile images
  const mobileImages = [
    "/images/foto 8.jpg",
    "/images/foto 6.webp",
    "/images/foto 7.webp",
    "/images/fotomusico.webp",
    "/images/foto 9.webp"
  ];
  
  // Use appropriate images based on device
  const images = isMobile ? mobileImages : desktopImages;
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
            Por dentro do <span className="text-qegold">QE+</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mt-4 mb-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Text Column */}
          <div className="lg:w-1/2 space-y-6 text-left flex flex-col h-full">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Com 4 unidades em Boa Viagem, Piedade, Casa Forte e Ribeirão, o Instituto QE+ é o maior centro de neuromodulação cerebral do Nordeste, oferecendo a melhor estrutura do estado para um tratamento de ponta em saúde mental. A neuromodulação cerebral é a base de nosso tratamento, sendo uma abordagem inovadora e eficaz para o tratamento de diversas condições, como ansiedade, depressão, transtornos de comportamento, estresse e autismo. Nossa equipe de profissionais altamente qualificados utiliza essa tecnologia para otimizar o bem-estar dos pacientes, promovendo uma melhora significativa na qualidade de vida e na interação social.

            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Além disso, oferecemos um atendimento personalizado, que inclui terapia individual e em grupo, avaliação psicológica e acompanhamento psiquiátrico. Nossa estrutura de alto padrão também proporciona uma excelente oportunidade para crianças com necessidades especiais, incluindo aquelas com o Transtorno do Espectro Autista (TEA), desenvolverem suas habilidades sociais. O ambiente de nossa unidade é projetado para atender com excelência, permitindo que nossos pacientes tenham a melhor estrutura de estímulo e atendimento de todas as suas demandas.
            </p>
          </div>
          {/* Carousel Column - Desktop only */}
          <div className="hidden lg:flex lg:w-1/2 items-start h-full">
            <div className="relative w-full h-full min-h-[430px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={normalizeImagePath(image)}
                    alt={`Ambiente ${index + 1} QE+`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              ))}
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-qegold scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Mobile - below text */}
        <div className="w-full flex flex-col items-center lg:hidden mt-8">
          <div className="relative w-full max-w-md min-h-[320px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={normalizeImagePath(image)}
                  alt={`Ambiente ${index + 1} QE+`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            ))}
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-qegold scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
