import {RATE} from '../const';

export const adaptRates = (rawData) => {
  // debugger
  const rates = Object.keys(RATE);
  const rubIndex = rates.indexOf(`RUB`);
  rates.splice(rubIndex, 1);

  let adaptedRates = {
    date: rawData.Date,
    rates: {
      RUB: 1
    }
  };
  
  rates.map((rate) => {
    adaptedRates = ({
      ...adaptedRates,
      rates: {
        ...adaptedRates.rates,
        [rate]: rawData.Valute[rate].Value
      }
    })
  })

  return adaptedRates;
}
