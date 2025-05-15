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
    image: "/lovable-uploads/7ef31662-90db-4ffc-8504-8211d10ca738.png"
  },
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

export default specialtyData;
