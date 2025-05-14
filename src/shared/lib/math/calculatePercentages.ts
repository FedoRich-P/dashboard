type PercentageResult = {
  boysPercentage: number;
  girlsPercentage: number;
  total: number;
}

export const calculatePercentages = (boys: number, girls: number, precision: number = 0): PercentageResult => {
  const total = boys + girls;

  if (total === 0) return {
    boysPercentage: 0,
    girlsPercentage: 0,
    total: 0
  };

  const calculate = (value: number) =>
    Number(((value / total) * 100).toFixed(precision));

  return {
    boysPercentage: calculate(boys),
    girlsPercentage: calculate(girls),
    total
  };
};