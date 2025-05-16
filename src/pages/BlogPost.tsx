
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { fetchBlogBySlug, getBlogBySlug, BlogPost as BlogPostType } from "@/data/blogData";
import { useToast } from "@/components/ui/use-toast";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null | undefined>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const loadPost = async () => {
      if (!slug) {
        navigate("/blog");
        return;
      }
      
      setLoading(true);
      try {
        // Tenta buscar o post da API
        const fetchedPost = await fetchBlogBySlug(slug);
        
        if (fetchedPost) {
          setPost(fetchedPost);
          document.title = `${fetchedPost.title} | QE+ Blog`;
        } else {
          // Se não encontrou na API, tenta buscar localmente
          const localPost = getBlogBySlug(slug);
          
          if (localPost) {
            setPost(localPost);
            document.title = `${localPost.title} | QE+ Blog`;
          } else {
            // Se não encontrou em lugar nenhum, redireciona
            toast({
              title: "Post não encontrado",
              description: "O post que você está procurando não foi encontrado.",
              variant: "destructive"
            });
            navigate("/blog");
          }
        }
      } catch (error) {
        console.error("Erro ao carregar post:", error);
        
        // Tenta buscar localmente como fallback
        const localPost = getBlogBySlug(slug);
        
        if (localPost) {
          setPost(localPost);
          document.title = `${localPost.title} | QE+ Blog`;
        } else {
          toast({
            title: "Erro ao carregar post",
            description: "Ocorreu um erro ao carregar o post.",
            variant: "destructive"
          });
          navigate("/blog");
        }
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [slug, navigate, toast]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="w-full">
          <Navbar />
        </header>
        
        <main className="flex-grow pt-24 pb-12 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-4xl mt-8">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-4 max-w-md"></div>
              
              <div className="flex items-center mb-6">
                <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
              
              <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
              
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Navbar />
      </header>
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl mt-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-gray-600 hover:text-qegold transition-colors">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog" className="text-gray-600 hover:text-qegold transition-colors">
                    Blog
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-qegold">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-6 text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{post.date}</span>
            </div>
            
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto rounded-lg object-cover max-h-96"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-gray-800 prose-h2:text-2xl prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-qegold hover:text-qegold-dark transition-colors"
              >
                ← Voltar para o Blog
              </Link>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
