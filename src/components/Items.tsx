import { motion } from "framer-motion";
import React from "react";
import { foodItems, getCurrentDayTheme } from "../constants";
import { themeColors } from "../data/themeColors";
import "./Items.css";
import {
  BackgroundAnimation,
  CurrentDate,
  FoodItemComponent,
  HideMenuButton,
  MenuDescription,
  MenuTitle,
  ThemeTitle,
} from "./MotionComponents";

interface ItemsProps {
  onBack: () => void;
}

// Define types for foodItems and weeklyThemes
interface FoodItem {
  name: string;
  description: string;
}

const Items: React.FC<ItemsProps> = ({ onBack }) => {
  const theme: string = getCurrentDayTheme() || "defaultTheme";
  const currentDate = new Date().toLocaleDateString();
  const themeColor = themeColors[theme] || "#ffffff"; // Default to white if theme not found

  return (
    <motion.div
      id="items-section"
      className="items-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <BackgroundAnimation />
      <MenuTitle />
      <MenuDescription />
      <CurrentDate date={currentDate} />
      <ThemeTitle theme={theme} color={themeColor} />
      <div className="food-items">
        {foodItems.map((foodItem: FoodItem, index: number) => (
          <FoodItemComponent key={index} foodItem={foodItem} index={index} />
        ))}
      </div>
      <HideMenuButton onBack={onBack} />
    </motion.div>
  );
};

export default Items;
