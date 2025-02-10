import { motion } from "framer-motion";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-teal-900 to-teal-700">
      {/* Rotating Cutlery */}
      <motion.div
        className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-teal-500 shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <span className="absolute text-3xl animate-bounce">🍴</span>
        <span className="absolute text-3xl animate-bounce -rotate-180">🥄</span>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="mt-6 text-white text-xl font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Cooking up something delicious...
      </motion.p>
    </div>
  );
};

export default Loader;
