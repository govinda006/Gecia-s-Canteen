export const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

export const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};
