import { motion } from "framer-motion";
import React from "react";
import FoodCard from "../../cards/FoodCard";
import { getFoodsByDate } from "../Foods/dummy-foods";

interface BreakfastProps {
  onBack: () => void;
}

const Breakfast: React.FC<BreakfastProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const breakfastItems = getFoodsByDate(currentDate).Breakfast || [];

  const handleBackClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    console.log("Back clicked, switching to Items");
    onBack();
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-gray-100 p-4 flex flex-col items-center relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
        className="px-4 py-2 mb-6 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer"
        style={{ position: "relative", zIndex: 20 }}
        whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.9 }}
      >
        Back
      </motion.button>

      <h2 className="text-3xl font-bold mb-6 text-blue-700">Breakfast Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {breakfastItems.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: breakfastItems.indexOf(item) * 0.2,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
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
