export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  scalable: boolean;
}

export interface CookingStep {
  id: number;
  title: string;
  instruction: string;
  duration?: number; // in seconds
  animation: 'boiling' | 'frying' | 'stirring' | 'chopping' | 'resting' | 'mixing' | 'serving';
}

export interface Recipe {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  image: string;
  category: 'breakfast' | 'main-course' | 'snacks' | 'sweets' | 'street-food';
  region: 'north-indian' | 'south-indian' | 'mughlai' | 'gujarati' | 'bengali' | 'pan-indian';
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  history: string;
  origin: string;
  ingredients: Ingredient[];
  steps: CookingStep[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    hindiName: 'मुर्ग मखनी',
    description: 'Creamy, rich tomato-based curry with tender chicken pieces, a beloved North Indian classic.',
    image: '/recipes/butter-chicken.jpg',
    category: 'main-course',
    region: 'north-indian',
    prepTime: 30,
    cookTime: 40,
    servings: 4,
    difficulty: 'medium',
    history: 'Born in the 1950s at Delhi\'s Moti Mahal restaurant, Butter Chicken was created by Kundan Lal Gujral who mixed leftover tandoori chicken with a rich tomato gravy enriched with butter and cream.',
    origin: 'Delhi, India',
    ingredients: [
      { name: 'Chicken thighs', quantity: 500, unit: 'g', scalable: true },
      { name: 'Butter', quantity: 50, unit: 'g', scalable: true },
      { name: 'Heavy cream', quantity: 200, unit: 'ml', scalable: true },
      { name: 'Tomato puree', quantity: 400, unit: 'g', scalable: true },
      { name: 'Onion (chopped)', quantity: 2, unit: 'medium', scalable: true },
      { name: 'Garlic cloves', quantity: 6, unit: 'cloves', scalable: true },
      { name: 'Ginger', quantity: 2, unit: 'inch', scalable: true },
      { name: 'Garam masala', quantity: 2, unit: 'tsp', scalable: true },
      { name: 'Kashmiri red chili', quantity: 1, unit: 'tsp', scalable: true },
      { name: 'Kasuri methi', quantity: 1, unit: 'tbsp', scalable: false },
      { name: 'Salt', quantity: 1, unit: 'to taste', scalable: false },
    ],
    steps: [
      {
        id: 1,
        title: 'Marinate the Chicken',
        instruction: 'Mix chicken with yogurt, ginger-garlic paste, and spices. Let it marinate for at least 2 hours or overnight for best results.',
        duration: 120,
        animation: 'mixing',
      },
      {
        id: 2,
        title: 'Prepare the Base',
        instruction: 'Melt butter in a heavy pan. Add onions and sauté until golden brown. The caramelization brings out the sweetness.',
        duration: 300,
        animation: 'frying',
      },
      {
        id: 3,
        title: 'Add Aromatics',
        instruction: 'Add ginger-garlic paste and cook until the raw smell disappears. This is the foundation of your curry.',
        duration: 120,
        animation: 'stirring',
      },
      {
        id: 4,
        title: 'Build the Gravy',
        instruction: 'Add tomato puree and spices. Cook on medium heat until oil separates from the masala.',
        duration: 600,
        animation: 'boiling',
      },
      {
        id: 5,
        title: 'Cook the Chicken',
        instruction: 'Add marinated chicken pieces and cook until fully done, stirring occasionally.',
        duration: 900,
        animation: 'stirring',
      },
      {
        id: 6,
        title: 'Finish with Cream',
        instruction: 'Pour in heavy cream and kasuri methi. Simmer for a few minutes. Taste and adjust seasoning.',
        duration: 180,
        animation: 'stirring',
      },
      {
        id: 7,
        title: 'Serve Hot',
        instruction: 'Garnish with a swirl of cream and fresh coriander. Best enjoyed with naan or basmati rice.',
        animation: 'serving',
      },
    ],
    tags: ['creamy', 'rich', 'chicken', 'curry', 'popular'],
  },
  {
    id: 'biryani',
    name: 'Hyderabadi Biryani',
    hindiName: 'हैदराबादी बिरयानी',
    description: 'Aromatic layered rice dish with spiced meat, saffron, and caramelized onions — the crown jewel of Indian cuisine.',
    image: '/recipes/biryani.jpg',
    category: 'main-course',
    region: 'mughlai',
    prepTime: 45,
    cookTime: 60,
    servings: 6,
    difficulty: 'hard',
    history: 'Tracing back to the Mughal era, Biryani evolved in the royal kitchens of Hyderabad. The Nizams\' chefs perfected the dum cooking technique, creating a dish that became a symbol of celebration.',
    origin: 'Hyderabad, Telangana',
    ingredients: [
      { name: 'Basmati rice', quantity: 500, unit: 'g', scalable: true },
      { name: 'Lamb or chicken', quantity: 750, unit: 'g', scalable: true },
      { name: 'Onions (sliced)', quantity: 4, unit: 'large', scalable: true },
      { name: 'Yogurt', quantity: 200, unit: 'ml', scalable: true },
      { name: 'Saffron strands', quantity: 1, unit: 'pinch', scalable: false },
      { name: 'Warm milk', quantity: 100, unit: 'ml', scalable: true },
      { name: 'Ghee', quantity: 100, unit: 'g', scalable: true },
      { name: 'Biryani masala', quantity: 3, unit: 'tbsp', scalable: true },
      { name: 'Green chilies', quantity: 4, unit: 'pieces', scalable: true },
      { name: 'Mint leaves', quantity: 1, unit: 'cup', scalable: true },
      { name: 'Coriander leaves', quantity: 1, unit: 'cup', scalable: true },
    ],
    steps: [
      {
        id: 1,
        title: 'Soak the Rice',
        instruction: 'Wash basmati rice thoroughly and soak in water for 30 minutes. This ensures long, fluffy grains.',
        duration: 1800,
        animation: 'resting',
      },
      {
        id: 2,
        title: 'Fry the Onions',
        instruction: 'Slice onions thin and deep fry until golden brown and crispy. These birista add flavor and texture.',
        duration: 600,
        animation: 'frying',
      },
      {
        id: 3,
        title: 'Marinate the Meat',
        instruction: 'Mix meat with yogurt, half the fried onions, spices, mint, and coriander. Marinate for at least 1 hour.',
        duration: 3600,
        animation: 'mixing',
      },
      {
        id: 4,
        title: 'Parboil the Rice',
        instruction: 'Boil water with whole spices. Add soaked rice and cook until 70% done. Drain immediately.',
        duration: 480,
        animation: 'boiling',
      },
      {
        id: 5,
        title: 'Layer the Biryani',
        instruction: 'In a heavy pot, layer marinated meat at bottom, then rice. Add saffron milk, ghee, and remaining onions on top.',
        animation: 'mixing',
      },
      {
        id: 6,
        title: 'Dum Cooking',
        instruction: 'Seal the pot with dough or tight lid. Cook on very low heat for 45 minutes. Don\'t open during cooking!',
        duration: 2700,
        animation: 'boiling',
      },
      {
        id: 7,
        title: 'Rest and Serve',
        instruction: 'Let it rest for 5 minutes. Gently mix layers and serve with raita and mirchi ka salan.',
        duration: 300,
        animation: 'serving',
      },
    ],
    tags: ['rice', 'festive', 'aromatic', 'royal', 'celebration'],
  },
  {
    id: 'samosa',
    name: 'Punjabi Samosa',
    hindiName: 'समोसा',
    description: 'Crispy golden triangular pastries filled with spiced potatoes and peas — India\'s favorite street snack.',
    image: '/recipes/samosa.jpg',
    category: 'street-food',
    region: 'north-indian',
    prepTime: 40,
    cookTime: 30,
    servings: 12,
    difficulty: 'medium',
    history: 'Originally from Central Asia, samosas traveled to India via traders. The Indian version evolved to include local spices and the iconic potato filling, becoming a beloved chai-time companion.',
    origin: 'Punjab, India',
    ingredients: [
      { name: 'All-purpose flour', quantity: 2, unit: 'cups', scalable: true },
      { name: 'Potatoes (boiled)', quantity: 4, unit: 'medium', scalable: true },
      { name: 'Green peas', quantity: 0.5, unit: 'cup', scalable: true },
      { name: 'Cumin seeds', quantity: 1, unit: 'tsp', scalable: true },
      { name: 'Green chilies', quantity: 2, unit: 'pieces', scalable: true },
      { name: 'Garam masala', quantity: 1, unit: 'tsp', scalable: true },
      { name: 'Amchur powder', quantity: 1, unit: 'tsp', scalable: true },
      { name: 'Oil for frying', quantity: 500, unit: 'ml', scalable: false },
      { name: 'Coriander leaves', quantity: 2, unit: 'tbsp', scalable: true },
    ],
    steps: [
      {
        id: 1,
        title: 'Make the Dough',
        instruction: 'Mix flour with oil and salt. Add water gradually to make a stiff dough. Rest for 30 minutes.',
        duration: 1800,
        animation: 'mixing',
      },
      {
        id: 2,
        title: 'Prepare the Filling',
        instruction: 'Heat oil, add cumin. Add mashed potatoes, peas, and all spices. Cook until well combined.',
        duration: 300,
        animation: 'frying',
      },
      {
        id: 3,
        title: 'Shape the Samosas',
        instruction: 'Roll dough into ovals, cut in half. Form cones, fill with potato mixture, and seal edges with water.',
        animation: 'mixing',
      },
      {
        id: 4,
        title: 'Deep Fry',
        instruction: 'Heat oil to 160°C. Fry samosas on low-medium heat until golden brown and crispy. Drain on paper towels.',
        duration: 480,
        animation: 'frying',
      },
      {
        id: 5,
        title: 'Serve Hot',
        instruction: 'Serve immediately with mint chutney and tamarind chutney. Perfect with a cup of masala chai!',
        animation: 'serving',
      },
    ],
    tags: ['crispy', 'snack', 'vegetarian', 'street-food', 'tea-time'],
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    hindiName: 'मसाला डोसा',
    description: 'Crispy fermented rice crepe filled with spiced potato masala — a South Indian breakfast masterpiece.',
    image: '/recipes/dosa.jpg',
    category: 'breakfast',
    region: 'south-indian',
    prepTime: 480,
    cookTime: 30,
    servings: 8,
    difficulty: 'medium',
    history: 'Dosa finds mention in Tamil Sangam literature from the 1st century AD. The fermented batter technique reflects the scientific ingenuity of South Indian cuisine.',
    origin: 'Karnataka & Tamil Nadu',
    ingredients: [
      { name: 'Rice', quantity: 3, unit: 'cups', scalable: true },
      { name: 'Urad dal', quantity: 1, unit: 'cup', scalable: true },
      { name: 'Fenugreek seeds', quantity: 0.5, unit: 'tsp', scalable: false },
      { name: 'Potatoes (boiled)', quantity: 4, unit: 'medium', scalable: true },
      { name: 'Onions', quantity: 2, unit: 'medium', scalable: true },
      { name: 'Mustard seeds', quantity: 1, unit: 'tsp', scalable: true },
      { name: 'Curry leaves', quantity: 10, unit: 'leaves', scalable: true },
      { name: 'Turmeric powder', quantity: 0.5, unit: 'tsp', scalable: true },
      { name: 'Green chilies', quantity: 3, unit: 'pieces', scalable: true },
    ],
    steps: [
      {
        id: 1,
        title: 'Soak Rice and Dal',
        instruction: 'Soak rice and urad dal separately for 4-6 hours. Add fenugreek to the dal.',
        duration: 21600,
        animation: 'resting',
      },
      {
        id: 2,
        title: 'Grind the Batter',
        instruction: 'Grind urad dal to a fluffy paste. Grind rice separately. Mix both with salt.',
        animation: 'mixing',
      },
      {
        id: 3,
        title: 'Ferment Overnight',
        instruction: 'Let the batter ferment in a warm place for 8-12 hours until doubled and slightly sour.',
        duration: 43200,
        animation: 'resting',
      },
      {
        id: 4,
        title: 'Make Potato Masala',
        instruction: 'Temper mustard seeds and curry leaves. Add onions, turmeric, and mashed potatoes. Season well.',
        duration: 300,
        animation: 'frying',
      },
      {
        id: 5,
        title: 'Spread the Dosa',
        instruction: 'Heat a tawa. Pour batter and spread in circular motion from center outward. Drizzle oil on edges.',
        duration: 120,
        animation: 'frying',
      },
      {
        id: 6,
        title: 'Fill and Fold',
        instruction: 'When golden and crispy, add potato filling in center. Fold dosa and serve immediately.',
        animation: 'serving',
      },
    ],
    tags: ['fermented', 'crispy', 'vegetarian', 'breakfast', 'healthy'],
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    hindiName: 'गुलाब जामुन',
    description: 'Soft, melt-in-mouth milk dumplings soaked in rose-scented sugar syrup — the king of Indian desserts.',
    image: '/recipes/gulab-jamun.jpg',
    category: 'sweets',
    region: 'pan-indian',
    prepTime: 20,
    cookTime: 40,
    servings: 20,
    difficulty: 'medium',
    history: 'Derived from the Persian "gol" (flower) and "ab" (water), this dessert was brought to India by Mughal chefs. It evolved to become an essential part of every Indian celebration.',
    origin: 'Mughal India',
    ingredients: [
      { name: 'Khoya/Mawa', quantity: 200, unit: 'g', scalable: true },
      { name: 'Paneer', quantity: 100, unit: 'g', scalable: true },
      { name: 'All-purpose flour', quantity: 3, unit: 'tbsp', scalable: true },
      { name: 'Sugar', quantity: 2, unit: 'cups', scalable: true },
      { name: 'Water', quantity: 2, unit: 'cups', scalable: true },
      { name: 'Rose water', quantity: 1, unit: 'tbsp', scalable: false },
      { name: 'Cardamom powder', quantity: 0.5, unit: 'tsp', scalable: false },
      { name: 'Ghee for frying', quantity: 500, unit: 'ml', scalable: false },
      { name: 'Pistachios', quantity: 2, unit: 'tbsp', scalable: true },
    ],
    steps: [
      {
        id: 1,
        title: 'Make the Sugar Syrup',
        instruction: 'Boil sugar and water until slightly sticky. Add cardamom and rose water. Keep warm.',
        duration: 300,
        animation: 'boiling',
      },
      {
        id: 2,
        title: 'Prepare the Dough',
        instruction: 'Mash khoya and paneer together until smooth. Add flour gradually. Knead to a soft, crack-free dough.',
        animation: 'mixing',
      },
      {
        id: 3,
        title: 'Shape the Balls',
        instruction: 'Divide dough into small portions. Roll into smooth balls without cracks. Keep covered.',
        animation: 'mixing',
      },
      {
        id: 4,
        title: 'Fry the Jamuns',
        instruction: 'Heat ghee on low. Fry balls gently, rotating constantly, until deep brown. This takes patience!',
        duration: 600,
        animation: 'frying',
      },
      {
        id: 5,
        title: 'Soak in Syrup',
        instruction: 'Transfer hot jamuns directly into warm syrup. Let them soak for at least 2 hours.',
        duration: 7200,
        animation: 'resting',
      },
      {
        id: 6,
        title: 'Serve',
        instruction: 'Serve warm or at room temperature, garnished with slivered pistachios. Pure bliss!',
        animation: 'serving',
      },
    ],
    tags: ['sweet', 'festive', 'dessert', 'celebration', 'traditional'],
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    hindiName: 'पालक पनीर',
    description: 'Creamy spinach curry with soft paneer cubes — a nutritious and delicious North Indian vegetarian classic.',
    image: '/recipes/palak-paneer.jpg',
    category: 'main-course',
    region: 'north-indian',
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: 'easy',
    history: 'A relatively modern creation, Palak Paneer became popular in Punjabi restaurants as a nutritious vegetarian option. It perfectly showcases the versatility of paneer.',
    origin: 'Punjab, India',
    ingredients: [
      { name: 'Fresh spinach', quantity: 500, unit: 'g', scalable: true },
      { name: 'Paneer', quantity: 250, unit: 'g', scalable: true },
      { name: 'Onion', quantity: 1, unit: 'large', scalable: true },
      { name: 'Tomato', quantity: 1, unit: 'medium', scalable: true },
      { name: 'Garlic cloves', quantity: 4, unit: 'cloves', scalable: true },
      { name: 'Green chilies', quantity: 2, unit: 'pieces', scalable: true },
      { name: 'Cumin seeds', quantity: 1, unit: 'tsp', scalable: true },
      { name: 'Heavy cream', quantity: 3, unit: 'tbsp', scalable: true },
      { name: 'Garam masala', quantity: 0.5, unit: 'tsp', scalable: true },
    ],
    steps: [
      {
        id: 1,
        title: 'Blanch the Spinach',
        instruction: 'Boil spinach for 2 minutes, then immediately transfer to ice water. This keeps the vibrant green color.',
        duration: 180,
        animation: 'boiling',
      },
      {
        id: 2,
        title: 'Make Spinach Puree',
        instruction: 'Blend blanched spinach with green chilies into a smooth puree. Set aside.',
        animation: 'mixing',
      },
      {
        id: 3,
        title: 'Fry the Paneer',
        instruction: 'Cut paneer into cubes. Lightly fry until golden on edges. Set aside in warm water.',
        duration: 180,
        animation: 'frying',
      },
      {
        id: 4,
        title: 'Prepare the Base',
        instruction: 'Heat oil, add cumin. Sauté onions until golden, add garlic and tomatoes. Cook until soft.',
        duration: 300,
        animation: 'frying',
      },
      {
        id: 5,
        title: 'Combine Everything',
        instruction: 'Add spinach puree to the base. Add spices and simmer for 5 minutes. Stir in cream.',
        duration: 300,
        animation: 'stirring',
      },
      {
        id: 6,
        title: 'Add Paneer & Serve',
        instruction: 'Gently fold in paneer cubes. Simmer for 2 minutes. Serve hot with naan or roti.',
        duration: 120,
        animation: 'serving',
      },
    ],
    tags: ['vegetarian', 'healthy', 'spinach', 'paneer', 'nutritious'],
  },
];

export const categories = [
  { id: 'all', name: 'All Recipes', icon: '🍽️' },
  { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
  { id: 'main-course', name: 'Main Course', icon: '🍛' },
  { id: 'snacks', name: 'Snacks', icon: '🥟' },
  { id: 'sweets', name: 'Sweets', icon: '🍮' },
  { id: 'street-food', name: 'Street Food', icon: '🛒' },
];

export const regions = [
  { id: 'all', name: 'All Regions' },
  { id: 'north-indian', name: 'North Indian' },
  { id: 'south-indian', name: 'South Indian' },
  { id: 'mughlai', name: 'Mughlai' },
  { id: 'pan-indian', name: 'Pan Indian' },
];
