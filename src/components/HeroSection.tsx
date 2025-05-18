
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { normalizeImagePath } from "@/utils/blogUtils";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  
  // Desktop images - using raw paths without normalization first
  const desktopImages = [
    "/images/bv1.png",
    "/images/foto 1.jpg",
    "/images/foto 2.jpg",
    "/images/foto 3.jpg",
  ];
  
  // Mobile images - using raw paths without normalization first
  const mobileImages = [
    "/images/bv1.png",
    "/images/foto 1 mobile.jpg",
    "/images/foto 2 mobile.jpg",
    "/images/foto 3 mobile.jpg"
  ];
  
  // Use appropriate images based on device
  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full relative bg-white pt-16">
      <Separator className="w-full bg-border" />
      
      {/* Slider container com altura fixa */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Image slides */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? "opacity-100 z-10" 
                  : "opacity-0 z-0"
              }`}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${image})`, // Using direct path
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.85,
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Overlay escuro adicional */}
        <div className="absolute inset-0 bg-black/50 z-20" />
        
        {/* Content overlay - centralizado */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center max-w-2xl mx-auto px-4 md:px-6 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              <span className="text-white">Instituto</span> 
              <span className="text-qegold"> QE+</span>
            </h1>
            
            <p className="text-white">
              Somos especializados no tratamento de transtornos como ansiedade, depressão, TDAH, TOD, TEA, entre outros. Nossa infraestrutura de qualidade está pronta para ajudar você a melhorar sua qualidade de vida.
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
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
    </section>
  );
}
