
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/lovable-uploads/20ee3abc-131e-4e6d-a9ef-1af2ddc54772.png",
    "/lovable-uploads/caf56d47-cc02-4632-bc9d-d6576d2af232.png",
    "/lovable-uploads/5993e1d2-98bb-4559-88ca-2809a63385e5.png",
    "/lovable-uploads/318f7799-28bb-4e7c-961b-a034a92d762e.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-qebeige-light to-white overflow-hidden min-h-[500px] md:min-h-[600px]">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5 z-0"></div>
      
      {/* Carousel images as background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Carousel className="h-full w-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    filter: 'blur(5px)',
                    transform: 'scale(1.05)',
                  }}
                />
                <div className="absolute inset-0 bg-black/30" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-20" />
          <CarouselNext className="right-4 z-20" />
        </Carousel>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              <span className="text-white">Instituto</span> 
              <span className="text-qegold"> QE+</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-playfair text-white">
              Centro de excelência em saúde mental e desenvolvimento humano
            </p>
            
            <p className="text-white max-w-xl mx-auto lg:mx-0">
              Somos especializados no tratamento de transtornos como ansiedade, depressão, TDAH, TOD, TEA, entre outros. Nossa infraestrutura de qualidade está pronta para ajudar você a melhorar sua qualidade de vida.
            </p>
            
            <div className="pt-4">
              <Button 
                asChild
                className="bg-qegold hover:bg-qegold/90 text-white"
              >
                <Link to="/contato">Agende uma Consulta</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            {/* Empty div to maintain layout */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
