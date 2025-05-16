
import { BlogPost, WPPost } from "@/types/blogTypes";

// URL base da API do WordPress - substitua pelo seu domínio
export const WP_API_URL = 'https://qemais.com.br/wp-json/wp/v2';

// Função para formatar a data no estilo "5 de março de 2025"
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('pt-BR', options);
};

// Função para verificar se uma URL de imagem está acessível
export const validateImageUrl = (url: string): boolean => {
  // Se a URL começar com /images/ ou /lovable-uploads/, é uma imagem local e válida
  if (url.startsWith('/images/') || url.startsWith('/lovable-uploads/')) {
    return true;
  }
  
  // Caso seja uma URL externa, retornamos true (presume-se válida)
  // Em produção, poderia ter verificação adicional para validar URLs externas
  return true;
};

// Imagem padrão a ser usada quando não há imagem disponível
export const DEFAULT_BLOG_IMAGE = '/lovable-uploads/e76e4681-0b5e-4cf9-8472-d8fb2d43bf7b.png';

// Converter post do WordPress para o formato do nosso BlogPost
export const convertWpPostToBlogPost = (wpPost: WPPost): BlogPost => {
  // Tenta obter a URL da imagem do WordPress
  let imageUrl = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
  
  // Se não houver imagem ou a URL não for válida, use a imagem padrão
  if (!imageUrl || !validateImageUrl(imageUrl)) {
    imageUrl = DEFAULT_BLOG_IMAGE;
  }
  
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
