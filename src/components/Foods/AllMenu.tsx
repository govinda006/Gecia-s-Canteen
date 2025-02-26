import { motion } from "framer-motion";
import React, { useState } from "react";
import { DailyMenu, FoodItem } from "../../type";
import { dummyFoods, getFoodsByDate } from "./dummy-foods";

interface AllMenuProps {
  onBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: "red" },
  tap: { scale: 0.9 },
};

const listVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

const AllMenu: React.FC<AllMenuProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const availableDates = Object.keys(dummyFoods);
  const initialDate = availableDates.includes(currentDate)
    ? currentDate
    : availableDates[0] || "";
  const [selectedDate, setSelectedDate] = useState<string>(initialDate);

  const foodData: DailyMenu = (getFoodsByDate(selectedDate) as DailyMenu) || {
    Breakfast: [],
    DietFoods: [],
    Lunch: [],
  };

  const handleBackClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    console.log("Back clicked, returning to Items");
    onBack();
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-white p-4 flex flex-col items-center relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
        className="px-4 py-2 mb-6 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer"
        style={{ position: "relative", zIndex: 20 }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Back
      </motion.button>

      <motion.h2
        className="text-3xl font-bold mb-6 text-blue-700"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        All Menu
      </motion.h2>

      <div className="w-full max-w-6xl">
        <select
          className="w-full p-2 mb-6 border rounded text-gray-700"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800"
          variants={listVariants}
          initial="closed"
          animate="open"
        >
          {["Breakfast", "DietFoods", "Lunch"].map((category) => (
            <div key={category} className="flex flex-col">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {category}
              </h3>
              {foodData[category as keyof DailyMenu]?.length > 0 ? (
                <ul className="list-disc pl-5">
                  {foodData[category as keyof DailyMenu].map(
                    (item: FoodItem, index: number) => (
                      <li key={index} className="mb-2">
                        <strong>{item.name}</strong> - {item.description} (
                        {item.kcal} kcal)
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p className="text-gray-500">No items available</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AllMenu;
