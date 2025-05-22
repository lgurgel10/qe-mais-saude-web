import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Instituto from "./pages/Instituto";
import NotFound from "./pages/NotFound";
import SpecialtyPageTemplate from "./components/templates/SpecialtyPageTemplate";
import TreatmentPageTemplate from "./components/templates/TreatmentPageTemplate";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PersistentContactBar from "./components/PersistentContactBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Instituto route */}
              <Route path="/instituto" element={<Instituto />} />
              
              {/* Tratamentos routes */}
              <Route path="/tratamentos" element={<NotFound />} />
              <Route path="/tratamentos/:type" element={<TreatmentPageTemplate />} />
              
              {/* Especialidades routes */}
              <Route path="/especialidades" element={<NotFound />} />
              <Route path="/especialidades/:type" element={<SpecialtyPageTemplate />} />
              
              {/* Blog routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/page/:page" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Other routes - to be implemented */}
              <Route path="/estrutura" element={<NotFound />} />
              <Route path="/contato" element={<NotFound />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <PersistentContactBar />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
