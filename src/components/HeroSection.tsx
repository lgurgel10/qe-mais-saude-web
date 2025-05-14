
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  
  // Desktop images
  const desktopImages = [
    "/lovable-uploads/3566488f-6536-45ed-a0a6-9941cb074529.png",
    "/lovable-uploads/5391f2e0-9544-4833-9cd7-50e92c63be06.png",
    "/lovable-uploads/3efb9ddf-8897-4339-9899-d7364cdde43a.png"
  ];
  
  // Mobile images
  const mobileImages = [
    "/lovable-uploads/a41997c8-66a7-451b-bfb2-d4bc62a0d728.png",
    "/lovable-uploads/31edc7c8-7af7-4972-afb7-7491a12e4a31.png",
    "/lovable-uploads/64b272ee-4ee2-430a-9cee-3f29071153c3.png"
  ];
  
  // Use appropriate images based on device
  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Separator className="w-full bg-border" />
      <section className="relative overflow-hidden bg-white">
        {/* Slider container with fixed height */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          {/* Image slides */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.64, // Set opacity to exactly 0.64 as requested
              }}
            />
          ))}
          
          {/* Content overlay - centered */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center max-w-2xl mx-auto px-4 md:px-6 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
                <span className="text-white">Instituto</span> 
                <span className="text-qegold"> QE+</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-playfair text-white">
                Centro de excelência em saúde mental e desenvolvimento humano
              </p>
              
              <p className="text-white">
                Somos especializados no tratamento de transtornos como ansiedade, depressão, TDAH, TOD, TEA, entre outros. Nossa infraestrutura de qualidade está pronta para ajudar você a melhorar sua qualidade de vida.
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-qegold" : "bg-white/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
