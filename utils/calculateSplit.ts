export const calculateSplit = (
  originalValue: number,
  valueWithTaxes: number,
  valueOfSplitSale: number
) => {
  const percentile = (valueWithTaxes - originalValue) / originalValue;

  const taxPercentile = (percentile * 100).toFixed(2);

  const valueOfSplitSaleWithTaxes = (
    valueOfSplitSale +
    valueOfSplitSale * percentile
  ).toFixed(2);

  const valueOfJointSaleWithTaxes = (
    (valueWithTaxes - Number(valueOfSplitSaleWithTaxes)) *
    0.15
  ).toFixed(2);

  const splitSaleWithFifteenPercentOfTheRemainder = (
    Number(valueOfSplitSaleWithTaxes) +
    (valueWithTaxes - Number(valueOfSplitSaleWithTaxes)) * 0.15
  ).toFixed(2);

  const remainderOfTheSplitSale = (
    valueWithTaxes -
    (Number(valueOfSplitSaleWithTaxes) +
      (valueWithTaxes - Number(valueOfSplitSaleWithTaxes)) * 0.15)
  ).toFixed(2);

  const sumVerification = (
    Number(remainderOfTheSplitSale) +
    Number(splitSaleWithFifteenPercentOfTheRemainder)
  ).toFixed(2);

  return {
    taxPercentile,
    valueOfSplitSaleWithTaxes,
    valueOfJointSaleWithTaxes,
    splitSaleWithFifteenPercentOfTheRemainder,
    remainderOfTheSplitSale,
    sumVerification,
  };
};
