export const formatNumbers = (value: number) =>
  value.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
