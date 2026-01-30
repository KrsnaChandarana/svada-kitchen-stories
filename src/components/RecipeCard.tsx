import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import type { Recipe } from '@/data/recipes';

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

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const difficultyColors = {
    easy: 'bg-olive-light text-foreground',
    medium: 'bg-amber text-foreground',
    hard: 'bg-terracotta text-primary-foreground',
  };

  return (
    <Link to={`/recipe/${recipe.id}`} className="block group">
      <article className="recipe-card h-full flex flex-col">
        {/* Image */}
        <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
          <div className="aspect-square overflow-hidden">
            <img
              src={imageMap[recipe.image]}
              alt={recipe.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-background/90 backdrop-blur-sm text-foreground">
              {recipe.category.replace('-', ' ')}
            </span>
          </div>
          
          {/* Difficulty badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${difficultyColors[recipe.difficulty]}`}>
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {recipe.name}
          </h3>
          
          {recipe.hindiName && (
            <p className="text-sm text-muted-foreground mb-2 font-display">
              {recipe.hindiName}
            </p>
          )}
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {recipe.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.prepTime + recipe.cookTime}m</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span className="capitalize">{recipe.region.replace('-', ' ')}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
