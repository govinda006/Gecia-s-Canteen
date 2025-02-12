import { motion } from "framer-motion";
import React from "react";

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Items: React.FC = () => {
  return (
    <motion.div
      id="items-section"
      className="items-section w-full h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundColor: "#04424D" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/food.png')",
        }}
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      ></motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-6 text-white relative z-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        whileHover={{ scale: 1.1, color: "#FFD700" }}
      >
        Our Menu
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        whileHover={{ scale: 1.05, color: "#FFC300" }}
      >
        Discover our delicious and healthy meals crafted just for you.
      </motion.p>

      {/* Animated Food Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
        {[
          "🍕 Pizza",
          "🍔 Burger",
          "🥗 Salad",
          "🍣 Sushi",
          "🍩 Doughnut",
          "🍛 Curry",
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center text-xl font-semibold border border-teal-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
              backgroundColor: "#083B3F",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Items;
