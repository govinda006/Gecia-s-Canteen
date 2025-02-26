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
import { View } from "./type";

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<View>("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Loading complete");
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
    <div className="min-h-screen bg-gray-100">
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
