import {Rate} from '../const';
import {formatDate} from '../utils/utils';

export const adaptRatesPerPeriod = (rawDataPerPeriod) => {
  // debugger
  let adaptedList = [];
  rawDataPerPeriod.map((rawItem) => {
    adaptedList.push(adaptRatesPerDay(rawItem))
  })
  return adaptedList;
}

export const adaptRatesPerDay = (rawDataPerDay) => {
  const rates = Object.keys(Rate);
  const rubIndex = rates.indexOf(`RUB`);
  rates.splice(rubIndex, 1);

  let adaptedRatesPerDay = {
    date: formatDate(rawDataPerDay.Date),
    rates: {
      RUB: 1
    }
  };

  rates.map((rate) => {
    adaptedRatesPerDay = ({
      ...adaptedRatesPerDay,
      rates: {
        ...adaptedRatesPerDay.rates,
        [rate]: rawDataPerDay.Valute[rate].Value
      }
    })
  })
  
  return adaptedRatesPerDay;
}
