
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NAV_ITEMS } from "@/components/navbar/NavItems";

type SpecialtyData = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
};

const specialtyData: Record<string, SpecialtyData> = {
  "fonoaudiologia": {
    title: "Fonoaudiologia",
    description: "Em nosso Instituto ele atua em modelo ambulatorial atendendo as diversas demandas tanto com o público infantil quanto nos adultos.",
    fullDescription: `A Fonoaudiologia no Instituto QE+ abrange o diagnóstico e tratamento de distúrbios da comunicação, incluindo problemas de fala, linguagem, voz, audição e deglutição.

Nossos fonoaudiólogos trabalham com uma ampla gama de pacientes, desde crianças com atraso na fala ou transtornos do desenvolvimento até adultos com problemas vocais ou de deglutição.

Utilizamos abordagens terapêuticas baseadas em evidências e personalizadas para cada paciente, com o objetivo de melhorar suas habilidades comunicativas e qualidade de vida.`,
    image: "/lovable-uploads/60ed31d1-9cb8-42e2-b8d6-96bb13f473fb.png"
  },
  "psicanalise": {
    title: "Psicanálise",
    description: "Abordagem terapêutica que explora o inconsciente para compreender comportamentos e emoções, promovendo autoconhecimento e bem-estar psíquico.",
    fullDescription: `A Psicanálise no Instituto QE+ é uma abordagem terapêutica profunda que visa explorar o inconsciente do indivíduo para compreender suas emoções, comportamentos e padrões de relacionamento.

Através da associação livre, análise dos sonhos e da relação transferencial, nossos psicanalistas ajudam os pacientes a identificar conflitos internos não resolvidos e a desenvolver novas formas de lidar com seus problemas emocionais.

Este método terapêutico é especialmente eficaz para quem busca não apenas alívio de sintomas, mas também autoconhecimento profundo e transformação pessoal.`,
    image: "/lovable-uploads/18c840fa-1072-497a-96db-9b81c39f5cd9.png"
  },
  "psiquiatria": {
    title: "Psiquiatria",
    description: "Especialidade médica focada no diagnóstico, tratamento e prevenção de transtornos mentais, oferecendo suporte multidisciplinar para a saúde emocional.",
    fullDescription: `A Psiquiatria no Instituto QE+ oferece atendimento especializado para diagnóstico, tratamento e acompanhamento de transtornos mentais. Nossos psiquiatras são médicos especializados com ampla experiência no cuidado da saúde mental.

Trabalhamos com uma abordagem integrativa que pode incluir psicoterapia, medicação e mudanças no estilo de vida, conforme a necessidade de cada paciente. Nossa equipe está sempre atualizada com os mais recentes avanços da neurociência e psicofarmacologia.

O atendimento psiquiátrico é realizado em um ambiente acolhedor e respeitoso, onde cada paciente é visto de forma holística, considerando não apenas os sintomas, mas também seu contexto de vida, história pessoal e aspirações.`,
    image: "/lovable-uploads/768f3959-3f22-4e4a-90c9-44f8eb65f29a.png"
  },
  "terapia-aba": {
    title: "Terapia ABA",
    description: "Análise do Comportamento Aplicada é uma terapia baseada em evidências que ajuda a desenvolver habilidades sociais, comunicativas e adaptativas, especialmente para pessoas com TEA.",
    fullDescription: `A Terapia ABA (Análise do Comportamento Aplicada) no Instituto QE+ é uma intervenção baseada em evidências científicas, especialmente eficaz para pessoas com Transtorno do Espectro Autista (TEA).

Esta abordagem focada e estruturada visa desenvolver habilidades importantes como comunicação, interação social, aprendizado, atenção e comportamentos adaptativos, enquanto reduz comportamentos que possam interferir na aprendizagem e no desenvolvimento.

Nossos terapeutas ABA desenvolvem programas individualizados com metas específicas e mensuráveis, utilizando reforço positivo para motivar a aquisição de novas habilidades. Trabalhamos em estreita colaboração com familiares e outros profissionais para garantir a generalização das habilidades aprendidas em diferentes ambientes.`,
    image: "/lovable-uploads/770364f2-963d-4af9-93d4-7212813b8a8a.png"
  },
  "fisioterapia": {
    title: "Fisioterapia",
    description: "O objetivo desta área é preservar, manter, desenvolver ou restaurar a integridade de órgãos, sistemas ou funções.",
    fullDescription: `A Fisioterapia no Instituto QE+ é focada na avaliação, prevenção e tratamento de distúrbios do movimento humano. Nossos fisioterapeutas são especialistas em reabilitação física e neurológica.

Utilizamos técnicas e recursos terapêuticos modernos para restaurar, manter e promover a função física ideal, o bem-estar e a qualidade de vida relacionada à saúde.

Atendemos pessoas de todas as idades com diversas condições, desde problemas musculoesqueléticos e lesões esportivas até condições neurológicas como AVC, Parkinson e paralisia cerebral. Nosso objetivo é ajudar cada paciente a alcançar seu máximo potencial funcional e independência.`,
    image: "/lovable-uploads/63c49ab7-cf78-40c5-8384-bdb002d8064e.png"
  },
  "nutricao": {
    title: "Nutrição",
    description: "Nossa equipe está apta a elaborar um planejamento alimentar de modo a suprir a necessidade de nutrientes de cada paciente e a prescrever uma dieta equilibrada.",
    fullDescription: `A Nutrição no Instituto QE+ oferece atendimento personalizado para promover saúde e bem-estar através da alimentação. Nossos nutricionistas são especializados em diferentes áreas, incluindo nutrição clínica, comportamental e funcional.

Oferecemos avaliação nutricional completa, elaboração de planos alimentares individualizados e acompanhamento contínuo para diversas condições, como transtornos alimentares, alergias e intolerâncias alimentares, obesidade, diabetes, hipertensão e outras condições crônicas.

Acreditamos na importância da relação saudável com a comida e trabalhamos para desmistificar dietas restritivas, promovendo mudanças alimentares sustentáveis e prazerosas que se adaptem ao estilo de vida de cada pessoa.`,
    image: "/lovable-uploads/0defba2b-9892-42cb-b244-af293c16f393.png"
  },
  "terapia-ocupacional": {
    title: "Terapia Ocupacional",
    description: "A base de suas ações compreende abordagens e/ou condutas fundamentadas em critérios avaliativos com a análise pessoal, familiar, coletivo e social",
    fullDescription: `A Terapia Ocupacional no Instituto QE+ tem como objetivo principal promover a independência e autonomia nas atividades cotidianas. Nossos terapeutas ocupacionais trabalham com pessoas de todas as idades que enfrentam limitações físicas, cognitivas, sensoriais, psicológicas ou de desenvolvimento.

Através de avaliações específicas e intervenções personalizadas, ajudamos nossos pacientes a desenvolver, recuperar e melhorar habilidades necessárias para a vida diária, trabalho, estudo e lazer.

Nossa abordagem considera a pessoa como um todo, analisando não apenas suas capacidades e limitações, mas também seus contextos pessoais, familiares e sociais, para desenvolver estratégias e adaptações que promovam uma vida mais funcional e satisfatória.`,
    image: "/lovable-uploads/ed663827-4eb7-4797-a901-3c242f1f994d.png"
  },
  "pecs": {
    title: "PECS",
    description: "Sistema único de intervenção aumentativa /alternativa na comunicação, destinado geralmente para crianças com perturbação do espectro do autismo.",
    fullDescription: `O PECS (Sistema de Comunicação por Troca de Figuras) no Instituto QE+ é uma abordagem estruturada e eficaz de comunicação alternativa, especialmente benéfica para pessoas com autismo e outras condições que afetam a comunicação verbal.

Esta metodologia ensina gradualmente o indivíduo a comunicar-se através da troca de símbolos ou figuras, promovendo a iniciativa comunicativa e a interação social.

Nossos especialistas em PECS são certificados e experientes, trabalhando em fases progressivas que vão desde a troca básica de figuras até a construção de frases e comentários espontâneos. O programa é altamente individualizado e envolve a família no processo para garantir a generalização das habilidades aprendidas em todos os ambientes da vida da pessoa.`,
    image: "/lovable-uploads/7f94496d-8e98-457f-b401-a2b2e3a017a0.png"
  }
};

