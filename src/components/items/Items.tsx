import { motion } from "framer-motion";
import React from "react";
import { themeColors } from "../../data/themeColors";
import { foodItems, getCurrentDayTheme } from "./items-constants";
import "./Items.css";
import {
  BackgroundAnimation,
  // CurrentDate,
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
}

const Items: React.FC<ItemsProps> = ({
  onBack,
  onSelectBreakfast,
  onSelectDietFoods,
  onSelectLunch,

}) => {
  const { theme, type } = getCurrentDayTheme();
  // const currentDate = new Date().toLocaleDateString();
  const themeColor = themeColors[theme] || "#ffffff";

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
      {/* <CurrentDate date={currentDate} /> */}
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
      <HideMenuButton onBack={onBack} />
    </motion.div>
  );
};

export default Items;
