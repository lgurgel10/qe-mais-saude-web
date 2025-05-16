
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
    </>
  );
}
