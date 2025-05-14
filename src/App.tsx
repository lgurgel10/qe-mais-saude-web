
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* These routes will be implemented in the future */}
          <Route path="/instituto" element={<NotFound />} />
          <Route path="/tratamentos" element={<NotFound />} />
          <Route path="/tratamentos/:type" element={<NotFound />} />
          <Route path="/especialidades" element={<NotFound />} />
          <Route path="/especialidades/:type" element={<NotFound />} />
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
