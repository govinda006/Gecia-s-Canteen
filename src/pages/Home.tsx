import React from "react";
import { type View } from "../App"; // Use type import syntax
import AllMenu from "../components/Foods/AllMenu";
import Breakfast from "../components/Foods/Breakfast";
import DietFoods from "../components/Foods/DietFoods";
import Lunch from "../components/Foods/Lunch";
import Hero from "../components/Hero/Hero";
import Items from "../components/items/Items";

interface HomeProps {
  currentView: View;
  setCurrentView: React.Dispatch<React.SetStateAction<View>>;
}

const Home: React.FC<HomeProps> = ({ currentView, setCurrentView }) => {
  const navigateTo = (view: View) => {
    console.log(`Switching to ${view}`);
    setCurrentView(view);
  };

  const handleBackFromSubView = (from: string) => {
    console.log(`Switching to Items from ${from}`);
    setCurrentView("items");
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
      {currentView === "hero" && (
        <Hero onShowMenu={() => navigateTo("items")} />
      )}
      {currentView === "items" && (
        <Items
          onBack={() => navigateTo("hero")}
          onSelectBreakfast={() => navigateTo("breakfast")}
          onSelectDietFoods={() => navigateTo("dietFoods")}
          onSelectLunch={() => navigateTo("lunch")}
          onSelectAllMenu={() => navigateTo("allMenu")}
        />
      )}
      {currentView === "breakfast" && (
        <Breakfast onBack={() => handleBackFromSubView("Breakfast")} />
      )}
      {currentView === "dietFoods" && (
        <DietFoods onBack={() => handleBackFromSubView("Diet Foods")} />
      )}
      {currentView === "lunch" && (
        <Lunch onBack={() => handleBackFromSubView("Lunch")} />
      )}
      {currentView === "allMenu" && (
        <AllMenu onBack={() => handleBackFromSubView("All Menu")} />
      )}
    </div>
  );
};

export default Home;
