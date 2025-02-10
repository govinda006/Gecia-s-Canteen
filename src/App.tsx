import React, { useEffect, useState } from "react";
import Loader from "./loader/loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulated 3-second loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-teal-900 text-white">
          <h1 className="text-3xl font-bold">Gecia's Canteen</h1>
        </div>
      )}
    </>
  );
};

export default App;
