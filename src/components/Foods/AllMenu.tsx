import React, { useEffect, useState } from "react";
import { DailyMenu, FoodItem } from "../../type";
import { dummyFoods, getFoodsByDate } from "./dummy-foods";

interface AllMenuProps {
  onBack: () => void;
}

const AllMenu: React.FC<AllMenuProps> = ({ onBack }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const availableDates = Object.keys(dummyFoods);
  const initialDate = availableDates.includes(currentDate)
    ? currentDate
    : availableDates[0] || "";
  const [selectedDate, setSelectedDate] = useState<string>(initialDate);
  const [currentTime, setCurrentTime] = useState(new Date());

  const foodData: DailyMenu = getFoodsByDate(selectedDate) || {
    Breakfast: [],
    Lunch: { DietMeal: [], Veg: [], NonVeg: [] },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBackClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    console.log("Back clicked, returning to Items");
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
    <div className="w-full min-h-screen bg-white p-4 flex flex-col items-center relative z-10">
      <button
        onClick={handleBackClick}
        onTouchStart={(e) => e.preventDefault()}
        onTouchEnd={handleBackClick}
        className="px-4 py-2 mb-6 bg-[rgb(5,78,90)] text-white rounded-lg shadow-lg cursor-pointer"
        style={{ position: "relative", zIndex: 20 }}
      >
        Back
      </button>

      <h2
        className="text-3xl font-bold mb-6"
        style={{ color: "rgb(5, 78, 90)" }}
      >
        All Menu
      </h2>

      <p className="text-lg mb-6" style={{ color: "rgb(5, 78, 90)" }}>
        {formattedDate} | {formattedTime}
      </p>

      <div className="w-full max-w-6xl">
        <select
          className="w-full p-2 mb-6 border rounded"
          style={{ color: "rgb(5, 78, 90)" }}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ color: "rgb(5, 78, 90)" }}
        >
          {/* Breakfast Section */}
          <div className="flex flex-col">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "rgb(5, 78, 90)" }}
            >
              Breakfast
            </h3>
            {foodData.Breakfast.length > 0 ? (
              <ul className="list-disc pl-5">
                {foodData.Breakfast.map((item: FoodItem) => (
                  <li key={item.name} className="mb-2">
                    <strong>{item.name}</strong> - {item.description} (
                    {item.kcal} kcal)
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items available</p>
            )}
          </div>

          {/* Lunch Section */}
          <div className="flex flex-col">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "rgb(5, 78, 90)" }}
            >
              Lunch
            </h3>
            <div className="flex flex-col gap-4">
              {/* Diet Meal Subsection */}
              <div>
                <h4
                  className="text-lg font-medium mb-1"
                  style={{ color: "rgb(5, 78, 90)" }}
                >
                  Diet Meal
                </h4>
                {foodData.Lunch.DietMeal.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {foodData.Lunch.DietMeal.map((item: FoodItem) => (
                      <li key={item.name} className="mb-2">
                        <strong>{item.name}</strong> - {item.description} (
                        {item.kcal} kcal)
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No Diet Meal items available</p>
                )}
              </div>

              {/* Vegetarian Subsection */}
              <div>
                <h4
                  className="text-lg font-medium mb-1"
                  style={{ color: "rgb(5, 78, 90)" }}
                >
                  Vegetarian
                </h4>
                {foodData.Lunch.Veg.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {foodData.Lunch.Veg.map((item: FoodItem) => (
                      <li key={item.name} className="mb-2">
                        <strong>{item.name}</strong> - {item.description} (
                        {item.kcal} kcal)
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No Vegetarian items available</p>
                )}
              </div>

              {/* Non-Vegetarian Subsection */}
              <div>
                <h4
                  className="text-lg font-medium mb-1"
                  style={{ color: "rgb(5, 78, 90)" }}
                >
                  Non-Vegetarian
                </h4>
                {foodData.Lunch.NonVeg.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {foodData.Lunch.NonVeg.map((item: FoodItem) => (
                      <li key={item.name} className="mb-2">
                        <strong>{item.name}</strong> - {item.description} (
                        {item.kcal} kcal)
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No Non-Vegetarian items available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
