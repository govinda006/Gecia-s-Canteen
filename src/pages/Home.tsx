import React from "react";
import AllMenu from "../components/Foods/AllMenu";
import Breakfast from "../components/Foods/Breakfast";
import DietFoods from "../components/Foods/DietFoods";
import Lunch from "../components/Foods/Lunch";
import Hero from "../components/Hero/Hero";
import Items from "../components/items/Items";

interface HomeProps {
  currentView:
    | "hero"
    | "items"
    | "breakfast"
    | "dietFoods"
    | "lunch"
    | "allMenu";
  setCurrentView: React.Dispatch<
    React.SetStateAction<
      "hero" | "items" | "breakfast" | "dietFoods" | "lunch" | "allMenu"
    >
  >;
}

const Home: React.FC<HomeProps> = ({ currentView, setCurrentView }) => {
  const handleBackFromBreakfast = () => {
    console.log("Switching to Items (menu) from Breakfast");
    setCurrentView("items");
  };
  const handleBackFromDietFoods = () => {
    console.log("Switching to Items (menu) from Diet Foods");
    setCurrentView("items");
  };
  const handleBackFromLunch = () => {
    console.log("Switching to Items (menu) from Lunch Foods");
    setCurrentView("items");
  };
  const handleBackFromAllMenu = () => {
    console.log("Switching to Items (menu) from All Menu");
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
          onSelectLunch={() => setCurrentView("lunch")}
          onSelectAllMenu={() => setCurrentView("allMenu")} // New prop
        />
      )}
      {currentView === "breakfast" && (
        <Breakfast onBack={handleBackFromBreakfast} />
      )}
      {currentView === "dietFoods" && (
        <DietFoods onBack={handleBackFromDietFoods} />
      )}
      {currentView === "lunch" && <Lunch onBack={handleBackFromLunch} />}
      {currentView === "allMenu" && <AllMenu onBack={handleBackFromAllMenu} />}
    </div>
  );
};

export default Home;
