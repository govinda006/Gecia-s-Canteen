import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./loader/loader";
import Navbar from "./navbar/navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Simulated 3-second loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      {loading ? <Loader /> : null}
    </div>
  );
};

export default App;
