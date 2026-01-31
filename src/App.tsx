import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GroceryProvider } from "@/contexts/GroceryContext";
import { GroceryList } from "@/components/GroceryList";
import { ShoppingCart } from "lucide-react";
import { useGrocery } from "@/contexts/GroceryContext";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const GroceryFab = ({ onClick }: { onClick: () => void }) => {
  const { items } = useGrocery();
  const count = items.length;
  
  if (count === 0) return null;
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
      aria-label="Open grocery list"
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-terracotta text-white text-xs font-bold flex items-center justify-center">
        {count > 99 ? '99+' : count}
      </span>
    </button>
  );
};

const AppContent = () => {
  const [isGroceryOpen, setIsGroceryOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GroceryFab onClick={() => setIsGroceryOpen(true)} />
      <GroceryList isOpen={isGroceryOpen} onClose={() => setIsGroceryOpen(false)} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GroceryProvider>
          <AppContent />
        </GroceryProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
