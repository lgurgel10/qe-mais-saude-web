export type SpecialtyData = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
};

const specialtyData: Record<string, SpecialtyData> = {
  "psicologia": {
    title: "Psicologia",
    description: "No Instituto QE+ os psicólogos exploram conceitos como percepção, cognição, atenção, emoção, inteligência, entre outras.",
    fullDescription: `A Psicologia no Instituto QE+ oferece um atendimento especializado e humanizado, focando no bem-estar emocional e desenvolvimento pessoal de nossos pacientes.

Nossos psicólogos são altamente qualificados e trabalham com diversas abordagens terapêuticas, adaptando o tratamento às necessidades específicas de cada pessoa. Atendemos crianças, adolescentes, adultos e idosos, oferecendo suporte para uma ampla gama de questões emocionais e comportamentais.

Nossa abordagem integra diferentes técnicas e metodologias, incluindo terapia cognitivo-comportamental, psicanálise, terapia humanista e outras abordagens baseadas em evidências científicas. Trabalhamos em conjunto com outras especialidades do instituto para oferecer um tratamento multidisciplinar completo.`,
    image: "/lovable-uploads/psico.png"
  },
  "fonoaudiologia": {
    title: "Fonoaudiologia",
    description: "Em nosso Instituto ele atua em modelo ambulatorial atendendo as diversas demandas tanto com o público infantil quanto nos adultos.",
    fullDescription: `A Fonoaudiologia no Instituto QE+ abrange o diagnóstico e tratamento de distúrbios da comunicação, incluindo problemas de fala, linguagem, voz, audição e deglutição.

Nossos fonoaudiólogos trabalham com uma ampla gama de pacientes, desde crianças com atraso na fala ou transtornos do desenvolvimento até adultos com problemas vocais ou de deglutição.

Utilizamos abordagens terapêuticas baseadas em evidências e personalizadas para cada paciente, com o objetivo de melhorar suas habilidades comunicativas e qualidade de vida.`,
    image: "/lovable-uploads/fono.png"
  },
  "psicanalise": {
    title: "Psicanálise",
    description: "Abordagem terapêutica que explora o inconsciente para compreender comportamentos e emoções, promovendo autoconhecimento e bem-estar psíquico.",
    fullDescription: `A Psicanálise no Instituto QE+ é uma abordagem terapêutica profunda que visa explorar o inconsciente do indivíduo para compreender suas emoções, comportamentos e padrões de relacionamento.

Através da associação livre, análise dos sonhos e da relação transferencial, nossos psicanalistas ajudam os pacientes a identificar conflitos internos não resolvidos e a desenvolver novas formas de lidar com seus problemas emocionais.

Este método terapêutico é especialmente eficaz para quem busca não apenas alívio de sintomas, mas também autoconhecimento profundo e transformação pessoal.`,
    image: "/lovable-uploads/psicanalise.png"
  },
  "psiquiatria": {
    title: "Psiquiatria",
    description: "Especialidade médica focada no diagnóstico, tratamento e prevenção de transtornos mentais, oferecendo suporte multidisciplinar para a saúde emocional.",
    fullDescription: `A Psiquiatria no Instituto QE+ oferece atendimento especializado para diagnóstico, tratamento e acompanhamento de transtornos mentais. Nossos psiquiatras são médicos especializados com ampla experiência no cuidado da saúde mental.

Trabalhamos com uma abordagem integrativa que pode incluir psicoterapia, medicação e mudanças no estilo de vida, conforme a necessidade de cada paciente. Nossa equipe está sempre atualizada com os mais recentes avanços da neurociência e psicofarmacologia.

O atendimento psiquiátrico é realizado em um ambiente acolhedor e respeitoso, onde cada paciente é visto de forma holística, considerando não apenas os sintomas, mas também seu contexto de vida, história pessoal e aspirações.`,
    image: "/lovable-uploads/psiqui.png"
  },
  "terapia-aba": {
    title: "Terapia ABA",
    description: "Análise do Comportamento Aplicada é uma terapia baseada em evidências que ajuda a desenvolver habilidades sociais, comunicativas e adaptativas, especialmente para pessoas com TEA.",
    fullDescription: `A Terapia ABA (Análise do Comportamento Aplicada) no Instituto QE+ é uma abordagem baseada em evidências científicas que visa desenvolver habilidades sociais, comunicativas e adaptativas, especialmente em pessoas com Transtorno do Espectro Autista (TEA).

Nossos terapeutas ABA são altamente qualificados e trabalham com técnicas específicas para promover o desenvolvimento de comportamentos positivos e reduzir comportamentos que interferem no aprendizado e na socialização.

O tratamento é altamente individualizado, com objetivos claros e mensuráveis, e inclui o treinamento e envolvimento dos pais e cuidadores para garantir a generalização das habilidades aprendidas.`,
    image: "/lovable-uploads/terapiaaba.png"
  },
  "fisioterapia": {
    title: "Fisioterapia",
    description: "O objetivo desta área é preservar, manter, desenvolver ou restaurar a integridade de órgãos, sistemas ou funções.",
    fullDescription: `A Fisioterapia no Instituto QE+ é focada na avaliação, prevenção e tratamento de distúrbios do movimento humano. Nossos fisioterapeutas são especialistas em reabilitação física e neurológica.

Utilizamos técnicas e recursos terapêuticos modernos para restaurar, manter e promover a função física ideal, o bem-estar e a qualidade de vida relacionada à saúde.

Atendemos pessoas de todas as idades com diversas condições, desde problemas musculoesqueléticos e lesões esportivas até condições neurológicas como AVC, Parkinson e paralisia cerebral. Nosso objetivo é ajudar cada paciente a alcançar seu máximo potencial funcional e independência.`,
    image: "/lovable-uploads/fisio.png"
  },
  "nutricao": {
    title: "Nutrição",
    description: "Nossa equipe está apta a elaborar um planejamento alimentar de modo a suprir a necessidade de nutrientes de cada paciente e a prescrever uma dieta equilibrada.",
    fullDescription: `A Nutrição no Instituto QE+ oferece atendimento personalizado para promover saúde e bem-estar através da alimentação. Nossos nutricionistas são especializados em diferentes áreas, incluindo nutrição clínica, comportamental e funcional.

Oferecemos avaliação nutricional completa, elaboração de planos alimentares individualizados e acompanhamento contínuo para diversas condições, como transtornos alimentares, alergias e intolerâncias alimentares, obesidade, diabetes, hipertensão e outras condições crônicas.

Acreditamos na importância da relação saudável com a comida e trabalhamos para desmistificar dietas restritivas, promovendo mudanças alimentares sustentáveis e prazerosas que se adaptem ao estilo de vida de cada pessoa.`,
    image: "/lovable-uploads/nutri.png"
  },
  "terapia-ocupacional": {
    title: "Terapia Ocupacional",
    description: "A base de suas ações compreende abordagens e/ou condutas fundamentadas em critérios avaliativos com a análise pessoal, familiar, coletivo e social",
    fullDescription: `A Terapia Ocupacional no Instituto QE+ tem como objetivo principal promover a independência e autonomia nas atividades cotidianas. Nossos terapeutas ocupacionais trabalham com pessoas de todas as idades que enfrentam limitações físicas, cognitivas, sensoriais, psicológicas ou de desenvolvimento.

Através de avaliações específicas e intervenções personalizadas, ajudamos nossos pacientes a desenvolver, recuperar e melhorar habilidades necessárias para a vida diária, trabalho, estudo e lazer.

Nossa abordagem considera a pessoa como um todo, analisando não apenas suas capacidades e limitações, mas também seus contextos pessoais, familiares e sociais, para desenvolver estratégias e adaptações que promovam uma vida mais funcional e satisfatória.`,
    image: "/lovable-uploads/terapiaoc.png"
  },
  "pecs": {
    title: "PECS",
    description: "Sistema único de intervenção aumentativa /alternativa na comunicação, destinado geralmente para crianças com perturbação do espectro do autismo.",
    fullDescription: `O PECS (Picture Exchange Communication System) no Instituto QE+ é um sistema de comunicação alternativa e aumentativa que utiliza imagens para facilitar a comunicação, especialmente em pessoas com Transtorno do Espectro Autista (TEA) ou outras dificuldades de comunicação.

Nossos terapeutas são certificados em PECS e trabalham com uma abordagem estruturada e baseada em evidências para desenvolver habilidades comunicativas. O sistema é especialmente eficaz para pessoas que têm dificuldade com a comunicação verbal.

O programa é implementado em fases, começando com a troca de imagens para solicitar itens desejados, progredindo para frases mais complexas e, eventualmente, para comentários espontâneos.`,
    image: "/lovable-uploads/PECS.png"
  }
};

export default specialtyData;
