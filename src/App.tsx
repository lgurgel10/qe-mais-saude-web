
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          
          {/* Other routes - to be implemented */}
          <Route path="/estrutura" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/contato" element={<NotFound />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
