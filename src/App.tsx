import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Loader from "./loader/loader";
import Navbar from "./navbar/navbar";
import Home from "./pages/Home";

export type View =
  | "hero"
  | "items"
  | "breakfast"
  | "dietFoods"
  | "lunch"
  | "allMenu";

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<
    "hero" | "items" | "breakfast" | "dietFoods" | "lunch" | "allMenu"
  >("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const validPaths = ["/"];
    if (!validPaths.includes(location.pathname) && !isLoading) {
      console.log("Redirecting to / from:", location.pathname);
      navigate("/", { replace: true });
    }
  }, [location, navigate, isLoading]);

  if (isLoading) {
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
