interface FoodItem {
  name: string;
  description: string;
  kcal: number | string;
}

interface DailyMenu {
  Breakfast: FoodItem[];
}

interface FoodData {
  [date: string]: DailyMenu;
}

export const dummyFoods: FoodData = {
  "2025-02-10": {
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
      {
        name: "Additional",
        description: "481 kcal, 28 kcal, 150 calories",
        kcal: "N/A",
      },
    ],
  },
  "2025-02-11": {
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
  },
  "2025-02-12": {
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
  },
  "2025-02-13": {
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
  },
  "2025-02-14": {
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
  },
};

export const getFoodsByDate = (date: string) => {
  return dummyFoods[date] || {};
};
