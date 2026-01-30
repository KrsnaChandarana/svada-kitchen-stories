import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl">🍛</span>
            <span className="font-display text-2xl font-bold text-primary group-hover:text-amber transition-colors">
              Śvāda
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className={`font-medium transition-colors ${
                isActive('/recipes') 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Recipes
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
