import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import FoodCard from "../../cards/FoodCard";
import { getFoodsByDate } from "../Foods/dummy-foods";

interface BreakfastProps {
  onBack: () => void;
}

const Breakfast: React.FC<BreakfastProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0]; // e.g., "2025-03-03"
  const breakfastItems = getFoodsByDate(currentDate).Breakfast || [];
  const [currentTime, setCurrentTime] = useState(new Date());
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content area

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // Runs once when component mounts

  const handleBackClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    console.log("Back clicked, switching to Items");
    onBack();
  };

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
      className="w-full min-h-screen bg-gray-100 p-2 sm:p-4 flex flex-col items-center relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
        className="px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-[#054e5a] text-white rounded-lg shadow-lg cursor-pointer text-sm sm:text-base"
        style={{ position: "relative", zIndex: 20 }}
        whileHover={{ scale: 1.1, backgroundColor: "#043c45" }}
        whileTap={{ scale: 0.9 }}
      >
        Back
      </motion.button>

      <h2
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center"
        style={{ color: "#054e5a" }}
      >
        Breakfast Menu
      </h2>
      <motion.p
        className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {formattedDate} | {formattedTime}
      </motion.p>

      <div
        ref={contentRef}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4"
      >
        {breakfastItems.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: breakfastItems.indexOf(item) * 0.2,
            }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <FoodCard
              name={item.name}
              description={item.description}
              kcal={item.kcal}
              estimatedCalories={item.estimatedCalories}
              photo={item.photo}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Breakfast;
