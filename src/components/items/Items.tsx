import { motion } from "framer-motion";
import React from "react";
import { themeColors } from "../../data/themeColors";
import { foodItems, getCurrentDayTheme } from "./items-constants";
import "./Items.css";
import {
  BackgroundAnimation,
  FoodItemComponent,
  HideMenuButton,
  MenuDescription,
  MenuTitle,
  ThemeTitle,
} from "./MotionComponents";

interface ItemsProps {
  onBack: () => void;
  onSelectBreakfast: () => void;
  onSelectDietFoods: () => void;
  onSelectLunch: () => void;
  onSelectAllMenu: () => void; // New prop
}

const Items: React.FC<ItemsProps> = ({
  onBack,
  onSelectBreakfast,
  onSelectDietFoods,
  onSelectLunch,
  onSelectAllMenu,
}) => {
  const { theme, type } = getCurrentDayTheme();
  const themeColor = themeColors[theme] || "#ffffff";

  return (
    <motion.div
      id="items-section"
      className="items-section"
      style={{ backgroundColor: "white" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <BackgroundAnimation />
      <MenuTitle />
      <MenuDescription />
      <ThemeTitle theme={theme} type={type} color={themeColor} />
      <div className="food-items">
        {foodItems.map((foodItem, index) => (
          <FoodItemComponent
            key={index}
            foodItem={foodItem}
            index={index}
            onClick={
              foodItem.name === "🥞 Breakfast"
                ? onSelectBreakfast
                : foodItem.name === "🥗 Diet Food"
                ? onSelectDietFoods
                : foodItem.name === "🍛 Lunch"
                ? onSelectLunch
                : undefined
            }
          />
        ))}
      </div>
      <div className="flex space-x-4 mt-4 justify-center">
        <HideMenuButton onBack={onBack} />
        <motion.button
          className="p-2 bg-blue-500 text-white rounded shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onSelectAllMenu}
        >
          📋 All Menu
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Items;
