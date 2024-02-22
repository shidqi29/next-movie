export const getImageUrl = (path: string, size = "w500") => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export function getDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours > 0 ? hours + "h " : "";
  const formattedMinutes = remainingMinutes > 0 ? remainingMinutes + "m" : "";
  return formattedHours + formattedMinutes;
}

export const formattedDate = (date: string) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formattedCurrency = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
