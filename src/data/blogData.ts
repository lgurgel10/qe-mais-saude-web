
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

interface WPPost {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

// URL base da API do WordPress - substitua pelo seu domínio
const WP_API_URL = 'https://qemais.com.br/wp-json/wp/v2';

// Função para formatar a data no estilo "5 de março de 2025"
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('pt-BR', options);
};

// Converter post do WordPress para o formato do nosso BlogPost
const convertWpPostToBlogPost = (wpPost: WPPost): BlogPost => {
  const imageUrl = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/lovable-uploads/e76e4681-0b5e-4cf9-8472-d8fb2d43bf7b.png';
  
  return {
    id: wpPost.id,
    title: wpPost.title.rendered,
    slug: wpPost.slug,
    date: formatDate(wpPost.date),
    image: imageUrl,
    excerpt: wpPost.excerpt.rendered.replace(/<[^>]*>/g, ''), // Remove HTML tags from excerpt
    content: wpPost.content.rendered
  };
};

// Função para buscar posts do WordPress
export const fetchBlogPosts = async (page: number = 1, postsPerPage: number = 9): Promise<{
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
}> => {
  try {
    const response = await fetch(`${WP_API_URL}/posts?page=${page}&per_page=${postsPerPage}&_embed`);
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    const wpPosts = await response.json() as WPPost[];
    
    const posts = wpPosts.map(convertWpPostToBlogPost);
    
    return {
      posts,
      totalPages,
      currentPage: page
    };
  } catch (error) {
    console.error('Erro ao buscar posts do WordPress:', error);
    return {
      posts: [],
      totalPages: 1,
      currentPage: page
    };
  }
};

// Função para buscar um post específico pelo slug
export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
    const wpPosts = await response.json() as WPPost[];
    
    if (wpPosts.length === 0) {
      return undefined;
    }
    
    return convertWpPostToBlogPost(wpPosts[0]);
  } catch (error) {
    console.error(`Erro ao buscar post com slug ${slug}:`, error);
    return undefined;
  }
};