const SpecialtyPageTemplate = () => {
  const { type } = useParams<{ type: string }>();
  const normalizedType = type?.toLowerCase().replace(/\s+/g, '-') || '';
  const specialty = specialtyData[normalizedType];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    if (specialty) {
      document.title = `${specialty.title} | Instituto QE+`;
    } else {
      document.title = "Especialidade | Instituto QE+";
    }
  }, [specialty]);

  if (!specialty) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Especialidade não encontrada</h1>
            <p className="text-gray-600 mb-6">A especialidade que você está procurando não está disponível.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Navbar />
      </header>
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-800 mb-6 text-center">
              {specialty.title}
            </h1>
            <div className="w-24 h-1 bg-qegold mx-auto mb-8"></div>
            
            <div className="mb-10">
              <img 
                src={specialty.image} 
                alt={specialty.title} 
                className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
              />
              
              <div className="prose max-w-none">
                {specialty.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm mt-10">
              <h2 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Agende uma consulta
              </h2>
              <p className="text-gray-700 mb-6">
                Estamos prontos para te atender com o que há de melhor em {specialty.title}. Entre em contato conosco para marcar sua consulta.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://api.whatsapp.com/send?phone=5581940474981" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-qegold hover:bg-qegold-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpecialtyPageTemplate;
