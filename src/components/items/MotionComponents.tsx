import React from "react";
import { getCurrentDayTheme } from "./items-constants";

// Define types for foodItems
interface FoodItem {
  name: string;
  description: string;
}

export const BackgroundAnimation: React.FC = () => (
  <div className="background-animation"></div>
);

export const MenuTitle: React.FC = () => (
  <h2 className="menu-title">Our Menu</h2>
);

export const MenuDescription: React.FC = () => (
  <p className="menu-description">
    Discover our delicious and healthy meals crafted just for you.
  </p>
);

// export const CurrentDate: React.FC<{ date: string }> = ({ date }) => (
//   <div className="current-date">{`Today's Date: ${date}`}</div>
// );

export const ThemeTitle: React.FC<{
  theme: string;
  type: string;
  color: string;
}> = ({ theme, type, color }) => (
  <div
    className="theme-title"
    style={{
      color,
      backgroundColor: "rgba(5, 78, 90, 0.8)", // #054e5a with 80% opacity
    }}
  >
    {`Today's Lunch Theme: ${theme} ${type === "veg" ? "🌱" : "🍗"}`}
  </div>
);

export const FoodItemComponent: React.FC<{
  foodItem: FoodItem;
  index: number;
  onClick?: () => void;
}> = ({ foodItem, onClick }) => (
  <div className="food-item" onClick={onClick}>
    {foodItem.name}
  </div>
);

export const HideMenuButton: React.FC<{ onBack: () => void }> = ({
  onBack,
}) => (
  <button className="hide-menu-button" onClick={onBack}>
    🔼 Hide Menu
  </button>
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
