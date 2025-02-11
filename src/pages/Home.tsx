import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f0f0f0", width: "100%" }}>
      <Hero />
      <InfoSection />
    </div>
  );
};

export default Home;
