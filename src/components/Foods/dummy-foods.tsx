export interface FoodItem {
  name: string;
  description: string;
  kcal: number | string;
  estimatedCalories?: number; // Optional field for estimated calories
  photo?: string; // New optional field for image URL
}

export interface LunchMenu {
  DietMeal: FoodItem[];
  Veg: FoodItem[];
  NonVeg: FoodItem[];
  Fasting: FoodItem[];
}

export interface DailyMenu {
  Breakfast: FoodItem[];
  Lunch: LunchMenu;
}

export interface FoodData {
  [date: string]: DailyMenu;
}

export const dummyFoods: FoodData = {
  "2025-03-03": {
    Breakfast: [
      {
        name: "Oats Upma",
        description: "Oats with mixed vegetables, mild spices",
        kcal: 180,
        estimatedCalories: 180,
        photo:
          "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar to oats upma
      },
      {
        name: "Vegetable Poha",
        description: "Flattened rice with peas, carrots, and turmeric",
        kcal: 200,
        estimatedCalories: 200,
        photo:
          "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500", // Exact: Vegetable poha
      },
      {
        name: "Fruits",
        description: "Mixed seasonal fruits",
        kcal: "N/A",
        estimatedCalories: 80,
        photo:
          "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=500", // Exact: Mixed fruit bowl
      },
      {
        name: "Green Tea",
        description: "Unsweetened green tea - 100 ml",
        kcal: 0,
        estimatedCalories: 0,
        photo:
          "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Tea cup
      },
    ],
    Lunch: {
      DietMeal: [
        {
          name: "Grilled Chicken Salad",
          description: "Mixed greens, cherry tomatoes, low-fat dressing",
          kcal: 220,
          estimatedCalories: 220,
        },
        {
          name: "Quinoa Bowl",
          description: "Quinoa, steamed veggies, lemon dressing",
          kcal: 180,
          estimatedCalories: 180,
        },
        {
          name: "Greek Yogurt",
          description: "Plain, with berries",
          kcal: 120,
          estimatedCalories: 120,
        },
      ],
      Veg: [
        {
          name: "Raita",
          description: "Yogurt with cucumber and spices",
          kcal: 80,
          estimatedCalories: 80,
        },
        {
          name: "Papad",
          description: "Crispy lentil wafer",
          kcal: 50,
          estimatedCalories: 50,
        },
      ],
      NonVeg: [
        {
          name: "Chicken Biryani",
          description: "Basmati rice, chicken, spices",
          kcal: 600,
          estimatedCalories: 600,
        },
      ],
      Fasting: [
        {
          name: "Sabudana Khichdi",
          description: "Tapioca pearls, peanuts, mild spices",
          kcal: 300,
          estimatedCalories: 300,
        },
        {
          name: "Fruit Juice",
          description: "Fresh orange juice, no additives",
          kcal: 120,
          estimatedCalories: 120,
        },
      ],
    },
  },
  "2025-03-04": {
    Breakfast: [
      {
        name: "Moong Dal Cheela",
        description: "Lentil pancake with spinach and spices",
        kcal: 150,
        estimatedCalories: 150,
        photo:
          "https://images.pexels.com/photos/7231979/pexels-photo-7231979.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Lentil pancake
      },
      {
        name: "Ragi Porridge",
        description: "Finger millet with milk and jaggery",
        kcal: 200,
        estimatedCalories: 200,
        photo:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Porridge
      },
      {
        name: "Fruits",
        description: "Mixed seasonal fruits",
        kcal: "N/A",
        estimatedCalories: 80,
        photo:
          "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=500", // Exact: Mixed fruit bowl
      },
      {
        name: "Herbal Tea",
        description: "Unsweetened tulsi tea - 100 ml",
        kcal: 0,
        estimatedCalories: 0,
        photo:
          "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Tea cup
      },
    ],
    Lunch: {
      DietMeal: [
        {
          name: "Baked Salmon",
          description: "Asparagus, lemon zest",
          kcal: 250,
          estimatedCalories: 250,
        },
        {
          name: "Vegetable Soup",
          description: "Low-sodium broth, mixed vegetables",
          kcal: 90,
          estimatedCalories: 90,
        },
        {
          name: "Almonds",
          description: "Handful (10-12 pieces)",
          kcal: 80,
          estimatedCalories: 80,
        },
      ],
      Veg: [
        {
          name: "Jeera Rice",
          description: "Cumin-flavored basmati rice",
          kcal: 200,
          estimatedCalories: 200,
        },
        {
          name: "Salad",
          description: "Cucumber, tomato, onion",
          kcal: 30,
          estimatedCalories: 30,
        },
      ],
      NonVeg: [
        {
          name: "Paneer Butter Masala",
          description: "Paneer in creamy tomato sauce, with naan",
          kcal: 550,
          estimatedCalories: 550,
        },
      ],
      Fasting: [
        {
          name: "Rajgira Porridge",
          description: "Amaranth flour, milk, jaggery",
          kcal: 250,
          estimatedCalories: 250,
        },
        {
          name: "Coconut Water",
          description: "Fresh, unsweetened - 200 ml",
          kcal: 45,
          estimatedCalories: 45,
        },
      ],
    },
  },
  "2025-03-05": {
    Breakfast: [
      {
        name: "Sprouts Salad",
        description: "Moong sprouts, cucumber, tomato, lemon",
        kcal: 120,
        estimatedCalories: 120,
        photo:
          "https://images.pexels.com/photos/7231982/pexels-photo-7231982.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Sprouts dish
      },
      {
        name: "Whole Grain Toast",
        description: "Multigrain bread with avocado",
        kcal: 160,
        estimatedCalories: 160,
        photo:
          "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Toast
      },
      {
        name: "Fruits",
        description: "Mixed seasonal fruits",
        kcal: "N/A",
        estimatedCalories: 80,
        photo:
          "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=500", // Exact: Mixed fruit bowl
      },
      {
        name: "Green Tea",
        description: "Unsweetened green tea - 100 ml",
        kcal: 0,
        estimatedCalories: 0,
        photo:
          "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Tea cup
      },
    ],
    Lunch: {
      DietMeal: [
        {
          name: "Turkey Wrap",
          description: "Whole wheat tortilla, lettuce, mustard",
          kcal: 200,
          estimatedCalories: 200,
        },
        {
          name: "Steamed Broccoli",
          description: "Light seasoning",
          kcal: 55,
          estimatedCalories: 55,
        },
        {
          name: "Cottage Cheese",
          description: "Low-fat, with cucumber",
          kcal: 110,
          estimatedCalories: 110,
        },
      ],
      Veg: [
        {
          name: "Vegetable Stir-fry",
          description: "Mixed veggies with light soy sauce",
          kcal: 120,
          estimatedCalories: 120,
        },
        {
          name: "Lassi",
          description: "Sweet yogurt drink",
          kcal: 150,
          estimatedCalories: 150,
        },
      ],
      NonVeg: [
        {
          name: "Fish Curry",
          description: "Spicy coconut-based curry with rice",
          kcal: 450,
          estimatedCalories: 450,
        },
      ],
      Fasting: [
        {
          name: "Kuttu Ki Roti",
          description: "Buckwheat flour flatbread with potato curry",
          kcal: 280,
          estimatedCalories: 280,
        },
        {
          name: "Banana",
          description: "One medium-sized fruit",
          kcal: 90,
          estimatedCalories: 90,
        },
      ],
    },
  },
  "2025-03-06": {
    Breakfast: [
      {
        name: "Besan Cheela",
        description: "Chickpea flour pancake with tomatoes and herbs",
        kcal: 140,
        estimatedCalories: 140,
        photo:
          "https://images.pexels.com/photos/7231979/pexels-photo-7231979.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Cheela
      },
      {
        name: "Dalia Upma",
        description: "Broken wheat with veggies and spices",
        kcal: 170,
        estimatedCalories: 170,
        photo:
          "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Upma
      },
      {
        name: "Fruits",
        description: "Mixed seasonal fruits",
        kcal: "N/A",
        estimatedCalories: 80,
        photo:
          "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=500", // Exact: Mixed fruit bowl
      },
      {
        name: "Herbal Tea",
        description: "Unsweetened tulsi tea - 100 ml",
        kcal: 0,
        estimatedCalories: 0,
        photo:
          "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Tea cup
      },
    ],
    Lunch: {
      DietMeal: [
        {
          name: "Egg White Omelette",
          description: "Spinach, mushrooms",
          kcal: 140,
          estimatedCalories: 140,
        },
        {
          name: "Avocado Toast",
          description: "Whole grain bread, half avocado",
          kcal: 160,
          estimatedCalories: 160,
        },
        {
          name: "Green Tea",
          description: "Unsweetened, 200 ml",
          kcal: 0,
          estimatedCalories: 0,
        },
      ],
      Veg: [
        {
          name: "Dal Tadka",
          description: "Yellow lentils with spices, served with rice",
          kcal: 350,
          estimatedCalories: 350,
        },
        {
          name: "Aloo Gobi",
          description: "Potato and cauliflower curry",
          kcal: 180,
          estimatedCalories: 180,
        },
        {
          name: "Roti",
          description: "Whole wheat flatbread (1 piece)",
          kcal: 80,
          estimatedCalories: 80,
        },
      ],
      NonVeg: [],
      Fasting: [
        {
          name: "Sabudana Vada",
          description: "Tapioca fritters with peanut chutney",
          kcal: 320,
          estimatedCalories: 320,
        },
        {
          name: "Milk",
          description: "Full-fat, 200 ml",
          kcal: 120,
          estimatedCalories: 120,
        },
      ],
    },
  },
  "2025-03-07": {
    Breakfast: [
      {
        name: "Multigrain Idli",
        description: "Steamed idli made with millets and lentils",
        kcal: 150,
        estimatedCalories: 150,
        photo:
          "https://images.pexels.com/photos/7231980/pexels-photo-7231980.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Idli
      },
      {
        name: "Chia Seed Pudding",
        description: "Chia seeds with almond milk and berries",
        kcal: 180,
        estimatedCalories: 180,
        photo:
          "https://images.pexels.com/photos/7231982/pexels-photo-7231982.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Pudding
      },
      {
        name: "Fruits",
        description: "Mixed seasonal fruits",
        kcal: "N/A",
        estimatedCalories: 80,
        photo:
          "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=500", // Exact: Mixed fruit bowl
      },
      {
        name: "Green Tea",
        description: "Unsweetened green tea - 100 ml",
        kcal: 0,
        estimatedCalories: 0,
        photo:
          "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500", // Similar: Tea cup
      },
    ],
    Lunch: {
      DietMeal: [
        {
          name: "Chickpea Salad",
          description: "Cucumber, tomato, olive oil",
          kcal: 190,
          estimatedCalories: 190,
        },
        {
          name: "Baked Sweet Potato",
          description: "Small, with spices",
          kcal: 100,
          estimatedCalories: 100,
        },
        {
          name: "Protein Shake",
          description: "Whey, water, no sugar",
          kcal: 130,
          estimatedCalories: 130,
        },
      ],
      Veg: [
        {
          name: "Veg Pulao",
          description: "Mixed vegetable rice with spices",
          kcal: 300,
          estimatedCalories: 300,
        },
        {
          name: "Pickle",
          description: "Mango pickle (small serving)",
          kcal: 20,
          estimatedCalories: 20,
        },
      ],
      NonVeg: [
        {
          name: "Chole",
          description: "Spicy chickpea curry",
          kcal: 250,
          estimatedCalories: 250,
        },
      ],
      Fasting: [
        {
          name: "Sama Rice Pulao",
          description: "Barnyard millet with veggies",
          kcal: 220,
          estimatedCalories: 220,
        },
        {
          name: "Dry Fruits",
          description: "Mix of almonds and cashews (small handful)",
          kcal: 150,
          estimatedCalories: 150,
        },
      ],
    },
  },
};

export const getFoodsByDate = (date: string) => {
  return dummyFoods[date] || {};
};
