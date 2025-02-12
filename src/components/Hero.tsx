import { motion } from "framer-motion";
import React from "react";
import Items from "./Items"; // Import the new Items component

const foodVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0], // Floating effect
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero: React.FC = () => {
  return (
    <>
      <motion.div
        className="hero-section w-full h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
        style={{ backgroundColor: "#022B33" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Background Vector Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/food.png')",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-teal-900/20 to-transparent"></div>

        {/* Floating Food Elements with Rotation */}
        <motion.img
          src="https://img.icons8.com/color/96/pizza.png"
          alt="Pizza"
          className="absolute top-16 left-10 w-14 md:w-20"
          variants={foodVariants}
          initial="initial"
          animate="animate"
          whileHover={{ rotate: 360 }}
        />
        <motion.img
          src="https://img.icons8.com/color/96/hamburger.png"
          alt="Burger"
          className="absolute top-32 right-10 w-16 md:w-24"
          variants={foodVariants}
          initial="initial"
          animate="animate"
          whileHover={{ rotate: -360 }}
        />
        <motion.img
          src="https://img.icons8.com/color/96/salad.png"
          alt="Salad"
          className="absolute bottom-16 left-1/4 w-14 md:w-20"
          variants={foodVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.2 }}
        />
        <motion.img
          src="https://img.icons8.com/color/96/sushi.png"
          alt="Sushi"
          className="absolute bottom-24 right-20 w-14 md:w-20"
          variants={foodVariants}
          initial="initial"
          animate="animate"
          whileHover={{ y: -10 }}
        />
        <motion.img
          src="https://img.icons8.com/color/96/doughnut.png"
          alt="Doughnut"
          className="absolute bottom-10 left-10 w-12 md:w-16"
          variants={foodVariants}
          initial="initial"
          animate="animate"
          whileHover={{ rotate: 180, scale: 1.1 }}
        />

        {/* Hero Text with Vector-like Animation */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg"
          style={{
            color: "#EAEAEA",
            fontFamily: '"Merriweather", serif',
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-teal-400 to-green-300 text-transparent bg-clip-text">
            Gecia's Canteen
          </span>
        </motion.h1>

        {/* Subheading with Slide Animation */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          whileHover={{ x: 10 }}
        >
          A delightful place where taste meets quality. Enjoy delicious and
          healthy meals crafted just for you.
        </motion.p>

        {/* Call-to-Action Button with Bounce Effect */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <motion.button
            className="px-6 py-3 rounded-full text-lg font-semibold text-white bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all shadow-lg"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              document
                .getElementById("items-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            🍽 Explore Menu
          </motion.button>
        </motion.div>
      </motion.div>

      <Items />
    </>
  );
};

export default Hero;
