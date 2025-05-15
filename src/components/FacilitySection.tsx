
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
            Por dentro do QE+
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mt-4 mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Column */}
          <div className="lg:w-1/2 space-y-6">
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
            
            <div className="pt-4">
              <Button asChild className="bg-qegold hover:bg-qegold-dark text-white h-12 px-8 rounded-md">
                <a href="/estrutura">Conheça nossas instalações</a>
              </Button>
            </div>
          </div>
          
          {/* Visual Column - Modern Geometric Collage */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-6 grid-rows-7 gap-3 md:gap-4">
              {/* Main Image - Reception */}
              <div className="col-span-4 row-span-4 rounded-2xl overflow-hidden relative shadow-lg group">
                <AspectRatio ratio={4/3} className="bg-gray-100">
                  <img 
                    src="/lovable-uploads/c4a9203f-9e9e-45cb-964f-d482f0084820.png" 
                    alt="Recepção do Instituto QE+" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm md:text-base font-medium">Recepção</p>
                </div>
              </div>
              
              {/* Logo QE+ */}
              <div className="col-span-2 row-span-2 flex items-center justify-center bg-qebeige rounded-2xl shadow-md">
                <img 
                  src="/lovable-uploads/d152b0ff-83f2-4358-a6d4-e28f93b04441.png" 
                  alt="Logo QE+" 
                  className="w-4/5 h-auto"
                />
              </div>
              
              {/* Office Image */}
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md group">
                <AspectRatio ratio={1/1} className="bg-gray-100">
                  <img 
                    src="/lovable-uploads/2ba8eb1c-d969-4dcf-9cd8-195cfa5569cf.png" 
                    alt="Consultório do Instituto QE+" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              
              {/* Therapy Room Image */}
              <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden shadow-md group">
                <AspectRatio ratio={3/3} className="bg-gray-100">
                  <img 
                    src="/lovable-uploads/3f554b9d-1889-4913-98e9-e998533feebf.png" 
                    alt="Sala de terapia do Instituto QE+" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm md:text-base font-medium">Sala de Terapia</p>
                </div>
              </div>
              
              {/* Treatment Room Image */}
              <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden shadow-md group">
                <AspectRatio ratio={3/3} className="bg-gray-100">
                  <img 
                    src="/lovable-uploads/52f78acd-10e0-448e-bfcd-402578255b69.png" 
                    alt="Sala de tratamento do Instituto QE+" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm md:text-base font-medium">Sala de Tratamento</p>
                </div>
              </div>
              
              {/* Testimonial Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 md:p-5 rounded-xl shadow-lg border border-qegold/20 max-w-xs hidden md:block">
                <p className="text-gray-800 font-medium italic">
                  "Um ambiente acolhedor e profissional para o seu bem-estar."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Carousel for smaller screens */}
        <div className="mt-12 lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/c4a9203f-9e9e-45cb-964f-d482f0084820.png" 
                      alt="Recepção do Instituto QE+" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-3 bg-white">
                    <p className="font-medium text-gray-800">Recepção</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/3f554b9d-1889-4913-98e9-e998533feebf.png" 
                      alt="Sala de terapia do Instituto QE+" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-3 bg-white">
                    <p className="font-medium text-gray-800">Sala de Terapia</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/2ba8eb1c-d969-4dcf-9cd8-195cfa5569cf.png" 
                      alt="Consultório do Instituto QE+" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-3 bg-white">
                    <p className="font-medium text-gray-800">Consultório</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/52f78acd-10e0-448e-bfcd-402578255b69.png" 
                      alt="Sala de tratamento do Instituto QE+" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-3 bg-white">
                    <p className="font-medium text-gray-800">Sala de Tratamento</p>
                  </div>
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
