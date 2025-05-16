
import { useRef, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { locations, WORK_HOURS } from "./locationsData";
import { LocationCard } from "./LocationCard";
import { LocationModal } from "./LocationModal";

export default function LocationsSection() {
  const carouselsRef = useRef<any[]>([]);
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <section id="estrutura" className="py-16 md:py-24 bg-qebeige-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
            Nossa <span className="text-qegold">Estrutura</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Com 4 unidades estrategicamente localizadas, o Instituto QE+ oferece 
            a melhor estrutura do estado para um tratamento de ponta em saúde mental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Dialog 
              key={index} 
              open={openModal === index} 
              onOpenChange={open => setOpenModal(open ? index : null)}
            >
              <LocationCard
                location={location}
                index={index}
                carouselRef={carouselsRef}
                setOpenModal={setOpenModal}
              />
              {openModal === index && (
                <LocationModal 
                  location={location}
                  workHours={WORK_HOURS[location.name as keyof typeof WORK_HOURS]}
                />
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
