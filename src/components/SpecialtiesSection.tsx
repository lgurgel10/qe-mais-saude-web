
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Specialty = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const specialties: Specialty[] = [
  {
    id: 1,
    title: "Psicologia",
    description: "No Instituto QE+ os psicólogos exploram conceitos como percepção, cognição, atenção, emoção, inteligência, entre outras.",
    image: "/lovable-uploads/7ef31662-90db-4ffc-8504-8211d10ca738.png"
  },
  {
    id: 2,
    title: "Fisioterapia",
    description: "O objetivo desta área é preservar, manter, desenvolver ou restaurar a integridade de órgãos, sistemas ou funções.",
    image: "/lovable-uploads/63c49ab7-cf78-40c5-8384-bdb002d8064e.png"
  },
  {
    id: 3,
    title: "Fonoaudiologia",
    description: "Em nosso Instituto ele atua em modelo ambulatorial atendendo as diversas demandas tanto com o público infantil quanto nos adultos.",
    image: "/lovable-uploads/60ed31d1-9cb8-42e2-b8d6-96bb13f473fb.png"
  },
  {
    id: 4,
    title: "Nutrição",
    description: "Nossa equipe está apta a elaborar um planejamento alimentar de modo a suprir a necessidade de nutrientes de cada paciente e a prescrever uma dieta equilibrada.",
    image: "/lovable-uploads/0defba2b-9892-42cb-b244-af293c16f393.png"
  },
  {
    id: 5,
    title: "PECS",
    description: "Sistema único de intervenção aumentativa /alternativa na comunicação, destinado geralmente para crianças com perturbação do espectro do autismo.",
    image: "/lovable-uploads/7f94496d-8e98-457f-b401-a2b2e3a017a0.png"
  },
  {
    id: 6,
    title: "Terapia Ocupacional",
    description: "A base de suas ações compreende abordagens e/ou condutas fundamentadas em critérios avaliativos com a análise pessoal, familiar, coletivo e social",
    image: "/lovable-uploads/ed663827-4eb7-4797-a901-3c242f1f994d.png"
  },
];

const SpecialtiesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSpecialties = showAll ? specialties : specialties.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-qebeige-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800">
            <span className="text-qegold">Especialidades</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mt-4 mb-2"></div>
          <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-base md:text-lg">
            Contamos com mais de 20 especialidades com os melhores profissionais do mercado para te atender da maneira que você merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedSpecialties.map((specialty) => (
            <Card 
              key={specialty.id} 
              className="overflow-hidden border-0 shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] bg-white"
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={specialty.image} 
                    alt={specialty.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <CardHeader className="pb-2 pt-4">
                <h3 className="text-xl md:text-2xl font-playfair text-qegold text-center">
                  {specialty.title}
                </h3>
              </CardHeader>
              <CardContent className="px-6 text-center text-gray-700">
                <p>{specialty.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center pb-6 pt-2">
                <Button 
                  variant="outline" 
                  className="border-qegold text-qegold hover:bg-qegold hover:text-white transition-colors duration-300"
                >
                  SAIBA MAIS
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {specialties.length > 6 && (
          <div className="mt-12 flex justify-center">
            <Button 
              variant="default" 
              className="bg-qegold hover:bg-qegold-dark text-white px-8 py-6 h-auto text-base font-medium"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "MOSTRAR MENOS" : "VER TODAS"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialtiesSection;
