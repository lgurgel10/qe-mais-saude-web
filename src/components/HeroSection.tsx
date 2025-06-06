import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { normalizeImagePath } from "@/utils/blogUtils";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const images = isMobile
    ? [
        "/images/p1.png",
        "/images/salapeixemobile.jpg",
        "/images/foto 2 mobile.jpg",
        "/images/foto 3 mobile.jpg",
        "/images/neuromobile.webp",
      ]
    : [
        "/images/p1.png",
        "/images/salapeixe.jpg",
        "/images/foto 2.jpg",
        "/images/foto 3.jpg",
        "/images/neuro.jpg",
      ];

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % images.length;
    const img = new Image();
    img.src = normalizeImagePath(images[nextIndex]);
  }, [currentSlide, images]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, images.length]);

  return (
    <section className="w-full relative bg-white pt-16">
      <Separator className="w-full bg-border" />
      
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Main image */}
        <div className="relative w-full h-full">
          <img
            src={normalizeImagePath(images[currentSlide])}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
            loading={currentSlide === 0 ? "eager" : "lazy"}
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto px-4 md:px-6 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
                <span className="text-qegold">Instituto QE+</span>
              </h1>
              <p className="text-white">
                Somos especializados no tratamento de transtornos como ansiedade, depressão, TDAH, TOD, TEA, entre outros. Nossa infraestrutura de qualidade está pronta para ajudar você a melhorar sua qualidade de vida.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
