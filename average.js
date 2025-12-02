export const average = (...values) => {
  if (values.length === 0) return 0;

  const total = values.reduce((accumulator, currentValue) => accumulator + currentValue);

  const averageValue = total / values.length;

  return Math.round(averageValue * 100) / 100;
};

console.log(average(89, 85, 78, 92));
console.log(average(100, 95, 88));
console.log(average(65));


