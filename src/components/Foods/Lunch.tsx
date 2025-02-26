import { motion } from "framer-motion";
import React, { memo, useEffect, useState } from "react";
import FoodCard from "../../cards/FoodCard";
import { getFoodsByDate } from "./dummy-foods";

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

interface LunchProps {
  onBack: () => void;
}

const Lunch: React.FC<LunchProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const lunchItems = getFoodsByDate(currentDate).Lunch || [];
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleBackClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    console.log("Back clicked, should render Items (menu)");
    onBack();
  };

  // Format date and time for display
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <motion.div
      className="lunch-section p-2 w-full min-h-screen flex flex-col items-center"
      style={{ backgroundColor: "white" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
        className="p-2 mb-4 bg-blue-500 text-white rounded shadow-lg cursor-pointer"
        style={{ position: "relative", zIndex: 20 }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Back
      </motion.button>

      <motion.h2
        className="text-3xl font-bold mb-2 text-blue-700 flex justify-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Lunch Menu
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {formattedDate} | {formattedTime}
      </motion.p>

      <motion.div
        className="lunch-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {lunchItems.map((item, index) => (
          <motion.div
            key={item.name} // Changed to use item.name for uniqueness
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
