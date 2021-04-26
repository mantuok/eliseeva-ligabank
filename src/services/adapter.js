import {Rate} from '../const';
import {formatDate} from '../utils/utils';

export const adaptRates = (rawData) => {
  // debugger
  const rates = Object.keys(Rate);
  const rubIndex = rates.indexOf(`RUB`);
  rates.splice(rubIndex, 1);

  let adaptedRates = {
    date: formatDate(rawData.Date),
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
