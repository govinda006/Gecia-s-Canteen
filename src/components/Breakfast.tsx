import { motion } from "framer-motion";
import React from "react";
import FoodCard from "../cards/FoodCard";
import { getFoodsByDate } from "./Foods/dummy-foods";

interface BreakfastProps {
  onBack: () => void;
}

const Breakfast: React.FC<BreakfastProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const breakfastItems = getFoodsByDate(currentDate).Breakfast || [];

  const handleBackClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent default touch/click behavior
    console.log("Back button clicked, switching to Items");
    onBack();
  };

  return (
    <motion.div
      className="breakfast-section p-0 bg-gray-100 w-full relative z-10" // Add z-index
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()} // Prevent touchstart propagation
        onTouchEnd={handleBackClick} // Handle touchend for mobile
        className="p-2 mb-4 bg-blue-500 text-white rounded shadow-lg cursor-pointer"
        style={{ position: "relative", zIndex: 20 }} // Ensure button is above
        whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.9 }}
      >
        Back
      </motion.button>

      <h2 className="text-3xl font-bold mb-6 text-blue-700 px-4">
        Breakfast Menu
      </h2>
      <div className="breakfast-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {breakfastItems.map((item, index) => (
          <motion.div
            key={item.name} // Use name for uniqueness
            className="breakfast-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05, // Slightly reduced for subtlety
              rotate: 3,
              boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
              backgroundColor: "#083B3F",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FoodCard
              name={item.name}
              description={item.description}
              kcal={item.kcal}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Breakfast;
