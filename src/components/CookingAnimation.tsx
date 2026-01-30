interface CookingAnimationProps {
  type: 'boiling' | 'frying' | 'stirring' | 'chopping' | 'resting' | 'mixing' | 'serving';
}

export const CookingAnimation = ({ type }: CookingAnimationProps) => {
  const animations: Record<string, React.ReactNode> = {
    boiling: (
      <div className="relative w-48 h-48">
        {/* Pot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-24 bg-gradient-to-b from-amber to-terracotta rounded-b-3xl rounded-t-lg shadow-lg">
          {/* Liquid */}
          <div className="absolute inset-x-2 top-2 bottom-8 bg-gradient-to-b from-saffron/80 to-saffron rounded-lg">
            {/* Bubbles */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-cream/60 rounded-full animate-bubble"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '10px',
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>
        {/* Steam */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-24 w-6 h-16 opacity-40 animate-steam"
            style={{
              left: `${35 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              background: 'linear-gradient(to top, hsl(var(--cream)), transparent)',
              borderRadius: '50%',
            }}
          />
        ))}
        {/* Flame */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-6 bg-gradient-to-t from-terracotta via-amber to-golden rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    ),
    frying: (
      <div className="relative w-48 h-48">
        {/* Pan */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-36 h-8 bg-gradient-to-r from-brown to-brown-deep rounded-full shadow-lg">
          {/* Oil sizzle */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-golden rounded-full animate-bubble"
              style={{
                left: `${10 + i * 15}%`,
                top: '-4px',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '0.5s',
              }}
            />
          ))}
        </div>
        {/* Handle */}
        <div className="absolute bottom-10 right-2 w-16 h-4 bg-brown-deep rounded-full transform rotate-12" />
        {/* Smoke wisps */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-16 w-4 h-12 opacity-30 animate-steam"
            style={{
              left: `${25 + i * 15}%`,
              animationDelay: `${i * 0.3}s`,
              background: 'linear-gradient(to top, hsl(var(--muted)), transparent)',
              borderRadius: '50%',
            }}
          />
        ))}
      </div>
    ),
    stirring: (
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Bowl */}
        <div className="relative w-32 h-24 bg-gradient-to-b from-amber to-terracotta rounded-b-full rounded-t-3xl shadow-lg">
          {/* Contents */}
          <div className="absolute inset-x-3 top-6 bottom-4 bg-gradient-to-br from-saffron to-olive rounded-full" />
          {/* Ladle */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-20 bg-brown-deep rounded-full origin-bottom animate-stir"
            style={{ transformOrigin: '50% 100%', animation: 'stir 2s ease-in-out infinite' }}
          >
            <div className="absolute bottom-0 w-8 h-6 -left-2.5 bg-brown-deep rounded-full" />
          </div>
        </div>
      </div>
    ),
    chopping: (
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Cutting board */}
        <div className="absolute bottom-8 w-40 h-8 bg-gradient-to-r from-amber to-saffron-light rounded-lg shadow-lg" />
        {/* Vegetables */}
        <div className="absolute bottom-12 left-12 flex gap-2">
          {['🧅', '🥕', '🌶️', '🧄'].map((veg, i) => (
            <span key={i} className="text-2xl" style={{ animationDelay: `${i * 0.2}s` }}>
              {veg}
            </span>
          ))}
        </div>
        {/* Knife */}
        <div className="absolute bottom-14 right-8 text-3xl animate-bounce">🔪</div>
      </div>
    ),
    resting: (
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Bowl with cloth */}
        <div className="relative">
          <div className="w-28 h-20 bg-gradient-to-b from-cream to-cream-light rounded-b-full rounded-t-xl shadow-lg" />
          <div className="absolute -top-2 -inset-x-2 h-8 bg-gradient-to-r from-terracotta/80 to-terracotta rounded-lg" />
          {/* Zzz */}
          <div className="absolute -top-8 -right-4 text-2xl animate-pulse">💤</div>
        </div>
      </div>
    ),
    mixing: (
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Bowl */}
        <div className="relative w-32 h-24 bg-gradient-to-b from-olive-light to-olive rounded-b-full rounded-t-3xl shadow-lg">
          {/* Swirl */}
          <div className="absolute inset-4 rounded-full border-4 border-cream border-dashed animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        {/* Floating ingredients */}
        {['🌿', '🧂', '🫚'].map((item, i) => (
          <span
            key={i}
            className="absolute text-xl animate-float"
            style={{
              top: `${20 + i * 20}%`,
              left: `${60 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    ),
    serving: (
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Plate */}
        <div className="relative">
          <div className="w-36 h-36 bg-gradient-to-br from-cream-light to-cream rounded-full shadow-lg border-4 border-golden/30" />
          <div className="absolute inset-8 bg-gradient-to-br from-saffron to-terracotta rounded-full" />
          {/* Garnish */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">🍃</span>
          {/* Sparkles */}
          {['✨', '⭐', '✨'].map((star, i) => (
            <span
              key={i}
              className="absolute text-lg animate-pulse"
              style={{
                top: `${10 + i * 30}%`,
                left: `${i % 2 === 0 ? 0 : 85}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {star}
            </span>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="flex items-center justify-center p-8">
      {animations[type]}
    </div>
  );
};
