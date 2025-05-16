import { Target, Lightbulb, Heart } from "lucide-react";

const PrinciplesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-qebeige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-6">
            Princípios do <span className="text-qegold">Instituto QE+</span>
          </h2>
          <div className="w-24 h-1 bg-qegold mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Atenção e amor pela profissão são qualidades fundamentais da nossa equipe, 
            além da formação e especializações necessárias acreditamos que a ética e o 
            comprometimento com o próximo são essenciais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="bg-qegold rounded-lg p-8 text-center text-white shadow-md">
            <div className="flex justify-center mb-4">
              <img src="/images/missao.png" alt="Missão" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Missão</h3>
            <p className="text-sm md:text-base">
              Oferecer aos nossos pacientes e seus familiares ferramentas e profissionais capacitados para desenvolver sua capacidade mental e emocional, buscando prepará-lo para enfrentar as dificuldades e aproveitar as oportunidades da vida, fortalecendo nossa relação de confiança e respeito com nossos pacientes e colaboradores.
            </p>
          </div>
          
          {/* Visão */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="flex justify-center mb-4">
              <img src="/images/visao.png" alt="Visão" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Visão</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Ser reconhecida como referência na estrutura e no tratamento de saúde mental adulto e infantil no Norte e Nordeste. Por este motivo trabalhamos para entregar um serviço de qualidade, por que ser referência significa fazer o melhor para ser o melhor.
            </p>
          </div>
          
          {/* Valores */}
          <div className="bg-qegold rounded-lg p-8 text-center text-white shadow-md">
            <div className="flex justify-center mb-4">
              <img src="/images/valores.png" alt="Valores" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Valores</h3>
            <ul className="flex flex-col items-center space-y-2">
              <li className="flex items-center">
                <span className="text-sm md:text-base">• Responsabilidade</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm md:text-base">• Cuidados com o paciente</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm md:text-base">• Profissionalismo</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm md:text-base">• Confiança</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm md:text-base">• Credibilidade</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
