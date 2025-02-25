import { motion } from "framer-motion";
import React, { memo } from "react";
import FoodCard from "../../cards/FoodCard"; // Adjusted path from second version
import { getFoodsByDate } from "./dummy-foods"; // Adjusted path from second version

interface BreakfastProps {
  onBack: () => void;
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: "red" }, // From second version
  tap: { scale: 0.9 },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  hover: {
    scale: 1.2,
    color: "#FF5733",
    textShadow: "0px 0px 8px rgba(255, 87, 51, 0.8)",
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5 }, // Updated from first version's 0.8
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.2 },
  }),
  hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }, // Updated from first version
};

const Breakfast: React.FC<BreakfastProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const breakfastItems = getFoodsByDate(currentDate).Breakfast || [];

  const handleBackClick = () => {
    console.log("Back clicked, should render Items (menu)"); // Debug log from first version
    onBack(); // Trigger switch to Items (menu)
  };

  return (
    <motion.div
      className="breakfast-section p-2 bg-gray-100 w-full min-h-screen flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Back Button */}
      <motion.button
        onClick={handleBackClick} // Wrapped for debugging and control
        onTouchStart={(e) => e.preventDefault()} // Prevent mobile touch issues (from first version)
        onTouchEnd={handleBackClick} // Ensure tap works on mobile (from first version)
        className="p-2 mb-4 bg-blue-500 text-white rounded shadow-lg"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Back
      </motion.button>

      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-blue-700 flex justify-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Breakfast Menu
      </motion.h2>

      {/* Food Items Grid */}
      <motion.div
        className="breakfast-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {breakfastItems.map((item, index) => (
          <motion.div
            key={index}
            className="breakfast-item w-fit flex justify-center items-center"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <FoodCard
              name={item.name}
              description={item.description}
              kcal={item.kcal}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default memo(Breakfast);
