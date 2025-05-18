
import { CarouselApi } from "@/components/ui/carousel";

interface CarouselNavigationProps {
  carouselApi: CarouselApi | null;
}

export function CarouselNavigation({ carouselApi }: CarouselNavigationProps) {
  const handlePrev = () => {
    if (carouselApi && carouselApi.scrollPrev) {
      carouselApi.scrollPrev();
    }
  };
  
  const handleNext = () => {
    if (carouselApi && carouselApi.scrollNext) {
      carouselApi.scrollNext();
    }
  };

  return (
    <>
      <button
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200"
        onClick={handlePrev}
        aria-label="Anterior"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200"
        onClick={handleNext}
        aria-label="Próximo"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </>
  );
}
