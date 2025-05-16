
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

interface LocationModalProps {
  location: {
    name: string;
    address: string;
    phone: string;
    images: string[];
    maps: string;
  };
  workHours: string;
}

export function LocationModal({ location, workHours }: LocationModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold font-playfair text-qegold mb-2">{location.name}</DialogTitle>
        <DialogDescription>
          <div className="mb-4">
            <span className="block text-gray-700 font-semibold">Endereço:</span>
            <span className="block text-gray-800">{location.address}</span>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-gray-700 font-semibold">Telefone:</span>
            <a href="https://wa.me/5581982929292" target="_blank" rel="noopener noreferrer" className="text-qegold font-bold hover:underline">{location.phone}</a>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-gray-700 font-semibold">Horário:</span>
            <span className="text-gray-800">{workHours}</span>
          </div>
          <div className="mb-6">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-2xl relative">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 relative">
                  <div className="w-full h-full" ref={emblaRef}>
                    <div className="flex">
                      {location.images.map((img, i) => (
                        <div key={i} className="min-w-0 shrink-0 grow-0 basis-full flex items-center justify-center h-full">
                          <img src={img} alt="Foto da unidade" className="w-full h-full object-cover rounded-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Setas */}
                  {location.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-white opacity-70 hover:opacity-100 text-2xl p-0 m-0 bg-transparent border-none outline-none cursor-pointer transition-all duration-200"
                        onClick={e => {
                          e.stopPropagation();
                          emblaApi && emblaApi.scrollPrev();
                        }}
                        aria-label="Anterior"
                        type="button"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-white opacity-70 hover:opacity-100 text-2xl p-0 m-0 bg-transparent border-none outline-none cursor-pointer transition-all duration-200"
                        onClick={e => {
                          e.stopPropagation();
                          emblaApi && emblaApi.scrollNext();
                        }}
                        aria-label="Próximo"
                        type="button"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="block text-gray-700 font-semibold mb-2">Localização:</span>
            <div className="w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden mb-2 flex items-center justify-center bg-gray-100">
              <iframe
                title={`Mapa da unidade ${location.name}`}
                src={location.maps + '&output=embed'}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href={location.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-qegold text-white rounded hover:bg-qegold-dark transition-colors font-medium"
            >
              Ver rota no Google Maps
            </a>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
