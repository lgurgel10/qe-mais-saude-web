import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

export default function FacilitySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
            Por dentro do <span className="text-qegold">QE+</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mt-4 mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Text Column */}
          <div className="lg:w-1/2 space-y-6 text-left flex flex-col h-full">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Com 4 unidades em Boa Viagem, Piedade, Casa Forte e Ribeirão, o Instituto QE+ 
              oferece a melhor estrutura do estado para um tratamento de ponta em saúde mental. 
              Contamos com uma equipe de profissionais altamente qualificados e oferecemos 
              atendimento personalizado para tratar uma ampla gama de condições, desde ansiedade 
              e depressão até transtornos de comportamento e estresse. Nossos serviços incluem 
              terapia individual e em grupo, avaliação psicológica e acompanhamento psiquiátrico, 
              todos baseados em abordagens modernas e eficazes, visando melhorar a qualidade de 
              vida e a interação social.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Além disso, oferecemos uma excelente oportunidade para crianças com necessidades 
              especiais desenvolverem suas habilidades sociais. Nossa estrutura é comparável a 
              um ambiente escolar, permitindo que as crianças se relacionem de maneira igualitária, 
              sempre acompanhadas por uma equipe de apoio treinada para auxiliá-las a sair de suas 
              zonas de conforto e experimentar novas atividades.
            </p>
          </div>
          {/* Carousel Column - Desktop only */}
          <div className="hidden lg:flex lg:w-1/2 items-start h-full">
            <Carousel className="w-full h-full min-h-[430px]">
              <CarouselContent className="h-full">
                <CarouselItem className="h-full flex items-stretch">
                  <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full">
                    <img 
                      src="/images/foto 4.jpg" 
                      alt="Ambiente 1 QE+" 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-full flex items-stretch">
                  <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full">
                    <img 
                      src="/images/foto 5.jpg" 
                      alt="Ambiente 2 QE+" 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-full flex items-stretch">
                  <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full">
                    <img 
                      src="/images/foto 6.jpg" 
                      alt="Ambiente 3 QE+" 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-full flex items-stretch">
                  <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full">
                    <img 
                      src="/images/foto 7.jpg" 
                      alt="Ambiente 4 QE+" 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
        {/* Carousel Mobile - below text */}
        <div className="w-full flex flex-col items-center lg:hidden mt-8">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/images/foto 4.jpg" 
                      alt="Ambiente 1 QE+" 
                      className="w-full h-full object-cover" 
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/images/foto 5.jpg" 
                      alt="Ambiente 2 QE+" 
                      className="w-full h-full object-cover" 
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/images/foto 6.jpg" 
                      alt="Ambiente 3 QE+" 
                      className="w-full h-full object-cover" 
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/images/foto 7.jpg" 
                      alt="Ambiente 4 QE+" 
                      className="w-full h-full object-cover" 
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
