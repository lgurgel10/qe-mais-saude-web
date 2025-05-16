
import { BlogPost, BlogPaginationResult, WPPost } from "@/types/blogTypes";
import { WP_API_URL, convertWpPostToBlogPost } from "@/utils/blogUtils";
import { blogPosts } from "@/data/mockBlogData";

// Função para buscar posts do WordPress
export const fetchBlogPosts = async (page: number = 1, postsPerPage: number = 9): Promise<BlogPaginationResult> => {
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

// Funções para fallback com dados locais
export const getBlogPosts = (page: number = 1, postsPerPage: number = 9): BlogPaginationResult => {
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
