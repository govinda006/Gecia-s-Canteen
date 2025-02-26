import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const logoVariants = {
  hidden: { rotate: -10, opacity: 0 },
  visible: { rotate: 0, opacity: 1 },
};

const mobileMenuVariants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0, backgroundColor: "rgba(255, 255, 255, 0.1)" },
};

interface NavLinkProps {
  to?: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLink = React.memo(
  ({ to, children, isMobile = false, onClick }: NavLinkProps) => (
    <motion.div
      initial={isMobile ? { opacity: 0, x: -20 } : undefined}
      animate={isMobile ? { opacity: 1, x: 0 } : undefined}
      transition={isMobile ? { duration: 0.5, ease: "easeOut" } : undefined}
      whileHover={{
        scale: 1.1,
        ...(isMobile ? { color: "#38B2AC" } : { y: -2 }),
      }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      {to ? (
        <Link
          to={to}
          className="text-lg hover:text-teal-300 transition relative"
          onClick={onClick}
        >
          {children}
          <motion.div
            className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </Link>
      ) : (
        <button
          className="text-lg hover:text-teal-300 transition relative"
          onClick={onClick}
        >
          {children}
          <motion.div
            className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </button>
      )}
    </motion.div>
  )
);

interface NavbarProps {
  setCurrentView: React.Dispatch<
    React.SetStateAction<
      "hero" | "items" | "breakfast" | "dietFoods" | "lunch" | "allMenu"
    >
  >;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    setCurrentView("hero");
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="text-white shadow-md flex flex-col md:flex-row justify-around p-2 relative z-50"
      style={{ backgroundColor: "#054e5a" }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center p-2">
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={handleHomeClick}
        >
          <motion.img
            src="./Atlas-Logo.gif"
            alt="Logo"
            className="h-10 w-30"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink onClick={handleHomeClick}>Home</NavLink>
          {/* <NavLink to="/admin">Admin</NavLink> */}
        </div>

        <motion.button
          className="md:hidden focus:outline-none rounded-full p-2 bg-teal-700 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.5 }}
          >
            🍔
          </motion.div>
        </motion.button>
      </div>

      <motion.div
        className="md:hidden flex flex-col items-center space-y-4 p-4 absolute top-full left-0 w-full backdrop-blur-md"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <NavLink isMobile onClick={handleHomeClick}>
          Home
        </NavLink>
        <NavLink to="/admin" isMobile>
          Admin
        </NavLink>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
