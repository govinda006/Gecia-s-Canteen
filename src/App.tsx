import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Lunch from "./components/Foods/Lunch"; // Import Lunch component
import Breakfast from "./components/Foods/Breakfast"; // Import Breakfast component
import DietFoods from "./components/Foods/DietFoods"; // Import DietFoods component
import Items from "./components/items/Items"; // Import Items component
import Loader from "./loader/loader";
import Navbar from "./navbar/navbar";

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Allow navigation within defined routes but redirect unknown paths to "/"
  useEffect(() => {
    const validPaths = ["/", "/breakfast", "/diet-foods", "/lunch"];
    if (!validPaths.includes(location.pathname) && !loading) {
      console.log("Redirecting to / from:", location.pathname);
      navigate("/", { replace: true });
    }
  }, [location, navigate, loading]);

  const handleBack = () => navigate("/"); // Navigate back to Items (Home)
  const handleSelectBreakfast = () => navigate("/breakfast");
  const handleSelectDietFoods = () => navigate("/diet-foods");
  const handleSelectLunch = () => navigate("/lunch");

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Items
              onBack={handleBack} // Could be used to hide menu or go elsewhere
              onSelectBreakfast={handleSelectBreakfast}
              onSelectDietFoods={handleSelectDietFoods}
              onSelectLunch={handleSelectLunch}
            />
          }
        />
        <Route path="/breakfast" element={<Breakfast onBack={handleBack} />} />
        <Route path="/diet-foods" element={<DietFoods onBack={handleBack} />} />
        <Route path="/lunch" element={<Lunch onBack={handleBack} />} />
        {/* Uncomment and add other routes as needed */}
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
