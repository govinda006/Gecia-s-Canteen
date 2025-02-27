import { motion } from "framer-motion";
import React from "react";
import styles from "./Hero.module.css"; // Import CSS module

interface HeroProps {
  onShowMenu: () => void; // Function to handle showing the menu
  onUpdateNavbar?: (title: string) => void; // Optional callback to update navbar
}

const Hero: React.FC<HeroProps> = ({ onShowMenu, onUpdateNavbar }) => {
  const handleExploreMenuClick = () => {
    // Trigger the existing onShowMenu function
    onShowMenu();

    // Update the navbar with "Gecia's Canteen" if the callback exists
    if (onUpdateNavbar) {
      onUpdateNavbar("GECIA's CANTEEN");
    }
  };

  return (
    <motion.section
      className={`${styles.heroSection} w-full min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden`}
      style={{ backgroundColor: "White" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Vector Animation */}
      <motion.div
        className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      ></motion.div>

      {/* Background Glow */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${styles.backgroundGlow}`}
      ></div>

      {/* Hero Text */}
      <motion.h1
        className={`text-3xl md:text-5xl font-bold text-center drop-shadow-lg ${styles.heroText}`}
        style={{ color: "#054e5a" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Welcome to{" "}
        <span className={styles.heroTextGradient}>Gecia's Canteen</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className={`mt-4 text-lg md:text-xl text-gray-300 text-center max-w-2xl ${styles.subheading}`}
        style={{ color: "#054e5a" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        whileHover={{ x: 10 }}
      >
        A delightful place where taste meets quality. Enjoy delicious and
        healthy meals crafted just for you.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <motion.button
          className={`px-6 py-3 rounded-full text-lg font-semibold text-white bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all shadow-lg ${styles.ctaButton}`}
          whileHover={{ scale: 1.1, y: -5 }}
          style={{ color: "#054e5a", borderColor: "#054e5a" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExploreMenuClick} // Updated to handle both actions
        >
          🍽 Explore Menu
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
