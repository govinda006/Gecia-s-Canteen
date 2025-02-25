export const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

export const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const foodItems = [
  { name: "🥞 Breakfast", description: "Healthy breakfast" },
  { name: "🥗 Diet Food", description: "Low-calorie diet food" },
  { name: "🍛 Lunch", description: "Delicious lunch" },
];

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export const weeklyThemesWithType: {
  [key: string]: { [key: string]: { theme: string; type: string } };
} = {
  weekOne: {
    Monday: { theme: "Brahmani", type: "veg" },
    Tuesday: { theme: "Gujarati", type: "veg" },
    Wednesday: { theme: "Punjabi", type: "non-veg" },
    Thursday: { theme: "South Indian", type: "veg" },
    Friday: { theme: "Rajasthani", type: "veg" },
  },
  weekTwo: {
    Monday: { theme: "Maharashtrain", type: "veg" },
    Tuesday: { theme: "Bengali", type: "non-veg" },
    Wednesday: { theme: "Kashmiri", type: "non-veg" },
    Thursday: { theme: "North Indian", type: "non-veg" },
    Friday: { theme: "Chinese", type: "non-veg" },
  },
};

export const getCurrentDayTheme = (): {
  day: string;
  theme: string;
  type: string;
} => {
  const today = new Date();
  const todayName = days[today.getDay() - 1]; // Adjusted to match the days array
  const weekNumber = Math.ceil(today.getDate() / 7);

  const weekKey = weekNumber === 2 ? "weekTwo" : "weekOne";
  const themeData = weeklyThemesWithType[weekKey][todayName];

  return { day: todayName, theme: themeData.theme, type: themeData.type };
};
