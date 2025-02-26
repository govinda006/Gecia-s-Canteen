// src/types.ts
export type View =
  | "hero"
  | "items"
  | "breakfast"
  | "dietFoods"
  | "lunch"
  | "allMenu";

export interface FoodItem {
  name: string;
  description: string;
  kcal: number | string;
}

export interface DailyMenu {
  Breakfast: FoodItem[];
  DietFoods: FoodItem[];
  Lunch: FoodItem[];
}
