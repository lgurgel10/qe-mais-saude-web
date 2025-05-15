
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NAV_ITEMS } from "@/components/navbar/NavItems";

type TreatmentData = {
  title: string;
  description: string;
  fullDescription: string;
  symptoms: string[];
  whoAffects: string;
  image: string;
};

const treatmentData: Record<string, TreatmentData> = {
  "ansiedade": {
    title: "Ansiedade",
    description: "Tratamento especializado para transtornos de ansiedade com abordagem multidisciplinar.",
    fullDescription: `A ansiedade é uma resposta natural do organismo a situações de estresse ou perigo. No entanto, quando se torna excessiva, desproporcional ou persistente, pode configurar um transtorno de ansiedade.

No Instituto QE+, oferecemos tratamento especializado para diversos transtornos de ansiedade, incluindo Transtorno de Ansiedade Generalizada (TAG), Transtorno de Pânico, Fobias Específicas, Transtorno de Ansiedade Social, entre outros.

Nossa abordagem integra diferentes especialidades para proporcionar um tratamento completo, que pode incluir psicoterapia, medicação quando necessária, técnicas de relaxamento e mudanças no estilo de vida.`,
    symptoms: [
      "Preocupação excessiva e persistente",
      "Inquietação ou sensação de estar com os nervos à flor da pele",
      "Tensão muscular",
      "Fadiga constante",
      "Dificuldade para se concentrar",
      "Irritabilidade",
      "Distúrbios do sono",
      "Sintomas físicos como palpitação, sudorese e tremores"
    ],
    whoAffects: "Os transtornos de ansiedade podem afetar pessoas de todas as idades e origens, sendo mais comuns em adultos jovens e mulheres. Fatores genéticos, ambientais e psicológicos podem contribuir para seu desenvolvimento.",
    image: "/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png"
  },
  "tdah": {
    title: "TDAH",
    description: "Tratamento especializado para Transtorno de Déficit de Atenção e Hiperatividade com abordagem multidisciplinar.",
    fullDescription: `O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é um transtorno neurobiológico caracterizado por padrões persistentes de desatenção, hiperatividade e impulsividade que interferem no funcionamento e desenvolvimento do indivíduo.

No Instituto QE+, oferecemos uma abordagem abrangente para o diagnóstico e tratamento do TDAH, considerando as manifestações específicas do transtorno em cada faixa etária e as necessidades individuais de cada paciente.

Nosso tratamento multimodal pode incluir intervenções psicológicas, como terapia cognitivo-comportamental, orientação familiar e escolar, além de acompanhamento médico para avaliação da necessidade de medicação.`,
    symptoms: [
      "Dificuldade para manter a atenção em tarefas",
      "Desorganização e distração frequente",
      "Inquietação e hiperatividade",
      "Impulsividade",
      "Dificuldade para esperar sua vez",
      "Interromper os outros com frequência",
      "Problemas para seguir instruções",
      "Dificuldades acadêmicas ou profissionais"
    ],
    whoAffects: "O TDAH pode afetar crianças, adolescentes e adultos. É mais comumente diagnosticado durante a infância, mas muitas pessoas são diagnosticadas apenas na adolescência ou na idade adulta. O transtorno tem forte componente genético e tende a ocorrer em famílias.",
    image: "/lovable-uploads/45d21c6c-cabe-40c9-82b5-812253682401.png"
  },
  "autismo": {
    title: "Autismo",
    description: "Tratamento especializado para Transtorno do Espectro Autista (TEA) com abordagem multidisciplinar e individualizada.",
    fullDescription: `O Transtorno do Espectro Autista (TEA) é uma condição neurodesenvolvimental que afeta a forma como a pessoa percebe o mundo e interage socialmente. Caracteriza-se por dificuldades na comunicação social e padrões restritos e repetitivos de comportamento, interesses ou atividades.

No Instituto QE+, reconhecemos que cada pessoa com TEA é única, com suas próprias características, potencialidades e desafios. Por isso, oferecemos um tratamento altamente individualizado, adaptado às necessidades específicas de cada paciente.

Nossa abordagem multidisciplinar integra diversas especialidades como Terapia ABA, Fonoaudiologia, Terapia Ocupacional, PECS, acompanhamento psicológico e psiquiátrico, entre outras, conforme a necessidade de cada caso.`,
    symptoms: [
      "Dificuldades na comunicação social e interação",
      "Padrões restritos e repetitivos de comportamento",
      "Interesses específicos e intensos",
      "Hiper ou hipossensibilidade sensorial",
      "Dificuldade com mudanças na rotina",
      "Movimentos repetitivos (estereotipias)",
      "Atraso ou peculiaridades no desenvolvimento da linguagem",
      "Dificuldade em entender conceitos abstratos ou emoções alheias"
    ],
    whoAffects: "O TEA afeta pessoas de todas as origens étnicas, raciais e socioeconômicas. É mais comumente diagnosticado em meninos do que em meninas, embora pesquisas recentes sugiram que meninas podem ser subdiagnosticadas devido a manifestações diferentes dos sintomas.",
    image: "/lovable-uploads/fb6e7c8f-4db4-484a-be07-e3e3c60645ea.png"
  },
  "depressao": {
    title: "Depressão",
    description: "Tratamento integrado e humanizado para transtornos depressivos, com foco na recuperação completa e qualidade de vida.",
    fullDescription: `A depressão é um transtorno mental caracterizado por tristeza persistente, perda de interesse em atividades que normalmente seriam prazerosas, e incapacidade de realizar atividades diárias, por pelo menos duas semanas.

No Instituto QE+, abordamos a depressão como uma condição complexa que envolve fatores biológicos, psicológicos e sociais. Nosso tratamento integrado pode incluir psicoterapia, medicação antidepressiva quando necessária, e intervenções complementares como atividade física, mindfulness e terapias de grupo.

Trabalhamos não apenas para aliviar os sintomas, mas para promover uma recuperação completa e duradoura, ajudando o paciente a desenvolver estratégias de enfrentamento e a reconstruir uma vida significativa e satisfatória.`,
    symptoms: [
      "Tristeza persistente ou humor deprimido",
      "Perda de interesse ou prazer em atividades",
      "Alterações no apetite ou peso",
      "Distúrbios do sono",
      "Fadiga ou perda de energia",
      "Sentimentos de inutilidade ou culpa excessiva",
      "Dificuldade para se concentrar",
      "Pensamentos recorrentes sobre morte ou suicídio"
    ],
    whoAffects: "A depressão pode afetar qualquer pessoa, independentemente de idade, gênero ou condição socioeconômica. Fatores genéticos, bioquímicos, psicológicos e ambientais contribuem para seu desenvolvimento. É mais comum em mulheres e pode ocorrer em diferentes fases da vida, desde a infância até a velhice.",
    image: "/lovable-uploads/c4a9203f-9e9e-45cb-964f-d482f0084820.png"
  },
  "transtorno-bipolaridade": {
    title: "Transtorno Bipolaridade",
    description: "Tratamento especializado para Transtorno Bipolar com abordagem multidisciplinar e personalizada.",
    fullDescription: `O Transtorno Bipolar é uma condição mental caracterizada por alterações significativas no humor, energia e capacidade de funcionamento. Envolve episódios de mania ou hipomania (períodos de humor elevado, energia excessiva e atividade acelerada) que se alternam com episódios de depressão.

No Instituto QE+, oferecemos um tratamento abrangente para o Transtorno Bipolar, que tem como objetivo estabilizar o humor, prevenir recaídas e melhorar a qualidade de vida geral do paciente.

Nossa abordagem integra medicação especializada, psicoterapia, educação sobre o transtorno (psicoeducação) e orientação familiar. O tratamento é personalizado conforme o tipo específico de Transtorno Bipolar (I, II ou Ciclotimia) e as necessidades individuais de cada pessoa.`,
    symptoms: [
      "Episódios maníacos: humor elevado, energia excessiva, pensamentos acelerados, comportamento impulsivo",
      "Episódios depressivos: tristeza profunda, falta de energia, desesperança, ideação suicida",
      "Alterações no sono e apetite",
      "Dificuldade de concentração",
      "Comportamentos de risco durante episódios maníacos",
      "Irritabilidade intensa",
      "Mudanças extremas na autoestima",
      "Ciclagem entre estados de humor"
    ],
    whoAffects: "O Transtorno Bipolar afeta igualmente homens e mulheres, geralmente manifestando-se no final da adolescência ou início da idade adulta. Tem forte componente genético, sendo mais comum em pessoas com familiares que também têm o transtorno.",
    image: "/lovable-uploads/ec39c136-dd06-4ebd-976f-917b235333c1.png"
  },
  "borderline": {
    title: "Borderline",
    description: "Tratamento especializado para Transtorno de Personalidade Borderline com abordagem multidisciplinar e terapias baseadas em evidências.",
    fullDescription: `O Transtorno de Personalidade Borderline (TPB) é caracterizado por um padrão persistente de instabilidade nos relacionamentos interpessoais, na autoimagem e no humor, além de impulsividade acentuada.

No Instituto QE+, oferecemos tratamentos baseados em evidências científicas para o TPB, com foco na melhoria da regulação emocional, redução de comportamentos impulsivos e desenvolvimento de habilidades interpessoais.

Nosso programa de tratamento pode incluir terapias especializadas como a Terapia Comportamental Dialética (DBT), Terapia Baseada em Mentalização (MBT), acompanhamento psiquiátrico para manejo medicamentoso quando necessário, e suporte familiar.`,
    symptoms: [
      "Medo intenso de abandono",
      "Relacionamentos instáveis e intensos",
      "Autoimagem distorcida ou instável",
      "Impulsividade em áreas potencialmente prejudiciais",
      "Comportamentos suicidas recorrentes ou automutilação",
      "Instabilidade afetiva e reatividade do humor",
      "Sentimentos crônicos de vazio",
      "Dificuldade em controlar a raiva"
    ],
    whoAffects: "O Transtorno de Personalidade Borderline afeta aproximadamente 1,6% da população geral, sendo mais frequentemente diagnosticado em mulheres. Geralmente começa durante a adolescência ou início da idade adulta. Fatores genéticos e ambientais, como traumas na infância, contribuem para seu desenvolvimento.",
    image: "/lovable-uploads/c6271fd6-16cc-412f-8baf-72f25de71dec.png"
  },
  "esquizofrenia": {
    title: "Esquizofrenia",
    description: "Tratamento especializado para Esquizofrenia com abordagem multidisciplinar, medicação atualizada e suporte psicossocial.",
    fullDescription: `A Esquizofrenia é um transtorno mental complexo que afeta a forma como a pessoa pensa, sente e se comporta. Caracteriza-se pela presença de sintomas psicóticos como alucinações e delírios, além de alterações no pensamento, emoções e comportamento.

No Instituto QE+, oferecemos um tratamento abrangente para Esquizofrenia, baseado nos mais recentes avanços científicos e protocolos terapêuticos. Nosso objetivo é não apenas controlar os sintomas, mas também promover a reintegração social e melhorar a qualidade de vida dos pacientes.

Nossa abordagem integra tratamento farmacológico com antipsicóticos modernos, intervenções psicossociais, terapia cognitivo-comportamental adaptada para psicose, reabilitação cognitiva, e suporte familiar.`,
    symptoms: [
      "Delírios (crenças falsas mantidas com convicção)",
      "Alucinações (especialmente auditivas)",
      "Discurso e pensamento desorganizados",
      "Comportamento motor anormal ou catatônico",
      "Sintomas negativos (diminuição da expressão emocional, apatia)",
      "Isolamento social",
      "Déficits cognitivos (memória, atenção, funções executivas)",
      "Dificuldades em autocuidado e atividades diárias"
    ],
    whoAffects: "A Esquizofrenia afeta aproximadamente 1% da população mundial. Geralmente se manifesta no final da adolescência ou início da idade adulta, sendo ligeiramente mais precoce em homens do que em mulheres. Tem forte componente genético, embora fatores ambientais também desempenhem papel importante.",
    image: "/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png"
  },
  "tod": {
    title: "TOD",
    description: "Tratamento especializado para Transtorno Opositivo Desafiador com abordagem multidisciplinar e foco familiar.",
    fullDescription: `O Transtorno Opositivo Desafiador (TOD) é caracterizado por um padrão persistente de comportamento negativista, hostil e desafiador direcionado a figuras de autoridade, sem violações graves de normas sociais ou direitos alheios.

No Instituto QE+, reconhecemos a complexidade do TOD e seu impacto no funcionamento familiar, escolar e social da criança ou adolescente. Nosso tratamento multidisciplinar é desenvolvido para atender às necessidades específicas de cada paciente e sua família.

Nossa abordagem integra terapia cognitivo-comportamental adaptada para crianças e adolescentes, treinamento parental em habilidades de manejo comportamental, orientação escolar, e quando necessário, avaliação para comorbidades e intervenção medicamentosa.`,
    symptoms: [
      "Temperamento frequentemente irritável",
      "Comportamento questionador ou desafiante com adultos",
      "Recusa em seguir regras",
      "Tendência a provocar ou irritar intencionalmente outras pessoas",
      "Culpar outros por seus erros ou mau comportamento",
      "Facilmente irritado pelos outros",
      "Frequentemente com raiva e ressentido",
      "Comportamento vingativo"
    ],
    whoAffects: "O TOD geralmente é diagnosticado na infância, frequentemente tornando-se aparente antes dos 8 anos de idade, embora possa surgir mais tarde. É mais comum em meninos antes da puberdade, mas as taxas se igualam após esse período. Pode coexistir com TDAH, transtornos de ansiedade ou transtornos de humor.",
    image: "/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png"
  },
  "toc": {
    title: "TOC",
    description: "Tratamento especializado para Transtorno Obsessivo-Compulsivo com terapias baseadas em evidências e abordagem multidisciplinar.",
    fullDescription: `O Transtorno Obsessivo-Compulsivo (TOC) é caracterizado pela presença de obsessões (pensamentos, impulsos ou imagens recorrentes e persistentes que causam ansiedade) e/ou compulsões (comportamentos repetitivos ou atos mentais que a pessoa se sente compelida a realizar para reduzir a ansiedade).

No Instituto QE+, oferecemos tratamento especializado para TOC, baseado nas mais recentes evidências científicas e protocolos terapêuticos. Nossa abordagem é personalizada para atender às necessidades específicas de cada paciente.

O tratamento pode incluir Terapia Cognitivo-Comportamental com Exposição e Prevenção de Resposta (ERP), considerada o padrão-ouro para TOC, medicação quando indicada, e abordagens complementares como mindfulness e treinamento em habilidades de manejo da ansiedade.`,
    symptoms: [
      "Obsessões recorrentes e persistentes",
      "Compulsões repetitivas em resposta às obsessões",
      "Consumo significativo de tempo (mais de 1 hora por dia)",
      "Sofrimento significativo ou prejuízo no funcionamento diário",
      "Ansiedade intensa quando as compulsões são impedidas",
      "Reconhecimento de que os pensamentos ou comportamentos são excessivos (em adultos)",
      "Esquiva de situações que podem desencadear obsessões",
      "Impacto nas atividades diárias, trabalho, estudo ou relacionamentos"
    ],
    whoAffects: "O TOC afeta cerca de 2-3% da população ao longo da vida. Pode começar na infância, adolescência ou início da idade adulta, com idade média de início aos 19 anos. Afeta igualmente homens e mulheres, embora em meninos tenda a começar mais cedo do que em meninas.",
    image: "/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png"
  },
  "transtornos-alimentares": {
    title: "Transtornos Alimentares",
    description: "Tratamento especializado para Transtornos Alimentares com abordagem multidisciplinar e foco na recuperação completa.",
    fullDescription: `Os Transtornos Alimentares são condições complexas caracterizadas por comportamentos alimentares perturbados e preocupações excessivas com peso, forma corporal e alimentação, que afetam negativamente a saúde física e o funcionamento psicossocial.

No Instituto QE+, oferecemos um programa abrangente de tratamento para transtornos alimentares como Anorexia Nervosa, Bulimia Nervosa, Transtorno da Compulsão Alimentar e outros transtornos alimentares especificados.

Nossa abordagem multidisciplinar integra psicoterapia especializada, acompanhamento nutricional, monitoramento médico, e quando necessário, intervenção psiquiátrica. Trabalhamos em estreita colaboração com as famílias, reconhecendo seu papel essencial no processo de recuperação.`,
    symptoms: [
      "Restrição severa da ingestão alimentar (Anorexia)",
      "Episódios de compulsão alimentar (Bulimia, Transtorno da Compulsão Alimentar)",
      "Comportamentos compensatórios como purgação, exercício excessivo (Bulimia)",
      "Preocupação excessiva com peso e forma corporal",
      "Distorção da imagem corporal",
      "Medo intenso de ganhar peso",
      "Ritualização em torno da comida",
      "Isolamento social devido a comportamentos alimentares"
    ],
    whoAffects: "Os Transtornos Alimentares afetam predominantemente adolescentes e adultos jovens, sendo mais comuns em mulheres, embora a incidência em homens esteja aumentando. Fatores biológicos, psicológicos, familiares e socioculturais contribuem para seu desenvolvimento.",
    image: "/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png"
  },
  "neuromodulacao": {
    title: "Neuromodulação",
    description: "Tratamentos avançados de neuromodulação para diversos transtornos neuropsiquiátricos com tecnologia de ponta e equipe especializada.",
    fullDescription: `A Neuromodulação no Instituto QE+ engloba técnicas avançadas não-invasivas que utilizam estímulos elétricos ou magnéticos para modular a atividade cerebral, promovendo melhoras em diversos transtornos neuropsiquiátricos.

Oferecemos diferentes modalidades de neuromodulação, incluindo Estimulação Magnética Transcraniana (EMT), Estimulação Transcraniana por Corrente Contínua (ETCC) e outros protocolos inovadores, sempre seguindo os mais rigorosos padrões de segurança e eficácia.

Estas técnicas são utilizadas como complemento ao tratamento convencional para condições como depressão resistente, transtorno obsessivo-compulsivo, dor crônica, entre outras, especialmente quando há resposta insatisfatória aos tratamentos tradicionais.`,
    symptoms: [
      "A neuromodulação é um tratamento utilizado para várias condições, incluindo:",
      "Depressão resistente ao tratamento",
      "Transtorno Obsessivo-Compulsivo",
      "Dor crônica",
      "Enxaqueca",
      "Sequelas de AVC",
      "Fibromialgia",
      "Transtornos de ansiedade",
      "Dependência química"
    ],
    whoAffects: "A neuromodulação é indicada para pacientes com transtornos neuropsiquiátricos que não obtiveram resposta satisfatória aos tratamentos convencionais, ou que apresentam efeitos colaterais significativos com medicações. A elegibilidade para estes tratamentos é determinada após avaliação médica especializada.",
    image: "/lovable-uploads/522c28b0-9259-463e-897a-cd07fa9f4213.png"
  }
};

