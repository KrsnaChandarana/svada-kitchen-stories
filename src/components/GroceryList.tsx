import { X, Trash2, Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useGrocery } from '@/contexts/GroceryContext';

interface GroceryListProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GroceryList = ({ isOpen, onClose }: GroceryListProps) => {
  const { items, toggleItem, clearAll, removeRecipeIngredients } = useGrocery();

  // Group items by recipe
  const groupedItems = items.reduce((acc, item, index) => {
    if (!acc[item.recipeId]) {
      acc[item.recipeId] = { recipeName: item.recipeName, items: [] };
    }
    acc[item.recipeId].items.push({ ...item, originalIndex: index });
    return acc;
  }, {} as Record<string, { recipeName: string; items: (typeof items[0] & { originalIndex: number })[] }>);

  const checkedCount = items.filter(i => i.checked).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card shadow-xl border-l border-border flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Grocery List</h2>
              <p className="text-sm text-muted-foreground">
                {items.length} items • {checkedCount} checked
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close grocery list"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <ScrollArea className="flex-1 p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                Your list is empty
              </h3>
              <p className="text-muted-foreground text-sm">
                Add ingredients from any recipe to start your shopping list
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([recipeId, { recipeName, items: recipeItems }]) => (
                <div key={recipeId} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-foreground">{recipeName}</h3>
                    <button
                      onClick={() => removeRecipeIngredients(recipeId)}
                      className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                  <div className="space-y-1">
                    {recipeItems.map((item) => (
                      <button
                        key={item.originalIndex}
                        onClick={() => toggleItem(item.originalIndex)}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${
                          item.checked 
                            ? 'bg-muted/50 text-muted-foreground' 
                            : 'hover:bg-muted/30'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          item.checked 
                            ? 'bg-primary border-primary' 
                            : 'border-border'
                        }`}>
                          {item.checked && <Check className="w-3 h-3 text-primary-foreground" />}
                        </div>
                        <span className={`flex-1 text-sm ${item.checked ? 'line-through' : ''}`}>
                          {item.quantity} {item.unit} {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border">
            <Button
              variant="outline"
              onClick={clearAll}
              className="w-full gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
