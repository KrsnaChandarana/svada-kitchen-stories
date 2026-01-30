import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { CookingMode } from '@/components/CookingMode';
import { recipes } from '@/data/recipes';
import { 
  Clock, 
  Users, 
  Timer,
  ChefHat, 
  MapPin, 
  ArrowLeft, 
  Minus, 
  Plus,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import all recipe images
import butterChicken from '@/assets/recipes/butter-chicken.jpg';
import biryani from '@/assets/recipes/biryani.jpg';
import samosa from '@/assets/recipes/samosa.jpg';
import dosa from '@/assets/recipes/dosa.jpg';
import gulabJamun from '@/assets/recipes/gulab-jamun.jpg';
import palakPaneer from '@/assets/recipes/palak-paneer.jpg';

const imageMap: Record<string, string> = {
  '/recipes/butter-chicken.jpg': butterChicken,
  '/recipes/biryani.jpg': biryani,
  '/recipes/samosa.jpg': samosa,
  '/recipes/dosa.jpg': dosa,
  '/recipes/gulab-jamun.jpg': gulabJamun,
  '/recipes/palak-paneer.jpg': palakPaneer,
};

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [servings, setServings] = useState(4);
  const [isCookingMode, setIsCookingMode] = useState(false);

  const recipe = useMemo(() => recipes.find(r => r.id === id), [id]);

  const scaleFactor = recipe ? servings / recipe.servings : 1;

  const scaledIngredients = useMemo(() => {
    if (!recipe) return [];
    return recipe.ingredients.map(ing => ({
      ...ing,
      quantity: ing.scalable ? Math.round(ing.quantity * scaleFactor * 10) / 10 : ing.quantity,
    }));
  }, [recipe, scaleFactor]);

  const difficultyColors: Record<string, string> = {
    easy: 'bg-olive-light text-foreground',
    medium: 'bg-amber text-foreground',
    hard: 'bg-terracotta text-primary-foreground',
  };

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Recipe Not Found
          </h1>
          <Link to="/recipes" className="btn-warm inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  if (isCookingMode) {
    return (
      <CookingMode 
        recipeName={recipe.name}
        steps={recipe.steps}
        onClose={() => setIsCookingMode(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[50vh] overflow-hidden">
          <img
            src={imageMap[recipe.image]}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-8">
          <Link 
            to="/recipes" 
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Recipes
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 relative z-10 -mt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Main card */}
          <div className="bg-card rounded-3xl shadow-card overflow-hidden">
            {/* Header */}
            <div className="p-8 border-b border-border">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground capitalize">
                  {recipe.category.replace('-', ' ')}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${difficultyColors[recipe.difficulty]}`}>
                  {recipe.difficulty}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary capitalize">
                  {recipe.region.replace('-', ' ')}
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                {recipe.name}
              </h1>
              
              {recipe.hindiName && (
                <p className="font-display text-2xl text-muted-foreground mb-4">
                  {recipe.hindiName}
                </p>
              )}
              
              <p className="text-lg text-muted-foreground">
                {recipe.description}
              </p>
              
              {/* Meta */}
              <div className="flex flex-wrap gap-6 mt-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Prep: {recipe.prepTime}m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-primary" />
                  <span>Cook: {recipe.cookTime}m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Serves: {recipe.servings}</span>
                </div>
              </div>
            </div>

            {/* History section */}
            <div className="p-8 bg-muted/30 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-earth flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Origin & History
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {recipe.history}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <MapPin className="w-4 h-4" />
                    <span>{recipe.origin}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Servings selector */}
            <div className="p-8 border-b border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Customize Servings
              </h2>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  disabled={servings <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-2 min-w-[120px] justify-center">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">{servings}</span>
                  <span className="text-muted-foreground">people</span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setServings(servings + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {scaleFactor !== 1 && (
                <p className="text-sm text-muted-foreground mt-2">
                  Ingredients scaled {scaleFactor > 1 ? 'up' : 'down'} from original {recipe.servings} servings
                </p>
              )}
            </div>

            {/* Ingredients */}
            <div className="p-8 border-b border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Ingredients
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {scaledIngredients.map((ing, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium text-foreground">
                      {ing.quantity} {ing.unit}
                    </span>
                    <span className="text-muted-foreground">{ing.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 text-center bg-gradient-cream">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Ready to Cook?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Enter our interactive cooking mode with step-by-step guidance and timers.
              </p>
              <Button
                size="lg"
                onClick={() => setIsCookingMode(true)}
                className="btn-warm text-lg px-12"
              >
                <ChefHat className="w-5 h-5 mr-2" />
                Start Cooking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍛</span>
              <span className="font-display text-xl font-bold text-primary">Śvāda</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Śvāda. Made with ❤️ for Indian cuisine lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetailPage;
