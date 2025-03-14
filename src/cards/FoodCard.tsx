import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React from "react";

interface FoodCardProps {
  name: string;
  description: string;
  kcal: number | string;
  estimatedCalories?: number;
  photo?: string; // Added photo prop
}

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  padding: "8px",
  "&:last-child": {
    paddingBottom: "8px",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100px",
}));

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  description,
  kcal,
  estimatedCalories,
  photo,
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ width: "100%", maxWidth: "200px" }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: 200 },
          maxWidth: "100%",
          margin: "0",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#f8f9fa",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {photo && (
          <img
            src={photo}
            alt={name}
            style={{
              width: "100%",
              height: "120px", // Fixed height for consistency
              objectFit: "cover", // Ensures image scales nicely
              borderTopLeftRadius: "8px", // Matches card border radius
              borderTopRightRadius: "8px",
            }}
          />
        )}
        <CustomCardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              borderRadius: "5px",
              padding: "5px",
              color: "white",
              backgroundColor: "teal",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: "bold !important",
              textAlign: "center",
              marginBottom: "4px",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#054e5a",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              textAlign: "center",
              marginBottom: "4px",
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#054e5a",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              textAlign: "center",
              marginBottom: "4px",
            }}
          >
            {kcal} kcal
          </Typography>
          {estimatedCalories !== undefined && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "#054e5a",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                textAlign: "center",
              }}
            >
              Est. {estimatedCalories} kcal
            </Typography>
          )}
        </CustomCardContent>
      </Card>
    </motion.div>
  );
};

export default FoodCard;
