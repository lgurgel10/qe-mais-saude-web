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
  },
  "neuromodulacao": {
    title: "Neuromodulação",
    description: "Tratamento especializado com técnicas de Neuromodulação para diversos transtornos neurológicos e psiquiátricos.",
    fullDescription: `A Neuromodulação é um conjunto de técnicas terapêuticas que visam modificar a atividade neural para tratar diversos transtornos neurológicos e psiquiátricos. No Instituto QE+, oferecemos diferentes modalidades de neuromodulação, incluindo Estimulação Magnética Transcraniana (EMT) e Estimulação Transcraniana por Corrente Contínua (ETCC).

Nossas técnicas de neuromodulação são aplicadas por profissionais altamente qualificados e podem ser utilizadas no tratamento de depressão, ansiedade, TOC, dor crônica e outros transtornos.

O tratamento é personalizado para cada paciente, considerando suas necessidades específicas e o tipo de transtorno a ser tratado.`,
    image: "/lovable-uploads/neuro.png"
  },
  "psicopedagogia": {
    title: "Psicopedagogia",
    description: "Especialidade que estuda e intervém no processo de aprendizagem, identificando e tratando dificuldades de aprendizagem.",
    fullDescription: `A Psicopedagogia no Instituto QE+ é uma especialidade que integra conhecimentos da Psicologia e da Pedagogia para estudar e intervir no processo de aprendizagem. Nossos psicopedagogos trabalham com crianças, adolescentes e adultos que apresentam dificuldades de aprendizagem.

Através de avaliações específicas e intervenções personalizadas, identificamos as causas das dificuldades de aprendizagem e desenvolvemos estratégias para superá-las. Trabalhamos com diversos aspectos como atenção, memória, raciocínio lógico, leitura, escrita e matemática.

Nossa abordagem considera não apenas as dificuldades acadêmicas, mas também os aspectos emocionais, sociais e familiares que podem estar influenciando o processo de aprendizagem.`,
    image: "/images/psicopedagogia.png"
  },
  "terapia-sistemica-integrativa": {
    title: "Terapia Sistêmica Integrativa",
    description: "Abordagem terapêutica que considera o indivíduo em seu contexto familiar e social, promovendo mudanças significativas nos relacionamentos.",
    fullDescription: `A Terapia Sistêmica Integrativa no Instituto QE+ é uma abordagem que considera o indivíduo como parte de um sistema maior, incluindo família, trabalho e sociedade. Esta perspectiva permite uma compreensão mais ampla dos problemas e suas soluções.

Nossos terapeutas sistêmicos trabalham com indivíduos, casais e famílias, ajudando-os a identificar padrões de interação que podem estar contribuindo para seus problemas. A abordagem integrativa permite combinar diferentes técnicas terapêuticas para melhor atender às necessidades específicas de cada caso.

O objetivo é promover mudanças significativas nos relacionamentos e na forma como as pessoas se relacionam consigo mesmas e com os outros, levando a uma melhor qualidade de vida e bem-estar.`,
    image: "/images/terapiasistemica.jpg"
  },
  "musicoterapia": {
    title: "Musicoterapia",
    description: "Utiliza a música e seus elementos como ferramenta terapêutica para promover saúde física, mental e emocional.",
    fullDescription: `A Musicoterapia no Instituto QE+ utiliza a música e seus elementos (som, ritmo, melodia e harmonia) como ferramentas terapêuticas para promover saúde física, mental e emocional. Esta abordagem é especialmente eficaz para pessoas de todas as idades.

Nossos musicoterapeutas são profissionais qualificados que utilizam a música de forma estruturada para atingir objetivos terapêuticos específicos. A musicoterapia pode ajudar no desenvolvimento da comunicação, expressão emocional, coordenação motora, concentração e socialização.

A abordagem é adaptada às necessidades individuais de cada paciente, podendo incluir atividades como tocar instrumentos, cantar, compor, ouvir música e movimentar-se ao som da música.`,
    image: "/images/musico-terapia.jpg"
  },
  "terapia-de-casal": {
    title: "Terapia de Casal",
    description: "Auxilia casais a melhorar sua comunicação, resolver conflitos e fortalecer o relacionamento através de técnicas especializadas.",
    fullDescription: `A Terapia de Casal no Instituto QE+ oferece um espaço seguro e acolhedor para casais trabalharem seus relacionamentos. Nossos terapeutas especializados ajudam os casais a melhorar sua comunicação, resolver conflitos e fortalecer sua conexão.

Através de técnicas especializadas, trabalhamos questões como comunicação, confiança, intimidade, resolução de conflitos e expectativas do relacionamento. A terapia de casal pode ser benéfica tanto para casais que estão passando por dificuldades quanto para aqueles que desejam fortalecer seu relacionamento.

Nossa abordagem é personalizada para atender às necessidades específicas de cada casal, considerando sua história, dinâmica e objetivos.`,
    image: "/images/terapiacasal.jpg"
  },
  "neuropediatria": {
    title: "Neuropediatria",
    description: "Especialidade médica focada no desenvolvimento neurológico infantil, diagnóstico e tratamento de distúrbios neurológicos em crianças.",
    fullDescription: `A Neuropediatria no Instituto QE+ é uma especialidade médica dedicada ao diagnóstico e tratamento de distúrbios neurológicos em crianças e adolescentes. Nossos neuropediatras são especialistas no desenvolvimento neurológico infantil.

Atendemos crianças com diversas condições neurológicas, incluindo atrasos no desenvolvimento, transtornos de aprendizagem, TDAH, autismo, epilepsia e outras condições neurológicas. O diagnóstico precoce e o tratamento adequado são fundamentais para o melhor desenvolvimento da criança.

Nossa abordagem é multidisciplinar, trabalhando em conjunto com outras especialidades como psicologia, fonoaudiologia e terapia ocupacional para oferecer um tratamento completo e integrado.`,
    image: "/images/neuropediatria.jpg"
  },
  "psicomotricidade": {
    title: "Psicomotricidade",
    description: "Trabalha a relação entre o desenvolvimento motor e o desenvolvimento cognitivo, emocional e social.",
    fullDescription: `A Psicomotricidade no Instituto QE+ trabalha a relação entre o desenvolvimento motor e o desenvolvimento cognitivo, emocional e social. Esta abordagem é especialmente importante para crianças, mas também pode beneficiar pessoas de todas as idades.

Nossos psicomotricistas utilizam atividades motoras e jogos para desenvolver habilidades como coordenação, equilíbrio, lateralidade, orientação espacial e temporal. Estas habilidades são fundamentais para o desenvolvimento global da pessoa.

A psicomotricidade pode ajudar no tratamento de diversas condições, incluindo atrasos no desenvolvimento motor, dificuldades de aprendizagem, TDAH, autismo e outros transtornos do desenvolvimento.`,
    image: "/images/psicomo.jpg"
  },
  "terapia-em-grupo": {
    title: "Terapia Em Grupo",
    description: "Oferece um espaço terapêutico coletivo onde os participantes podem compartilhar experiências e aprender uns com os outros.",
    fullDescription: `A Terapia Em Grupo no Instituto QE+ oferece um espaço terapêutico coletivo onde os participantes podem compartilhar experiências, aprender uns com os outros e desenvolver novas habilidades sociais e emocionais.

Nossos grupos são conduzidos por terapeutas especializados e podem focar em diferentes temas, como ansiedade, depressão, habilidades sociais, desenvolvimento pessoal, entre outros. A terapia em grupo oferece benefícios únicos, como o apoio mútuo, a oportunidade de aprender com as experiências dos outros e o desenvolvimento de habilidades sociais.

Os grupos são formados de acordo com as necessidades e objetivos dos participantes, criando um ambiente seguro e acolhedor para o crescimento pessoal.`,
    image: "/images/terapiagrupo.webp"
  },
  "indian-head": {
    title: "Indian Head",
    description: "Técnica terapêutica que combina massagem, alongamento e manipulação para aliviar tensões e promover bem-estar.",
    fullDescription: `O Indian Head no Instituto QE+ é uma técnica terapêutica milenar que combina massagem, alongamento e manipulação para aliviar tensões e promover bem-estar. Esta abordagem holística trabalha principalmente na região da cabeça, pescoço e ombros.

Nossos terapeutas especializados utilizam movimentos suaves e precisos para liberar tensões musculares, melhorar a circulação sanguínea e promover relaxamento profundo. A técnica é especialmente eficaz para aliviar dores de cabeça, tensão muscular, estresse e ansiedade.

O tratamento é personalizado para cada paciente, considerando suas necessidades específicas e condições de saúde. Além dos benefícios físicos, o Indian Head também promove equilíbrio emocional e mental.`,
    image: "/images/indianhead.jpg"
  },
  "reflexologia-podal": {
    title: "Reflexologia Podal",
    description: "Técnica terapêutica que estimula pontos específicos nos pés para promover equilíbrio e saúde em todo o corpo.",
    fullDescription: `A Reflexologia Podal no Instituto QE+ é uma técnica terapêutica que utiliza a estimulação de pontos específicos nos pés para promover equilíbrio e saúde em todo o corpo. Esta prática milenar baseia-se no princípio de que cada área do pé corresponde a diferentes órgãos e sistemas do corpo.

Nossos reflexologistas são especialistas em identificar e trabalhar pontos de tensão e desequilíbrio através de técnicas específicas de pressão e massagem. A reflexologia podal pode ajudar no alívio de dores, redução do estresse, melhoria da circulação e promoção do bem-estar geral.

O tratamento é realizado em um ambiente tranquilo e relaxante, proporcionando uma experiência terapêutica completa que beneficia tanto o corpo quanto a mente.`,
    image: "/images/podal.jpg"
  },
  "neuropsicologo": {
    title: "Neuropsicólogo",
    description: "Especialista em avaliar e tratar distúrbios cognitivos, comportamentais e emocionais relacionados ao funcionamento cerebral.",
    fullDescription: `O Neuropsicólogo no Instituto QE+ é um especialista em avaliar e tratar distúrbios cognitivos, comportamentais e emocionais relacionados ao funcionamento cerebral. Nossos neuropsicólogos realizam avaliações detalhadas para identificar alterações nas funções cognitivas como memória, atenção, linguagem e raciocínio.

Através de testes específicos e observação clínica, desenvolvemos um plano de tratamento personalizado para cada paciente. Trabalhamos com diversas condições, incluindo TDAH, dislexia, transtornos de aprendizagem, sequelas de AVC, traumatismo craniano e demências.

Nossa abordagem é multidisciplinar, integrando conhecimentos da psicologia e neurologia para oferecer um tratamento completo e eficaz.`,
    image: "/images/neuropsicologo.jpg"
  }
};

export default specialtyData;
