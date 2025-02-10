import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-900 text-white shadow-md flex justify-around">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">🍽️ Gecia's Canteen</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>🍔</motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center space-y-4 p-4 bg-teal-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="space-x-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/admin">Admin</NavItem>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Reusable Nav Link Component
const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Link to={to} className="text-lg hover:text-teal-300 transition">
      {children}
    </Link>
  </motion.div>
);

export default Navbar;
