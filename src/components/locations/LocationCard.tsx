
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {
  DialogTrigger
} from "@/components/ui/dialog";

interface LocationCardProps {
  location: {
    name: string;
    address: string;
    phone: string;
    images: string[];
    maps: string;
  };
  index: number;
  carouselRef: React.MutableRefObject<any>;
  setOpenModal: (index: number | null) => void;
}

export function LocationCard({ location, index, carouselRef, setOpenModal }: LocationCardProps) {
  const handlePrev = () => {
    if (carouselRef.current[index] && carouselRef.current[index].scrollPrev) {
      carouselRef.current[index].scrollPrev();
    }
  };
  
  const handleNext = () => {
    if (carouselRef.current[index] && carouselRef.current[index].scrollNext) {
      carouselRef.current[index].scrollNext();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-64 overflow-hidden flex items-center justify-center flex-shrink-0">
        <Carousel
          className="w-full h-full"
          setApi={api => { carouselRef.current[index] = api; }}
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
          {/* Chevron SVG arrows */}
          <button
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 text-white opacity-60 hover:opacity-100 text-3xl p-0 m-0 bg-transparent border-none outline-none cursor-pointer transition-all duration-200"
            onClick={handlePrev}
            aria-label="Anterior"
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 text-white opacity-60 hover:opacity-100 text-3xl p-0 m-0 bg-transparent border-none outline-none cursor-pointer transition-all duration-200"
            onClick={handleNext}
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
          <a href={`https://wa.me/5581982929292`} target="_blank" rel="noopener noreferrer" className="text-qegold font-bold hover:underline">
            {location.phone}
          </a>
        </p>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full border-qegold text-qegold hover:bg-qegold/10"
            onClick={() => setOpenModal(index)}
          >
            Ver Detalhes
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
}
