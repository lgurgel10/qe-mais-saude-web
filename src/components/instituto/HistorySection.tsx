import { normalizeImagePath } from "@/utils/blogUtils";

const HistorySection = () => {
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
              O Instituto QE+ é um centro de desenvolvimento humano dedicado à promoção da saúde mental, oferecendo aos pacientes e suas famílias os recursos e métodos mais modernos, utilizando sempre tecnologia de ponta em várias terapias como por exemplo a neuromodulação. 
              Nossos diferenciais incluem: a sofisticação, o acolhimento e a humanização.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Nossa equipe multidisciplinar forma uma estrutura completa que, integra modelo ambulatorial um modelo clínico e atendimento domiciliar, com um único propósito: ser uma A solução para os desafios enfrentados por você e sua família.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              O Instituto QE+ foi fundado em 2019, impulsionado pela missão de nossa Diretora, Andrea Lins, Mestra em Psicanálise, Bacharel em Direito, Neuropsicopedagoga e Doutoranda em Teologia, junto com seu marido, o empresário Rogério Lins. Durante 10 anos, eles nutriram o sonho de criar um centro capaz de proporcionar desenvolvimento mental, emocional e profissional.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              O compromisso do Instituto QE+ é dar continuidade ao sonho da Dra. Andrea, oferecendo à sociedade pernambucana,  serviços de excelência. Sempre em busca da inovação, incorporamos novas práticas, tecnologias e os melhores profissionais do mercado, mantendo-se em constante evolução.
            </p>
          </div>
          
          {/* Image Column - Desktop */}
          <div className="hidden lg:flex lg:w-1/2 items-start h-full">
            <div className="relative w-full max-w-[400px] aspect-[4/6] mx-auto">
              <img
                src={normalizeImagePath("/images/conheca.webp")}
                alt="Instituto QE+"
                className="w-full h-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Image Mobile */}
        <div className="w-full flex flex-col items-center lg:hidden mt-8">
          <div className="relative w-full max-w-[300px] aspect-[4/6]">
            <img
              src={normalizeImagePath("/images/conheca.webp")}
              alt="Instituto QE+"
              className="w-full h-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
