import React, { useState, useEffect, useRef } from "react";
import { normalizeImagePath } from "@/utils/blogUtils";
import useEmblaCarousel from "embla-carousel-react";

export default function FacilitySection() {
  const images = [
    "/images/foto 5.jpg",
    "/images/foto 4.jpg",
    "/images/foto 6.jpg",
    "/images/foto 7.jpg",
    "/images/foto 8.jpg",
    "/images/foto 9.jpg"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Add Embla Carousel for touch support
  const [desktopEmblaRef, desktopEmblaApi] = useEmblaCarousel({ 
    loop: true
  });
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({ 
    loop: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopEmblaApi) desktopEmblaApi.scrollNext();
      if (mobileEmblaApi) mobileEmblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [desktopEmblaApi, mobileEmblaApi]);

  useEffect(() => {
    if (!desktopEmblaApi) return;
    
    const onSelect = () => {
      setCurrentSlide(desktopEmblaApi.selectedScrollSnap());
    };
    
    desktopEmblaApi.on('select', onSelect);
    
    return () => {
      desktopEmblaApi.off('select', onSelect);
    };
  }, [desktopEmblaApi]);

  useEffect(() => {
    if (!mobileEmblaApi) return;
    
    const onSelect = () => {
      setCurrentSlide(mobileEmblaApi.selectedScrollSnap());
    };
    
    mobileEmblaApi.on('select', onSelect);
    
    return () => {
      mobileEmblaApi.off('select', onSelect);
    };
  }, [mobileEmblaApi]);

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
              Com 4 unidades em Boa Viagem, Piedade, Casa Forte e Ribeirão, o Instituto QE+ 
              oferece a melhor estrutura do estado para um tratamento de ponta em saúde mental. 
              Contamos com uma equipe de profissionais altamente qualificados e oferecemos 
              atendimento personalizado para tratar uma ampla gama de condições, desde ansiedade 
              e depressão até transtornos de comportamento e estresse. Nossos serviços incluem 
              terapia individual e em grupo, avaliação psicológica e acompanhamento psiquiátrico, 
              todos baseados em abordagens modernas e eficazes, visando melhorar a qualidade de 
              vida e a interação social.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Além disso, oferecemos uma excelente oportunidade para crianças com necessidades 
              especiais desenvolverem suas habilidades sociais. Nossa estrutura é comparável a 
              um ambiente escolar, permitindo que as crianças se relacionem de maneira igualitária, 
              sempre acompanhadas por uma equipe de apoio treinada para auxiliá-las a sair de suas 
              zonas de conforto e experimentar novas atividades.
            </p>
          </div>
          
          {/* Carousel Column - Desktop only */}
          <div className="hidden lg:flex lg:w-1/2 items-start h-full">
            <div className="relative w-full h-full min-h-[430px] rounded-2xl overflow-hidden" ref={desktopEmblaRef}>
              <div className="flex h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] relative w-full h-full min-w-0"
                  >
                    <img
                      src={normalizeImagePath(image)}
                      alt={`Ambiente ${index + 1} QE+`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
              
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (desktopEmblaApi) desktopEmblaApi.scrollTo(index);
                    }}
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
          <div className="relative w-full max-w-md min-h-[320px] rounded-2xl overflow-hidden" ref={mobileEmblaRef}>
            <div className="flex h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] relative w-full h-full min-w-0"
                >
                  <img
                    src={normalizeImagePath(image)}
                    alt={`Ambiente ${index + 1} QE+`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              ))}
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (mobileEmblaApi) mobileEmblaApi.scrollTo(index);
                  }}
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
