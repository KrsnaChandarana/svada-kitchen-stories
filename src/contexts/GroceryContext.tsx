import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Ingredient } from '@/data/recipes';

export interface GroceryItem extends Ingredient {
  recipeId: string;
  recipeName: string;
  checked: boolean;
}

interface GroceryContextType {
  items: GroceryItem[];
  addIngredients: (recipeId: string, recipeName: string, ingredients: Ingredient[]) => void;
  removeRecipeIngredients: (recipeId: string) => void;
  toggleItem: (index: number) => void;
  clearAll: () => void;
  hasRecipe: (recipeId: string) => boolean;
}

const GroceryContext = createContext<GroceryContextType | undefined>(undefined);

export const GroceryProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<GroceryItem[]>([]);

  const addIngredients = useCallback((recipeId: string, recipeName: string, ingredients: Ingredient[]) => {
    setItems(prev => {
      // Remove existing items from same recipe first
      const filtered = prev.filter(item => item.recipeId !== recipeId);
      const newItems = ingredients.map(ing => ({
        ...ing,
        recipeId,
        recipeName,
        checked: false,
      }));
      return [...filtered, ...newItems];
    });
  }, []);

  const removeRecipeIngredients = useCallback((recipeId: string) => {
    setItems(prev => prev.filter(item => item.recipeId !== recipeId));
  }, []);

  const toggleItem = useCallback((index: number) => {
    setItems(prev => prev.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    ));
  }, []);

  const clearAll = useCallback(() => {
    setItems([]);
  }, []);

  const hasRecipe = useCallback((recipeId: string) => {
    return items.some(item => item.recipeId === recipeId);
  }, [items]);

  return (
    <GroceryContext.Provider value={{ items, addIngredients, removeRecipeIngredients, toggleItem, clearAll, hasRecipe }}>
      {children}
    </GroceryContext.Provider>
  );
};

export const useGrocery = () => {
  const context = useContext(GroceryContext);
  if (!context) {
    throw new Error('useGrocery must be used within a GroceryProvider');
  }
  return context;
};
