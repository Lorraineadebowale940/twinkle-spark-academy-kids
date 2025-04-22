import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Art from "./pages/services/Art";
import MusicPage from "./pages/services/Music";
import DramaPage from "./pages/services/Drama";
import DancePage from "./pages/services/Dance";
import FilmPage from "./pages/services/Film";
import NLPPage from "./pages/services/NLP";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/art" element={<Art />} />
          <Route path="/services/music" element={<MusicPage />} />
          <Route path="/services/drama" element={<DramaPage />} />
          <Route path="/services/dance" element={<DancePage />} />
          <Route path="/services/film" element={<FilmPage />} />
          <Route path="/services/nlp" element={<NLPPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
