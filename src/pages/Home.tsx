import React, { useState } from "react";
import Breakfast from "../components/Foods/Breakfast";
import Hero from "../components/Hero/Hero";
import Items from "../components/items/Items";

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<
    "hero" | "items" | "breakfast"
  >("hero");

  return (
    <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
      {currentView === "hero" && (
        <Hero onShowMenu={() => setCurrentView("items")} />
      )}
      {currentView === "items" && (
        <Items
          onBack={() => setCurrentView("hero")}
          onSelectBreakfast={() => setCurrentView("breakfast")}
        />
      )}
      {currentView === "breakfast" && (
        <Breakfast onBack={() => setCurrentView("items")} />
      )}
    </div>
  );
};

export default Home;
