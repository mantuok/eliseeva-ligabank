const sourceValue = 10;
const sourceCurrency = `RUB`;
const targetCurrency = `USD`;
const targetValue = 0;
const rate1 = 1;
const rate2 = 90;

export const calculate = (sourceValue, sourceCurrency, targetCurrency, sourceRate, targetRate) => {
  if (sourceCurrency === targetCurrency) {
    console.log(`equal`)
    return sourceValue;
  }

  const rubSource = sourceValue * sourceRate
  const convertedValue = rubSource / targetRate

  console.log(convertedValue)

  // if (sourceCurrency !== `RUB` && targetCurrency !== `RUB`) {
  //   console.log(`no RUB`)
  //   const convertedSource = sourceValue * rate1
  // }
  console.log(`not equal`)
  return convertedValue;
}

calculate(sourceValue, sourceCurrency, targetValue, targetCurrency, rate1, rate2)