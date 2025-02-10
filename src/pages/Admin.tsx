import React from "react";

const Admin: React.FC = () => {
  const dummyData = {
    name: "Admin User",
    foods: ["Pizza", "Burger", "Pasta"],
    user: "admin@example.com",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Gecia's Canteen Admin Panel
      </h1>
      <div className="bg-white shadow-md rounded p-4 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2 text-black">Name: {dummyData.name}</h2>
        <h3 className="text-xl font-medium mb-2 text-black">Foods:</h3>
        <ul className="list-disc list-inside mb-4 text-black">
          {dummyData.foods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
        <h3 className="text-xl font-medium text-black">User: {dummyData.user}</h3>
      </div>
    </div>
  );
};

export default Admin;
