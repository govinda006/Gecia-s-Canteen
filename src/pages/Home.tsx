import React, { useState } from "react";
import Breakfast from "../components/Foods/Breakfast";
import DietFoods from "../components/Foods/DietFoods";
import Hero from "../components/Hero/Hero";
import Items from "../components/items/Items";

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<
    "hero" | "items" | "breakfast" | "dietFoods"
  >("hero");

  const handleBackFromBreakfast = () => {
    console.log("Switching to Items (menu) from Breakfast"); // Debug log
    setCurrentView("items"); // Explicitly set to "items" (menu)
  };
  const handleBackFromDietFoods = () => {
    console.log("Switching to Items (menu) from Diet Foods");
    setCurrentView("items");
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
      {currentView === "hero" && (
        <Hero onShowMenu={() => setCurrentView("items")} />
      )}
      {currentView === "items" && (
        <Items
          onBack={() => setCurrentView("hero")}
          onSelectBreakfast={() => setCurrentView("breakfast")}
          onSelectDietFoods={() => setCurrentView("dietFoods")}
        />
      )}
      {currentView === "breakfast" && (
        <Breakfast onBack={handleBackFromBreakfast} />
      )}
      {currentView === "dietFoods" && (
        <DietFoods onBack={handleBackFromDietFoods} /> // Added DietFoods render
      )}
    </div>
  );
};

export default Home;
