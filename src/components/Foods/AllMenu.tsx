import { motion } from "framer-motion";
import React, { useState } from "react";
import { getFoodsByDate } from "./dummy-foods";

interface FoodItem {
  name: string;
  description: string;
  kcal: number | string;
}

interface DailyMenu {
  Breakfast: FoodItem[];
  DietFoods: FoodItem[];
  Lunch: FoodItem[];
}

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

const dropdownVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

const AllMenu: React.FC<AllMenuProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const foodData: DailyMenu = getFoodsByDate(currentDate) as DailyMenu; // Type assertion
  const categories = ["Breakfast", "DietFoods", "Lunch"] as const;
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[number] | null
  >(null);

  const handleBackClick = () => {
    console.log("Back clicked, returning to Items");
    onBack();
  };

  return (
    <motion.div
      className="all-menu-section p-2 w-full min-h-screen flex flex-col items-center bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={handleBackClick}
        className="p-2 mb-4 bg-blue-500 text-white rounded shadow-lg"
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

      <div className="w-full max-w-md">
        <select
          className="w-full p-2 mb-4 border rounded text-gray-700"
          value={selectedCategory || ""}
          onChange={(e) =>
            setSelectedCategory(
              e.target.value as (typeof categories)[number] | null
            )
          }
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {selectedCategory && (
          <motion.ul
            className="list-disc pl-5 text-gray-800"
            variants={dropdownVariants}
            initial="closed"
            animate="open"
          >
            {foodData[selectedCategory]?.length > 0 ? (
              foodData[selectedCategory].map((item, index) => (
                <li key={index} className="mb-2">
                  <strong>{item.name}</strong> - {item.description} ({item.kcal}{" "}
                  kcal)
                </li>
              ))
            ) : (
              <li>No items available</li>
            )}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
};

export default AllMenu;
