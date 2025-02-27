import React, { memo, useEffect, useRef, useState } from "react";
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
    Fasting: [],
  };
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
    console.log("Back clicked, should render Items (menu)");
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
    <div
      className="lunch-section p-1 sm:p-2 w-full min-h-screen flex flex-col items-center"
      style={{ backgroundColor: "white" }}
    >
      <button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
        className="p-1 sm:p-2 mb-1 sm:mb-2 bg-[#054e5a] text-white rounded shadow-lg cursor-pointer"
        style={{ position: "relative", zIndex: 20 }}
      >
        Back
      </button>

      <h2
        className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 flex justify-center"
        style={{ color: "#054e5a" }}
      >
        Lunch Menu
      </h2>

      <p className="text-lg sm:text-xl text-gray-700 mb-1 sm:mb-2">
        {formattedDate} | {formattedTime}
      </p>

      <div
        ref={contentRef} // Attach ref to the content area
        className="lunch-items w-full max-w-6xl flex flex-col gap-1 sm:gap-2"
      >
        {/* Diet Meal Section */}
        <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 w-full md:w-1/4 text-center">
            Diet Meal
          </h3>
          <div className="flex flex-col sm:flex-row md:flex-row flex-wrap gap-1 sm:gap-2 w-full md:w-3/4">
            {lunchMenu.DietMeal.length > 0 ? (
              lunchMenu.DietMeal.map((item) => (
                <div
                  key={item.name}
                  className="lunch-item w-full sm:w-1/2 md:w-1/4 flex justify-center items-center"
                >
                  <FoodCard
                    name={item.name}
                    description={item.description}
                    kcal={item.kcal}
                    estimatedCalories={item.estimatedCalories}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-sm sm:text-base">
                No Diet Meal items available
              </p>
            )}
          </div>
        </div>

        {/* Vegetarian Section */}
        <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 w-full md:w-1/4 text-center">
            Vegetarian
          </h3>
          <div className="flex flex-col sm:flex-row md:flex-row flex-wrap gap-1 sm:gap-2 w-full md:w-3/4">
            {lunchMenu.Veg.length > 0 ? (
              lunchMenu.Veg.map((item) => (
                <div
                  key={item.name}
                  className="lunch-item w-full sm:w-1/2 md:w-1/4 flex justify-center items-center"
                >
                  <FoodCard
                    name={item.name}
                    description={item.description}
                    kcal={item.kcal}
                    estimatedCalories={item.estimatedCalories}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-sm sm:text-base">
                No Vegetarian items available
              </p>
            )}
          </div>
        </div>

        {/* Non-Vegetarian Section */}
        <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 w-full md:w-1/4 text-center">
            Non-Vegetarian
          </h3>
          <div className="flex flex-col sm:flex-row md:flex-row flex-wrap gap-1 sm:gap-2 w-full md:w-3/4">
            {lunchMenu.NonVeg.length > 0 ? (
              lunchMenu.NonVeg.map((item) => (
                <div
                  key={item.name}
                  className="lunch-item w-full sm:w-1/2 md:w-1/4 flex justify-center items-center"
                >
                  <FoodCard
                    name={item.name}
                    description={item.description}
                    kcal={item.kcal}
                    estimatedCalories={item.estimatedCalories}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-sm sm:text-base">
                No Non-Vegetarian items available
              </p>
            )}
          </div>
        </div>

        {/* Fasting Section */}
        <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 w-full md:w-1/4 text-center">
            Fasting
          </h3>
          <div className="flex flex-col sm:flex-row md:flex-row flex-wrap gap-1 sm:gap-2 w-full md:w-3/4">
            {lunchMenu.Fasting.length > 0 ? (
              lunchMenu.Fasting.map((item) => (
                <div
                  key={item.name}
                  className="lunch-item w-full sm:w-1/2 md:w-1/4 flex justify-center items-center"
                >
                  <FoodCard
                    name={item.name}
                    description={item.description}
                    kcal={item.kcal}
                    estimatedCalories={item.estimatedCalories}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-sm sm:text-base">
                No Fasting items available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Lunch);
