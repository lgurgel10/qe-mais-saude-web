import { useState, useEffect } from "react";

const HistorySection = () => {
  const images = [
    "/images/conheca.png",
    "/images/conheca1.JPG",
    "/images/conheca2.JPG",
    "/images/conheca3.jpg"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
            Conheça nossa <span className="text-qegold">história</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mt-4 mb-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Text Column */}
          <div className="lg:w-1/2 space-y-4 text-left flex flex-col h-full">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              O Instituto QE+ é um centro de desenvolvimento humano dedicado à promoção da saúde mental, oferecendo aos pacientes e suas famílias os recursos e métodos mais modernos disponíveis. Nossos diferenciais incluem sofisticação, acolhimento e humanização.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Nossa equipe multidisciplinar forma uma estrutura completa que integra um modelo ambulatorial e atendimento domiciliar, com um único propósito: ser uma solução para os desafios enfrentados por você e sua família.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              O Instituto QE+ foi fundado em 2019, impulsionado pela missão de nossa Diretora, Andrea Lins, Mestra em Psicanálise, Bacharel em Direito, Neuropsicopedagoga e Doutoranda em Teologia, junto com seu marido, o empresário Rogério Lins. Durante 10 anos, eles nutriram o sonho de criar um centro capaz de proporcionar desenvolvimento mental, emocional e profissional.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            O compromisso do Instituto QE+ é dar continuidade ao sonho da Dra. Andrea, oferecendo à sociedade pernambucana serviços de excelência. Incorporamos novas práticas, tecnologias e os profissionais do mercado mantendo-se em constante evolução.
            </p>
          </div>
          
          {/* Carousel Column - Desktop only */}
          <div className="hidden lg:flex lg:w-1/2 items-start h-full">
            <div className="relative w-full max-w-[400px] aspect-[4/6] mx-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Instituto QE+ ${index + 1}`}
                    className={`w-full h-full rounded-2xl shadow-lg ${
                      index === images.length - 1 || index === 2 || index === 0 ? 'object-cover' : 'object-contain'
                    }`}
                  />
                </div>
              ))}
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-qegold scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel Mobile - below text */}
        <div className="w-full flex flex-col items-center lg:hidden mt-8">
          <div className="relative w-full max-w-[300px] aspect-[4/6]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Instituto QE+ ${index + 1}`}
                  className={`w-full h-full rounded-2xl shadow-lg ${
                    index === images.length - 1 || index === 2 || index === 0 ? 'object-cover' : 'object-contain'
                  }`}
                />
              </div>
            ))}
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-qegold scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
