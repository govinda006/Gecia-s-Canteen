import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles"; // Import styled for custom styling
import { motion } from "framer-motion";
import React from "react";

interface FoodCardProps {
  name: string;
  description: string;
  kcal: number | string;
}

// Create a styled CardContent to remove bottom padding for the last child
const CustomCardContent = styled(CardContent)(({ theme }) => ({
  padding: "4px", // Minimal padding as requested
  "&:last-child": {
    paddingBottom: 0, // Remove bottom padding for the last CardContent
  },
}));

const FoodCard: React.FC<FoodCardProps> = ({ name, description, kcal }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }} // Kept tap effect, no hover as requested
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          width: 200, // Fixed width, constant regardless of content
          maxWidth: 200, // Ensure it doesn’t stretch beyond 200px
          margin: "0", // No margin for minimal spacing
          borderRadius: "8px", // Slightly smaller radius for consistency
          overflow: "hidden",
          backgroundColor: "#f8f9fa", // Consistent background
        }}
      >
        <CustomCardContent>
          {" "}
          {/* Use custom styled component for padding control */}
          <Typography
            variant="h6" // Smaller heading for better fit
            component="div"
            gutterBottom
            sx={{
              color: "#054e5a", // Consistent color
              marginBottom: "2px", // Minimal spacing
              fontSize: "1rem", // Reduced font size for readability
              whiteSpace: "nowrap", // Prevent text from wrapping
              overflow: "hidden", // Hide overflow
              textOverflow: "ellipsis", // Add ellipsis for overflow
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#054e5a", // Consistent color
              fontSize: "0.875rem", // Reduced font size for readability
              whiteSpace: "nowrap", // Prevent text from wrapping
              overflow: "hidden", // Hide overflow
              textOverflow: "ellipsis", // Add ellipsis for overflow
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#054e5a", // Consistent color
              mt: "2px", // Minimal spacing
              fontSize: "0.875rem", // Reduced font size for readability
              whiteSpace: "nowrap", // Prevent text from wrapping
              overflow: "hidden", // Hide overflow
              textOverflow: "ellipsis", // Add ellipsis for overflow
            }}
          >
            {kcal} kcal
          </Typography>
        </CustomCardContent>
      </Card>
    </motion.div>
  );
};

export default FoodCard;
