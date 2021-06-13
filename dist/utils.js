export const filterNegative = (days) => {
  if (days < 0) {
    const str = String(days);
    return str.slice(1);
  }
  return days;
};

export const removeUnderscore = (str) => {
  return str.replaceAll("_", " ");
};
