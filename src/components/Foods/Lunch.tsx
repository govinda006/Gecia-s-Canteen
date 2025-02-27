import React, { memo, useEffect, useState } from "react";
import FoodCard from "../../cards/FoodCard";
import { getFoodsByDate } from "./dummy-foods";

interface LunchProps {
  onBack: () => void;
}

const Lunch: React.FC<LunchProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const lunchMenu = getFoodsByDate(currentDate).Lunch || {
    DietMeal: [],
    Veg: [],
    NonVeg: [],
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
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
    <div
      className="lunch-section p-2 w-full min-h-screen flex flex-col items-center"
      style={{ backgroundColor: "white" }}
    >
      <button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
        className="p-2 mb-4 bg-[#054e5a] text-white rounded shadow-lg cursor-pointer"
        style={{ position: "relative", zIndex: 20 }}
      >
        Back
      </button>

      <h2
        className="text-3xl font-bold mb-2 flex justify-center"
        style={{ color: "#054e5a" }}
      >
        Lunch Menu
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        {formattedDate} | {formattedTime}
      </p>

      <div className="lunch-items w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Diet Meal Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
            Diet Meal
          </h3>
          <div className="flex flex-col gap-6 items-center">
            {lunchMenu.DietMeal.length > 0 ? (
              lunchMenu.DietMeal.map((item) => (
                <div
                  key={item.name}
                  className="lunch-item w-fit flex justify-center items-center"
                >
                  <FoodCard
                    name={item.name}
                    description={item.description}
                    kcal={item.kcal}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No Diet Meal items available
              </p>
            )}
          </div>
        </div>

        {/* Vegetarian Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
            Vegetarian
          </h3>
          <div className="flex flex-col gap-6 items-center">
            {lunchMenu.Veg.length > 0 ? (
              lunchMenu.Veg.map((item) => (
                <div
                  key={item.name}
                  className="lunch-item w-fit flex justify-center items-center"
                >
                  <FoodCard
                    name={item.name}
                    description={item.description}
                    kcal={item.kcal}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No Vegetarian items available
              </p>
            )}
          </div>
        </div>

        {/* Non-Vegetarian Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-teal-800 text-center">
            Non-Vegetarian
          </h3>
          <div className="flex flex-col gap-6 items-center">
            {lunchMenu.NonVeg.length > 0 ? (
              lunchMenu.NonVeg.map((item) => (
                <div
                  key={item.name}
                  className="lunch-item w-fit flex justify-center items-center"
                >
                  <FoodCard
                    name={item.name}
                    description={item.description}
                    kcal={item.kcal}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No Non-Vegetarian items available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Lunch);
