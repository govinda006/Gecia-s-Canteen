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
  onSelectAllMenu: () => void;
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

  const handleButtonClick = (callback: () => void, label: string) => {
    console.log(`${label} clicked`);
    callback();
  };

  return (
    <motion.div
      id="items-section"
      className="relative z-10 w-full min-h-screen bg-white p-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <BackgroundAnimation />
      <MenuTitle />
      <MenuDescription />
      <ThemeTitle theme={theme} type={type} color={themeColor} />
      <div className="food-items flex flex-wrap justify-center gap-6 my-6">
        {foodItems.map((foodItem) => (
          <FoodItemComponent
            key={foodItem.name}
            foodItem={foodItem}
            index={foodItems.indexOf(foodItem)}
            onClick={
              foodItem.name === "🥞 Breakfast"
                ? () => handleButtonClick(onSelectBreakfast, "Breakfast")
                : foodItem.name === "🥗 Diet Food"
                ? () => handleButtonClick(onSelectDietFoods, "Diet Foods")
                : foodItem.name === "🍛 Lunch"
                ? () => handleButtonClick(onSelectLunch, "Lunch")
                : undefined
            }
          />
        ))}
      </div>
      <div className="flex space-x-4 justify-center">
        <HideMenuButton onBack={() => handleButtonClick(onBack, "Hide Menu")} />
        <motion.button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer"
          style={{ position: "relative", zIndex: 20 }}
          onTouchStart={(e) => e.preventDefault()}
          onTouchEnd={() => handleButtonClick(onSelectAllMenu, "All Menu")}
          onClick={() => handleButtonClick(onSelectAllMenu, "All Menu")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          📋 All Menu
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Items;
