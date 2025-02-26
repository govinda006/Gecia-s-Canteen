import { motion } from "framer-motion";
import React from "react";
import {
  backgroundVariants,
  getCurrentDayTheme,
  textVariants,
} from "./items-constants";

// Define types for foodItems and weeklyThemes
interface FoodItem {
  name: string;
  description: string;
}

export const BackgroundAnimation: React.FC = () => (
  <motion.div
    className="background-animation"
    initial="hidden"
    animate="visible"
    variants={backgroundVariants}
  ></motion.div>
);

export const MenuTitle: React.FC = () => (
  <motion.h2
    className="menu-title"
    initial="hidden"
    animate="visible"
    variants={textVariants}
    whileHover={{ scale: 1.1, color: "#FFD700" }}
  >
    Our Menu
  </motion.h2>
);

export const MenuDescription: React.FC = () => (
  <motion.p
    className="menu-description"
    initial="hidden"
    animate="visible"
    variants={textVariants}
    whileHover={{ scale: 1.05, color: "#FFC300" }}
  >
    Discover our delicious and healthy meals crafted just for you.
  </motion.p>
);

// export const CurrentDate: React.FC<{ date: string }> = ({ date }) => (
//   <motion.div
//     className="current-date"
//     initial={{ opacity: 0, y: -20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1, ease: "easeOut" }}
//   >
//     {`Today's Date: ${date}`}
//   </motion.div>
// );

export const ThemeTitle: React.FC<{
  theme: string;
  type: string;
  color: string;
}> = ({ theme, type, color }) => (
  <motion.div
    className="theme-title"
    style={{ color }} // Apply the theme color
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {`Today's Lunch Theme: ${theme} `}
    {type === "veg" ? "🌱" : "🍗"}
  </motion.div>
);

export const FoodItemComponent: React.FC<{
  foodItem: FoodItem;
  index: number;
  onClick?: () => void;
}> = ({ foodItem, index, onClick }) => (
  <motion.div
    key={index}
    className="food-item"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{
      scale: 1.1,
      rotate: 3,
      boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
      backgroundColor: "#083B3F",
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {foodItem.name}
  </motion.div>
);

export const HideMenuButton: React.FC<{ onBack: () => void }> = ({
  onBack,
}) => (
  <motion.button
    className="hide-menu-button"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.9 }}
    onClick={onBack}
  >
    🔼 Hide Menu
  </motion.button>
);

// Example usage
const App: React.FC = () => {
  const { theme, type } = getCurrentDayTheme();

  return (
    <div>
      <BackgroundAnimation />
      <MenuTitle />
      <MenuDescription />
      <ThemeTitle theme={theme} type={type} color="#FF6347" />
    </div>
  );
};

export default App;
