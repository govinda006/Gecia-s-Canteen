import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  return (
    <motion.div
      className="hero-section w-full mb-10 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#04424D" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        className="text-2xl md:text-4xl font-bold animate-fade-in"
        style={{
          color: "gray",
          fontFamily: '"Noto Serif", Arial, Helvetica, sans-serif',
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to{" "}
        <span className="bg-gradient-to-r from-teal-500 to-green-400 text-transparent bg-clip-text">
          Gecia's Canteen
        </span>
      </motion.h1>
    </motion.div>
  );
};

export default Hero;
