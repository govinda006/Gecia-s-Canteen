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
  onSelectLunch: () => void;
  onSelectAllMenu: () => void;
}

const Items: React.FC<ItemsProps> = ({
  onBack,
  onSelectBreakfast,
  onSelectLunch,
  onSelectAllMenu,
}) => {
  const { theme, type } = getCurrentDayTheme();
  const themeColor = themeColors[theme] || "rgb(5, 78, 90)"; // Default to new color if theme not found

  const handleButtonClick = (callback: () => void, label: string) => {
    console.log(`${label} clicked`);
    callback();
  };

  // Get current date and time
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      id="items-section"
      className="relative z-10 w-full min-h-screen bg-white p-4 flex flex-col items-center"
    >
      <BackgroundAnimation />
      <MenuTitle />
      {/* Date and Time Display below MenuTitle */}
      <div className="mt-2 text-center text-gray-600">
        <p>
          {currentDate},{currentTime}
        </p>
      </div>
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
                : foodItem.name === "🍛 Lunch"
                ? () => handleButtonClick(onSelectLunch, "Lunch")
                : undefined
            }
          />
        ))}
      </div>
      <div className="flex space-x-4 justify-center">
        <HideMenuButton onBack={() => handleButtonClick(onBack, "Hide Menu")} />
        <button
          className="px-4 py-2 bg-[rgb(5,78,90)] text-white rounded-lg shadow-lg cursor-pointer"
          style={{ position: "relative", zIndex: 20 }}
          onTouchStart={(e) => e.preventDefault()}
          onTouchEnd={() => handleButtonClick(onSelectAllMenu, "All Menu")}
          onClick={() => handleButtonClick(onSelectAllMenu, "All Menu")}
        >
          📋 All Menu
        </button>
      </div>
    </div>
  );
};

export default Items;
