import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { fetchBlogPosts, getBlogPosts } from "@/data/blogData";
import { useToast } from "@/components/ui/use-toast";
import { BlogPost, BlogPaginationResult } from "@/types/blogTypes";

const Blog = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = page ? parseInt(page) : 1;
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState<BlogPaginationResult>({
    posts: [],
    totalPages: 1,
    currentPage: 1
  });
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "Blog | QE+ Instituto de Saúde Mental";
    
    // Fetch posts from WordPress API
    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogPosts(currentPage);
        setBlogData(data);
      } catch (error) {
        console.error("Erro ao carregar posts do blog:", error);
        toast({
          title: "Erro ao carregar posts",
          description: "Não foi possível carregar os posts do blog. Usando dados locais.",
          variant: "destructive"
        });
        // Fallback para dados locais
        setBlogData(getBlogPosts(currentPage));
      } finally {
        setLoading(false);
      }
    };
    
    loadPosts();
  }, [currentPage, toast]);
  
  const renderPagination = () => {
    const { totalPages, currentPage } = blogData;
    
    return (
      <Pagination className="my-8">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/blog/page/${currentPage - 1}`);
                }} 
              />
            </PaginationItem>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => {
            // Show current page, first, last and pages adjacent to current
            const isDisplayed = 
              pageNum === 1 || 
              pageNum === totalPages || 
              Math.abs(pageNum - currentPage) <= 1;
            
            if (!isDisplayed) {
              // Show ellipsis if this number is between displayed pages
              if ((pageNum === 2 && currentPage > 3) || 
                  (pageNum === totalPages - 1 && currentPage < totalPages - 2)) {
                return (
                  <PaginationItem key={`ellipsis-${pageNum}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              return null;
            }
            
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(pageNum === 1 ? '/blog' : `/blog/page/${pageNum}`);
                  }}
                  isActive={pageNum === currentPage}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/blog/page/${currentPage + 1}`);
                }}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Navbar />
      </header>
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-playfair mb-12">
            Blog
          </h1>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-5 bg-qebeige">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-3 w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.posts.map((post) => (
                <Link 
                  to={`/blog/${post.slug}`} 
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 bg-qebeige">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-qegold transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center mb-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <p className="text-gray-700 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {!loading && renderPagination()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
