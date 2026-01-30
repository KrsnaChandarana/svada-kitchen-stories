import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { FloatingSpices } from '@/components/FloatingSpices';
import { ArrowRight, ChefHat, Clock, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';
import thaliImage from '@/assets/thali-illustration.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-overlay opacity-50" />
        <FloatingSpices />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>A Journey Through Indian Flavors</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Welcome to{' '}
                <span className="text-primary relative">
                  Śvāda
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-warm opacity-30 rounded-full" />
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience the magic of Indian cooking through interactive storytelling. 
                From ancient recipes to modern classics, embark on a culinary adventure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/recipes" className="btn-warm inline-flex items-center justify-center gap-2">
                  Explore Recipes
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn-outline-warm inline-flex items-center justify-center gap-2">
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Recipes</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Regions</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Interactive</div>
                </div>
              </div>
            </div>
            
            {/* Hero image */}
            <div className="relative animate-slide-up-delay-1">
              <div className="relative shape-blob overflow-hidden shadow-warm">
                <img
                  src={heroImage}
                  alt="Indian cooking illustration"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-warm rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-earth rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Śvāda?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More than recipes — an experience that transforms cooking into storytelling
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="recipe-card text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
                <ChefHat className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Step-by-Step Cooking
              </h3>
              <p className="text-muted-foreground">
                Interactive slides guide you through each step with beautiful animations and timers.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="recipe-card text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-earth rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Smart Timers
              </h3>
              <p className="text-muted-foreground">
                Automatic countdowns for timed steps ensure perfect results every time.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="recipe-card text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-sunset rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Cultural Stories
              </h3>
              <p className="text-muted-foreground">
                Discover the rich history and regional origins behind every dish you prepare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingSpices />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="shape-wave overflow-hidden shadow-card">
                <img
                  src={thaliImage}
                  alt="Indian thali"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                From Kitchen to <span className="text-primary">Culture</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every recipe in Śvāda tells a story. Learn about the Mughal origins of Biryani, 
                the street corners where Samosas were born, or the temple traditions behind 
                our sweetest desserts.
              </p>
              <ul className="space-y-4">
                {[
                  'Scale ingredients based on servings',
                  'Animated cooking instructions',
                  'Regional cuisine exploration',
                  'Mobile-friendly cooking mode',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground text-sm">
                      ✓
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/recipes" className="btn-warm inline-flex items-center gap-2 mt-4">
                Start Cooking
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore authentic Indian recipes, learn the stories behind each dish, 
            and transform your kitchen into a flavorful adventure.
          </p>
          <Link 
            to="/recipes" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold text-lg shadow-soft hover:scale-105 transition-transform"
          >
            Explore All Recipes
            <ArrowRight className="w-5 h-5" />
          </Link>
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

export default LandingPage;
