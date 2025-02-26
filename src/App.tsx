import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Loader from "./loader/loader";
import Navbar from "./navbar/navbar";
import Home from "./pages/Home";

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<
    "hero" | "items" | "breakfast" | "dietFoods" | "lunch" | "allMenu"
  >("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const validPaths = ["/"];
    if (!validPaths.includes(location.pathname) && !loading) {
      console.log("Redirecting to / from:", location.pathname);
      navigate("/", { replace: true });
    }
  }, [location, navigate, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
      <Navbar setCurrentView={setCurrentView} />
      <Routes>
        <Route
          path="/"
          element={
            <Home currentView={currentView} setCurrentView={setCurrentView} />
          }
        />
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
