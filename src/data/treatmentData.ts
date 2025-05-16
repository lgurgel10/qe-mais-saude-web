export type TreatmentData = {
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
    description: "Tratamento especializado para ansiedade com abordagem multidisciplinar e personalizada.",
    fullDescription: `A ansiedade é uma resposta natural do corpo ao estresse, mas quando se torna excessiva ou persistente, pode interferir significativamente na qualidade de vida. No Instituto QE+, oferecemos tratamento especializado para ansiedade, combinando diferentes abordagens terapêuticas.

Nossa equipe multidisciplinar trabalha para identificar as causas específicas da ansiedade em cada paciente, desenvolvendo um plano de tratamento personalizado que pode incluir psicoterapia, técnicas de relaxamento, mudanças no estilo de vida e, quando necessário, acompanhamento psiquiátrico.

O tratamento visa não apenas aliviar os sintomas, mas também desenvolver habilidades de enfrentamento e resiliência para lidar com situações estressantes no dia a dia.`,
    symptoms: [
      "Preocupação excessiva e persistente",
      "Inquietação ou sensação de estar no limite",
      "Fadiga fácil",
      "Dificuldade de concentração",
      "Irritabilidade",
      "Tensão muscular",
      "Problemas de sono",
      "Sintomas físicos como sudorese, palpitações e falta de ar"
    ],
    whoAffects: "A ansiedade pode afetar pessoas de todas as idades, sendo mais comum em mulheres. Pode se manifestar em diferentes fases da vida, desde a infância até a terceira idade, e pode estar associada a fatores genéticos, ambientais e experiências de vida.",
    image: "/lovable-uploads/ansiedade.png"
  },
  "tdah": {
    title: "TDAH",
    description: "Tratamento especializado para Transtorno do Déficit de Atenção e Hiperatividade com abordagem multidisciplinar.",
    fullDescription: `O TDAH é um transtorno neurobiológico que afeta o desenvolvimento e funcionamento do cérebro, impactando a atenção, o controle de impulsos e a regulação da atividade motora. No Instituto QE+, oferecemos tratamento especializado para TDAH, reconhecendo que cada pessoa apresenta características únicas do transtorno.

Nossa abordagem multidisciplinar inclui avaliação neuropsicológica, psicoterapia, orientação familiar, e quando necessário, acompanhamento psiquiátrico. O tratamento é personalizado para atender às necessidades específicas de cada paciente, considerando sua idade, sintomas predominantes e contexto de vida.

Trabalhamos para desenvolver estratégias práticas que ajudem a pessoa a lidar com os desafios do TDAH no dia a dia, melhorando sua qualidade de vida e potencializando suas habilidades.`,
    symptoms: [
      "Dificuldade de manter a atenção em tarefas",
      "Hiperatividade ou inquietação excessiva",
      "Impulsividade",
      "Dificuldade de organização",
      "Problemas com gestão do tempo",
      "Esquecimento frequente",
      "Dificuldade em seguir instruções",
      "Tendência a interromper conversas"
    ],
    whoAffects: "O TDAH afeta aproximadamente 5% das crianças e 2,5% dos adultos em todo o mundo. É mais comumente diagnosticado em meninos durante a infância, mas afeta igualmente homens e mulheres na idade adulta. O transtorno pode persistir ao longo da vida, embora os sintomas possam mudar com o desenvolvimento.",
    image: "/lovable-uploads/TDAH.png"
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
    image: "/lovable-uploads/autismo.png"
  },
  "depressao": {
    title: "Depressão",
    description: "Tratamento especializado para depressão com abordagem multidisciplinar e personalizada.",
    fullDescription: `A depressão é um transtorno mental que afeta o humor, os pensamentos e o comportamento, podendo interferir significativamente na qualidade de vida. No Instituto QE+, oferecemos tratamento especializado para depressão, reconhecendo que cada pessoa vivencia a doença de maneira única.

Nossa abordagem multidisciplinar combina psicoterapia, acompanhamento psiquiátrico quando necessário, e estratégias de mudança no estilo de vida. O tratamento é personalizado para atender às necessidades específicas de cada paciente, considerando a gravidade dos sintomas, história pessoal e contexto de vida.

Trabalhamos para não apenas aliviar os sintomas da depressão, mas também para desenvolver habilidades de enfrentamento e resiliência, promovendo uma recuperação sustentável e melhor qualidade de vida.`,
    symptoms: [
      "Tristeza persistente",
      "Perda de interesse em atividades prazerosas",
      "Alterações no sono e apetite",
      "Fadiga e falta de energia",
      "Sentimentos de culpa ou inutilidade",
      "Dificuldade de concentração",
      "Pensamentos de morte ou suicídio",
      "Irritabilidade ou agitação"
    ],
    whoAffects: "A depressão pode afetar pessoas de todas as idades, sendo mais comum em mulheres. Pode se manifestar em diferentes fases da vida e pode estar associada a fatores genéticos, ambientais, psicológicos e biológicos.",
    image: "/lovable-uploads/depressao.png"
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
    image: "/lovable-uploads/bipolaridade.png"
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
    image: "/lovable-uploads/borderline.jpg"
  },
  "esquizofrenia": {
    title: "Esquizofrenia",
    description: "Tratamento especializado para Esquizofrenia com abordagem multidisciplinar e personalizada.",
    fullDescription: `A Esquizofrenia é um transtorno mental complexo que afeta a forma como uma pessoa pensa, sente e se comporta. Caracteriza-se por uma combinação de sintomas psicóticos, como alucinações e delírios, além de alterações no pensamento e comportamento.

No Instituto QE+, oferecemos tratamento especializado para Esquizofrenia, reconhecendo que cada pessoa vivencia a doença de maneira única. Nossa abordagem multidisciplinar integra medicação, psicoterapia, reabilitação psicossocial e suporte familiar.

O tratamento visa não apenas controlar os sintomas, mas também promover a recuperação e reintegração social, melhorando a qualidade de vida do paciente e de sua família.`,
    symptoms: [
      "Alucinações (ver, ouvir ou sentir coisas que não existem)",
      "Delírios (crenças falsas e persistentes)",
      "Pensamento desorganizado",
      "Comportamento motor anormal",
      "Sintomas negativos (falta de motivação, expressão emocional reduzida)",
      "Dificuldade de concentração",
      "Alterações no sono",
      "Isolamento social"
    ],
    whoAffects: "A Esquizofrenia afeta aproximadamente 1% da população mundial, geralmente manifestando-se no final da adolescência ou início da idade adulta. Afeta igualmente homens e mulheres, embora em homens tenda a começar mais cedo.",
    image: "/lovable-uploads/esquizofrenia.jpg"
  },
  "tod": {
    title: "TOD",
    description: "Tratamento especializado para Transtorno Opositivo Desafiador com abordagem multidisciplinar e personalizada.",
    fullDescription: `O Transtorno Opositivo Desafiador (TOD) é caracterizado por um padrão persistente de comportamento negativista, hostil e desafiador. No Instituto QE+, oferecemos tratamento especializado para TOD, reconhecendo que este transtorno pode afetar significativamente a vida da criança e de sua família.

Nossa abordagem multidisciplinar inclui terapia comportamental, orientação familiar, e quando necessário, acompanhamento psiquiátrico. O tratamento é personalizado para atender às necessidades específicas de cada criança e sua família.

Trabalhamos para desenvolver estratégias efetivas de manejo comportamental, melhorar a comunicação familiar e promover habilidades sociais e emocionais na criança.`,
    symptoms: [
      "Acessos de raiva frequentes",
      "Discussões com adultos",
      "Desafio ativo às regras",
      "Comportamento vingativo",
      "Culpar outros por seus erros",
      "Irritabilidade fácil",
      "Comportamento rancoroso",
      "Dificuldade em aceitar limites"
    ],
    whoAffects: "O TOD afeta aproximadamente 3-5% das crianças e adolescentes, sendo mais comum em meninos antes da puberdade. Após a puberdade, a prevalência é similar entre meninos e meninas. O transtorno geralmente começa na primeira infância.",
    image: "/lovable-uploads/tod.png"
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
    image: "/lovable-uploads/toc.jpg"
  },
  "transtornos-alimentares": {
    title: "Transtornos Alimentares",
    description: "Tratamento especializado para Transtornos Alimentares com abordagem multidisciplinar e personalizada.",
    fullDescription: `Os Transtornos Alimentares são condições complexas que afetam a relação da pessoa com a comida e com seu corpo. No Instituto QE+, oferecemos tratamento especializado para diversos tipos de transtornos alimentares, incluindo Anorexia Nervosa, Bulimia Nervosa e Transtorno de Compulsão Alimentar.

Nossa abordagem multidisciplinar integra acompanhamento nutricional, psicológico e psiquiátrico, quando necessário. O tratamento é personalizado para atender às necessidades específicas de cada paciente, considerando suas características individuais e o tipo de transtorno.

Trabalhamos para restaurar uma relação saudável com a comida e com o corpo, além de tratar questões emocionais subjacentes que podem estar contribuindo para o transtorno.`,
    symptoms: [
      "Preocupação excessiva com peso e forma corporal",
      "Restrição alimentar severa",
      "Episódios de compulsão alimentar",
      "Comportamentos compensatórios (vômitos, uso de laxantes, exercício excessivo)",
      "Distorção da imagem corporal",
      "Alterações no peso",
      "Isolamento social",
      "Ansiedade relacionada à comida"
    ],
    whoAffects: "Os Transtornos Alimentares afetam principalmente adolescentes e adultos jovens, sendo mais comuns em mulheres, embora também afetem homens. Podem estar associados a fatores genéticos, psicológicos, sociais e culturais.",
    image: "/lovable-uploads/transtornoalimentar.png"
  },
  "neuromodulacao": {
    title: "Neuromodulação",
    description: "Tratamento especializado com técnicas de Neuromodulação para diversos transtornos neurológicos e psiquiátricos.",
    fullDescription: `A Neuromodulação é um conjunto de técnicas terapêuticas que visam modificar a atividade neural para tratar diversos transtornos neurológicos e psiquiátricos. No Instituto QE+, oferecemos diferentes modalidades de neuromodulação, incluindo Estimulação Magnética Transcraniana (EMT) e Estimulação Transcraniana por Corrente Contínua (ETCC).

Nossas técnicas de neuromodulação são aplicadas por profissionais altamente qualificados e podem ser utilizadas no tratamento de depressão, ansiedade, TOC, dor crônica e outros transtornos.

O tratamento é personalizado para cada paciente, considerando suas necessidades específicas e o tipo de transtorno a ser tratado.`,
    symptoms: [
      "Depressão resistente a tratamento",
      "Ansiedade severa",
      "TOC",
      "Dor crônica",
      "Transtornos do sono",
      "Dificuldades cognitivas",
      "Alterações de humor",
      "Sintomas neurológicos diversos"
    ],
    whoAffects: "A Neuromodulação pode beneficiar pessoas de diferentes idades que apresentam transtornos neurológicos ou psiquiátricos que não responderam adequadamente a outros tratamentos. É especialmente útil para casos de depressão resistente a tratamento.",
    image: "/lovable-uploads/neuro.png"
  }
};

export default treatmentData;
