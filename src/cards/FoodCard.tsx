import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface FoodCardProps {
  name: string;
  description: string;
  kcal: number | string;
}

const FoodCard: React.FC<FoodCardProps> = ({ name, description, kcal }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          width: 200, // Reduced from 300px to 200px
          margin: "0", // Removed margin (changed from 2px)
          borderRadius: "8px", // Slightly smaller radius for consistency
          overflow: "hidden",
          backgroundColor: "#f8f9fa",
        }}
      >
        <CardContent sx={{ padding: "4px" }}>
          <Typography
            variant="h6" // Reduced from h5 to h6 for smaller font
            component="div"
            gutterBottom
            sx={{ color: "#054e5a", marginBottom: "2px", fontSize: "1rem" }} // Reduced font size to 1rem (16px)
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#054e5a", fontSize: "0.875rem" }} // Reduced font size to 0.875rem (14px)
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#054e5a", mt: "2px", fontSize: "0.875rem" }} // Reduced font size to 0.875rem (14px)
          >
            {kcal} kcal
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FoodCard;
