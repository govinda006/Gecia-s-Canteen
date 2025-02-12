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
  { name: "🍛 Lunch", description: "Delicious lunch" }
];

export const weeklyThemes: { [key: string]: string } = {
  "Monday": "Brahmani",
  "Tuesday": "Gujarati",
  "Wednesday": "Punjabi",
  "Thursday": "South Indian",
  "Friday": "Rajasthani",
};

export const getCurrentDayTheme = (): string => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const todayName = days[today];

  return weeklyThemes[todayName];
};
