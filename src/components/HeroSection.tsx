
import { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { normalizeImagePath } from "@/utils/blogUtils";
import useEmblaCarousel from "embla-carousel-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  
  // Desktop images
  const desktopImages = [
    "/images/bv1.png",
    "/images/foto%201.jpg",
    "/images/foto%202.jpg",
    "/images/foto%203.jpg",
  ];
  
  // Mobile images
  const mobileImages = [
    "/images/bv1.png",
    "/images/foto%201%20mobile.jpg",
    "/images/foto%202%20mobile.jpg",
    "/images/foto%203%20mobile.jpg"
  ];
  
  // Use appropriate images based on device
  const images = isMobile ? mobileImages : desktopImages;
  
  // Add Embla Carousel for touch support
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    draggable: true,
    speed: 10
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full relative bg-white pt-16">
      <Separator className="w-full bg-border" />
      
      {/* Slider container with fixed height */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Image slides with Embla wrapper */}
        <div className="relative w-full h-full" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-full flex-[0_0_100%] min-w-0"
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${normalizeImagePath(image)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.85,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-20" />
        
        {/* Content overlay - centered */}
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
            onClick={() => {
              if (emblaApi) {
                emblaApi.scrollTo(index);
              }
            }}
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
