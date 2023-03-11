export const formattedNumber = (number: string) => {
  const num = parseInt(number);
  const numConverted = num.toLocaleString("fr-FR", {
    minimumIntegerDigits: 1,
    minimumFractionDigits: 0,
  });
  return numConverted;
};
