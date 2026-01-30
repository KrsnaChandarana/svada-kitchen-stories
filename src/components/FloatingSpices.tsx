import { useEffect, useState } from 'react';

interface Spice {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export const FloatingSpices = () => {
  const [spices, setSpices] = useState<Spice[]>([]);
  
  const spiceEmojis = ['🌶️', '🧄', '🫚', '🌿', '🍃', '⭐', '🌰', '🫛'];

  useEffect(() => {
    const generated: Spice[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: spiceEmojis[i % spiceEmojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
      size: 20 + Math.random() * 20,
    }));
    setSpices(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {spices.map((spice) => (
        <div
          key={spice.id}
          className="absolute animate-float opacity-40"
          style={{
            left: `${spice.left}%`,
            top: `${20 + Math.random() * 60}%`,
            fontSize: `${spice.size}px`,
            animationDelay: `${spice.delay}s`,
            animationDuration: `${spice.duration}s`,
          }}
        >
          {spice.emoji}
        </div>
      ))}
    </div>
  );
};