// Mantém as funções existentes para fallback caso a API não esteja disponível
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "TOC: Transtorno Obsessivo-Compulsivo",
    slug: "toc-transtorno-obsessivo-compulsivo",
    date: "5 de março de 2025",
    image: "/lovable-uploads/e76e4681-0b5e-4cf9-8472-d8fb2d43bf7b.png",
    excerpt: "O Transtorno Obsessivo-Compulsivo (TOC) ganhou holofotes recentemente ...",
    content: `
      <h1>TOC: Transtorno Obsessivo-Compulsivo</h1>
      <p>O Transtorno Obsessivo-Compulsivo (TOC) ganhou holofotes recentemente na mídia, mas ainda existe muita desinformação sobre esta condição que afeta milhões de pessoas no mundo inteiro.</p>
      <p>O TOC é caracterizado por pensamentos intrusivos, recorrentes e indesejados (obsessões) que levam a comportamentos repetitivos (compulsões) realizados para aliviar a ansiedade causada pelos pensamentos obsessivos.</p>
      <h2>Principais sintomas do TOC</h2>
      <p>Os sintomas do TOC podem variar significativamente de pessoa para pessoa, mas geralmente incluem:</p>
      <ul>
        <li>Pensamentos obsessivos sobre contaminação e limpeza</li>
        <li>Necessidade de organização e simetria</li>
        <li>Pensamentos intrusivos sobre temas agressivos ou tabus</li>
        <li>Comportamentos compulsivos como lavagem de mãos, verificações repetidas, contagem ou organização</li>
      </ul>
      <h2>Tratamentos disponíveis</h2>
      <p>Felizmente, existem tratamentos eficazes para o TOC, incluindo:</p>
      <p>- Terapia Cognitivo-Comportamental (TCC), especialmente a Exposição e Prevenção de Resposta (EPR)</p>
      <p>- Medicamentos, como inibidores seletivos de recaptação de serotonina (ISRSs)</p>
      <p>- Abordagens combinadas de terapia e medicação</p>
      <p>Se você ou alguém que você conhece está lutando contra os sintomas do TOC, busque ajuda profissional. Com o tratamento adequado, é possível gerenciar eficazmente os sintomas e recuperar a qualidade de vida.</p>
    `
  },
  {
    id: 2,
    title: "Arteterapia: a arte como instrumento no trabalho terapêutico",
    slug: "arteterapia-arte-como-instrumento-terapeutico",
    date: "3 de março de 2025",
    image: "/lovable-uploads/e76e4681-0b5e-4cf9-8472-d8fb2d43bf7b.png",
    excerpt: "A Arteterapia é uma abordagem terapêutica que ...",
    content: `
      <h1>Arteterapia: a arte como instrumento no trabalho terapêutico</h1>
      <p>A Arteterapia é uma abordagem terapêutica que utiliza a expressão artística como ferramenta para auxiliar indivíduos a expressar emoções, reduzir o estresse, desenvolver habilidades interpessoais e aumentar a autoestima.</p>
      <p>Ao contrário do que muitos pensam, não é necessário ter habilidades artísticas para se beneficiar da arteterapia. O processo criativo em si é terapêutico, independentemente do resultado final.</p>
      <h2>Benefícios da Arteterapia</h2>
      <p>A prática da arteterapia pode trazer diversos benefícios, como:</p>
      <ul>
        <li>Expressão não-verbal de emoções difíceis de verbalizar</li>
        <li>Redução de sintomas de ansiedade e depressão</li>
        <li>Desenvolvimento de autoconhecimento</li>
        <li>Promoção de relaxamento e redução do estresse</li>
      </ul>
      <h2>Para quem é indicada a Arteterapia?</h2>
      <p>A arteterapia pode beneficiar pessoas de todas as idades e com diversos desafios emocionais ou psicológicos, incluindo:</p>
      <p>- Crianças com dificuldades de comunicação</p>
      <p>- Adultos com transtornos de ansiedade ou depressão</p>
      <p>- Idosos com demência ou condições neurodegenerativas</p>
      <p>- Pessoas em processo de luto ou trauma</p>
      <p>No Instituto QE+, contamos com profissionais especializados em arteterapia para auxiliar no processo terapêutico de nossos pacientes.</p>
    `
  },
  {
    id: 3,
    title: "Amor e Relacionamentos: como construir vínculos saudáveis",
    slug: "amor-e-relacionamentos-como-construir-vinculos-saudaveis",
    date: "20 de fevereiro de 2025",
    image: "/lovable-uploads/e76e4681-0b5e-4cf9-8472-d8fb2d43bf7b.png",
    excerpt: "Em um mundo onde as conexões humanas ...",
    content: `
      <h1>Amor e Relacionamentos: como construir vínculos saudáveis</h1>
      <p>Em um mundo onde as conexões humanas estão cada vez mais mediadas por tecnologia, construir relacionamentos saudáveis tornou-se um desafio para muitas pessoas.</p>
      <p>Relacionamentos saudáveis são fundamentais para nossa saúde mental e bem-estar geral. Eles nos proporcionam apoio emocional, companheirismo e um senso de pertencimento.</p>
      <h2>Pilares de relacionamentos saudáveis</h2>
      <p>Alguns elementos são fundamentais para construir e manter relacionamentos saudáveis:</p>
      <ul>
        <li>Comunicação aberta e honesta</li>
        <li>Respeito mútuo e estabelecimento de limites</li>
        <li>Empatia e compreensão</li>
        <li>Confiança e transparência</li>
      </ul>
      <h2>Sinais de relacionamentos tóxicos</h2>
      <p>É igualmente importante reconhecer sinais de relacionamentos prejudiciais:</p>
      <p>- Controle excessivo ou manipulação</p>
      <p>- Falta de respeito pelos limites pessoais</p>
      <p>- Comunicação agressiva ou passivo-agressiva</p>
      <p>- Desconfiança constante</p>
      <p>Se você está enfrentando dificuldades em seus relacionamentos, a terapia de casal ou individual pode ser uma excelente ferramenta para desenvolver habilidades de comunicação e construir conexões mais saudáveis.</p>
    `
  },
  {
    id: 4,
    title: "Sinais de Autismo em Crianças: como identificar e quando procurar ajuda",
    slug: "sinais-de-autismo-em-criancas",
    date: "18 de fevereiro de 2025",
    image: "/lovable-uploads/838c8e5d-73db-4f36-8ef7-7f48c29f372f.png",
    excerpt: "Reconhecer os sinais precoces do Transtorno do ...",
    content: `
      <h1>Sinais de Autismo em Crianças: como identificar e quando procurar ajuda</h1>
      <p>Reconhecer os sinais precoces do Transtorno do Espectro Autista (TEA) pode fazer uma diferença significativa no desenvolvimento da criança, pois quanto mais cedo a intervenção começar, melhores são os resultados.</p>
      <p>O autismo é uma condição neurológica que afeta a comunicação, interação social e comportamento. Cada criança com autismo é única, com suas próprias forças e desafios.</p>
      <h2>Sinais comuns de autismo em crianças</h2>
      <p>Alguns sinais que podem indicar autismo incluem:</p>
      <ul>
        <li>Atraso ou ausência de fala</li>
        <li>Dificuldade em manter contato visual</li>
        <li>Comportamentos repetitivos ou estereotipados</li>
        <li>Interesses restritos e intensos</li>
        <li>Dificuldade em compreender emoções e expressões faciais</li>
        <li>Sensibilidade incomum a estímulos sensoriais</li>
      </ul>
      <h2>Quando procurar ajuda</h2>
      <p>É recomendável consultar um especialista se você notar:</p>
      <p>- Ausência de balbucio até os 12 meses</p>
      <p>- Ausência de gestos como apontar ou acenar até os 12 meses</p>
      <p>- Ausência de palavras isoladas até os 16 meses</p>
      <p>- Ausência de frases de duas palavras até os 24 meses</p>
      <p>- Qualquer perda de habilidades sociais ou de linguagem em qualquer idade</p>
      <p>No Instituto QE+, contamos com uma equipe multidisciplinar especializada no diagnóstico e tratamento do TEA, oferecendo suporte tanto para as crianças quanto para suas famílias.</p>
    `
  },
  {
    id: 5,
    title: "Volta às Aulas e Saúde Mental",
    slug: "volta-as-aulas-e-saude-mental",
    date: "15 de fevereiro de 2025",
    image: "/lovable-uploads/838c8e5d-73db-4f36-8ef7-7f48c29f372f.png",
    excerpt: "A volta às aulas é um fenômeno ...",
    content: `
      <h1>Volta às Aulas e Saúde Mental</h1>
      <p>A volta às aulas é um fenômeno que pode desencadear uma série de emoções tanto em crianças e adolescentes quanto em seus pais. Ansiedade, expectativa, medo e entusiasmo são sentimentos comuns neste período de transição.</p>
      <p>Após períodos prolongados de férias, a readaptação à rotina escolar pode representar um desafio significativo para a saúde mental dos estudantes.</p>
      <h2>Como ajudar crianças e adolescentes na volta às aulas</h2>
      <p>Algumas estratégias que podem facilitar esta transição:</p>
      <ul>
        <li>Reestabelecer gradualmente a rotina escolar antes do início das aulas</li>
        <li>Conversar abertamente sobre expectativas e preocupações</li>
        <li>Incentivar uma atitude positiva em relação à escola</li>
        <li>Estabelecer horários regulares para tarefas, lazer e sono</li>
        <li>Manter uma comunicação aberta com professores e a escola</li>
      </ul>
      <h2>Sinais de alerta</h2>
      <p>Esteja atento aos seguintes sinais que podem indicar dificuldades na adaptação:</p>
      <p>- Resistência persistente em ir à escola</p>
      <p>- Queixas frequentes de sintomas físicos (dores de cabeça, estômago)</p>
      <p>- Alterações no sono ou alimentação</p>
      <p>- Irritabilidade ou tristeza persistentes</p>
      <p>Se você perceber estes sinais em seu filho, considere buscar ajuda profissional. No Instituto QE+, oferecemos suporte psicológico para estudantes de todas as idades que estejam enfrentando dificuldades na adaptação escolar.</p>
    `
  },
  {
    id: 6,
    title: "Ansiedade: o que é, causas e tratamento",
    slug: "ansiedade-o-que-e-causas-e-tratamento",
    date: "11 de fevereiro de 2025",
    image: "/lovable-uploads/838c8e5d-73db-4f36-8ef7-7f48c29f372f.png",
    excerpt: "A ansiedade é um dos sentimentos mais ...",
    content: `
      <h1>Ansiedade: o que é, causas e tratamento</h1>
      <p>A ansiedade é um dos sentimentos mais universais e, ao mesmo tempo, um dos transtornos mentais mais comuns na atualidade. Ela se caracteriza por uma sensação persistente de preocupação, tensão, medo ou apreensão em relação ao futuro.</p>
      <p>Embora a ansiedade em níveis moderados seja uma resposta natural do organismo a situações de perigo ou estresse, quando se torna excessiva, persistente e interfere nas atividades cotidianas, pode configurar um transtorno de ansiedade.</p>
      <h2>Tipos comuns de transtornos de ansiedade</h2>
      <p>Existem diversos transtornos de ansiedade, incluindo:</p>
      <ul>
        <li>Transtorno de Ansiedade Generalizada (TAG)</li>
        <li>Transtorno do Pânico</li>
        <li>Fobias específicas</li>
        <li>Transtorno de Ansiedade Social</li>
        <li>Transtorno de Estresse Pós-Traumático (TEPT)</li>
      </ul>
      <h2>Tratamentos para ansiedade</h2>
      <p>Felizmente, existem tratamentos eficazes para os transtornos de ansiedade:</p>
      <p>- Terapia Cognitivo-Comportamental (TCC)</p>
      <p>- Medicamentos ansiolíticos e antidepressivos</p>
      <p>- Técnicas de relaxamento e mindfulness</p>
      <p>- Exercícios físicos regulares</p>
      <p>- Mudanças no estilo de vida</p>
      <p>No Instituto QE+, oferecemos uma abordagem personalizada para o tratamento da ansiedade, combinando diferentes modalidades terapêuticas de acordo com as necessidades específicas de cada paciente.</p>
    `
  },
  {
    id: 7,
    title: "Transtorno Psicótico: o que é, desafios e perspectivas para pacientes e familiares",
    slug: "transtorno-psicotico-o-que-e-desafios-e-perspectivas",
    date: "7 de fevereiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "O transtorno psicótico é um estado mental ...",
    content: `
      <h1>Transtorno Psicótico: o que é, desafios e perspectivas para pacientes e familiares</h1>
      <p>O transtorno psicótico é um estado mental caracterizado pela perda de contato com a realidade. Pessoas com psicose podem experimentar alucinações (perceber coisas que não existem) e delírios (crenças falsas e fixas).</p>
      <p>Esta condição pode surgir como parte de diversos transtornos, como esquizofrenia, transtorno bipolar, depressão grave com características psicóticas, entre outros.</p>
      <h2>Desafios enfrentados por pacientes e familiares</h2>
      <p>Viver com um transtorno psicótico ou cuidar de alguém com esta condição apresenta diversos desafios:</p>
      <ul>
        <li>Estigma e preconceito social</li>
        <li>Dificuldades de adesão ao tratamento</li>
        <li>Impacto nas relações interpessoais e profissionais</li>
        <li>Sobrecarga emocional para familiares e cuidadores</li>
        <li>Acesso limitado a serviços especializados</li>
      </ul>
      <h2>Perspectivas de tratamento</h2>
      <p>Apesar dos desafios, existem tratamentos eficazes que podem ajudar a controlar os sintomas e melhorar a qualidade de vida:</p>
      <p>- Medicamentos antipsicóticos</p>
      <p>- Intervenções psicossociais</p>
      <p>- Terapia cognitivo-comportamental para psicose</p>
      <p>- Programas de suporte familiar</p>
      <p>- Reabilitação psicossocial</p>
      <p>No Instituto QE+, oferecemos um programa abrangente para pacientes com transtornos psicóticos e seus familiares, visando não apenas o controle dos sintomas, mas também a reintegração social e melhoria da qualidade de vida.</p>
    `
  },
  {
    id: 8,
    title: "Anorexia Nervosa: o que você precisa saber",
    slug: "anorexia-nervosa-o-que-voce-precisa-saber",
    date: "31 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "A anorexia nervosa é um transtorno alimentar ...",
    content: `
      <h1>Anorexia Nervosa: o que você precisa saber</h1>
      <p>A anorexia nervosa é um transtorno alimentar caracterizado pela restrição severa de alimentos, medo intenso de ganhar peso e uma percepção distorcida da imagem corporal.</p>
      <p>Apesar de ser frequentemente associada apenas a adolescentes do sexo feminino, a anorexia pode afetar pessoas de todas as idades, gêneros e origens socioeconômicas.</p>
      <h2>Sinais e sintomas da anorexia nervosa</h2>
      <p>Alguns dos sinais que podem indicar anorexia incluem:</p>
      <ul>
        <li>Perda significativa e rápida de peso</li>
        <li>Restrição alimentar severa</li>
        <li>Preocupação obsessiva com comida, receitas e calorias</li>
        <li>Exercício físico excessivo</li>
        <li>Distorção da imagem corporal</li>
        <li>Isolamento social, especialmente durante as refeições</li>
      </ul>
      <h2>Complicações e tratamento</h2>
      <p>A anorexia nervosa é um transtorno potencialmente fatal que pode causar:</p>
      <p>- Desnutrição severa</p>
      <p>- Problemas cardíacos</p>
      <p>- Desequilíbrios eletrolíticos</p>
      <p>- Osteoporose</p>
      <p>- Amenorreia (ausência de menstruação)</p>
      <p>O tratamento da anorexia nervosa requer uma abordagem multidisciplinar, incluindo nutricionistas, psiquiatras, psicólogos e médicos clínicos. No Instituto QE+, contamos com uma equipe especializada em transtornos alimentares, oferecendo um tratamento personalizado para cada paciente.</p>
    `
  },
  {
    id: 9,
    title: "Transtornos do Sono: como afetam a mente e o corpo?",
    slug: "transtornos-do-sono-como-afetam-a-mente-e-o-corpo",
    date: "28 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "Os transtornos do sono são um problema ...",
    content: `
      <h1>Transtornos do Sono: como afetam a mente e o corpo?</h1>
      <p>Os transtornos do sono são um problema de saúde frequentemente subestimado, mas que pode ter impactos profundos na saúde física e mental.</p>
      <p>O sono de qualidade é essencial para diversas funções biológicas, incluindo a consolidação da memória, regulação hormonal, recuperação muscular e fortalecimento do sistema imunológico.</p>
      <h2>Tipos comuns de transtornos do sono</h2>
      <p>Existem diversos tipos de transtornos do sono, incluindo:</p>
      <ul>
        <li>Insônia (dificuldade em adormecer ou manter o sono)</li>
        <li>Apneia do sono (pausas respiratórias durante o sono)</li>
        <li>Narcolepsia (sonolência excessiva durante o dia)</li>
        <li>Síndrome das Pernas Inquietas</li>
        <li>Parassonias (comportamentos anormais durante o sono, como sonambulismo)</li>
      </ul>
      <h2>Impactos na saúde física e mental</h2>
      <p>A privação crônica de sono está associada a:</p>
      <p>- Aumento do risco de doenças cardiovasculares</p>
      <p>- Maior susceptibilidade a infecções</p>
      <p>- Ganho de peso e diabetes tipo 2</p>
      <p>- Maior incidência de ansiedade e depressão</p>
      <p>- Comprometimento cognitivo e dificuldades de concentração</p>
      <p>No Instituto QE+, oferecemos avaliação e tratamento personalizado para transtornos do sono, com uma abordagem que integra intervenções medicamentosas, terapia cognitivo-comportamental para insônia e orientações sobre higiene do sono.</p>
    `
  },
  {
    id: 10,
    title: "TDAH em Adultos: sintomas, diagnóstico e tratamento",
    slug: "tdah-em-adultos-sintomas-diagnostico-e-tratamento",
    date: "25 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é frequentemente associado a crianças, mas...",
    content: `
      <h1>TDAH em Adultos: sintomas, diagnóstico e tratamento</h1>
      <p>O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é frequentemente associado a crianças, mas é uma condição neurodevelopmental que persiste até a idade adulta em aproximadamente 60% dos casos.</p>
      <p>Muitos adultos com TDAH não foram diagnosticados na infância e passaram a vida lidando com sintomas sem entender sua origem, frequentemente enfrentando dificuldades acadêmicas, profissionais e nos relacionamentos.</p>
      <h2>Como o TDAH se manifesta em adultos</h2>
      <p>Os sintomas em adultos podem diferir um pouco dos observados em crianças:</p>
      <ul>
        <li>Dificuldade em manter o foco em tarefas, especialmente as monótonas</li>
        <li>Procrastinação crônica</li>
        <li>Desorganização persistente</li>
        <li>Dificuldade em gerenciar o tempo e cumprir prazos</li>
        <li>Impulsividade em decisões financeiras ou pessoais</li>
        <li>Inquietação interna e sensação de estar "sempre ligado"</li>
      </ul>
      <h2>Diagnóstico e tratamento</h2>
      <p>O diagnóstico do TDAH em adultos envolve:</p>
      <p>- Avaliação detalhada da história de vida</p>
      <p>- Questionários específicos</p>
      <p>- Entrevistas clínicas</p>
      <p>- Exclusão de outras condições que podem mimetizar os sintomas</p>
      <p>O tratamento geralmente inclui uma combinação de medicamentos, terapia cognitivo-comportamental e estratégias de organização e gerenciamento de tempo.</p>
      <p>No Instituto QE+, contamos com profissionais especializados no diagnóstico e tratamento do TDAH em adultos, oferecendo uma abordagem personalizada que considera as características específicas de cada paciente.</p>
    `
  },
  {
    id: 11,
    title: "Depressão Pós-Parto: reconhecendo os sinais e buscando ajuda",
    slug: "depressao-pos-parto-reconhecendo-os-sinais",
    date: "22 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "A depressão pós-parto é uma condição que afeta cerca de 1 em cada 7 mulheres após o nascimento de um bebê...",
    content: `
      <h1>Depressão Pós-Parto: reconhecendo os sinais e buscando ajuda</h1>
      <p>A depressão pós-parto é uma condição que afeta cerca de 1 em cada 7 mulheres após o nascimento de um bebê. Vai além do "baby blues" (tristeza pós-parto) que afeta até 80% das novas mães e geralmente passa em algumas semanas.</p>
      <p>Apesar de ser comum, a depressão pós-parto ainda é cercada de estigma e muitas mulheres sofrem em silêncio por medo de julgamentos ou por não reconhecerem os sintomas.</p>
      <h2>Sinais e sintomas da depressão pós-parto</h2>
      <p>Alguns sinais que podem indicar depressão pós-parto incluem:</p>
      <ul>
        <li>Tristeza persistente ou choro frequente</li>
        <li>Perda de interesse em atividades antes prazerosas</li>
        <li>Sentimentos intensos de culpa ou inadequação como mãe</li>
        <li>Dificuldade em criar vínculo com o bebê</li>
        <li>Alterações significativas no apetite e sono</li>
        <li>Pensamentos recorrentes de morte ou suicídio</li>
      </ul>
      <h2>Fatores de risco e tratamento</h2>
      <p>Alguns fatores que podem aumentar o risco de depressão pós-parto incluem:</p>
      <p>- História prévia de depressão ou transtorno bipolar</p>
      <p>- Gravidez não planejada ou complicações na gravidez/parto</p>
      <p>- Falta de suporte social</p>
      <p>- Eventos estressantes recentes</p>
      <p>O tratamento geralmente envolve psicoterapia, medicamentos antidepressivos (alguns seguros durante a amamentação) e medidas de suporte social.</p>
      <p>No Instituto QE+, oferecemos um programa específico para saúde mental materna, com profissionais especializados em depressão pós-parto e outras condições relacionadas à maternidade.</p>
    `
  },
  {
    id: 12,
    title: "Terapia de Casal: quando e por que procurar",
    slug: "terapia-de-casal-quando-e-por-que-procurar",
    date: "19 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "Muitos casais buscam terapia apenas quando a relação já está severamente comprometida...",
    content: `
      <h1>Terapia de Casal: quando e por que procurar</h1>
      <p>Muitos casais buscam terapia apenas quando a relação já está severamente comprometida, mas a terapia de casal pode ser mais efetiva quando utilizada como uma ferramenta preventiva ou nos estágios iniciais dos problemas relacionais.</p>
      <p>A terapia de casal oferece um espaço seguro e neutro para que ambos os parceiros possam expressar seus sentimentos e necessidades, com a mediação de um profissional capacitado.</p>
      <h2>Sinais de que a terapia de casal pode ser benéfica</h2>
      <p>Alguns indicativos de que pode ser o momento de buscar ajuda profissional:</p>
      <ul>
        <li>Padrões repetitivos de discussões sem resolução</li>
        <li>Comunicação hostil ou ausência de comunicação</li>
        <li>Diminuição significativa da intimidade física e emocional</li>
        <li>Sentimentos de ressentimento persistentes</li>
        <li>Infidelidade ou quebra de confiança</li>
        <li>Grandes transições de vida afetando a dinâmica do casal</li>
      </ul>
      <h2>Benefícios da terapia de casal</h2>
      <p>A terapia pode ajudar casais a:</p>
      <p>- Melhorar padrões de comunicação</p>
      <p>- Resolver conflitos de forma construtiva</p>
      <p>- Reconstruir intimidade e confiança</p>
      <p>- Redefinir expectativas e acordos</p>
      <p>- Navegar por transições importantes na vida</p>
      <p>No Instituto QE+, nossa abordagem de terapia de casal é baseada em evidências científicas, integrando técnicas de diferentes escolas terapêuticas para atender às necessidades específicas de cada relação.</p>
    `
  },
  {
    id: 13,
    title: "Burnout: quando o trabalho adoece",
    slug: "burnout-quando-o-trabalho-adoece",
    date: "16 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "O burnout, ou síndrome de esgotamento profissional, é um estado de exaustão física e mental...",
    content: `
      <h1>Burnout: quando o trabalho adoece</h1>
      <p>O burnout, ou síndrome de esgotamento profissional, é um estado de exaustão física e mental causado por estresse crônico relacionado ao trabalho. Em 2019, a Organização Mundial de Saúde (OMS) reconheceu o burnout como um fenômeno ocupacional, destacando sua relevância como problema de saúde pública.</p>
      <p>Diferente do estresse comum, o burnout não desaparece após um período de descanso e pode levar a consequências graves para a saúde física e mental.</p>
      <h2>Principais sintomas do burnout</h2>
      <p>A síndrome se caracteriza por três dimensões principais:</p>
      <ul>
        <li>Exaustão: sensação de estar completamente drenado de energia</li>
        <li>Cinismo: sentimentos de distanciamento e negatividade em relação ao trabalho</li>
        <li>Ineficácia: sensação de incompetência e falta de realização profissional</li>
      </ul>
      <p>Outros sintomas podem incluir:</p>
      <ul>
        <li>Insônia e alterações no sono</li>
        <li>Dores de cabeça e tensão muscular frequentes</li>
        <li>Problemas digestivos</li>
        <li>Dificuldade de concentração</li>
        <li>Irritabilidade aumentada</li>
      </ul>
      <h2>Prevenção e tratamento</h2>
      <p>Algumas estratégias para prevenir e tratar o burnout:</p>
      <p>- Estabelecer limites claros entre trabalho e vida pessoal</p>
      <p>- Praticar técnicas de gerenciamento de estresse</p>
      <p>- Buscar apoio social</p>
      <p>- Considerar mudanças no ambiente de trabalho quando possível</p>
      <p>- Psicoterapia, especialmente a Terapia Cognitivo-Comportamental</p>
      <p>No Instituto QE+, oferecemos programas específicos para prevenção e tratamento do burnout, incluindo intervenções individuais e organizacionais.</p>
    `
  },
  {
    id: 14,
    title: "Esquizofrenia: desmistificando o transtorno",
    slug: "esquizofrenia-desmistificando-o-transtorno",
    date: "13 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "A esquizofrenia é um dos transtornos mentais mais incompreendidos e estigmatizados...",
    content: `
      <h1>Esquizofrenia: desmistificando o transtorno</h1>
      <p>A esquizofrenia é um dos transtornos mentais mais incompreendidos e estigmatizados, frequentemente retratada de forma sensacionalista e imprecisa na mídia e no imaginário popular.</p>
      <p>Contrariamente à crença popular, a esquizofrenia não está relacionada a personalidade múltipla (Transtorno Dissociativo de Identidade) e a maioria das pessoas com esquizofrenia não apresenta comportamento violento.</p>
      <h2>O que é esquizofrenia</h2>
      <p>A esquizofrenia é um transtorno mental grave que afeta aproximadamente 1% da população mundial. É caracterizada por:</p>
      <ul>
        <li>Sintomas positivos: alucinações, delírios, pensamento e discurso desorganizados</li>
        <li>Sintomas negativos: embotamento afetivo, avolição (falta de motivação), anedonia (incapacidade de sentir prazer)</li>
        <li>Sintomas cognitivos: problemas de atenção, memória e funções executivas</li>
      </ul>
      <h2>Causas e tratamentos</h2>
      <p>A esquizofrenia tem origem multifatorial, envolvendo:</p>
      <p>- Fatores genéticos</p>
      <p>- Alterações neuroquímicas</p>
      <p>- Complicações obstétricas</p>
      <p>- Uso de substâncias psicoativas</p>
      <p>- Estresse psicossocial</p>
      <p>O tratamento moderno da esquizofrenia é multimodal, incluindo medicamentos antipsicóticos, intervenções psicossociais, reabilitação cognitiva e suporte familiar.</p>
      <p>No Instituto QE+, oferecemos um programa abrangente para pessoas com esquizofrenia, focado não apenas no controle dos sintomas, mas na recuperação funcional e qualidade de vida.</p>
    `
  },
  {
    id: 15,
    title: "Borderline: entendendo o transtorno de personalidade limítrofe",
    slug: "borderline-entendendo-o-transtorno-de-personalidade-limitrofe",
    date: "10 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "O Transtorno de Personalidade Borderline (TPB) é caracterizado por um padrão persistente de instabilidade...",
    content: `
      <h1>Borderline: entendendo o transtorno de personalidade limítrofe</h1>
      <p>O Transtorno de Personalidade Borderline (TPB) é caracterizado por um padrão persistente de instabilidade nas relações interpessoais, na autoimagem e nos afetos, além de impulsividade acentuada.</p>
      <p>Pessoas com TPB frequentemente descrevem uma sensação crônica de vazio interior e lutam com medo intenso de abandono, o que pode levar a comportamentos impulsivos para evitar rejeições reais ou percebidas.</p>
      <h2>Principais características do Borderline</h2>
      <p>O transtorno se manifesta através de diversos sintomas, incluindo:</p>
      <ul>
        <li>Relações interpessoais intensas e instáveis ("amor e ódio")</li>
        <li>Esforços desesperados para evitar abandono</li>
        <li>Autoimagem instável</li>
        <li>Impulsividade em áreas potencialmente autodestrutivas</li>
        <li>Comportamentos suicidas recorrentes ou automutilação</li>
        <li>Instabilidade afetiva e reatividade do humor</li>
        <li>Sentimentos crônicos de vazio</li>
      </ul>
      <h2>Tratamentos eficazes</h2>
      <p>Diversos tratamentos têm demonstrado eficácia para o TPB:</p>
      <p>- Terapia Comportamental Dialética (DBT)</p>
      <p>- Terapia baseada na Mentalização (MBT)</p>
      <p>- Terapia Focada em Esquemas</p>
      <p>- Tratamento medicamentoso como adjuvante</p>
      <p>No Instituto QE+, oferecemos programas especializados para pessoas com Transtorno de Personalidade Borderline, incluindo terapia individual, grupos de habilidades e orientação familiar.</p>
    `
  },
  {
    id: 16,
    title: "Luto: o processo de elaboração das perdas",
    slug: "luto-o-processo-de-elaboracao-das-perdas",
    date: "7 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "O luto é uma resposta natural à perda de alguém ou algo significativo...",
    content: `
      <h1>Luto: o processo de elaboração das perdas</h1>
      <p>O luto é uma resposta natural à perda de alguém ou algo significativo em nossas vidas. Embora frequentemente associado à morte de um ente querido, o luto também pode ocorrer após outras perdas significativas, como divórcio, perda de emprego, mudança de cidade ou diagnóstico de uma doença grave.</p>
      <p>Contrariamente à crença popular, o luto não segue um processo linear de "fases" pelas quais todas as pessoas passam da mesma maneira. Cada experiência de luto é única e influenciada por diversos fatores culturais, sociais e pessoais.</p>
      <h2>Manifestações comuns do luto</h2>
      <p>O luto pode manifestar-se de diversas formas:</p>
      <ul>
        <li>Emocionalmente: tristeza, raiva, culpa, alívio, ansiedade</li>
        <li>Fisicamente: fadiga, alterações no apetite e sono, dores no corpo</li>
        <li>Cognitivamente: confusão, preocupação, alucinações sensoriais breves</li>
        <li>Comportamentalmente: choro, isolamento, busca pelo falecido</li>
      </ul>
      <h2>Elaboração do luto</h2>
      <p>A elaboração do luto pode ser facilitada por:</p>
      <p>- Expressão dos sentimentos relacionados à perda</p>
      <p>- Rituais de despedida significativos</p>
      <p>- Suporte social e compartilhamento da dor</p>
      <p>- Gradual retomada de atividades e construção de uma nova realidade</p>
      <p>- Encontrar significado e crescimento em meio à perda</p>
      <p>No Instituto QE+, oferecemos acompanhamento psicológico especializado para pessoas em processo de luto, seja individual ou em grupos de apoio, ajudando-as a encontrar caminhos saudáveis para elaborar suas perdas.</p>
    `
  },
  {
    id: 17,
    title: "Fobias Específicas: muito além do medo comum",
    slug: "fobias-especificas-muito-alem-do-medo-comum",
    date: "4 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "As fobias específicas são caracterizadas por um medo intenso e irracional...",
    content: `
      <h1>Fobias Específicas: muito além do medo comum</h1>
      <p>As fobias específicas são caracterizadas por um medo intenso e irracional de objetos, situações ou atividades específicas. Elas vão muito além de medos comuns, causando sofrimento significativo e interferindo no funcionamento diário da pessoa.</p>
      <p>Cerca de 12% da população experimenta alguma fobia específica ao longo da vida, tornando-as um dos transtornos de ansiedade mais comuns.</p>
      <h2>Tipos comuns de fobias específicas</h2>
      <p>As fobias são geralmente classificadas em categorias:</p>
      <ul>
        <li>Fobias de animais (aracnofobia, ofidiofobia)</li>
        <li>Fobias de ambiente natural (acrofobia, claustrofobia)</li>
        <li>Fobias de sangue-injeção-ferimento</li>
        <li>Fobias situacionais (aerofobia, amaxofobia)</li>
        <li>Outras fobias (misofobia, emetofobia)</li>
      </ul>
      <h2>Tratamento das fobias específicas</h2>
      <p>As fobias específicas são altamente tratáveis com as abordagens adequadas:</p>
      <p>- Terapia de Exposição: exposição gradual e controlada ao estímulo temido</p>
      <p>- Terapia Cognitivo-Comportamental: identificação e modificação de pensamentos distorcidos</p>
      <p>- Técnicas de relaxamento e manejo de ansiedade</p>
      <p>- Em alguns casos, medicações para reduzir a ansiedade durante o processo terapêutico</p>
      <p>No Instituto QE+, oferecemos tratamento especializado para fobias específicas com altas taxas de sucesso, utilizando protocolos baseados em evidências científicas e adaptados às necessidades individuais de cada paciente.</p>
    `
  },
  {
    id: 18,
    title: "Dependência de Jogos Eletrônicos: sinais de alerta e prevenção",
    slug: "dependencia-de-jogos-eletronicos-sinais-de-alerta",
    date: "1 de janeiro de 2025",
    image: "/lovable-uploads/60c25081-f1ef-4595-bf99-2ab2a0561342.png",
    excerpt: "Com o avanço da tecnologia e a popularização dos jogos online...",
    content: `
      <h1>Dependência de Jogos Eletrônicos: sinais de alerta e prevenção</h1>
      <p>Com o avanço da tecnologia e a popularização dos jogos online, a dependência de jogos eletrônicos tem se tornado uma preocupação crescente para profissionais de saúde mental e famílias.</p>
      <p>Em 2018, a Organização Mundial de Saúde incluiu o "Transtorno de Jogos" na Classificação Internacional de Doenças (CID-11), reconhecendo-o como uma condição de saúde mental que requer atenção profissional.</p>
      <h2>Sinais de alerta da dependência de jogos</h2>
      <p>Alguns sinais que podem indicar uma relação problemática com jogos eletrônicos:</p>
      <ul>
        <li>Perda de controle sobre o tempo gasto jogando</li>
        <li>Priorização dos jogos sobre outras atividades importantes</li>
        <li>Continuação ou escalada do comportamento apesar das consequências negativas</li>
        <li>Sintomas de abstinência quando impossibilitado de jogar</li>
        <li>Prejuízo significativo em áreas importantes da vida</li>
      </ul>
      <h2>Prevenção e tratamento</h2>
      <p>Algumas estratégias para prevenir e tratar a dependência de jogos:</p>
      <p>- Estabelecimento de limites claros de tempo para uso de jogos</p>
      <p>- Supervisão parental e uso de controles parentais</p>
      <p>- Promoção de atividades alternativas e socialização offline</p>
      <p>- Terapia Cognitivo-Comportamental para dependências comportamentais</p>
      <p>- Tratamento de condições subjacentes como depressão e ansiedade</p>
      <p>No Instituto QE+, oferecemos programas específicos para dependências comportamentais, incluindo a dependência de jogos eletrônicos, com uma abordagem que envolve tanto o indivíduo quanto sua família.</p>
    `
  }
];

export const getBlogPosts = (page: number = 1, postsPerPage: number = 9) => {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return {
    posts: blogPosts.slice(startIndex, endIndex),
    totalPages: Math.ceil(blogPosts.length / postsPerPage),
    currentPage: page
  };
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
