import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-teal-900 text-white shadow-md flex flex-col md:flex-row justify-around p-2 relative z-50"
      style={{ backgroundColor: "#054e5a" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo with Hover Effect */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src="./Atlas-Logo.gif"
            alt="Logo"
            className="h-10 w-30"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden focus:outline-none rounded-full p-2 bg-teal-700 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.5 }}
          >
            🍔
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu with Animation & Transparent Background */}
      <motion.div
        className={`md:hidden flex flex-col items-center space-y-4 p-4 absolute top-full left-0 w-full backdrop-blur-md transition-all duration-500 ${
          isOpen ? "bg-white/10 shadow-lg" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <AnimatedNavItem to="/">Home</AnimatedNavItem>
        <AnimatedNavItem to="/admin">Admin</AnimatedNavItem>
      </motion.div>
    </motion.nav>
  );
};

// Animated NavItem for Mobile View
const AnimatedNavItem: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.1, color: "#38B2AC" }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <Link to={to} className="text-lg hover:text-teal-300 transition relative">
      {children}
      <motion.div
        className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-300"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  </motion.div>
);

// Desktop NavItem
const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <Link to={to} className="text-lg hover:text-teal-300 transition relative">
      {children}
      <motion.div
        className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-300"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  </motion.div>
);

export default Navbar;
