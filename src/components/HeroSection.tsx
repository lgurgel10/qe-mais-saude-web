import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { normalizeImagePath } from "@/utils/blogUtils";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const desktopImages = [
    "/images/p1.png",
    "/images/salapeixe.jpg",
    "/images/foto 2.jpg",
    "/images/foto 3.jpg",
    "/images/neuro.jpg",
  ];

  const mobileImages = [
    "/images/p1.png",
    "/images/salapeixemobile.jpg",
    "/images/foto 2 mobile.jpg",
    "/images/foto 3 mobile.jpg",
    "/images/neuromobile.jpg",
  ];

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full relative bg-white pt-16">
      <Separator className="w-full bg-border" />

      {/* SLIDE ÚNICO visível */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        
        {/* Primeira imagem com prioridade de carregamento */}
        <img
          key={currentSlide}
          src={normalizeImagePath(images[currentSlide])}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          loading={currentSlide === 0 ? "eager" : "lazy"} // A primeira imagem é carregada imediatamente, as outras são carregadas de forma preguiçosa
          fetchPriority={currentSlide === 0 ? "high" : "auto"} // Imagem principal com prioridade alta
        />

        {/* Escurecimento da imagem */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Texto central */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center max-w-2xl mx-auto px-4 md:px-6 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              <span className="text-qegold"> Instituto QE+</span>
            </h1>
            <p className="text-white">
              Somos especializados no tratamento de transtornos como ansiedade, depressão, TDAH, TOD, TEA, entre outros. Nossa infraestrutura de qualidade está pronta para ajudar você a melhorar sua qualidade de vida.
            </p>
          </div>
        </div>

        {/* Dots de navegação */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-qegold scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
