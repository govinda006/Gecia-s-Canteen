import React from "react";
import AllMenu from "../components/Foods/AllMenu";
import Breakfast from "../components/Foods/Breakfast";
import Lunch from "../components/Foods/Lunch";
import Hero from "../components/Hero/Hero";
import Items from "../components/items/Items";
import { View } from "../type";

interface HomeProps {
  currentView: View;
  setCurrentView: React.Dispatch<React.SetStateAction<View>>;
  onUpdateNavbar: (title: string) => void; // Added prop to update navbar title
}

const Home: React.FC<HomeProps> = ({
  currentView,
  setCurrentView,
  onUpdateNavbar,
}) => {
  const navigateTo = (view: View) => {
    console.log(`Navigating to ${view}`);
    setCurrentView(view);
  };

  const handleBackFromSubView = (from: string) => {
    console.log(`Returning to Items from ${from}`);
    setCurrentView("items");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      {currentView === "hero" && (
        <Hero
          onShowMenu={() => navigateTo("items")}
          onUpdateNavbar={onUpdateNavbar} // Pass the prop to Hero
        />
      )}
      {currentView === "items" && (
        <Items
          onBack={() => navigateTo("hero")}
          onSelectBreakfast={() => navigateTo("breakfast")}
          onSelectLunch={() => navigateTo("lunch")}
          onSelectAllMenu={() => navigateTo("allMenu")}
        />
      )}
      {currentView === "breakfast" && (
        <Breakfast onBack={() => handleBackFromSubView("Breakfast")} />
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
