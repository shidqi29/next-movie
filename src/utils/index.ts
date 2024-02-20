export const getImageUrl = (path: string, size = "w500") => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const formattedDate = (date: string) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