const TreatmentPageTemplate = () => {
  const { type } = useParams<{ type: string }>();
  const normalizedType = type?.toLowerCase().replace(/\s+/g, '-') || '';
  const treatment = treatmentData[normalizedType];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    if (treatment) {
      document.title = `${treatment.title} | Instituto QE+`;
    } else {
      document.title = "Tratamento | Instituto QE+";
    }
  }, [treatment]);

  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Tratamento não encontrado</h1>
            <p className="text-gray-600 mb-6">O tratamento que você está procurando não está disponível.</p>
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
              {treatment.title}
            </h1>
            <div className="w-24 h-1 bg-qegold mx-auto mb-8"></div>
            
            <div className="mb-10">
              <img 
                src={treatment.image} 
                alt={treatment.title} 
                className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
              />
              
              <div className="prose max-w-none">
                {treatment.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm mt-10 mb-10">
              <h2 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Sintomas Comuns
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {treatment.symptoms.map((symptom, index) => (
                  <li key={index} className="text-gray-700">{symptom}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm mb-10">
              <h2 className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Quem Afeta
              </h2>
              <p className="text-gray-700">
                {treatment.whoAffects}
              </p>
            </div>
            
            <div className="bg-qegold-light p-6 rounded-lg shadow-sm mt-10">
              <h2 className="text-xl md:text-2xl font-playfair font-semibold text-white mb-4">
                Agende uma consulta
              </h2>
              <p className="text-white mb-6">
                Estamos prontos para te ajudar com o tratamento para {treatment.title}. Entre em contato conosco para marcar sua consulta.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://api.whatsapp.com/send?phone=5581940474981" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-qegold font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
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

export default TreatmentPageTemplate;
