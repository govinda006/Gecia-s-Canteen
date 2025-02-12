import React, { useState } from "react";
import Hero from "../components/Hero";
import Items from "../components/Items";

interface HomeProps {
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ loading }) => {
  const [showItems, setShowItems] = useState(false);

  if (loading) {
    return null; // Do not render content while loading
  }

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
