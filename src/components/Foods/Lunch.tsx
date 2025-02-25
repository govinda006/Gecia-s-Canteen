import { motion } from "framer-motion";
import React, { memo } from "react";
import FoodCard from "../../cards/FoodCard";
import { getFoodsByDate } from "./dummy-foods";

interface LunchProps {
  onBack: () => void;
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: "red" },
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
  hidden: { opacity: 0, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.2 },
  }),
  hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" },
};

const Lunch: React.FC<LunchProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const lunchItems = getFoodsByDate(currentDate).Lunch || [];

  const handleBackClick = () => {
    console.log("Back clicked, should render Items (menu)");
    onBack();
  };

  return (
    <motion.div
      className="lunch-section p-2 w-full min-h-screen flex flex-col items-center"
      style={{ backgroundColor: "#054e5a" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Back Button */}
      <motion.button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
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
        Lunch Menu
      </motion.h2>

      {/* Food Items Grid */}
      <motion.div
        className="lunch-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {lunchItems.map((item, index) => (
          <motion.div
            key={index}
            className="lunch-item w-fit flex justify-center items-center"
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

export default memo(Lunch);
