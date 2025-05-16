
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { DialogTrigger } from "@/components/ui/dialog";
import { CarouselNavigation } from "./CarouselNavigation";
import { normalizeImagePath } from "@/utils/blogUtils";

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
  const [api, setApi] = useState<any>(null);
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-64 overflow-hidden flex items-center justify-center flex-shrink-0">
        <Carousel
          className="w-full h-full"
          setApi={api => { 
            setApi(api);
            carouselRef.current[index] = api;
          }}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {location.images.map((img, i) => (
              <CarouselItem key={i} className="w-full h-full aspect-[4/3] flex items-center justify-center">
                <img 
                  src={normalizeImagePath(img)} 
                  alt={`Foto da unidade ${location.name}`} 
                  className="w-full h-full object-cover rounded-none bg-gray-100 aspect-[4/3]" 
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation carouselApi={api} />
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
