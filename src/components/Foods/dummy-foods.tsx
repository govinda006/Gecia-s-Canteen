interface FoodItem {
  name: string;
  description: string;
  kcal: number | string;
}

interface DailyMenu {
  Breakfast: FoodItem[];
  DietFoods: FoodItem[];
  Lunch: FoodItem[]; // Added Lunch section
}

interface FoodData {
  [date: string]: DailyMenu;
}

export const dummyFoods: FoodData = {
  "2025-02-25": {
    // Today
    Breakfast: [
      {
        name: "Dal Wada",
        description: "Curd, Kara Chutney, Sambar",
        kcal: 349,
      },
      {
        name: "Meduwada",
        description: "Curd, Kara Chutney, Sambar",
        kcal: 349,
      },
      {
        name: "Fruits",
        description: "Fruits",
        kcal: "N/A",
      },
      {
        name: "Tea",
        description: "Tea - 100 ml",
        kcal: "N/A",
      },
    ],
    DietFoods: [
      {
        name: "Grilled Chicken Salad",
        description: "Mixed greens, cherry tomatoes, low-fat dressing",
        kcal: 220,
      },
      {
        name: "Quinoa Bowl",
        description: "Quinoa, steamed veggies, lemon dressing",
        kcal: 180,
      },
      {
        name: "Greek Yogurt",
        description: "Plain, with berries",
        kcal: 120,
      },
    ],
    Lunch: [
      {
        name: "Chicken Biryani",
        description: "Basmati rice, chicken, spices",
        kcal: 600,
      },
      {
        name: "Raita",
        description: "Yogurt with cucumber and spices",
        kcal: 80,
      },
      {
        name: "Papad",
        description: "Crispy lentil wafer",
        kcal: 50,
      },
    ],
  },
  "2025-02-26": {
    // Tomorrow
    Breakfast: [
      {
        name: "Onion Poha",
        description: "Sambar",
        kcal: 333,
      },
      {
        name: "Bread Omelet",
        description: "Sambar",
        kcal: 333,
      },
      {
        name: "Fruits",
        description: "Fruits",
        kcal: "N/A",
      },
      {
        name: "Tea",
        description: "Tea - 100 ml",
        kcal: "N/A",
      },
      {
        name: "Additional",
        description:
          "150 kcal, Calories Breakdown: 44% fat, 47% carbs, 8% prot.",
        kcal: "N/A",
      },
    ],
    DietFoods: [
      {
        name: "Baked Salmon",
        description: "Asparagus, lemon zest",
        kcal: 250,
      },
      {
        name: "Vegetable Soup",
        description: "Low-sodium broth, mixed vegetables",
        kcal: 90,
      },
      {
        name: "Almonds",
        description: "Handful (10-12 pieces)",
        kcal: 80,
      },
    ],
    Lunch: [
      {
        name: "Paneer Butter Masala",
        description: "Paneer in creamy tomato sauce, with naan",
        kcal: 550,
      },
      {
        name: "Jeera Rice",
        description: "Cumin-flavored basmati rice",
        kcal: 200,
      },
      {
        name: "Salad",
        description: "Cucumber, tomato, onion",
        kcal: 30,
      },
    ],
  },
  "2025-02-27": {
    // Day after tomorrow
    Breakfast: [
      {
        name: "Misal Pav",
        description: "Farsan",
        kcal: 288,
      },
      {
        name: "Fruits",
        description: "Fruits",
        kcal: "N/A",
      },
      {
        name: "Tea",
        description: "Tea - 100 ml",
        kcal: "N/A",
      },
      {
        name: "Additional",
        description:
          "593 calories, Calories Breakdown: 48% carbs, 10% protein, 42% fat",
        kcal: "N/A",
      },
    ],
    DietFoods: [
      {
        name: "Turkey Wrap",
        description: "Whole wheat tortilla, lettuce, mustard",
        kcal: 200,
      },
      {
        name: "Steamed Broccoli",
        description: "Light seasoning",
        kcal: 55,
      },
      {
        name: "Cottage Cheese",
        description: "Low-fat, with cucumber",
        kcal: 110,
      },
    ],
    Lunch: [
      {
        name: "Fish Curry",
        description: "Spicy coconut-based curry with rice",
        kcal: 450,
      },
      {
        name: "Vegetable Stir-fry",
        description: "Mixed veggies with light soy sauce",
        kcal: 120,
      },
      {
        name: "Lassi",
        description: "Sweet yogurt drink",
        kcal: 150,
      },
    ],
  },
  "2025-02-28": {
    // February 28, 2025
    Breakfast: [
      {
        name: "Butter Onion Uttapa",
        description: "Sambar, Coconut Chutney",
        kcal: "200-250",
      },
      {
        name: "Fruits",
        description: "Fruits",
        kcal: "N/A",
      },
      {
        name: "Tea",
        description: "Tea - 100 ml",
        kcal: "N/A",
      },
      {
        name: "Additional",
        description:
          "150 kcal, Calories Breakdown: 44% fat, 47% carbs, 8% prot.",
        kcal: "N/A",
      },
    ],
    DietFoods: [
      {
        name: "Egg White Omelette",
        description: "Spinach, mushrooms",
        kcal: 140,
      },
      {
        name: "Avocado Toast",
        description: "Whole grain bread, half avocado",
        kcal: 160,
      },
      {
        name: "Green Tea",
        description: "Unsweetened, 200 ml",
        kcal: 0,
      },
    ],
    Lunch: [
      {
        name: "Dal Tadka",
        description: "Yellow lentils with spices, served with rice",
        kcal: 350,
      },
      {
        name: "Aloo Gobi",
        description: "Potato and cauliflower curry",
        kcal: 180,
      },
      {
        name: "Roti",
        description: "Whole wheat flatbread (1 piece)",
        kcal: 80,
      },
    ],
  },
  "2025-03-01": {
    // March 1, 2025 (since February has 28 days in 2025)
    Breakfast: [
      {
        name: "Podi Idli",
        description: "Kara Chutney, Sambar",
        kcal: 174,
      },
      {
        name: "Fruits",
        description: "Fruits",
        kcal: "N/A",
      },
      {
        name: "Tea",
        description: "Tea - 100 ml",
        kcal: "N/A",
      },
      {
        name: "Additional",
        description:
          "3 idli calories (174 kcal) + 146 sugars, 150 kcal, Calories Breakdown: 44% fat, 47% carbs, 8% prot.",
        kcal: "N/A",
      },
    ],
    DietFoods: [
      {
        name: "Chickpea Salad",
        description: "Cucumber, tomato, olive oil",
        kcal: 190,
      },
      {
        name: "Baked Sweet Potato",
        description: "Small, with spices",
        kcal: 100,
      },
      {
        name: "Protein Shake",
        description: "Whey, water, no sugar",
        kcal: 130,
      },
    ],
    Lunch: [
      {
        name: "Veg Pulao",
        description: "Mixed vegetable rice with spices",
        kcal: 300,
      },
      {
        name: "Chole",
        description: "Spicy chickpea curry",
        kcal: 250,
      },
      {
        name: "Pickle",
        description: "Mango pickle (small serving)",
        kcal: 20,
      },
    ],
  },
};

export const getFoodsByDate = (date: string) => {
  return dummyFoods[date] || {};
};
