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
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          width: 300,
          margin: "10px",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#f8f9fa",
          "&:hover": { backgroundColor: "#e9ecef" },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {kcal} kcal
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FoodCard;
