import React, { useState } from "react";
import Hero from "../components/Hero";
import Items from "../components/Items";

const Home: React.FC = () => {
  const [showItems, setShowItems] = useState(false);

  return (
    <div style={{ backgroundColor: "#f0f0f0", width: "100%" }}>
      {showItems ? (
        <Items onBack={() => setShowItems(false)} /> // Show Items, hide Hero
      ) : (
        <Hero onShowMenu={() => setShowItems(true)} /> // Show Hero, hide Items
      )}
    </div>
  );
};

export default Home;
